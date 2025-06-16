import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div>
      <div className="hero bg-[#FDF8F3] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../../public/banner.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              About <span className="text-[#EBDA1E]">Majestic Makeover</span>
            </h1>
            <p className="py-6">
              Where luxury meets artistry, and every treatment is a royal
              experience.
            </p>
            <p>
              Founded with a vision to transform beauty experiences into royal
              journeys, <br /> Majestic Makeover has been the premier
              destination for discerning clients who seek <br /> nothing but the
              finest in beauty and wellness services.
            </p>
            <p className="mt-5">
              Our team of skilled artisans combines traditional techniques with
              modern innovation,
              <br /> using only the highest quality products to ensure every
              client leaves feeling like royalty.
            </p>
            <div className="mt-12">
              <div className="flex justify-between mb-3">
                <div className="flex gap-4">
                  <FaRegStar className="mt-1"></FaRegStar>
                  <h1> Expert Artisans</h1>
                </div>
                <div className="flex gap-4">
                  <IoIosStarOutline className="mt-1"></IoIosStarOutline>
                  <h1>Premium Products</h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <GiSelfLove className="mt-1"></GiSelfLove>
                  <h1> Personalized Care</h1>
                </div>
                <div className="flex gap-4">
                  <FaCrown className="mt-1"></FaCrown>
                  <h1> Royal Treatment</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
