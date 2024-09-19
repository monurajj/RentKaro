import { useTabContext } from "@/context/pagecontext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/filterContext";
import data from "../../data.json"

const HotelsPgRoomDetails = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { activeTab } = useTabContext();
  const {
    searchQuery,
    price,
    occupancy,
    facilities,
    sortOrder,
    selectedStates,
  } = useSearch();

  console.log(searchQuery, 'inroompage')
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const url = `https://server-rentkaro.vercel.app/jai/rooms/roomtype/${activeTab}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to retrieve data");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);
  
  const filteredData = data
    .filter(
      (item) =>
        item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.State.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (item) =>
        (!selectedStates.length || selectedStates.includes(item.State)) &&
        (!price || price >= parseInt(item.ActualPrice)) &&
        occupancy <= parseInt(item.Occupancy) &&
        facilities.every((facility) => item.OtherFacilities[facility] === "Yes")
    )
    .sort((a, b) =>
      sortOrder ? b.ActualPrice - a.ActualPrice : a.ActualPrice - b.ActualPrice
    );


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      {filteredData.length !== 0 ? (
        filteredData.map((item, index) => {
          if (item.id && item.id.startsWith("Rooms")) {
            return (
              <div
                key={index}
                className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 flex flex-col md:flex-row w-full max-w-7xl mb-8"
              >
                {/* Image Slideshow */}
                <div className="md:w-1/4 w-full mt-[2rem]">
                  <ImageSlideshow images={Object.values(item.Images)} />
                </div>

                {/* Name and Basic Details */}
                <div className="md:w-1/4 w-full md:pl-6 mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-green-600 mb-2">
                    {item.Name}
                  </h2>
                  <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> {item.Type}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> {item.State}, {item.Address}
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 text-lg">★</span>
                    <p className="ml-2 text-gray-600">
                      {item.Rating} ({item.TotalRating} ratings) - {item.Review}
                    </p>
                  </div>
                  <p className="text-gray-800 text-xl font-semibold mb-2">
                    ₹{item.ActualPrice}{" "}
                    <span className="text-sm">/ per month</span>
                  </p>
                  <p className="text-red-500 mb-4">
                    {item.TotalDiscount}% off (Original Price: ₹
                    {item.TotalPrice})
                  </p>

                  {/* Buttons */}
                  <div className="flex space-x-4 mt-4">
                    <Link
                      className="btn-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      href={`AllRooms/${item.id}`}
                    >
                      View Details
                    </Link>

                    <Link href="/DashBoard/BookingDone" className="btn-11 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Facilities */}
                <div className="hidden md:block md:w-1/4 w-full md:pl-6 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Facilities
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Floor No: {item.Facilities.FloorNo}</li>
                    <li>
                      Attached Bathroom: {item.Facilities.AttachedBathroom}
                    </li>
                    <li>Security Charges: {item.Facilities.SecurityCharges}</li>
                    <li>Room Size: {item.Facilities.RoomSize}</li>
                    <li>Balcony: {item.Facilities.Balcony}</li>
                    <li>Parking: {item.Facilities.Parking}</li>
                  </ul>
                </div>
                {/* Other Facilities */}
                <div className="md:w-1/4 w-full md:pl-6 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Other Facilities
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {item.OtherFacilities?.AC && (
                      <li>AC: {item.OtherFacilities.AC}</li>
                    )}
                    {item.OtherFacilities?.FreeWifi && (
                      <li>Free Wifi: {item.OtherFacilities.FreeWifi}</li>
                    )}
                    {item.OtherFacilities?.TV && (
                      <li>TV: {item.OtherFacilities.TV}</li>
                    )}
                    {item.OtherFacilities?.Elevator && (
                      <li>Elevator: {item.OtherFacilities.Elevator}</li>
                    )}
                    {item.OtherFacilities?.WorkingSpace && (
                      <li>
                        Working Space: {item.OtherFacilities.WorkingSpace}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        <h1 className="md:text-3xl text-black">
          Sorry, no data found for your preferences
        </h1>
      )}
    </div>
  );
};

const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <Image
        src={images[currentImageIndex]}
        alt="Room"
        width={100}
  height={50}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
      >
        ❮
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
      >
        ❯
      </button>
    </div>
  );
};

export default HotelsPgRoomDetails;
