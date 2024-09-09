import React, { useState } from "react";

const RoomAdd = () => {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    type: "",
    state: "",
    city: "",
    roomType: "",
    occupancy: "",
    gender: "",
    address: "",
    landmark: "",
    rating: "",
    totalPrice: "",
    totalDiscount: "",
    actualPrice: "",
    availability: "Yes",
    availableFrom: "",
    minimumStay: "",
    description: "",
    ownerName: "",
    ownerContacts: "",
    floorNo: "",
    totalFloors: "",
    attachedBathroom: "No",
    securityCharges: "",
    roomSize: "",
    furnishing: "Unfurnished",
    balcony: "No",
    kitchenAccess: "No",
    laundryFacilities: "No",
    parking: "No",
    powerBackup: "No",
    images: [], // Store the image files
    imagePreviews: [], // Store image URLs for preview
  });

  const handleChange = (e) => {
    setRoomDetails({
      ...roomDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const imagePreviews = files.map((file) => URL.createObjectURL(file)); // Create preview URLs

    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      images: files, // Store the image files
      imagePreviews, // Store image preview URLs
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in roomDetails) {
      if (key === "images") {
        roomDetails.images.forEach((image, index) => {
          formData.append(`images[${index}]`, image); // Append each image
        });
      } else {
        formData.append(key, roomDetails[key]);
      }
    }

    console.log("Room details being submitted:", roomDetails);
    // API call to submit the formData
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg text-black">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Add Your Room Details</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Room Details Inputs */}
        <div>
          <label className="block text-green-600 font-semibold">Room Name</label>
          <input
            type="text"
            name="name"
            value={roomDetails.name}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Room Type</label>
          <input
            type="text"
            name="type"
            value={roomDetails.type}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">State</label>
          <input
            type="text"
            name="state"
            value={roomDetails.state}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">City</label>
          <input
            type="text"
            name="city"
            value={roomDetails.city}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Room Type (Solo/Couples/Groups)</label>
          <input
            type="text"
            name="roomType"
            value={roomDetails.roomType}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Occupancy</label>
          <input
            type="number"
            name="occupancy"
            value={roomDetails.occupancy}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Gender Allowed</label>
          <select
            name="gender"
            value={roomDetails.gender}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Available From</label>
          <input
            type="date"
            name="availableFrom"
            value={roomDetails.availableFrom}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Minimum Stay (Months)</label>
          <input
            type="text"
            name="minimumStay"
            value={roomDetails.minimumStay}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Room Size (sq ft)</label>
          <input
            type="text"
            name="roomSize"
            value={roomDetails.roomSize}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Total Price (₹)</label>
          <input
            type="number"
            name="totalPrice"
            value={roomDetails.totalPrice}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-600 font-semibold">Discount (%)</label>
          <input
            type="number"
            name="totalDiscount"
            value={roomDetails.totalDiscount}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-green-600 font-semibold">Description</label>
          <textarea
            name="description"
            value={roomDetails.description}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
            rows="4"
          />
        </div>

        {/* Image Upload (Multiple) */}
        <div className="col-span-2">
          <label className="block text-green-600 font-semibold">Room Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple // Allow multiple files
            onChange={handleImageChange}
            className="w-full p-2 border border-blue-300 rounded"
          />
          {/* Preview the selected images */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roomDetails.imagePreviews.map((preview, index) => (
              <div key={index} className="text-center">
                <img src={preview} alt={`Room Image ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                <p className="text-sm mt-2">{roomDetails.images[index].name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description Field */}
        <div className="col-span-2">
          <label className="block text-green-600 font-semibold">Description</label>
          <textarea
            name="description"
            value={roomDetails.description}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded"
            required
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomAdd;
