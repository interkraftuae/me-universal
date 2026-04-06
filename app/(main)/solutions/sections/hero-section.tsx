"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = ({
  img,
  title,
  desc,
  object = "object-cover",
}: {
  img: string;
  title: string;
  desc: string;
  object?: string;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns effect on image
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15, transformOrigin: "center center" },
        { scale: 1, duration: 2.2, ease: "power2.out" },
      );

      // Overlay fade in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power1.inOut" },
      );

      // Shimmer sweep
      gsap.fromTo(
        shimmerRef.current,
        { x: "-100%", opacity: 0.6 },
        {
          x: "200%",
          opacity: 0,
          duration: 1.8,
          ease: "power2.inOut",
          delay: 0.4,
        },
      );

      // Decorative line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out", delay: 0.7 },
      );

      // Title: word-by-word stagger
      const words = titleRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.fromTo(
          words,
          { y: 60, opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            ease: "back.out(1.4)",
            stagger: 0.12,
            delay: 0.5,
          },
        );
      }

      // Description fade + slide
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          delay: 1.1,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [title]);

  // Split title into word spans
  const wrappedTitle = title.split(" ").map((word, i) => (
    <span
      key={i}
      className="word inline-block mr-[0.25em]"
      style={{ perspective: "600px" }}
    >
      {word}
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      className="h-[35dvh] container lg:h-[88dvh] mt-24 lg:mt-20"
    >
      <div className="overflow-hidden h-full relative rounded-2xl shadow-2xl">
        {/* Ken Burns image wrapper */}
        <div ref={imageRef} className="absolute inset-0 w-full h-full">
          <Image
            src={img}
            fill
            alt={title}
            className={`${object} will-change-transform`}
            priority
          />
        </div>

        {/* Multi-layer overlay: dark gradient + warm tint */}
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(10,8,30,0.55) 50%, rgba(0,0,0,0.80) 100%)",
          }}
        />

        {/* Shimmer sweep */}
        <div
          ref={shimmerRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
            zIndex: 2,
          }}
        />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            zIndex: 3,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 w-full flex justify-center items-center h-full"
          style={{ perspective: "1000px" }}
        >
          <div className="flex flex-col items-center gap-6 max-w-4xl px-4 text-center">
            {/* Decorative line above */}
            <div
              ref={lineRef}
              className="w-16 h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,220,100,0.9), transparent)",
              }}
            />

            <h1
              ref={titleRef}
              className="text-3xl font-rubik lg:text-5xl font-medium leading-tight tracking-tight"
              style={{
                color: "#f5f0e8",
                textShadow: "0 4px 32px rgba(0,0,0,0.5)",
              }}
            >
              {wrappedTitle}
            </h1>

            <p
              ref={descRef}
              className="text-base lg:text-lg leading-relaxed max-w-xl"
              style={{
                color: "rgba(230, 220, 200, 0.85)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              {desc}
            </p>

            {/* Decorative line below */}
            <div
              className="w-8 h-[1px] rounded-full opacity-50"
              style={{ background: "rgba(255,220,100,0.7)" }}
            />
          </div>
        </div>

        {/* Bottom gradient vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
