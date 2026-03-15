import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
          {/* Top - Image with overlay heading & quote */}
          <div className="relative h-[280px] lg:h-[340px]">
            <Image
              src="/about/mission/mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Centered text */}
            <div className="relative z-10 flex flex-col items-center justify-end pb-12 h-full text-center px-6">
              <h2 className="text-2xl lg:text-4xl font-rubik uppercase font-light text-white mb-4">
                Our Mission
              </h2>
              <p className="text-white font-semibold text-base lg:text-lg max-w-xl leading-snug">
                &ldquo;Empower businesses with solutions that are innovative,
                practical, and built to last.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom - Dark text block */}
          <div className="bg-zinc-900 px-8 lg:px-16 py-10 space-y-5 text-center">
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Our mission is to support companies in achieving operational
              excellence through dependable, well-engineered products. We
              deliver solutions that enhance efficiency, improve working
              environments, and contribute to sustainable development.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              By combining responsible sourcing, technical understanding, and
              long-term collaboration, we ensure that every solution aligns with
              both performance goals and environmental responsibility.By
              combining responsible sourcing, technical understanding, and
              long-term collaboration, we ensure that every solution aligns with
              both performance goals and environmental considerations. We focus
              on consistency, clarity, and results helping businesses move
              forward without disruption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
