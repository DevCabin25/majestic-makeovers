import React from "react";

const Blog = () => {
  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 font-sans px-4 py-10 md:px-16 lg:px-32">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black">
          Beauty Blog <span className="text-amber-200">Royal Diaries</span>
        </h1>
        <p className="mt-6 text-xl text-black">
          Explore beauty secrets fit for a queen
        </p>
      </header>

      {/* Articles */}
      <section className="mb-16">
        <h2 className="text-3xl text-center font-bold text-black mb-6">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Skincare Routine That Glows",
              description:
                "Learn to build a glowing skincare routine step-by-step.",
            },
            {
              title: "2025 Makeup Trends",
              description:
                "Explore the latest makeup styles trending this year.",
            },
            {
              title: "Majestic Morning Rituals",
              description: "Start your day like royalty with self-care habits.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Before & After Transformations
          </h2>
          <p className="mb-6 text-xl text-gray-700">
            Real people. Majestic changes. See the powerful results of our
            artistry in our transformation gallery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Images */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-48 rounded mb-2"></div>
              <p className="text-center text-sm text-gray-600">
                Before / After
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Reviews */}
      <section className="mb-16 text-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">
            Product Reviews
          </h2>
          <p className="mb-6 text-gray-700">
            Only the best make it to our royal shelf:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Top 5 Long-Wear Foundations",
              description:
                "Our favorite foundations that stay flawless all day.",
            },
            {
              title: "Hair Serums That Actually Work",
              description:
                "Tried and tested serums for smoother, shinier hair.",
            },
            {
              title: "Best Lipsticks for Every Skin Tone",
              description:
                "Find your perfect match from our top lipstick picks.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
