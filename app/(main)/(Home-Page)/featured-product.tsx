"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const products = [
  {
    label: "Electric Towel Warmer",
    img: "/products/towel-warmer/compact-towel.webp",
    link: "/products/electric-towel-warmer",
  },
  {
    label: "Push Pull Door Locks",
    img: "/products/push-pull-locks/Mechanical-Accessibility-Lock-System.webp",
    link: "/products/push-pull-door-locks",
  },
  {
    label: "Kitchen Air Conditioner",
    img: "/products/kitchen-ac/banner.webp",
    link: "/products/kitchen-air-conditioner",
  },
];

const FeaturedProduct = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "overflow-hidden inline-block",
      });

      // ── Header ──
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      headerTl
        .fromTo(
          labelRef.current,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
        )
        .fromTo(
          split.words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            stagger: 0.07,
            ease: "power4.out",
          },
          "-=0.2",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.3",
        );

      // ── Cards ──
      const cards = gridRef.current?.querySelectorAll(".product-card");
      gsap.fromTo(
        cards ?? [],
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      // ── Accent lines ──
      const lines = gridRef.current?.querySelectorAll(".card-accent-line");
      gsap.fromTo(
        lines ?? [],
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.14,
          ease: "power2.out",
          transformOrigin: "left",
          delay: 0.4,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      // ── Labels ──
      const labels = gridRef.current?.querySelectorAll(".card-label");
      gsap.fromTo(
        labels ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#15141D] mt-24 py-20">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              ref={labelRef}
              className="text-primary text-xs tracking-widest mb-3 opacity-0"
            >
              // PRODUCTS
            </p>
            <h2
              ref={headingRef}
              className="text-gray-100 font-semibold tracking-tight text-4xl font-montserrat"
            >
              Our Featured Products
            </h2>
          </div>
          <p ref={subRef} className="text-gray-400 text-sm max-w-sm opacity-0">
            A selection of our most sought-after smart building products.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {products.map((item, key) => (
            <Link
              href={item.link}
              key={key}
              className="product-card group relative h-[420px] overflow-hidden block opacity-0"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Gradient: blends image into section bg color at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15141D] via-[#15141D]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="card-accent-line w-8 h-0.5 bg-primary mb-3 origin-left scale-x-0 group-hover:w-14 transition-[width] duration-300" />
                <h2 className="card-label text-white font-semibold text-lg opacity-0">
                  {item.label}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
