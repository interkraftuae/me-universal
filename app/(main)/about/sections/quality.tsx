import Image from "next/image";
import React from "react";

const QualityPolicy = () => {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ===== IMAGE (Top on mobile) ===== */}
          <div className="relative h-[300px] lg:h-[380px] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/about/quality/img-2.jpg"
              alt="Quality Policy"
              fill
              className="object-cover"
            />
          </div>

          {/* ===== TEXT ===== */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-rubik uppercase font-light text-gray-900 mb-6">
              Quality Policy
            </h2>

            <hr className="border-gray-300 mb-8 w-full" />

            <p className="text-gray-800 text-lg mb-5">
              Quality is{" "}
              <span className="italic text-primary font-allura text-2xl font-normal mr-2">
                central
              </span>{" "}
              to everything we do.
            </p>

            <p className="text-gray-600 leading-relaxed mb-3">
              We carefully select products and technologies that meet strict
              quality and performance standards. By working closely with trusted
              manufacturers, we ensure consistent supply, dependable
              performance, and solutions that deliver real value over time.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our commitment to quality also includes responsible sourcing and a
              focus on products that support efficiency, safety, and long-term
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
