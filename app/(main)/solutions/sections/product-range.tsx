"use client";

import Image from "next/image";
import { Circle } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductRange = ({
  products,
  titleText,
}: {
  products: { img: string; title: string; desc: string; list: string[] }[];
  titleText: string;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header line + title text animation
      const [leftLine, label] = headerRef.current!.children;
      gsap.fromTo(
        leftLine,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        label,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        },
      );

      // "Product Range" heading
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 88%",
          },
        },
      );

      // Each product card
      itemRefs.current.forEach((item, idx) => {
        if (!item) return;

        const isEven = idx % 2 === 0;
        const imageEl = item.querySelector(".product-image");
        const contentEl = item.querySelector(".product-content");
        const listItems = item.querySelectorAll(".product-list-item");

        // Card fade + slide up
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          },
        );

        // Image: slide in from left or right
        gsap.fromTo(
          imageEl,
          { opacity: 0, x: isEven ? -50 : 50, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.15,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          },
        );

        // Content block
        gsap.fromTo(
          contentEl,
          { opacity: 0, x: isEven ? 40 : -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.25,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          },
        );

        // Stagger list items
        gsap.fromTo(
          listItems,
          { opacity: 0, x: 16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.45,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [products]);

  return (
    <section ref={sectionRef} className="mt-20 overflow-hidden">
      <div className="container">
        {/* Header row */}
        <div ref={headerRef} className="flex gap-8 justify-center items-start">
          <div className="w-full mt-3 h-0.5 bg-primary" />
          <p className="text-primary md:text-nowrap">{titleText}</p>
        </div>

        <div className="mt-16 max-w-7xl mx-auto">
          <h2
            ref={titleRef}
            className="text-4xl mb-12 uppercase font-montserrat"
          >
            Product Range
          </h2>

          <ul className="space-y-7">
            {products.map((product, idx) => (
              <li
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`grid p-5 lg:p-10 bg-linear-to-b ${
                  idx % 2 === 1 ? "from-[#FFEDEE]" : "from-[#F7FAFF]"
                } items-center grid-cols-1 lg:grid-cols-2 gap-10`}
              >
                {/* Image */}
                <div className="product-image h-[320px] bg-gray-200 relative overflow-hidden">
                  <Image
                    src={product.img}
                    alt=""
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    fill
                  />
                </div>

                {/* Content */}
                <div className="product-content">
                  <h2 className="text-2xl font-montserrat font-[500]">
                    {product.title}
                  </h2>
                  <p className="text-lg mt-6 text-primary">{product.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {product.list.map((item, id) => (
                      <li
                        key={id}
                        className="product-list-item flex items-center gap-2"
                      >
                        <div>
                          <Circle className="size-2 fill-black" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
