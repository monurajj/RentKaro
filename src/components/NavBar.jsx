"use client";
import SidePanel from "@/Modal/sidePanelOptiions";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaCaretDown,
  FaHome,
  FaPhoneAlt,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";
import logoImage from "../assets/updatedLodo01.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Effect to check and set user on component mount
  useEffect(() => {
    const checkUserAuthentication = () => {
      try {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        if (token && username) {
          setUser(username);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setUser(null);
      }
    };
    checkUserAuthentication();
  }, []);

  // Effect to handle click outside of profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // Improved sign-out method with more robust handling
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

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsPanelOpen(false)
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleClickLogo = () => {
    router.push("/");
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full backdrop-blur-lg transition-all bg-gradient-to-r from-blue-600/45 to-green-400">
      <div className="w-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <button
              className="flex items-center p-1"
              onClick={handleClickLogo}
            >
              <Image
                src={logoImage}
                alt="Logo"
                className="w-12 h-12 object-cover rounded-full border-green-400 border-2"
                priority  // Added priority for faster loading
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
                <div className="relative mt-1" >
                  <button
                    onClick={toggleProfileMenu}
                    className="flex items-center space-x-1 text-black transition"
                  >
                    <FaUser />
                    <span>{user}</span>
                    <FaCaretDown />
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    ref={profileMenuRef}
                    >
                      <Link
                        onClick={toggleProfileMenu}
                        href="/profile"  // Updated to a more specific route
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
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
                <>
                  <Link href={"/Login"} className="relative group mt-[0.34rem]">
                    <p className="transition-all group-hover:text hover-cursor-pointer">
                      Sign In
                    </p>
                  </Link>
                  <Link
                    href={"/signup"}
                    className="relative group mt-[0.34rem]"
                  >
                    <p className="transition-all group-hover:text hover-cursor-pointer">
                      Sign Up
                    </p>
                  </Link>
                </>
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
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
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
                <div className="relative z-50" >
                  <button
                    onClick={toggleProfileMenu}
                    className="flex items-center space-x-1 text-black transition"
                  >
                    <FaUser />
                    <span>{user}</span>
                    <FaCaretDown />
                  </button>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-1" ref={profileMenuRef}>
                      <Link
                      onClick={toggleProfileMenu}
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 mt-2"
                      >
                        My Profile
                      </Link>

                      <button
                        onClick={handleSignOut}
                        className="z-[100] block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>

                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={"/Login"}
                  className="text-black hover:text-emerald-500 transition relative group flex items-center"
                >
                  <FaUser className="mr-2" />
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
      {!isMobileMenuOpen && (
        <SidePanel isOpen={isPanelOpen} onClose={togglePanel} setIsPanelOpen={setIsPanelOpen}/>
      )}
    </nav>
  );
}

export default NavBar;