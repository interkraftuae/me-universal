"use client";
import Hero from "./sections/hero";
import OurPurpose from "./sections/our-purpose";
import Vision from "./sections/vision";
import Mission from "./sections/mission";
import QualityPolicy from "./sections/quality";
import Sustainability from "./sections/sustainability";
import Image from "next/image";
import CTASection from "../sections/cta";
const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with leaf image */}
      <Hero
        mode="dark"
        title="About Us"
        desc="Middle East Engineering Technologies is a global B2B Distribution and trading company. We work with trusted international partners to supply practical and reliable products that support business growth while encouraging responsible use of resources."
        image={
          <Image
            className="w-full h-full object-cover object-bottom-left lg:object-bottom-right lg:scale-[1.6] lg:origin-bottom-left "
            src="/about/banner.jpg"
            alt="Green leaves"
            fill
            priority
          />
        }
      />
      <div className="container pt-16 pb-14 grid items-center text-lg grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ===== IMAGE ===== */}
        <div className="h-[260px] lg:h-[440px] w-full relative order-1 lg:order-2">
          <Image
            src="/about/about.jpg"
            alt="About"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* ===== TEXT ===== */}
        <div className="space-y-4 order-2 lg:order-1">
          <p>
            MEET is a Distribution and trading company, a subsidiary of ME
            Universal. We partner with businesses to deliver specialised
            products that are practical, cost-effective, and designed for real
            working conditions. Our role is to connect advanced technologies
            with everyday business applications, ensuring solutions are not just
            innovative, but usable and dependable.
          </p>

          <p>
            We carefully select products that help companies operate more
            efficiently while reducing energy consumption and environmental
            impact. Every solution is chosen with long-term value in mind
            balancing performance, reliability, and responsible resource use.
          </p>

          <p>
            MEET serves commercial customers and partners across multiple
            regions through a diversified and growing portfolio.
          </p>
        </div>
      </div>
      {/* Our Purpose Section */}
      <OurPurpose />
      {/* Our Values Section */}
      {/* Our Vision Section */}
      <Vision />
      {/* Our Mission Section */}
      <Mission />
      {/* Quality Sources Section */}
      <QualityPolicy />
      {/* Sustainability Section */}
      <Sustainability />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
