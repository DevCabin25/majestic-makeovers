import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Gallery = () => {
  const imageData = useLoaderData();
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [activeType, setActiveType] = useState("All");

  const handleImageByType = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilteredImages(imageData);
    } else {
      const filtered = imageData.filter((item) => item.type === type);
      setFilteredImages(filtered);
    }
  };

  return (
    <div className="bg-[#FFFFFF] py-16 px-4 sm:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#000000]">Beauty Gallery</h1>
        <p className="text-gray-600 mt-2">
          Discover our stunning transformations and artistic creations
        </p>

        {/* Filter Buttons */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {["All", "Bridal", "Professional", "Glamour", "Natural", "Evening"].map(
            (label, idx) => (
              <button
                key={idx}
                onClick={() => handleImageByType(label)}
                className={`btn transition duration-200 ${
                  activeType === label
                    ? "bg-[#FEE900] text-black border border-[#FEE900]"
                    : "text-[#FEE900] border border-[#FEE900] bg-transparent hover:bg-[#FEE900] hover:text-black"
                }`}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="rounded-[10px] overflow-hidden shadow-md"
              style={{ width: "393px", height: "260px" }}
            >
              <img
                src={item.image}
                alt={item.type}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
