import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 px-4 sm:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#000000]">Beauty Gallery</h1>
        <p className="text-gray-600 mt-2">
          Discover our stunning transformations and artistic creations
        </p>

        {/* Filter Buttons */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button className="btn bg-[#EBDA1EB2] text-black hover:scale-105 transition-transform duration-200">
            All
          </button>
          {["Bridal", "Professional", "Glamour", "Natural", "Evening"].map(
            (label, idx) => (
              <button
                key={idx}
                className="btn text-[#FEE900] border border-[#FEE900] bg-transparent hover:bg-[#FEE900] hover:text-black transition"
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Card Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#B13434] rounded-[10px] text-white p-4"
              style={{ width: "393px", height: "190px" }}
            ></div>
          ))}

          {[4, 5, 6].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#EBDA1E] rounded-[10px] text-black p-4"
              style={{ width: "393px", height: "190px" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
