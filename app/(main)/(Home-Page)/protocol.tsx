"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const protocols = [
  {
    desc: "Wireless energy-harvesting protocol enabling battery-less automation systems.",
    img: "enocean",
  },
  {
    desc: "ASHRAE building automation standard widely used for HVAC and building control.",
    img: "bacnet",
  },
  {
    desc: "European standard used for lighting, HVAC, and smart building automation.",
    img: "knx",
  },
  {
    desc: "Industrial communication protocol used for energy meters and industrial equipment.",
    img: "modbus",
  },
  {
    desc: "Advanced digital lighting control protocol enabling precise lighting management.",
    img: "dali",
  },
  {
    desc: "Low-power long-range wireless communication technology used for IoT sensor networks.",
    img: "loarawan",
  },
  {
    desc: "Lightweight messaging protocol enabling cloud connectivity and real-time data exchange.",
    img: "mqtt",
  },
  {
    desc: "Secure, low-power wireless mesh networking protocol designed for reliable IoT device connectivity without a central hub.",
    img: "thread",
  },
  {
    desc: "Power-over-Ethernet technology enables devices to receive power and data through a single cable.",
    img: "poe",
  },
  {
    desc: "Wireless mesh networking protocol commonly used in smart home and automation systems.",
    img: "zigbee",
  },
  {
    desc: "European protocol used for remote monitoring of water, gas, and energy meters.",
    img: "mbus",
  },
  {
    desc: "IP-based interoperability standard ensures seamless communication between diverse smart home ecosystems and devices.",
    img: "matter",
  },
];

export default function ProtocolSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header ──
      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "overflow-hidden inline-block",
      });

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
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" },
        )
        .fromTo(
          split.words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: "power4.out",
          },
          "-=0.2",
        );

      // ── Grid cells: staggered clip reveal ──
      const cells = gridRef.current?.querySelectorAll(".protocol-cell");

      gsap.fromTo(
        cells ?? [],
        {
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.55,
          stagger: {
            each: 0.05,
            from: "start",
            grid: [2, 6],
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      // ── Icons: pop in after cell reveals ──
      const icons = gridRef.current?.querySelectorAll(".protocol-icon");

      gsap.fromTo(
        icons ?? [],
        { opacity: 0, scale: 0.4, rotate: -15 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.4,
          stagger: {
            each: 0.05,
            from: "start",
            grid: [2, 6],
          },
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
          delay: 0.3,
        },
      );

      // ── Scan line effect across the grid on enter ──
      const scanLine = document.createElement("div");
      scanLine.style.cssText = `
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--color-primary, #6366f1), transparent);
        pointer-events: none;
        z-index: 10;
        opacity: 0;
      `;
      gridRef.current?.style.setProperty("position", "relative");
      gridRef.current?.appendChild(scanLine);

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const gridH = gridRef.current?.offsetHeight ?? 400;
          gsap.fromTo(
            scanLine,
            { top: 0, opacity: 0.8 },
            { top: gridH, opacity: 0, duration: 1.2, ease: "power1.inOut" },
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black mt-24 py-20 text-white">
      <div className="container">
        <p
          ref={labelRef}
          className="text-primary text-xs tracking-widest mb-4 opacity-0"
        >
          // IOT & PROTOCOL COMPATIBILITY
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2
            ref={headingRef}
            className="text-4xl font-semibold font-montserrat max-w-xl leading-tight"
          >
            WORKS WITH EVERY STANDARD YOU SPECIFY
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-6">
          {protocols.map((item, index) => (
            <div
              key={index}
              className="protocol-cell p-6 border border-white/10 hover:bg-white/5 transition-colors group opacity-0"
            >
              <div className="protocol-icon w-14 h-14 mb-4 opacity-0">
                <Image
                  width={56}
                  height={56}
                  src={`/home/icons/${item.img}.png`}
                  alt={item.img}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-xs text-white/50 group-hover:text-white/70 leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
