import React from "react";
import Image from "next/image";
import AmodeRanganImage from "../assets/AmodeRAnjan.jpeg";
import PrinceImage from "../assets/PrinceShahooImage.png";
import RitikRajImage from '../assets/ritikraj.jpeg'
import ExposerRooms from "../assets/ExposerRoom.png";
import ReliableCustomers from "../assets/reliablecustomers.jpg";
import TimeSavingImage from "../assets/timesaving.png";
import HappyPropertiesOwner from "../assets/happypropertiesowner.jpg";
import IncomeImage from "../assets/IncomeImage.png";
import RoomToast from "../Toast/RoomOwner"
import { useState } from "react";
const RoomOwnerLandingPage = () => {
  const [showToast, setShowToast] = useState(false);
  const handleClickMouseOn = () => {
    setShowToast(true)
  }
  const handleClickMouseOut = () => {
    setShowToast(false)
  }
  return (
    <div className="min-h-screen bg-blue-100 text-gray-900">
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HappyPropertiesOwner}
            alt="Happy property owner"
            layout="fill"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Maximize Your Property&apos;s Potential with Rent Kro
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful property owners who trust Rent Kro to
            connect them with quality tenants and streamline their rental
            process.
          </p>
          <button className="btn-11 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-[1.03]"
          onMouseEnter={handleClickMouseOn}
          onMouseLeave={handleClickMouseOut}>
            List Your Property
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Rent Kro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4"></div>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Room Owner Policies
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6"></div>
            <ul className="space-y-4">
              {policies.map((policy, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Room Owners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4">{testimonial.location}</p>
                <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={IncomeImage}
            alt="Join Rent Kro"
            layout="fill"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Maximize Your Rental Income?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Rent Kro today and experience the easiest way to manage your
            property rentals.
          </p>
          <button className="btn-11 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-[1.03]"
          onMouseEnter={handleClickMouseOn}
          onMouseLeave={handleClickMouseOut}>
            
            List My Property Now
          </button>
        </div>
      </section>
      {/* Show Toast when hovering over chatUs */}
      {showToast && (
          <RoomToast
            onClose={() => setShowToast(false)}
          />
        )}
    </div>
  );
};

const benefits = [
  {
    title: "Wider Reach",
    description:
      "Access a vast pool of potential tenants actively searching for properties like yours.",
    image: ExposerRooms,
  },
  {
    title: "Save Time",
    description:
      "We handle all the details, from tenant screening to lease signing, saving you time.",
    image: TimeSavingImage,
  },
  {
    title: "Increased Income",
    description:
      "Get competitive rates for your property by listing it on Rent Kro.",
    image: ReliableCustomers,
  },
];

const steps = [
  {
    title: "List Your Property",
    description:
      "Create an account and list your property with Rent Kro in just a few clicks.",
    image: HappyPropertiesOwner,
  },
  {
    title: "Get Matched",
    description: "We match your property with high-quality tenants.",
    image: ReliableCustomers,
  },
  {
    title: "Sign Lease & Earn",
    description:
      "Finalize the lease and start earning from your rental property.",
    image: IncomeImage,
  },
];

const policies = [
  "All room owners must comply with local zoning and housing regulations.",
  "Owners are responsible for maintaining clean and safe accommodations for guests.",
  "A service fee of 3% will be deducted from each booking.",
  "Owners must respond to booking requests within 24 hours.",
  "Cancellation policies must be clearly stated in the room listing.",
  "Rent Kro provides insurance coverage for property damage up to ₹100,000.",
  "Regular property inspections may be conducted to ensure quality standards.",
];

const testimonials = [
  {
    name: "Amode Ranjan",
    location: "Patna, Bihar",
    comment:
      "Rent Kro has transformed the way I manage my rental properties. The platform is intuitive, and the support team is always ready to help.",
    image: AmodeRanganImage,
  },
  {
    name: "Ritik Raj",
    location: "Jharkhand, Ranchi",
    comment:
      "The quality of tenants I've found through Rent Kro is outstanding. The screening process really works, and I feel secure with every booking.",
    image: RitikRajImage,
  },
  {
    name: "Prince Shahoo",
    location: "Maharastra, Mumbai",
    comment:
      "I've been able to maintain a consistent occupancy rate thanks to Rent Kro's wide reach. It's a game-changer for property owners!",
    image: PrinceImage,
  },
];

export default RoomOwnerLandingPage;
