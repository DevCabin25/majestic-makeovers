import React from "react";
import { FaRegStar, FaCrown } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";

const AboutSection = () => {
  return (
    <div className="bg-[#FDF8F3] py-14">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
     
        <div className="text-center lg:text-left max-w-2xl">
          
          <h1 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-[#EBDA1E]">Majestic Makeover</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Where luxury meets artistry, and every treatment is a royal
            experience.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Founded to turn beauty into a royal journey, <br className="hidden md:inline" />
            Majestic Makeover is the destination for those seeking the finest
            wellness experience.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Our team merges tradition with innovation, <br className="hidden md:inline" />
            using only the highest quality products.
          </p>

          {/*  Features */}
          <div className="mt-8 flex  justify-around gap-y-4 sm:gap-5 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center gap-2 basis-1/2 sm:basis-auto">
              <FaRegStar className="text-xl text-yellow-500" />
              <span className="font-medium text-gray-800">Expert Artisans</span>
            </div>
            <div className="flex items-center justify-center gap-2 basis-1/2 sm:basis-auto">
              <IoIosStarOutline className="text-xl text-yellow-500" />
              <span className="font-medium text-gray-800">Premium Products</span>
            </div>
            </div>
            
          <div>
              <div className="flex items-center justify-center gap-2 basis-1/2 sm:basis-auto">
              <GiSelfLove className="text-xl text-pink-500" />
              <span className="font-medium text-gray-800">Personalized Care</span>
            </div>
            <div className="flex items-center justify-center gap-2 basis-1/2 sm:basis-auto">
              <FaCrown className="text-xl text-purple-500" />
              <span className="font-medium text-gray-800">Royal Treatment</span>
            </div>
          </div>
          </div>

        </div>

        {/*  Image */}
        <img
          src="banner.png"
          alt="Majestic Makeover"
          className="w-[80%] sm:w-96 mx-auto rounded-xl shadow-xl"
        />


      </div>
    </div>
  );
};

export default AboutSection;
