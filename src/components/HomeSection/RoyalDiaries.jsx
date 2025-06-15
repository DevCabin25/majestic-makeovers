import React from "react";

const blogData = [
  {
    title: "The Royal Guide to Skincare!",
    date: "June 15, 2025",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description:
      "Secrets to radiant skin with expert tips and luxury treatments.",
    buttonText: "Read Now",
  },
  {
    title: "Bridal Beauty: Wedding Day Timeline",
    date: "May 28, 2025",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Guide to beauty treatments for the perfect wedding look.",
    buttonText: "Explore",
  },
  {
    title: "Spring Hair Trends 2024",
    date: "April 5, 2025",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Hot spring hair styles: cuts, colors, and textures.",
    buttonText: "Read More",
  },
];

const RoyalDiaries = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Royal Diaries</h1>
        <p className="text-gray-600 text-sm">
          Stay updated with the latest beauty trends, tips, and royal <br />{" "}
          insights from our expert beauticians
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog, idx) => (
          <div
            key={idx}
            className="bg-base-100 shadow-md rounded-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.02] duration-300 w-[280px] mx-auto"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[120px]  object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
              <h2 className="text-sm font-bold text-gray-800 leading-snug mb-1">
                {blog.title}
              </h2>
              <p className="text-xs text-gray-600 mb-3">{blog.description}</p>
              <button className="btn btn-xs btn-primary">
                {blog.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="btn btn-warning"> View All Articles</button>
      </div>
    </div>
  );
};

export default RoyalDiaries;
