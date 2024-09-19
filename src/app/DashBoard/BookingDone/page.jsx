'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Loader, ArrowRight } from 'lucide-react';

const FalseBooking = () => {
  const [stage, setStage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 3000);
    const timer2 = setTimeout(() => setStage(2), 6000);
    const timer3 = setTimeout(() => router.push('/DashBoard'), 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [router]);

  const stages = [
    {
      title: "Booking in Progress",
      description: "Please wait while we process your booking...",
      icon: <Loader className="animate-spin text-white" size={32} />,
      color: "bg-blue-500"
    },
    {
      title: "Almost There!",
      description: "Hold tight, we're finalizing your booking...",
      icon: <Clock className="animate-pulse text-white" size={32} />,
      color: "bg-green-500"
    },
    {
      title: "Booking Confirmed!",
      description: "Thank you for choosing Rent Kro. Redirecting to dashboard...",
      icon: <CheckCircle className="text-white" size={32} />,
      color: "bg-blue-600"
    }
  ];

  const progressBarWidth = `${(stage + 1) / stages.length * 100}%`;

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-8 text-center relative overflow-hidden"
          >
            <motion.div 
              className={`absolute top-0 left-0 h-1 ${stages[stage].color}`}
              initial={{ width: 0 }}
              animate={{ width: progressBarWidth }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div
              className={`mx-auto flex items-center justify-center h-20 w-20 rounded-full ${stages[stage].color} mb-6`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 500, damping: 30 }}
            >
              {stages[stage].icon}
            </motion.div>
            <motion.h2 
              className="mt-6 text-3xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {stages[stage].title}
            </motion.h2>
            <motion.p 
              className="mt-2 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {stages[stage].description}
            </motion.p>
            {stage === 2 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 30 }}
                className="mt-6"
              >
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View Dashboard
                  <ArrowRight className="ml-2" size={16} />
                </motion.button> */}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FalseBooking;