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

// ─── Data ────────────────────────────────────────────────────────────────────

const secondaryItems = [
  { label: "Wireless Retrofit Automation", img: "wireless-retrofit.jpg" },
  { label: "Bathroom Ventilation System", img: "odor-control.jpeg" },
  { label: "Odor Control & Air Disinfection", img: "odor.png" },
  {
    label: "Digital Electric Towel Warmer",
    img: "Digital-Electric-Towel-Warmer.png",
  },
  { label: "Home Cinema & Sound Systems", img: "home-cinema.jpeg" },
  { label: "Bespoke Mirror TV Systems", img: "Bespoke-Mirror-TV.jpeg" },
  { label: "Water Leakage Solution", img: "water-leakage.jpeg" },
  { label: "Digital Fragrance", img: "Digitral-Fragrance.jpeg" },
];

// ─── Card ────────────────────────────────────────────────────────────────────

const SolutionCard = ({
  src,
  label,
  className = "",
  imgClassName = "",
}: {
  src: string;
  label: string;
  className?: string;
  imgClassName?: string;
}) => (
  <div
    className={`grid-card bg-gray-50 group relative overflow-hidden opacity-0 ${className}`}
  >
    <Image
      src={src}
      alt={label}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={`object-cover transition duration-700 group-hover:scale-105 ${imgClassName}`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
    <p className="absolute bottom-0 left-0 right-0 text-white text-sm font-medium px-4 py-3 leading-snug">
      {label}
    </p>
  </div>
);

// ─── Grid ────────────────────────────────────────────────────────────────────

const SolutionGrid = () => {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        primaryRef.current?.querySelectorAll(".grid-card") ?? [],
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: primaryRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        secondaryRef.current?.querySelectorAll(".grid-card") ?? [],
        { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: secondaryRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="solutions" className="container space-y-4">
      {/* ── Primary grid ─────────────────────────────────────────────────────
          Layout (desktop):
            col 1 (wide): tall hero card spanning 2 rows
            col 2 & 3:    2 × 2 standard cards
          All cells use explicit min-h so nothing collapses.
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        ref={primaryRef}
        className="grid grid-cols-1 sm:grid-cols-2 h-[550px] lg:grid-cols-3 gap-4"
      >
        {/* Hero — spans 2 rows on lg */}
        <div className="grid-card group relative h-full overflow-hidden opacity-0 rounded-sm sm:row-span-2">
          <Image
            src="/home/solution/grid-1/DC Lighting.png"
            alt="DC Lighting & Automation"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="parallax-img object-cover h-full transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <p className="absolute bottom-8 left-0 right-0 text-white text-sm font-medium px-4 py-3 leading-snug">
            DC Lighting &amp; Automation
          </p>
        </div>

        {/* 4 standard cards fill the remaining 2 × 2 area */}
        <SolutionCard
          src="/home/solution/grid-1/ai-powered.jpg"
          label="Air Powered Laundry Collection"
          className="rounded-sm"
        />
        <SolutionCard
          src="/home/solution/grid-1/Garbage-Linen-Chute.jpeg"
          label="Garbage & Line Chutes"
          className="rounded-sm"
        />
        <SolutionCard
          src="/home/solution/grid-1/Centralised-Vacuum-Cleaning.png"
          label="Centralised Vacuum Cleaning"
          className="rounded-sm"
        />
        <SolutionCard
          src="/home/solution/grid-1/Building Automation.jpeg"
          label="Building Automation & Energy Mgmt"
          className="rounded-sm"
        />
      </div>

      {/* ── Secondary grid — 4 columns, 2 rows, alternating heights ────────── */}
      <div ref={secondaryRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {secondaryItems.map((item, i) => (
          <SolutionCard
            key={i}
            src={`/home/solution/grid-2/${item.img}`}
            label={item.label}
            className={`rounded-sm ${i % 4 < 2 ? "h-90" : "h-90"}`}
          />
        ))}
      </div>
    </div>
  );
};
