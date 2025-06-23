import React from "react";
import { FaRegCalendar, FaPhoneAlt } from "react-icons/fa";

const RoyalTreatment = () => {
  return (
    <div className="mb-10 w-11/12 mx-auto">
      <div className="hero bg-gradient-to-r from-purple-300 via-pink-200 to-purple-200 shadow-lg py-10 rounded-xl">
        <div className="hero-content text-center flex flex-col items-center">
          <div className="border-4 w-20 h-20 p-4 border-[#EBDA1E] bg-white rounded-full mb-4 shadow-md">
            <FaRegCalendar size={36} className="text-purple-700 mx-auto" />
          </div>
          <h1 className="text-3xl font-semibold text-purple-900 mb-2">
            Ready for Your Royal Treatment?
          </h1>
          <p className="text-gray-800 max-w-md mb-6 text-lg">
            Book your appointment today and step into a world of luxury,
            elegance, and unparalleled beauty services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#EBDA1E] text-black font-medium rounded-lg shadow hover:bg-[#d3c61b] transition duration-300 flex items-center gap-2">
              <FaRegCalendar />
              Schedule Appointment
            </button>
            <button className="px-6 py-3 border border-[#EBDA1E] text-purple-900 font-medium rounded-lg hover:bg-[#fbdada] transition duration-300 flex items-center gap-2">
              <FaPhoneAlt />
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalTreatment;
