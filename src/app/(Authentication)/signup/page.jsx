"use client";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEnvelope, FaGoogle, FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signUpImage from '../../../assets/image.png';
import { auth, provider } from '../../lib/fireBaseConfig';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();

    const handleGoogle = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            const idToken = await result.user.getIdToken(); // Fetch the ID token
            localStorage.setItem('email', result.user.email);
            localStorage.setItem('idToken', idToken); // Optionally store the token in localStorage
            toast.success("Sign-up successful! Redirecting...", {
                position: "top-center",
                autoClose: 1500,
            });
            router.push('/');
        } catch (error) {
            console.log(err, 'errormessage')
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
        router.push('/Login');
    }

    return (
        <div className="flex flex-col md:flex-row md:min-h-screen  bg-gray-100">
            <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center">
                <Image
                    src={signUpImage}
                    alt="Sign In"
                    className="rounded-lg shadow-lg max-w-full h-auto md:h-[80%] md:w-[80%] object-contain"
                />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10">
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full md:max-w-md">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-blue-600">Create an Account</h1>
                    <p className="text-center text-gray-600 mb-6 md:mb-8">Join us to find your perfect stay</p>
                    <form onSubmit={handleSignup} className="space-y-4 md:space-y-6">
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
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md"
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
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md"
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
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                            Sign Up
                        </button>
                        {/* <p>password</p> */}
                        { password.length < 8  &&  password.length > 1 &&
                        <p className="w-full flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                            Password must be more than 8 characters
                        </p>
                        }
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
                        <button onClick={handleGoogle} className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
                            Sign Up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
