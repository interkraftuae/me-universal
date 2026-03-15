"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className=" mb-20 max-w-sm lg:max-w-full mx-auto">
      <div className="container  flex flex-col lg:rounded-2xl overflow-hidden justify-center items-center py-20 relative  text-center">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/cta.mp4" type="video/mp4" />
          </video>

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Eyebrow */}
        <p className="text-3xl relative font-rubik tracking-wide text-yellow-500 mb-3">
          Let’s <span className="font-allura">build</span>&nbsp; the right
          solution together.
        </p>

        {/* Main copy */}
        <h2 className="text-xl relative md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Connect with our team to explore reliable engineering products
          tailored to your business and market needs.
        </h2>

        {/* CTA Button */}
        <Link className="relative z-10" href={"/contact"}>
          <button className="px-10  py-3 max-w-lg border border-yellow-500 text-yellow-500 text-xs tracking-widest uppercase rounded-lg hover:bg-primary hover:text-black transition-colors duration-300">
            Get in touch
          </button>
        </Link>
      </div>
    </section>
  );
}
