import React from "react";

const blogData = [
  {
    title: "The Royal Guide to Skincare!",
    date: "June 15, 2025",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Secrets to radiant skin with expert tips and luxury treatments.",
    buttonText: "Read Now",
    readTime: "6 min read",
  },
  {
    title: "Bridal Beauty: Wedding Day Timeline",
    date: "May 28, 2025",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Guide to beauty treatments for the perfect wedding look.",
    buttonText: "Explore",
    readTime: "5 min read",
  },
  {
    title: "Spring Hair Trends 2024",
    date: "April 5, 2025",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Hot spring hair styles: cuts, colors, and textures.",
    buttonText: "Read More",
    readTime: "7 min read",
  },
];


const RoyalDiaries = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Royal Diaries</h1>
        <p className="text-gray-600 text-sm">
          Stay updated with the latest beauty trends, tips, and royal <br />
          insights from our expert beauticians
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog, idx) => (
         <div
  key={idx}
  className="bg-base-100 shadow-md rounded-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.04] duration-300 max-w-sm mx-auto w-full"
>
  <div className="relative">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-40 object-cover"
    />
    <span
      className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white rounded"
      style={{
        background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
        boxShadow: "0 0 5px #FFA500",
      }}
    >
      {blog.readTime}
    </span>
  </div>

  <div className="p-4">
    <p className="text-xs mb-1 text-primary">{blog.date}</p>
    <h2 className="text-base font-semibold text-gray-800 leading-snug mb-2">
      {blog.title}
    </h2>
    <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
    <button className="btn btn-xs btn-primary btn-outline">
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
