"use client";
import React, { useEffect, useRef } from "react";
import { BadgeCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DraftingCompass, HardHat, TrendingUp, Wrench } from "lucide-react";
gsap.registerPlugin(ScrollTrigger, SplitText);

const cards = [
  {
    title: "Architects & Interior Designers",
    desc: "We support architects and designers by integrating smart systems early in the design phase...",
    icon: DraftingCompass,
  },
  {
    title: "MEP & Specialist Consultants",
    desc: "Our technical team works closely with consultants by providing BOQ preparation...",
    icon: HardHat,
  },
  {
    title: "Developers & Investors",
    desc: "ME Universal helps developers evaluate the financial and operational benefits...",
    icon: TrendingUp,
  },
  {
    title: "Engineering Companies",
    desc: "We provide supply, integration, and technical partnership services...",
    icon: Wrench,
  },
];

const TargetAudience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading split
      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "overflow-hidden inline-block",
      });

      // Label + heading entrance
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      headerTl
        .fromTo(
          labelRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
        )
        .fromTo(
          split.words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.75,
            stagger: 0.07,
            ease: "power4.out",
          },
          "-=0.2",
        );

      // Cards: each animates as it enters viewport
      const cardEls = cardsRef.current?.querySelectorAll(".audience-card");
      cardEls?.forEach((card, i) => {
        const icon = card.querySelector(".card-icon");
        const title = card.querySelector(".card-title");
        const desc = card.querySelector(".card-desc");
        const line = card.querySelector(".card-line");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.08,
          },
        )
          .fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.4,
              ease: "power2.out",
              transformOrigin: "left",
            },
            "-=0.3",
          )
          .fromTo(
            icon,
            { opacity: 0, scale: 0.5, rotate: -20 },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.45,
              ease: "back.out(1.7)",
            },
            "-=0.2",
          )
          .fromTo(
            title,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.2",
          )
          .fromTo(
            desc,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.2",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#15141D] py-24">
      <div className="container">
        <div className="mb-14">
          <p
            ref={labelRef}
            className="text-primary text-xs tracking-widest mb-3 opacity-0"
          >
            // OUR TARGET AUDIENCE
          </p>
          <h2
            ref={headingRef}
            className="font-montserrat uppercase tracking-tight text-4xl font-semibold text-gray-100"
          >
            Designed around your role
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/5"
        >
          {cards.map((item, key) => (
            <div
              key={key}
              className="audience-card text-white bg-[#15141D] p-8 hover:bg-primary/10 transition-colors duration-300 group opacity-0"
            >
              {/* Animated top line */}
              <div className="card-line w-8 h-0.5 bg-primary mb-6 scale-x-0" />

              {(() => {
                const Icon = item.icon;
                return (
                  <Icon className="card-icon size-8 text-primary mb-6 opacity-0" />
                );
              })()}

              <h3 className="card-title text-base font-semibold mb-4 leading-snug opacity-0">
                {item.title}
              </h3>

              <p className="card-desc text-sm text-gray-400 leading-relaxed opacity-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
