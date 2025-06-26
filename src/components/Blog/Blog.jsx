import React, { useState } from "react";

const blogPosts = [
  {
    title: "How to Build a Skincare Routine That Glows",
    summary:
      "Learn how to layer your skincare products, pick the right ingredients for your skin type, and create a daily ritual that makes your skin radiate royalty.",
    image: "https://i.ibb.co/XbGVc2D/skincare-routine.jpg",
    author: "Queen's Beauty Journal",
    date: "June 10, 2025",
  },
  {
    title: "2025 Makeup Trends You’ll Love",
    summary:
      "From shimmering eyes to minimalist glam, explore the makeup looks that are taking over runways and royal courts alike in 2025.",
    image: "https://i.ibb.co/FsK1M60/makeup-trends.jpg",
    author: "Glam Palace Weekly",
    date: "May 28, 2025",
  },
  {
    title: "Self-Care Rituals for a Majestic Morning",
    summary:
      "Start your day with intentional, self-loving routines. These calming beauty rituals are perfect for a queen who rules with grace and glow.",
    image: "https://i.ibb.co/1bbmnqf/morning-rituals.jpg",
    author: "Royal Wellness Daily",
    date: "April 22, 2025",
  },
  {
    title: "Evening Skincare Rituals",
    summary:
      "Wind down like royalty. Discover the perfect nighttime routine for flawless, nourished skin and beauty sleep bliss.",
    image: "https://i.ibb.co/XbGVc2D/skincare-routine.jpg",
    author: "Queen's Beauty Journal",
    date: "July 5, 2025",
  },
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <>
      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-5xl font-extrabold text-gray-800">Royal Diaries</h1>
            <p className="text-lg text-gray-600 mt-3">
              Explore beauty secrets fit for a queen — glowing skin, elegant makeup, and self-care rituals.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">{post.summary}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => openModal(post)}
                      className="mt-2 inline-block px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm rounded-full transition"
                    >
                      Learn More
                    </button>
                    <p className="mt-2 text-sm text-pink-500 font-medium">
                      {post.author} – <span className="text-gray-500">{post.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
    {selectedPost && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
    <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-xl w-full p-6">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={selectedPost.image}
        alt={selectedPost.title}
        className="w-full h-56 object-cover rounded-xl mb-5"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {selectedPost.title}
      </h2>

      {/* Meta */}
      <p className="text-sm text-pink-600 font-medium mb-4">
        {selectedPost.author} — {selectedPost.date}
      </p>

      {/* Content */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {selectedPost.summary}
        {/* Replace with full content if needed */}
      </p>
    </div>
  </div>
)}

    </>
  );
};

export default BlogPage;
