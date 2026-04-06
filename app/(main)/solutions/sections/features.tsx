"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = ({
  features,
}: {
  features: {
    num: string;
    title: string;
    desc: string;
    image: string;
    imageLeft: boolean;
  }[];
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      const headingLines = headingRef.current?.querySelectorAll("span");
      const subtext = headingRef.current?.querySelector("p");

      gsap.fromTo(
        headingLines ?? [],
        { opacity: 0, y: 30, skewY: 1.5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        subtext ?? [],
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.35,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Each feature row
      itemRefs.current.forEach((item, idx) => {
        if (!item) return;

        const imageEl = item.querySelector(".feature-image");
        const textEl = item.querySelector(".feature-text");
        const numEl = item.querySelector(".feature-num");
        const titleEl = item.querySelector(".feature-title");
        const descEl = item.querySelector(".feature-desc");
        const isImageLeft = features[idx].imageLeft;

        // Image slide in
        gsap.fromTo(
          imageEl,
          { opacity: 0, x: isImageLeft ? -60 : 60, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 83%",
            },
          },
        );

        // Text block slide in from opposite side
        gsap.fromTo(
          textEl,
          { opacity: 0, x: isImageLeft ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.95,
            ease: "power2.out",
            delay: 0.15,
            scrollTrigger: {
              trigger: item,
              start: "top 83%",
            },
          },
        );

        // Number counter-style fade
        gsap.fromTo(
          numEl,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: item,
              start: "top 83%",
            },
          },
        );

        // Title pop up
        gsap.fromTo(
          titleEl,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: item,
              start: "top 83%",
            },
          },
        );

        // Description fade
        gsap.fromTo(
          descEl,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.55,
            scrollTrigger: {
              trigger: item,
              start: "top 83%",
            },
          },
        );

        // Subtle image parallax on scroll
        gsap.to(imageEl, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [features]);

  return (
    <section ref={sectionRef} className="mt-16 overflow-hidden">
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-semibold text-[#1a1a1a] leading-tight mb-4">
            <span className="text-3xl font-normal uppercase block mb-2 text-[#1a1a1a]">
              Designed to{" "}
              <span className="text-4xl! font-semibold uppercase">
                Integrate &
              </span>
            </span>
            <span className="font-montserrat text-3xl">
              Adapt into <span className="uppercase">Your Space</span>
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl">
            Because our systems are modular and adaptable, they can be
            incorporated easily
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-16">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
                !feature.imageLeft ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="feature-image relative bg-gray-300 w-full h-[220px] lg:h-[320px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="feature-text">
                <h3 className="feature-title text-xl md:text-2xl font-montserrat font-semibold text-[#1a1a1a] mb-6 flex items-baseline gap-3">
                  <span className="feature-num text-gray-400 font-roboto font-normal text-base">
                    {feature.num}
                  </span>
                  {feature.title}
                </h3>
                <p className="feature-desc text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
