import React from "react";
import { IoMdMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Map from "../Map/Map";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold text-[#DFD138] mb-4">
              Majestic Makeover
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Where every beauty journey feels like royalty. Experience luxury
              beauty treatments in an elegant atmosphere designed to make you
              feel pampered and beautiful.
            </p>

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

          {/* Social Links */}
          <div>
            <h1 className="mb-3 text-[#FFFFFF]">Follow Our Royal Journey</h1>
            <div className="flex space-x-4">
              <FaFacebookF className="text-xl hover:text-[#DFD138] cursor-pointer" />
              <FaInstagram className="text-xl hover:text-[#DFD138] cursor-pointer" />
              <FaTwitter className="text-xl hover:text-[#DFD138] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side (Map) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <p className="mb-4 text-xl font-bold text-center lg:text-left">
              Find Our Royal Palace
            </p>
            <div className="w-full h-64 lg:h-80 rounded overflow-hidden shadow-lg">
              <Map />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} Majestic Makeover. All rights reserved. Where beauty meets royalty.
      </div>
    </footer>
  );
};

export default Footer;
