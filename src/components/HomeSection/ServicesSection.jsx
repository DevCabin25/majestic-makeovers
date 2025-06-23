import React from "react";

// ✅ JSON data
const servicesData = [
  {
    title: "Face & Skin",
    description:
      "Rejuvenating facials, anti-aging treatments, and personalized skincare routines.",
    image: "https://i.ibb.co/nsLyxqtB/young-woman-with-eye-patches-touching-temples-isolated-gray-wall-cosmetics-skin-stress-concept-50.jpg",
  },
  {
    title: "Hair",
    description:
      "Expert styling, coloring, treatments, and luxury hair transformations.",
    image: "https://i.ibb.co/Gvs11DJx/beauty-portrait-pretty-ginger-woman-with-long-hair-touching-her-hair-looking-away-50.jpg",
  },
  {
    title: "Nails",
    description:
      "Manicures, pedicures, nail art, and premium nail care treatments.",
    image: "https://i.ibb.co/S44GwXj3/woman-showing-her-beautiful-nails.jpg",
  },
  {
    title: "Makeup",
    description:
      "Bridal, event, and editorial makeup to enhance your natural beauty.",
    image: "https://i.ibb.co/LXCKjY3M/make-up-artist-getting-model-ready-photoshootin.jpg",
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
  className="relative group overflow-hidden rounded-2xl shadow-xl border border-pink-200 min-h-[280px] sm:min-h-[320px] transform transition duration-300 hover:scale-[1.02]"
  style={{
    backgroundImage: `url(${service.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-6 h-full">
    <h3 className="text-xl font-semibold">{service.title}</h3>
    <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {service.description}
    </p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
