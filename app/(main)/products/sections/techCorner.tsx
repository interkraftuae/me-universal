"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TechCard = {
  title: string;
  desc: string;
  image: string;
  imageAlt?: string;
};

type TechnologyCornerProps = {
  heading: string;
  subheading: string;
  cards: TechCard[];
};

const TechnologyCorner = ({
  heading,
  subheading,
  cards,
}: TechnologyCornerProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h2 = headingRef.current?.querySelector<HTMLHeadingElement>("h2");
      const p = headingRef.current?.querySelector<HTMLParagraphElement>("p");

      if (!h2 || !p) return;

      // Heading: letters feel like they stamp in
      gsap.fromTo(
        h2,
        { opacity: 0, y: 40, letterSpacing: "0.3em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.1em",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        p,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Cards: staggered reveal with clip-path wipe
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const imageWrap = card.querySelector(".card-image-wrap");
        const textBlock = card.querySelector(".card-text");
        const title = card.querySelector(".card-title");
        const desc = card.querySelector(".card-desc");

        // Card wipe up from bottom
        gsap.fromTo(
          card,
          {
            opacity: 0,
            clipPath: "inset(100% 0% 0% 0%)",
            y: 30,
          },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
            },
          },
        );

        // Image subtle zoom-in on enter
        gsap.fromTo(
          imageWrap,
          { scale: 1.08 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
            },
          },
        );

        // Text block fade up inside card
        gsap.fromTo(
          title,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.15 + 0.4,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
            },
          },
        );

        gsap.fromTo(
          desc,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: i * 0.15 + 0.55,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
            },
          },
        );

        // Parallax scroll on each card image
        gsap.to(imageWrap, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cards]);

  return (
    <section ref={sectionRef} className="mt-20 overflow-hidden">
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} className="text-center mx-auto max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-[#1a1a1a] mb-4">
            {heading}
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative overflow-hidden group"
            >
              {/* Image */}
              <div className="card-image-wrap relative w-full h-[240px] md:h-[340px]">
                <Image
                  src={card.image}
                  alt={card.imageAlt ?? card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              </div>

              {/* Text */}
              <div className="card-text absolute bottom-0 left-0 right-0 p-6">
                <h3 className="card-title text-white font-semibold text-base leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="card-desc text-white/65 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCorner;
