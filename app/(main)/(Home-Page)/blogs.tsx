"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
}

export default function NewsAndContact() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data.blogs.slice(0, 6));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Run animations after blogs load
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      // ── Header ──
      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "overflow-hidden inline-block",
      });

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
            stagger: 0.06,
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

      // ── Cards stagger in ──
      const cards = carouselRef.current?.querySelectorAll(".blog-card");
      gsap.fromTo(
        cards ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);

  return (
    <section ref={sectionRef} className="mt-14">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              ref={labelRef}
              className="text-primary text-xs tracking-widest mb-3 opacity-0"
            >
              // INSIGHTS
            </p>
            <h2
              ref={headingRef}
              className="text-4xl font-semibold font-montserrat tracking-wide"
            >
              LATEST NEWS & ARTICLES
            </h2>
          </div>
          <p
            ref={subRef}
            className="text-gray-500 max-w-sm text-sm leading-relaxed opacity-0"
          >
            Stay updated with the latest insights on smart building
            technologies, automation systems, and sustainable infrastructure
            solutions.
          </p>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="mb-28">
          {loading ? (
            /* Skeleton */
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="w-full h-56 bg-gray-100 rounded mb-4" />
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <div className="flex items-center justify-end gap-2 mb-6">
                <CarouselPrevious className="static translate-y-0 rounded-none border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-colors" />
                <CarouselNext className="static translate-y-0 rounded-none border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-colors" />
              </div>

              <CarouselContent className="-ml-4 md:-ml-6">
                {blogs.map((blog) => (
                  <CarouselItem
                    key={blog.id}
                    className="pl-4 md:pl-6 basis-[85%] sm:basis-[60%] md:basis-1/3"
                  >
                    <Link
                      href={`/blogs/${blog.slugTitle}`}
                      className="blog-card group flex flex-col opacity-0"
                    >
                      {/* Image */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <img
                          src={`/api/uploads/${blog.image}`}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-primary text-white text-[10px] px-2 py-1 tracking-widest uppercase">
                          {blog.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-4 border-b border-gray-100 pb-4 flex-1">
                        <h3 className="font-semibold text-base line-clamp-2 leading-snug">
                          {blog.title}
                        </h3>
                      </div>

                      <span className="mt-4 text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                        Read Article →
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
