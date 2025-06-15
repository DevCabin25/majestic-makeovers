import React from "react";
import { FaRegCalendar, FaPhoneAlt } from "react-icons/fa";

const RoyalTreatment = () => {
  return (
    <div className="mb-10">
      <div className="hero bg-gradient-to-r from-[#F95499] to-[#ff85b1]  shadow-lg py-12">
        <div className="hero-content text-center flex flex-col items-center">
          <FaRegCalendar size={40} className="text-white mb-3" />
          <h1 className="text-3xl font-medium text-black mb-2">
            Ready for Your Royal Treatment?
          </h1>
          <p className="text-black max-w-md mb-6 text-lg">
            Book your appointment today and step into a world of luxury,
            elegance, and unparalleled beauty services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn bg-[#EBDA1E] hover:bg-blue-100 border-0 shadow-md flex items-center gap-2">
              Schedule Appointment
            </button>
            <button className="btn bg-white text-[#F95499] hover:bg-pink-100 border-0 shadow-md flex items-center gap-2">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalTreatment;
