import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-[url('/banner.png')]  bg-cover bg-center relative "
         >
      <div className="absolute "></div>
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-2xl px-4">
          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-[#DFD138] drop-shadow-md">
            Majestic Makeover
          </h1>
          <p className="mb-6 text-lg md:text-xl text-gray-200">
            Where Every Beauty Journey Feels Like Royalty.
            Step into elegance, walk out like royalty.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn bg-[#DFD138] text-black btn-md rounded-xl font-semibold hover:bg-yellow-400 transition">
              Book Now
            </button>
            <button className="btn btn-outline border border-[#FFFFFF] text-white rounded-xl btn-md hover:bg-[##FFFFFF] hover:text-black transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
