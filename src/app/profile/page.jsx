"use client";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Import user icon
// import Router from "next/router";
// import { useRouter } from "next/router";
import Link from "next/link";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [bookings, setBookings] = useState("No bookings");
  const [savedRooms, setSavedRooms] = useState("No saved rooms");
//   const router = useRouter();

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUsername = localStorage.getItem("username") || "Guest User";
    setUsername(storedUsername);
  }, []);

//   const handleClickMore = () => {
//     router.push("/");
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex flex-col items-center justify-center p-6">
      <div
        className="bg-white shadow-xl rounded-lg w-full max-w-md p-8 animate-fadeIn"
        style={{ animationDuration: "1.2s" }}
      >
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-blue-700 text-6xl mb-4 animate-bounce" />
          <h1 className="text-3xl font-bold text-blue-700 text-center">
            Welcome, {username}!
          </h1>
          <p className="text-center text-green-600 mt-2 italic">
            Save your rooms for a hassle-free future booking experience!
          </p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center bg-blue-100 p-4 rounded-lg shadow hover:scale-105 transform transition duration-300">
            <p className="text-blue-800 font-semibold">Your Bookings:</p>
            <span className="text-gray-700">{bookings}</span>
          </div>
          <div className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow mt-4 hover:scale-105 transform transition duration-300">
            <p className="text-green-800 font-semibold">Your Saved Rooms:</p>
            <span className="text-gray-700">{savedRooms}</span>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-lg font-bold text-blue-700">Notifications</h2>
          <p className="text-gray-600 mt-2">
            Stay updated! Save your favorite rooms and manage bookings
            effortlessly.
          </p>
        </div>

        <div className="flex justify-center items-center">
        <Link
  href="/"
  className="mt-6 w-full max-w-sm bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 hover:scale-105 transform transition duration-300 text-center"
>
  Explore More Rooms
</Link>

</div>

      </div>
    </div>
  );
};

export default ProfilePage;
