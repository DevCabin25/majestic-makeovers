import React from 'react';

const Transform = () => {
  const transformations = [
    {
      before: "https://i.ibb.co/FV9cSz1/before1.jpg",
      after: "https://i.ibb.co/nQYZK3Y/after1.jpg",
      text: "Complete Makeover"
    },
    {
      before: "https://i.ibb.co/8j0Mk03/before2.jpg",
      after: "https://i.ibb.co/hWd2m2G/after2.jpg",
      text: "Hair & Makeup"
    },
    {
      before: "https://i.ibb.co/L5g6fTn/before3.jpg",
      after: "https://i.ibb.co/T4jzPqR/after3.jpg",
      text: "Bridal Package"
    },
    {
      before: "https://i.ibb.co/YbwRsDk/before4.jpg",
      after: "https://i.ibb.co/7vWf2MG/after4.jpg",
      text: "Skin Treatment"
    }
  ];

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className='text-4xl font-bold text-center mb-2'>Royal Transformations</h1>
      <p className='text-center text-gray-600 mb-8'>
        Witness the magic of our expert beauticians as they create stunning transformations
      </p>

      {/* Grid container for cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {transformations.map((transform, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex relative overflow-hidden group">
              {/* Before Image */}
              <div className="relative w-1/2 overflow-hidden">
                <img
                  src={transform.before}
                  alt="Before"
                  className="h-52 w-full object-cover transform transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-1 left-1 bg-gray-200 text-black text-xs px-2 py-1 rounded font-medium">
                  Before
                </span>
              </div>

              {/* Divider */}
              <div className="w-[1px] bg-gray-300 h-full" />

              {/* After Image */}
              <div className="relative w-1/2 overflow-hidden">
                <img
                  src={transform.after}
                  alt="After"
                  className="h-52 w-full object-cover transform transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-1 right-1 text-white text-xs px-2 py-1 rounded font-medium
                  bg-gradient-to-r from-yellow-400 to-yellow-600">
                  After
                </span>
              </div>
            </div>

            <div className="card-body items-center text-center bg-gray-200 font-semibold">
              <p>{transform.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transform;
