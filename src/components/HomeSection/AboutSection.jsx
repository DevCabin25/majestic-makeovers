import React from "react";
import { FaRegStar, FaCrown } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";

const teamMembers = [
  {
    name: "Sophia Noor",
    role: "Founder & Lead Stylist",
    image: "https://i.ibb.co/FbsGc0j/team1.jpg",
  },
  {
    name: "Lana Ahmed",
    role: "Skin Care Expert",
    image: "https://i.ibb.co/McG13NB/team2.jpg",
  },
  {
    name: "Rina Zaman",
    role: "Makeup Artist",
    image: "https://i.ibb.co/sq8b4Xg/team3.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#FDF8F3]">
      {/* Main About Section */}
      <section className="py-14">
        <div className="max-w-screen-xl mt-10 mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold">
              About <span className="text-[#EBDA1E]">Majestic Makeover</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Where luxury meets artistry, and every treatment is a royal experience.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Founded to turn beauty into a royal journey, Majestic Makeover is the
              destination for those seeking the finest wellness experience.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Our team merges tradition with innovation, using only the highest quality
              products.
            </p>

            {/* Features */}
            <div className="mt-8 flex justify-around flex-wrap gap-6 text-center">
              <div className="flex items-center gap-2">
                <FaRegStar className="text-xl text-yellow-500" />
                <span className="font-medium text-gray-800">Expert Artisans</span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosStarOutline className="text-xl text-yellow-500" />
                <span className="font-medium text-gray-800">Premium Products</span>
              </div>
              <div className="flex items-center gap-2">
                <GiSelfLove className="text-xl text-pink-500" />
                <span className="font-medium text-gray-800">Personalized Care</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCrown className="text-xl text-purple-500" />
                <span className="font-medium text-gray-800">Royal Treatment</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            src="banner.png"
            alt="Majestic Makeover"
            className="w-[80%] sm:w-96 mx-auto rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
    
    {/* Text Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
      <p className="text-gray-700 text-lg">
        At <strong>Majestic Makeover</strong>, our mission is to empower every client to
        feel confident, radiant, and truly royal. Our vision is to redefine luxury
        beauty by blending timeless techniques with modern elegance.
      </p>
    </div>

    {/* Image */}
    <div className="lg:w-1/2">
      <img
        src="https://i.ibb.co/9cptYmm/mission-vision.jpg" // Replace with your actual image URL
        alt="Mission and Vision"
        className="w-full rounded-xl shadow-lg"
      />
    </div>

  </div>
</section>


      {/* Our Story */}
      <section className="py-16 bg-[#FDF8F3]">
  <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Image on Left */}
    <div className="lg:w-1/2">
      <img
        src="https://i.ibb.co/zPFmGKb/our-story.jpg" // Replace with your actual image
        alt="Our Story"
        className="w-full rounded-xl shadow-lg"
      />
    </div>

    {/* Text on Right */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Born from a dream to bring regal beauty rituals to everyday life, <strong>Majestic
        Makeover</strong> began in a small studio with a single chair and a passion for elegance.
        Today, we serve queens of all walks of life, offering exquisite treatments that
        honor your natural beauty while indulging you in pure luxury.
      </p>
    </div>
    
  </div>
</section>


      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Meet the Glam Squad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-[#FDF8F3] p-6 rounded-2xl shadow-md text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-pink-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
