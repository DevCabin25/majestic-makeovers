import React from "react";
import { IoMdMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#DFD138] mb-4">
            Majestic Makeover
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Where every beauty journey feels like royalty. Experience luxury
            beauty treatments in an elegant atmosphere designed to make you feel
            pampered and beautiful.
          </p>
          <div>
            <h1 className="mb-5 text-[#FFFFFF]">Follow Our Royal Journey</h1>
            <div className="flex space-x-4">
              <FaFacebookF className="text-xl hover:text-[#DFD138] cursor-pointer" />
              <FaInstagram className="text-xl hover:text-[#DFD138] cursor-pointer" />
              <FaTwitter className="text-xl hover:text-[#DFD138] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#DFD138] mb-4">
            Contact Us
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <IoMdMail className="text-2xl mt-1 text-[#DFD138]" />
              <div>
                <p className="font-semibold">Email</p>
                <p>hello@majesticmakeovers.co.uk</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-lg mt-1 text-[#DFD138]" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+123 4567 89000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CiLocationOn className="text-2xl mt-1 text-[#DFD138]" />
              <div>
                <p className="font-semibold">Address</p>
                <p>Luxury District, Royal City 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#DFD138] mb-4">
            Find Our Royal Palace
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#DFD138] cursor-pointer">Home</li>
            <li className="hover:text-[#DFD138] cursor-pointer">Services</li>
            <li className="hover:text-[#DFD138] cursor-pointer">About Us</li>
            <li className="hover:text-[#DFD138] cursor-pointer">Contact</li>
            <li className="hover:text-[#DFD138] cursor-pointer">
              Book Appointment
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} Majestic Makeover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
