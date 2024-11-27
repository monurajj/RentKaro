import { Home, Info, MessageCircle, Phone, Search, User, X, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { auth } from '../app/lib/fireBaseConfig';
import { useRouter } from 'next/navigation';

const SidePanel = ({ isOpen, onClose, setIsPanelOpen }) => {
  const panelRef = useRef(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Systematically clear all authentication-related items
      const itemsToRemove = [
        "token", 
        "username", 
        "refreshToken", 
        "userId",  // Add any other tokens or user-related items
      ];

      itemsToRemove.forEach(item => localStorage.removeItem(item));
      setUser(null);
      setIsProfileMenuOpen(false);
      setIsMobileMenuOpen(false);
      router.push('/');
      
      window.location.reload();
    } catch (error) {
      console.error('Error during sign out:', error);
      // Optionally show a user-friendly error toast or notification
    }
  };
  const turnOff = ()=>{
    setIsPanelOpen(false)
  }
  const menuItems = [
    { id: 'find-accommodation', name: "Find Accommodation", icon: Search, href: "/DashBoard/AllRooms" },
    { id: 'list-property', name: "List Your Property", icon: Home, href: "/DashBoard/OwnerDetails" },
    { id: 'contact-us', name: "Contact Us", icon: Phone, href: "/DashBoard#contactUs" },
    { id: 'chat-support', name: "Chat Support", icon: MessageCircle, href: "/DashBoard#contactUs" },
    { id: 'about-us', name: "About Us", icon: Info, href: "/DashBoard#aboutUs" },
  ];

  useEffect(()=>{
    const username = localStorage.getItem("username");
    setUser(username);
  },[])
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-100">
      <div 
        ref={panelRef}
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg flex flex-col h-screen transform transition-transform duration-300 ease-in-out h-min ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-green-400">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md">
              <User size={24} />
            </div>
            {user ? (
              <div className="text-white">
                <p className="font-semibold"> Welcome {user}</p>
                {/* <Link href="/profile" className="text-sm hover:underline" onClick={onClose}>My Profile</Link> */}
              </div>
            ) : (
              <div className="text-white">
                <Link href={'/Login'} className="hover:underline font-semibold transition-all duration-200 ease-in-out" onClick={onClose}>Sign In</Link>
                <span className="mx-2">|</span>
                <Link href={'/signup'} className="hover:underline font-semibold transition-all duration-200 ease-in-out" onClick={onClose}>Register</Link>
              </div>
            )}
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow overflow-y-auto py-4 px-4 space-y-2">
          {menuItems.map((item) => {
            console.log(item)
            return(
            <Link
              key={item.id}
              href={item.href}
              className="block w-full"
              onClick={turnOff}
            >
              <div className="flex items-center text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 gap-4">
                <item.icon className="mr-4 h-6 w-6 text-blue-500" />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          )})}
          {user && (
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <LogOut className="mr-4 h-6 w-6 text-blue-500" />
                <span className="font-medium"
                onClick={handleSignOut}>Sign Out</span>
              </div>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SidePanel;