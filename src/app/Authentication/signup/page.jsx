"use client";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, provider } from '../../lib/fireBaseConfig';
import Image from 'next/image';
import { FaGoogle, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import signUpImage from '../../../assets/image.png'

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();

    const handleGoogle = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            localStorage.setItem('email', result.user.email);
            toast.success("Sign-up successful! Redirecting...", {
                position: "top-center",
                autoClose: 1500,
            });
            router.push('/');
        } catch (error) {
            console.error('Error during Google sign-up:', error);
            toast.error('Error during Google sign-up: ' + error.message, {
                position: "top-center",
                autoClose: 1500,
            });
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem('email', email);
            toast.success("Sign-up successful! Redirecting...", {
                position: "top-center",
                autoClose: 1500,
            });
            router.push('/');
        } catch (error) {
            console.error('Error during sign-up:', error);
            toast.error('Error during sign-up: ' + error.message);
        }
    };

    const handleSignIn = () => {
        router.push('/Authentication/Login');
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/2 bg-blue-600 flex items-center justify-center">
                <Image
                    src={signUpImage}
                    alt="Sign Up"
                    width="100%"
                    height="100%"
                    className="object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg w-[70vh] h-[80vh]">
                    <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Create an Account</h1>
                    <p className="text-center text-gray-600 mb-8">Join us to find your perfect stay</p>
                    <form onSubmit={handleSignup} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md transition duration-150 ease-in-out"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
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
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md transition duration-150 ease-in-out"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-6 flex flex-col space-y-4">
                        <button onClick={handleSignIn} className="text-sm text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out">
                            Already have an account? <span className="text-blue-600 font-medium">Sign In</span>
                        </button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>
                        <button onClick={handleGoogle} className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                            <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
                            Sign Up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}