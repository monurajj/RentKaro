"use client";
import SidePanel from "@/Modal/sidePanelOptiions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logoImage from "../assets/Logo.png";
import { FaBars, FaTimes, FaUser, FaHome, FaPhoneAlt, FaQuestionCircle, FaComments, FaCaretDown } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../app/lib/fireBaseConfig";

function NavBar() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    localStorage.clear();
    router.push('/');
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleClickLogo = () => {
    router.push("./");
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full backdrop-blur-lg transition-all bg-gradient-to-r from-blue-600/45 to-green-400">
      <div className="w-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <button className="flex items-center p-1" onClick={handleClickLogo}>
              <Image
                src={logoImage}
                alt="Logo"
                className="w-12 h-12 object-cover rounded-full border-green-400 border-2"
              />
              <h1 className="ml-2 text-black text-2xl font-Uchen font-semibold">
                Rent <span>करो</span>
              </h1>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 text-black">
              <Link className="relative group" href={"/DashBoard/OwnerDetails"}>
                <p className="transition-all group-hover:text hover-cursor-pointer mt-[0.34rem]">
                  Room Owner
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              {user ? (
                <div className="relative mt-1 " ref={profileMenuRef}>
                  <button
                    onClick={toggleProfileMenu}
                    className="flex items-center space-x-1 text-black transition"
                  >
                    <FaUser />
                    <span>{user.displayName || user.email}</span>
                    {/* <FaCaretDown /> */}
                  </button>
                  {/* {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-1">
                      <Link href="/" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Profile
                      </Link>

                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )} */}
                </div>




              ) : (



                <Link href={"/Login"} className="relative group mt-[0.34rem]">
                  <p className="transition-all group-hover:text hover-cursor-pointer">
                    Sign In
                  </p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )}

              <div className="flex flex-col justify-center items-start gap-[2px] flex-1 border-r-[1px] border-gray-300"></div>
              
              {!user && (
                <Link href={"/signup"} className="relative flex group mt-[0.34rem]">
                  <p className="transition-all group-hover:text hover-cursor-pointer">
                    Sign Up
                  </p>
                  <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )}

              <button
                className="relative flex group h-[2rem] w-[2rem] -mr-[2rem]"
                onClick={togglePanel}
              >
                <GiHamburgerMenu className="h-[2rem] w-[2rem]" />
              </button>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-black">
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={`md:hidden flex flex-col absolute top-14 right-0 bg-green-200 rounded-l-lg shadow-lg py-6 mt-2 transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4">
            {user ? (
                <div className="relative z-50" ref={profileMenuRef}>
                  <button
                    onClick={toggleProfileMenu}
                    className="flex items-center space-x-1 text-black transition"
                  >
                    <FaUser />
                    <span>{user.displayName || user.email}</span>
                    <FaCaretDown />
                  </button>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-1">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 mt-2">
                        My Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={"/Login"} className="text-black hover:text-emerald-500 transition relative group flex items-center">
                  <FaUser className="mr-2"/>
                  <p className="transition-all group-hover:text hover-cursor-pointer">
                    Sign In
                  </p>
                  <span className="absolute left-0 right-0 transition-transform origin-left"></span>
                </Link>
              )}

              <Link
                href={"/DashBoard/OwnerDetails"}
                className="text-black hover:text-emerald-500 transition relative group flex items-center"
              >
                <FaHome className="mr-2" />
                <p>Room Owner</p>
              </Link>

              <Link
                href={"/DashBoard/AllRooms"}
                className="text-black hover:text-emerald-500 transition relative group flex items-center"
              >
                <FaHome className="mr-2" />
                <p>Find Accommodation</p>
              </Link>

              <Link
                href={"/DashBoard#contactUs"}
                className="text-black hover:text-emerald-500 transition relative group flex items-center"
              >
                <FaPhoneAlt className="mr-2" />
                <p>Contact Us</p>
              </Link>

              <Link
                href={"/DashBoard#contactUs"}
                className="text-black hover:text-emerald-500 transition relative group flex items-center"
              >
                <FaComments className="mr-2" />
                <p>Chat Support</p>
              </Link>

              <Link
                href={"/DashBoard#aboutUs"}
                className="text-black hover:text-emerald-500 transition relative group flex items-center"
              >
                <FaQuestionCircle className="mr-2" />
                <p>About Us</p>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Render the SidePanel */}
      {!isMobileMenuOpen && <SidePanel isOpen={isPanelOpen} onClose={togglePanel} />}
    </nav>
  );
}

export default NavBar;