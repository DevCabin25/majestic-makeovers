import React from "react";

const servicesData = [
  {
    title: "Face & Skin",
    description:
      "Rejuvenating facials, anti-aging treatments, and personalized skincare routines.",
    image:
      "https://i.ibb.co/nsLyxqtB/young-woman-with-eye-patches-touching-temples-isolated-gray-wall-cosmetics-skin-stress-concept-50.jpg",
  },
  {
    title: "Hair",
    description:
      "Expert styling, coloring, treatments, and luxury hair transformations.",
    image:
      "https://i.ibb.co/Gvs11DJx/beauty-portrait-pretty-ginger-woman-with-long-hair-touching-her-hair-looking-away-50.jpg",
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
    image:
      "https://i.ibb.co/LXCKjY3M/make-up-artist-getting-model-ready-photoshootin.jpg",
  },
  {
    title: "Spa Therapy",
    description:
      "Full-body massages, aromatherapy, and stress-relieving treatments in a tranquil setting.",
    image:
      "https://i.ibb.co/xY6WGB5/spa-therapy-relaxing-treatment.jpg",
  },
];

const testimonials = [
  {
    name: "Ayesha R.",
    feedback:
      "The facial service was truly magical. My skin felt fresh and glowing for days!",
  },
  {
    name: "Tania M.",
    feedback:
      "Amazing environment and friendly staff. I love their hair and nail services!",
  },
];

const Services = () => {
  return (
    <>
      {/* Service Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800">All Our Services</h1>
            <p className="text-lg text-gray-600 mt-3">
              Explore our full range of luxurious beauty services tailored just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 transition-transform hover:scale-105 bg-white flex flex-col"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm flex-grow">
                    {service.description}
                  </p>
                  <button className="mt-4 inline-block px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-5xl text-pink-500">💆‍♀️</span>
              <h3 className="text-xl font-semibold mt-4">Expert Staff</h3>
              <p className="text-gray-600 text-sm mt-2">Professionally trained and passionate beauty specialists.</p>
            </div>
            <div>
              <span className="text-5xl text-pink-500">🧖</span>
              <h3 className="text-xl font-semibold mt-4">Relaxing Environment</h3>
              <p className="text-gray-600 text-sm mt-2">Peaceful ambiance designed for your comfort and peace.</p>
            </div>
            <div>
              <span className="text-5xl text-pink-500">🌿</span>
              <h3 className="text-xl font-semibold mt-4">Natural Products</h3>
              <p className="text-gray-600 text-sm mt-2">Only the best organic and skin-safe products are used.</p>
            </div>
            <div>
              <span className="text-5xl text-pink-500">✨</span>
              <h3 className="text-xl font-semibold mt-4">Royal Experience</h3>
              <p className="text-gray-600 text-sm mt-2">We pamper every client like royalty with personalized care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
          <div className="space-y-8">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-pink-100 rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 text-md italic">"{review.feedback}"</p>
                <p className="mt-3 text-pink-600 font-semibold">– {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
