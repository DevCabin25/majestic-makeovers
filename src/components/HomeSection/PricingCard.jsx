import React from 'react';

const PricingCard = ({ title, price, features, color, buttonLabel }) => {
  return (
    <div className="px-10">
      <div
        className="relative bg-white shadow-xl rounded-xl px-8 py-10 w-full mx-auto group 
                   transition-transform transform 
                   hover:scale-105 
                   hover:shadow-2xl 
                   hover:border-[#DFD138] 
                   border-2 border-transparent 
                   flex flex-col h-full
                   hover:brightness-105"
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
     
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h2
              className="text-3xl font-extrabold text-center mb-3"
              style={{ color }}
            >
              {title}
            </h2>
            <p className="text-2xl font-semibold text-green-800 text-center mb-6">
              £{price}
            </p>
            <ul className="text-base text-gray-800 space-y-3 pl-5 list-disc list-inside leading-relaxed">
              {features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <button className="btn btn-primary w-full text-lg font-semibold">
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;