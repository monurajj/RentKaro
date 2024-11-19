"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import signInImage from '../../../assets/image.png';

export default function Login() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            router.push('/');
        }
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        setGeneralError('');
        
        const isEmail = emailOrUsername.includes('@');
        const loginData = isEmail
            ? { email: emailOrUsername, password }
            : { username: emailOrUsername, password };
        
        try {
            const response = await fetch('https://server-rentkaro.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            if (data.token && data.refreshToken) {
                localStorage.setItem('username',data.username)
                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);
                router.push('/');
            } else {
                setGeneralError('Invalid login response. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setGeneralError('Login failed. Please check your credentials and try again.');
        }
    };

    const handleResetPassword = () => {
        router.push('/reset');
    };

    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };

    return (
        <div className="flex flex-col md:flex-row md:min-h-screen bg-gray-100">
            <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center">
                <Image
                    src={signInImage}
                    alt="Sign In"
                    className="rounded-lg shadow-lg max-w-full h-auto md:h-[80%] md:w-[80%] object-contain"
                />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0">
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full md:w-[70vh] md:h-[80vh]">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-blue-600">Welcome Back</h1>
                    <p className="text-center text-gray-600 mb-6 md:mb-8">Find your perfect stay with ease</p>
                    <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700 mb-1">Email or Username</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="emailOrUsername"
                                    type="text"
                                    value={emailOrUsername}
                                    onChange={(e) => setEmailOrUsername(e.target.value)}
                                    required
                                    className="h-12 text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 sm:text-sm border-2 border-gray-300 rounded-md transition duration-150 ease-in-out"
                                    placeholder="Email or Username"
                                />
                            </div>
                            {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
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
                            Sign In
                        </button>
                        {generalError && 
                        <p className="w-full flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500">
                            {generalError}
                        </p>}
                    </form>
                    <div className="mt-1 flex flex-col space-y-4">
                        {/* <button onClick={handleResetPassword} className="text-sm text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out mt-4">
                            Forgot your password?
                        </button> */}
                        <button onClick={handleNavigateToSignUp} className="text-sm text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out mt-4">
                            Don&apos;t have an account? <span className="text-blue-600 font-medium">Create New One</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
