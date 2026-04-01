"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const stats = [
  {
    value: "30–40%",
    label: "ENERGY COST REDUCTION",
    desc: "Potential energy cost reduction through optimized building technologies.",
  },
  {
    value: "2–4 YRS",
    label: "RETURN ON INVESTMENT",
    desc: "Typical return on investment period for integrated smart building systems.",
  },
  {
    value: "20–25%",
    label: "CARBON FOOTPRINT REDUCTION",
    desc: "Estimated decrease in operational CO2 emissions through resource management.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLImageElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "overflow-hidden inline-block",
      });

      // ── Left column: image + graphic + decor ──
      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      imageTl
        .fromTo(
          imageWrapRef.current,
          { opacity: 0, x: -50, scale: 0.97 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" },
        )
        .fromTo(
          graphicRef.current,
          { opacity: 0, x: -30, y: 20 },
          { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          decorRef.current,
          { opacity: 0, scale: 0.6, rotate: 25 },
          {
            opacity: 0.5,
            scale: 1,
            rotate: 45,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          "-=0.4",
        );

      // Subtle parallax on main image while scrolling
      gsap.to(imageWrapRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Right column ──
      const rightTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          once: true,
        },
      });

      rightTl
        // Heading word-by-word wipe up
        .fromTo(
          split.words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.75,
            stagger: 0.06,
            ease: "power4.out",
          },
        )
        // Paragraphs stagger in
        .fromTo(
          parasRef.current?.children ?? [],
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        )
        // Button pops in
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 12, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)" },
          "-=0.2",
        );

      // Stats: each counter + label animates in
      const statEls = statsRef.current?.querySelectorAll(".stat-item");
      statEls?.forEach((el, i) => {
        const value = el.querySelector(".stat-value");
        const label = el.querySelector(".stat-label");
        const desc = el.querySelector(".stat-desc");
        const line = el.querySelector(".stat-line");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
            once: true,
          },
        });

        tl.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "left",
            delay: i * 0.12,
          },
        )
          .fromTo(
            value,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
            "-=0.1",
          )
          .fromTo(
            label,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" },
            "-=0.1",
          )
          .fromTo(
            desc,
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            "-=0.1",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative w-full h-[360px] lg:h-[520px]">
            <Image
              ref={graphicRef}
              src="/home/about/graphic.png"
              alt="team"
              width={300}
              height={300}
              className="absolute w-full h-full -bottom-14 -left-28 object-contain opacity-0"
            />
            <div
              ref={imageWrapRef}
              className="relative w-full h-full rounded z-10 overflow-hidden opacity-0"
            >
              <Image
                src="/home/about/about-bg.jpg"
                alt="team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Decorative Shape */}
          <div
            ref={decorRef}
            className="absolute -bottom-6 left-12 w-40 h-40 border border-indigo-300 opacity-0"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2
            ref={headingRef}
            className="text-4xl font-semibold font-montserrat tracking-tight mb-6"
          >
            ABOUT ME UNIVERSAL
          </h2>

          <div ref={parasRef} className="mb-5 space-y-3">
            <p className="text-gray-600 text-sm leading-relaxed opacity-0">
              ME Universal is a technology-driven solutions provider
              specializing in intelligent building systems, IoT integration, and
              advanced automation technologies.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed opacity-0">
              The company works across residential, commercial, hospitality,
              healthcare, and institutional projects, delivering solutions that
              enhance energy efficiency, operational intelligence, and occupant
              experience.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed opacity-0">
              Through strategic partnerships with global technology providers
              and in-house technical expertise, ME Universal delivers solutions
              designed to support modern building ecosystems and evolving
              sustainability requirements.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed opacity-0">
              Our focus is on building long-term value through smart
              infrastructure, efficient system integration, and future-ready
              technology platforms.
            </p>
          </div>

          <Link
            ref={btnRef}
            href="/about"
            className="opacity-0 inline-block mb-8"
          >
            <button className="btn hover:bg-primary/90 transition">
              About MEUniversal →
            </button>
          </Link>

          {/* STATS */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`stat-item pt-4 border-t md:border-t-0 border-primary ${
                  i === 0
                    ? "md:border-r md:pr-6"
                    : i === 1
                      ? "md:border-r md:px-6"
                      : "md:pl-6"
                }`}
              >
                <div className="stat-line w-8 h-0.5 bg-primary mb-3 scale-x-0" />
                <h3 className="stat-value text-xl font-semibold opacity-0">
                  {stat.value}
                </h3>
                <p className="stat-label text-primary text-xs font-medium mb-2 opacity-0">
                  {stat.label}
                </p>
                <p className="stat-desc text-xs text-gray-600 opacity-0">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
