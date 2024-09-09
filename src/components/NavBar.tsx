"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/DemoLogo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import SidePanel from "@/Modal/sidePanelOptiions";
import { useRouter } from "next/navigation";


function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const router = useRouter();
  
  const handleClickRoomOwner =()=>{
    router.replace('./DashBoard/OwnerDetails')
  }

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-green-200  bg-blue-400/75 backdrop-blur-lg transition-all bg-gradient-to-r from-blue-600 to-green-400 
    ">
      <div className="w-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center p-1">
              <Image
                src={logoImage}
                alt="Logo"
                width={60}
                height={20}
                className="rounded-full border-2 border-yellow-500"
              />
              <h1 className="ml-2 text-black text-2xl font-Uchen font-semibold">
                Rent <span>करो</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 text-black">
              <button className="relative group" onClick={handleClickRoomOwner}>
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  Room Owner
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>

              <Link href="#AboutUs" className="relative group mt-[0.34rem]">
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  Sign In
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left "></span>
              </Link>
              <div className="flex flex-col justify-center items-start gap-[2px] flex-1 border-r-[1px] border-gray-300">
                </div>
              <button className="relative flex group mt-[0.34rem]">
                <p className="transition-all group-hover:text hover-cursor-pointer">
                  Sign Up
                </p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>

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
            className={`md:hidden flex flex-col absolute top-14 right-0 bg-green-200 rounded-l-lg shadow-lg py-6 mt-2 transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4">
              <Link
                href={"#Home"}
                // onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Home</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>

              <Link
                href={"#Services"}
                // onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Services</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>

              <Link
                href={"#Contact"}
                // onClick={toggleMobileMenu}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Contact</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>

              <Link
                href={"#AboutUs"}
                // onClick={}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>About Us</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </Link>

              <button
                // onClick={}
                className="text-black hover:text-emerald-500 transition relative group"
              >
                <p>Shop Now</p>
                <span className="absolute left-0 right-0 -bottom-0.5 h-1 bg-emerald-300 scale-x-0 group-hover:scale-x-100 hover-cursor-pointer transition-transform origin-left"></span>
              </button>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Render the SidePanel */}
      {!isMobileMenuOpen && (
      <SidePanel isOpen={isPanelOpen} onClose={togglePanel} />
      )}
    </nav>
  );
}

export default NavBar;