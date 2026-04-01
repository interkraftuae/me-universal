"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading into words
      const split = new SplitText(headingRef.current, {
        type: "words,chars",
        wordsClass: "overflow-hidden inline-block",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Overlay cinematic reveal
      tl.fromTo(
        overlayRef.current,
        { opacity: 1 },
        { opacity: 0.55, duration: 1.6, ease: "power2.inOut" },
      )

        // Each word slides up from below its overflow-hidden wrapper
        .fromTo(
          split.words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.75,
            stagger: 0.05,
            ease: "power4.out",
          },
          "-=0.9",
        )

        // Paragraph line by line
        .fromTo(
          paraRef.current,
          { y: 24, opacity: 0, filter: "blur(4px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
          "-=0.3",
        )

        // Buttons slide up with stagger
        .fromTo(
          buttonsRef.current?.children ?? [],
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
          "-=0.4",
        )

        // Image: fade in with upward drift
        .fromTo(
          imageRef.current,
          { y: 40, opacity: 0, scale: 0.97, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power2.out",
          },
          "-=1.0",
        );

      // Floating idle animation on image after intro
      tl.to(
        imageRef.current,
        {
          y: -14,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
        "+=0.2",
      );

      // Scroll-based fade out for image
      const handleScroll = () => {
        if (!sectionRef.current || !imageRef.current) return;
        const sectionH = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / (sectionH * 0.5), 1);
        gsap.to(imageRef.current, {
          opacity: 1 - progress,
          y: -progress * 60,
          duration: 0.1,
          overwrite: "auto",
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[80dvh] lg:min-h-[95dvh] relative flex py-26 lg:py-0 justify-center items-center overflow-hidden"
    >
      <video
        className="absolute w-full h-full object-cover inset-0"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/home/hero/hero.mp4" type="video/mp4" />
      </video>

      <div ref={overlayRef} className="absolute inset-0 size-full bg-black" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] container items-center gap-8">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-2">
          <h1
            ref={headingRef}
            className="text-3xl lg:text-5xl lg:leading-13 font-montserrat tracking-tight text-gray-50"
          >
            <span className="text-primary">Integrated Technologies</span> for{" "}
            <br className="hidden lg:block" />
            Smarter, Sustainable Buildings
          </h1>

          <p ref={paraRef} className="text-gray-200 mb-4 mt-3 opacity-0">
            Delivering end-to-end building and lifestyle technology solutions
            that enhance operational efficiency, comfort, and support long-term
            sustainability goals.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#solutions"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <button className="btn opacity-0">Explore Solutions</button>
            </Link>

            <Link href="/per-sqm-concept">
              <button className="btn bg-transparent! border! border-primary! opacity-0">
                Visit PER SQM Experience
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="order-1 lg:order-2 flex justify-center opacity-0"
        >
          <Image
            src="/home/hero/hero-image.png"
            width={500}
            height={500}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
