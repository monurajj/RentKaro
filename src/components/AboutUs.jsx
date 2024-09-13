import React, { useState, useEffect, useContext } from "react";
import { Search, Users, Shield, ThumbsUp, Smile } from "lucide-react";
import { Home, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SlideshowImage from "./slideshowImageAbout";
import Link from "next/link";
import { useTabContext } from "@/context/pagecontext";



const AboutUs = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const handleClickGetStarted=(ActiveValue)=>{
    setActiveTab(activeTab)
  }
  

  return (
    <div className="" id="aboutUs">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Title Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simplifying Your Housing Search
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            At Rentkaro, we&apos;re revolutionizing the way people find and rent
            accommodations.
          </p>
        </motion.div>

        {/* Image Slideshow with Fading Animation */}
        <motion.div
          className="mt-10 relative h-auto w-auto overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SlideshowImage />
        </motion.div>

        {/* Features Section with Scroll Animation */}
        <div className="mt-20">
          <motion.dl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* Our Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 lg:text-center"
        >
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Our Mission
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Home for Every Journey
          </p>

          {/* Updated content with Icon and subtle animation, ensuring icon and text are close */}
          <motion.div
            className="mt-4 flex items-center justify-center space-x-2" // Reduced spacing using space-x-2
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }} // Simple floating animation
            transition={{ repeat: Infinity, duration: 3 }} // Loop animation
          >
            {/* Icon closer to the text */}
            <Smile className="text-green-600 h-10 w-10" aria-hidden="true" />
            <p className="max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe that finding the perfect living space should be an
              exciting journey, not a stressful task.
            </p>
            {/* Heart Icon with Animation */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }} // Slight pulsating effect
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="text-green-600 h-12 w-12" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 lg:text-center"
        >
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Join Our Community
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Start Your Journey with Rentkaro
          </p>

          {/* New content with Icons and subtle animations */}
          <div className="mt-4 flex items-center justify-center space-x-4">
            {/* Home Icon with Animation */}
            <motion.div
              className="mt-4 flex items-center justify-center space-x-2" // Reduced spacing using space-x-2
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }} // Simple floating animation
              transition={{ repeat: Infinity, duration: 3 }} // Loop animation
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }} // Slight pulsating effect
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Home className="text-green-600 h-12 w-12" aria-hidden="true" />
              </motion.div>

              {/* Paragraph with Text */}
              <p className="max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Whether you&apos;re looking for your next home or you&apos;re a property
                owner ready to welcome new tenants, Rentkaro is here to make the
                process smooth, secure, and enjoyable.
              </p>

              {/* Security Icon with Animation */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }} // Slight pulsating effect
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ShieldCheck
                  className="text-green-600 h-12 w-12"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-20 text-center"
          >
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Why Rentkaro?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your Trusted Partner in Finding the Perfect Home
            </p>
            <motion.div
              className="mt-4 flex items-center justify-center space-x-2" // Reduced spacing using space-x-2
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }} // Simple floating animation
              transition={{ repeat: Infinity, duration: 3 }} // Loop animation
            >
              <p className="mt-5 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our platform was built with you in mind. Whether you&apos;re
                searching for a cozy apartment or a larger family space,
                Rentkaro ensures a seamless and transparent process. We are here
                to guide you every step of the way.
              </p>
            </motion.div>

            {/* Additional Icons with Emotional Appeal */}
            <div className="mt-10 flex items-center justify-center space-x-4">
              <div className="text-center group">
                <Home
                  className="text-green-600 h-12 w-12 mx-auto transition-transform transform group-hover:scale-125 group-hover:translate-y-1 duration-300 ease-in-out"
                  aria-hidden="true"
                />
                <p className="mt-2 text-lg font-medium text-gray-900 transition-transform transform group-hover:scale-105 group-hover:translate-y-1 duration-300 ease-in-out">
                  Find Your Space
                </p>
              </div>

              <div className="text-center group">
                <Users
                  className="text-green-600 h-12 w-12 mx-auto transition-transform transform group-hover:rotate-12 group-hover:scale-110 duration-300 ease-in-out"
                  aria-hidden="true"
                />
                <p className="mt-2 text-lg font-medium text-gray-900 transition-opacity duration-300 group-hover:opacity-75">
                  Join a Vibrant Community
                </p>
              </div>

              <div className="text-center group">
                <ThumbsUp
                  className="text-green-600 h-12 w-12 mx-auto transition-transform transform group-hover:skew-y-3 group-hover:scale-110 duration-300 ease-in-out"
                  aria-hidden="true"
                />
                <p className="mt-2 text-lg font-medium text-gray-900 transition-transform transform group-hover:-translate-y-1 group-hover:scale-105 duration-300 ease-in-out">
                  Reliable Support
                </p>
              </div>
            </div>
          </motion.div>

          <Link className="mt-10 flex justify-center"
          href={"/DashBoard/AllRooms"} >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-1 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              
              onClick={handleClickGetStarted('pg')}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    name: "Effortless Search",
    description:
      "Our advanced filters and user-friendly interface make finding your ideal accommodation a breeze.",
    icon: Search,
  },
  {
    name: "Verified Listings",
    description:
      "Every property on our platform is verified to ensure you have a safe and reliable renting experience.",
    icon: Shield,
  },
  {
    name: "Community-Driven",
    description:
      "Join a thriving community of renters and owners, sharing experiences and tips.",
    icon: Users,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Our dedicated support team is always ready to assist you throughout your renting journey.",
    icon: ThumbsUp,
  },
];

export default AboutUs;
