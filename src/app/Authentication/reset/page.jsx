"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/lib/fireBaseConfig';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import resetImage from '../../../assets/image.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Reset() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent. Check your inbox.", {
                position: "top-center",
                autoClose: 3000,
            });
            router.push('/Authentication/login');
        } catch (error) {
            console.error('Error during password reset:', error);
            toast.error('Error sending reset email: ' + error.message, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    const handleBackToLogin = () => {
        router.push('/Authentication/Login');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/2 bg-blue-600 flex items-center justify-center">
                <Image
                    src={resetImage}
                    alt="Reset Password"
                    width="100%"
                    height="100%"
                    className="object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg w-[70vh] h-[60vh]">
                    <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Reset Your Password</h1>
                    <p className="text-center text-gray-600 mb-8">Enter your email to receive a password reset link</p>
                    <form onSubmit={handleResetPassword} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md transition duration-150 ease-in-out"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                            Send Reset Link
                        </button>
                    </form>
                    <div className="mt-6 flex flex-col space-y-4">
                        <button onClick={handleBackToLogin} className="text-sm text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out">
                            Remember your password? <span className="text-blue-600 font-medium">Back to Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}