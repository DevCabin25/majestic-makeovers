import React from "react";

const Banner = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/ba.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-purple-400/30 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-neutral-content px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-[#DFD138] drop-shadow-md">
            Majestic Makeover
          </h1>
          <p className="mb-6 text-lg md:text-xl text-gray-200">
            Where Every Beauty Journey Feels Like Royalty. <br />
            Step into elegance, walk out like royalty.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn bg-[#e60076] text-white btn-md border border-[#e60076] rounded-xl font-semibold hover:bg-[#e60076] transition">
              Book Now
            </button>
            <button className="btn btn-outline border border-white text-white rounded-xl btn-md hover:bg-white hover:text-black transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
