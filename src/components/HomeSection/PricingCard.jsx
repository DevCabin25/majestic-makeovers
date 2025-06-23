import React from 'react';

const PricingCard = ({ title, price, features,  buttonLabel }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
        {/* Top Decorative Border */}
        <div className="h-6 w-full bg-gradient-to-r from-yellow-300 to-[#DFD138] rounded-t-2xl" />

        <div className="p-8 flex flex-col justify-between h-full">
          {/* Title and Price */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-3xl font-extrabold text-center text-green-700 mb-6">
              £{price}
              <span className="text-sm text-gray-600 font-normal"> /mo</span>
            </p>

            {/* Features List */}
            <ul className="text-gray-700 text-sm space-y-3 list-disc list-inside leading-relaxed">
              {features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <button
              className="w-full py-3 rounded-lg text-black font-semibold text-lg transition hover:brightness-110"
              style={{ backgroundColor: "#DFD138" }}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
