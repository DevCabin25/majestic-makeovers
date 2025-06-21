import React from "react";

// ✅ Individual Card Component
const PricingCard = ({ title, price, features, color, buttonLabel }) => {
  return (
    <div className="relative bg-white shadow-xl rounded-xl p-5 w-[300px] mx-auto group transition-transform transform hover:scale-105 duration-300 border-2 border-transparent hover:border-[#DFD138] flex flex-col justify-between h-full">
      {/* 🟩 Upper content */}
      <div>
        <h2
          className="text-2xl font-bold text-center mb-1"
          style={{ color }}
        >
          {title}
        </h2>
        <p className="text-lg font-semibold text-[#2E7D32] text-center mb-3">
          £{price}
        </p>
        <ul className="text-sm text-gray-700 space-y-1">
          {features.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* 🟦 Bottom button - always aligned */}
      <div className="mt-4">
        <button className="btn btn-primary w-full">{buttonLabel}</button>
      </div>
    </div>
  );
};

// ✅ Pricing Section Component
const RoyalPricing = () => {
  const packages = [
    {
      title: "Royal Glow",
      price: "40",
      features: [
        "Deep cleansing facial",
        "Anti-aging treatment",
        "Moisturizing mask",
        "Professional makeup",
      ],
      color: "#DFD138",
      buttonLabel: "Book Royal Glow",
    },
    {
      title: "Majestic Makeover",
      price: "65",
      features: [
        "Complete hair styling",
        "Professional makeup",
        "Luxury facial treatment",
        "Manicure & pedicure",
        "Complimentary refreshments",
      ],
      color: "#4A148C",
      buttonLabel: "Book Makeover",
    },
    {
      title: "Bridal Royalty",
      price: "180",
      features: [
        "Bridal hair & makeup trial",
        "Wedding day styling",
        "Luxury spa treatment",
        "Full body care",
        "Photography session",
      ],
      color: "#880E4F",
      buttonLabel: "Book Bridal Package",
    },
  ];

  return (
    <div className="mt-10 px-4 mb-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#000000]">Royal Pricing</h1>
        <p className="text-lg font-medium text-gray-700">
          Choose from our carefully curated packages designed to give you <br />
          the royal treatment you deserve
        </p>
      </div>

      {/* 🟨 Grid to hold all cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <PricingCard
            key={idx}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            color={pkg.color}
            buttonLabel={pkg.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default RoyalPricing;
