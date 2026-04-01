"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Solutions = () => {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "overflow-hidden inline-block",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
      )
        .fromTo(
          split.words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.2",
        )
        .fromTo(
          bodyRef.current?.children ?? [],
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="container mb-16">
        <p
          ref={labelRef}
          className="text-primary text-xs tracking-widest mb-3 opacity-0"
        >
          // WHAT WE OFFER
        </p>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <h1
            ref={headingRef}
            className="uppercase tracking-tight font-semibold font-montserrat text-4xl lg:w-1/3 leading-tight shrink-0"
          >
            ADVANCED Solutions
          </h1>
          <div
            ref={bodyRef}
            className="space-y-3 text-gray-600 text-sm leading-relaxed lg:w-2/3"
          >
            <p>
              ME Universal delivers a wide range of integrated solutions
              designed for modern residential, commercial, and industrial
              buildings. Our systems connect devices, infrastructure, and
              digital platforms to improve building performance, automation, and
              operational intelligence.
            </p>
            <p>
              From smart intelligent DC lighting and automation to centralized
              vacuum systems, digital fragrance solutions, building analytics,
              and energy-efficient technologies, our portfolio is designed to
              support high-performance environments across multiple industries.
            </p>
            <p>
              These solutions enable buildings to operate more efficiently while
              enhancing user experience, reducing operational complexity, and
              supporting long-term sustainability initiatives.
            </p>
            <p>
              Our team works closely with architects, consultants, developers,
              and contractors to ensure each solution integrates seamlessly into
              the overall building ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#050100] py-20">
        <SolutionGrid />
      </div>
    </section>
  );
};

export default Solutions;

const grid2 = [
  { label: "Wireless Retrofit Automation", img: "wireless-retrofit.jpg" },
  { label: "Bathroom Ventilation System", img: "bathroom-ventilation.jpg" },
  { label: "Odor Control & Air Disinfection", img: "odor-control.png" },
  { label: "Digital Electric Towel Warmer", img: "electric-warmer.jpg" },
  { label: "Home Cinema & Sound Systems", img: "home-cinema.jpg" },
  { label: "Mirror TV Systems", img: "mirror-tv.jpg" },
  { label: "Water Leakage Solution", img: "water-leakage.png" },
  { label: "Digital Fragrance", img: "digital-fragnance.jpg" },
];

const SolutionGrid = () => {
  const primaryGridRef = useRef<HTMLDivElement>(null);
  const secondaryGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Primary grid — big card + 4 cards stagger in
      const primaryCards =
        primaryGridRef.current?.querySelectorAll(".grid-card");
      if (primaryCards) {
        gsap.fromTo(
          primaryCards,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: primaryGridRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      // Secondary grid — clip reveal from bottom
      const secondaryCards =
        secondaryGridRef.current?.querySelectorAll(".grid-card");
      if (secondaryCards) {
        gsap.fromTo(
          secondaryCards,
          { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.65,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: secondaryGridRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Parallax on the big left card image
      const bigImg = primaryGridRef.current?.querySelector(".parallax-img");
      if (bigImg) {
        gsap.to(bigImg, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: bigImg,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="solutions" className="container">
      {/* Primary Grid */}
      <div
        ref={primaryGridRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* LEFT BIG CARD */}
        <div className="grid-card group relative overflow-hidden opacity-0">
          <div className="relative w-full h-[420px] overflow-hidden">
            <Image
              src="/home/solution/grid-1/dc-lighting.jpg"
              alt="DC Lighting"
              fill
              className="parallax-img object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <p className="absolute bottom-0 left-0 right-0 text-white text-base font-medium p-5 translate-y-1 group-hover:translate-y-0 transition duration-300">
            DC Lighting & Automation
          </p>
        </div>

        {/* RIGHT: 2x2 */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              src: "/home/solution/grid-1/ai-powered.jpg",
              label: "Air Powered Laundry Collection",
            },
            {
              src: "/home/solution/grid-1/centralized-vaccume.png",
              label: "Centralised Vacuum Cleaning",
            },
            {
              src: "/home/solution/grid-1/grabage-line.png",
              label: "Garbage & Line Chutes",
            },
            {
              src: "/home/solution/grid-1/building-automation.jpeg",
              label: "Building Automation & Energy Mgmt",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid-card group relative overflow-hidden h-[200px] opacity-0"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 text-white text-sm p-3 translate-y-1 group-hover:translate-y-0 transition duration-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Grid */}
      <div
        ref={secondaryGridRef}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
      >
        {grid2.map((item, key) => (
          <div
            key={key}
            className="grid-card group relative overflow-hidden h-[200px] opacity-0"
          >
            <Image
              src={`/home/solution/grid-2/${item.img}`}
              alt={item.label}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white text-sm p-3 translate-y-1 group-hover:translate-y-0 transition duration-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
