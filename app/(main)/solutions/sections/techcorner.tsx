"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TechItem = { title: string; desc: string; image: string };

const Card = ({
  tech,
  cardRef,
}: {
  tech: TechItem;
  cardRef?: (el: HTMLDivElement | null) => void;
}) => (
  <div ref={cardRef} className="relative overflow-hidden group">
    <div className="card-image-wrap relative w-full h-[220px] md:h-[250px]">
      <Image
        src={tech.image}
        alt={tech.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
      <div className="card-text absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h3 className="card-title text-white font-semibold text-lg mb-2 leading-snug">
          {tech.title}
        </h3>
        <p className="card-desc text-white/75 text-xs leading-relaxed">
          {tech.desc}
        </p>
      </div>
    </div>
  </div>
);

const TechnologyCorner = ({
  title,
  desc,
  firstRow,
  lastRow,
}: {
  title: string;
  desc: string;
  firstRow: TechItem[];
  lastRow: TechItem[];
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h2 = headingRef.current?.querySelector<HTMLHeadingElement>("h2");
      const p = headingRef.current?.querySelector<HTMLParagraphElement>("p");

      if (!h2 || !p) return;

      // Heading stamp-in
      gsap.fromTo(
        h2,
        { opacity: 0, y: 36, letterSpacing: "0.35em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.1em",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        p,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      // Animate all cards
      const allCards = cardRefs.current.filter(Boolean);

      allCards.forEach((card, i) => {
        if (!card) return;

        const imageWrap = card.querySelector(".card-image-wrap");
        const title = card.querySelector(".card-title");
        const desc = card.querySelector(".card-desc");

        // Determine which row this card belongs to for trigger
        const isFirstRow = i < firstRow.length;
        const rowTrigger = isFirstRow ? row1Ref.current : row2Ref.current;
        // Stagger within each row
        const rowIndex = isFirstRow ? i : i - firstRow.length;

        // Clip-path wipe reveal
        gsap.fromTo(
          card,
          { opacity: 0, clipPath: "inset(100% 0% 0% 0%)", y: 24 },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: rowIndex * 0.13,
            scrollTrigger: { trigger: rowTrigger, start: "top 83%" },
          },
        );

        // Image zoom-in on enter
        gsap.fromTo(
          imageWrap,
          { scale: 1.1 },
          {
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
            delay: rowIndex * 0.13,
            scrollTrigger: { trigger: rowTrigger, start: "top 83%" },
          },
        );

        // Title fade up
        gsap.fromTo(
          title,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: rowIndex * 0.13 + 0.38,
            scrollTrigger: { trigger: rowTrigger, start: "top 83%" },
          },
        );

        // Desc fade up
        gsap.fromTo(
          desc,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: rowIndex * 0.13 + 0.52,
            scrollTrigger: { trigger: rowTrigger, start: "top 83%" },
          },
        );

        // Parallax scrub on scroll
        gsap.to(imageWrap, {
          yPercent: -7,
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
  }, [firstRow, lastRow]);

  const allItems = [...firstRow, ...lastRow];

  return (
    <section ref={sectionRef} className="mt-24 overflow-hidden">
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold tracking-widest uppercase text-[#1a1a1a] mb-4">
            {title}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Row 1 — 3 equal cards */}
        <div
          ref={row1Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
        >
          {firstRow.map((tech, i) => (
            <Card
              key={i}
              tech={tech}
              cardRef={(el) => {
                cardRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        {/* Row 2 — 2 wide cards */}
        <div ref={row2Ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {lastRow.map((tech, i) => (
            <Card
              key={i}
              tech={tech}
              cardRef={(el) => {
                cardRefs.current[firstRow.length + i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCorner;
