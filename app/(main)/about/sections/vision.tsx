import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <section className="py-10 lg:py-18 bg-white">
      <div className="container ">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image */}
            <div className="relative h-[300px] lg:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/about/vision/vision.jpg"
                alt="Modern building"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="space-y-5 lg:py-4">
              <h2 className=" text-4xl font-rubik uppercase font-light text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be a trusted B2B Distribution partner for
                businesses across key markets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We support companies as they move toward better, more efficient
                ways of working. By offering future-ready products, we help
                businesses improve daily operations while being mindful of
                energy use and environmental impact.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As industries and markets evolve, we remain focused on practical
                solutions that deliver long-term value. Through responsible
                choices and strong partnerships, we aim to help our customers
                grow with confidence and prepare for what comes next.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We present innovation and Technology driven products focusing on
                B2B needs. Supporting companies as they work towards their goal.
                We maintain efficiency so that there is nothing stopping you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
