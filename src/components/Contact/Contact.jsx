import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-[#FDF8F3] py-16 px-4 sm:px-8">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#000000]">
          Contact <span className="text-[#EBDA1E]">Us</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Ready to begin your royal beauty journey? We'd love to hear from you.
        </p>
      </div>

      {/* Main section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left -contact info */}
        <div className="bg-white rounded-xl shadow-md p-6 h-full">
          <h2 className="text-2xl font-semibold mb-6 text-[#000000]">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your First name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your Last name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message here..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <button
              type="submit"
              className="bg-[#857C11] hover:bg-[#6e650e] text-white font-semibold py-2 px-4 w-full rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info  */}
        <div className="flex flex-col justify-start space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-2">
              Visit our luxury salon or reach out to us through any of the
              methods below.
            </p>
          </div>
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-[#FEFCEF]">
              <div className="p-3 bg-amber-300 text-black rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <p>013013178541</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-[#FEFCEF]">
              <div className="p-3 bg-amber-300 text-black rounded-full">
                <MdOutlineMail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <p>hello@majesticmakeovers.co.uk</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-[#FEFCEF]">
              <div className="p-3 bg-amber-300 text-black rounded-full">
                <IoLocation size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Address</h4>
                <p>Luxury District, City 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
