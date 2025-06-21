import React from "react";

const ServicesSection = () => {
  return (
    <div className=" mt-5">
      <div className="text-center">
        <h1 className="text-5xl text-[#000000] font-bold mb-2">Our Royal Services</h1>
        <p className="text-[#000000] font-semibold mb-5">
          Experience luxury beauty treatments crafted to make you feel like
          royalty
        </p>
        {/* Card section */}
        <div className="h-fullflex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5 justify-center text-[#000000]">
          {/* Card 1 */}
          <div className="card bg-base-100  shadow-xl w-[237px] h-[242px] mx-auto">
            <figure className="pt-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt=" & Skin"
                className="rounded-4xl w-[46px] h-[46px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center p-4 font-sans">
              <h2 className="card-title text-sm ">Face & Skin</h2>
              <p className="text-xs text-center">
                Rejuvenating facials, anti-aging treatments, and personalized skincare routines
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl w-[237px] h-[242px] mx-auto">
            <figure className="pt-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Hair"
                className="rounded-4xl w-[46px] h-[46px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center p-4">
              <h2 className="card-title text-sm">Hair</h2>
              <p className="text-xs text-center">
                Expert styling, coloring, treatments, and luxury hair transformations
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl w-[237px] h-[242px] mx-auto">
            <figure className="pt-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Nails"
                className="rounded-4xl w-[46px] h-[46px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center p-4">
              <h2 className="card-title text-sm">Nails</h2>
              <p className="text-xs text-center">
                Expert styling, coloring, treatments, and luxury hair transformations
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card bg-base-100 shadow-xl w-[237px] h-[242px] mx-auto">
            <figure className="pt-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Makeup"
                className="rounded-4xl w-[46px] h-[46px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center p-4">
              <h2 className="card-title text-sm">Makeup</h2>
              <p className="text-xs text-center">
                Manicures, pedicures, nail art, and premium nail care treatments
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
