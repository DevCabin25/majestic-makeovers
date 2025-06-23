import React from "react";

// ✅ JSON data
const servicesData = [
  {
    title: "Face & Skin",
    description:
      "Rejuvenating facials, anti-aging treatments, and personalized skincare routines.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    title: "Hair",
    description:
      "Expert styling, coloring, treatments, and luxury hair transformations.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    title: "Nails",
    description:
      "Manicures, pedicures, nail art, and premium nail care treatments.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    title: "Makeup",
    description:
      "Bridal, event, and editorial makeup to enhance your natural beauty.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Our Royal Services</h2>
          <p className="text-gray-600 mt-2">
            Experience luxury beauty treatments crafted to make you feel like royalty.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
           <div
  key={index}
  className="bg-white/80 backdrop-blur-md border border-pink-200 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 p-6 text-center min-h-[280px] sm:min-h-[320px] flex flex-col justify-center"
>
              <div className="flex justify-center mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 rounded-full object-cover border-4 border-pink-200 shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-pink-700">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
