import React, { useState } from "react";

const reviewsData = [
  {
    name: "Bappy",
    service: "Royal Glow",
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
  {
    name: "Asadulla",
    service: "Majestic Makeover",
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
  {
    name: "Tariqul",
    service: "Bridal Royalty",
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
];

const RoyalReviews = () => {
  const [ratings, setRatings] = useState([0, 0, 0]);

  const handleRating = (index, newRating) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = newRating;
    setRatings(updatedRatings);
  };

  return (
    <div className="bg-white py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Royal Reviews</h1>
        <p className="text-gray-600 font-medium">
          Hear from our cherished clients about their majestic <br />{" "}
          transformation experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {reviewsData.map((review, idx) => (
          <div
            key={idx}
            className="w-[308.59px] h-[200px] border rounded-lg shadow-md bg-base-100 p-4"
          >
            <div className="flex items-center gap-3 mt-4 mb-5">
              <img
                src={review.image}
                alt="Reviewer"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div>
                <h2 className="text-base font-semibold text-gray-800">
                  {review.name}
                </h2>
                <p className="text-xs text-gray-500">{review.service}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(idx, star)}
                  className={`mask mask-star-2 w-4 h-4 ${
                    star <= ratings[idx] ? "bg-orange-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs mx-5 text-black font-bold mt-5">Review Text</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoyalReviews;
