import React, { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const Toast = ({ onClose, position = "bottom-right" }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const positionClasses =
    position === "bottom-right"
      ? "bottom-4 right-4"
      : position === "top-right"
      ? "top-4 right-4"
      : "top-4 left-4";

  // Framer Motion animation variants for smooth entrance and exit
  const toastAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }, 
    exit: { opacity: 0, y: 50 }, 
  };

  return (
    <motion.div
      className={`fixed z-50 p-4 bg-red-600 text-white rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${positionClasses}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastAnimation}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex items-center space-x-3">
        {/* Alert Icon */}
        <FaExclamationTriangle className="text-yellow-300" size={24} />
        {/* Message */}
        <div>
          <p className="font-bold">Chat Support Unavailable</p>
          <span className="text-sm">
            We apologize for the inconvenience. Our chat support is currently
            under construction and will be available soon.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
