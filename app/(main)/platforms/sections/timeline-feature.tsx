"use client";
import * as Icons from "lucide-react";
import { useRef, useEffect, useState } from "react";

type SubCard = {
  icon: string;
  label: string;
};

type FeatureItem = {
  title: string;
  body: string;
  subCards?: SubCard[];
  closing?: string;
};

type TimelineFeatureSectionProps = {
  heading: string;
  features: FeatureItem[];
};

const TimelineFeatureSection = ({
  heading,
  features,
}: TimelineFeatureSectionProps) => {
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, top: 0, height: 0 });

  useEffect(() => {
    const updateLine = () => {
      const first = dotRefs.current[0];
      const last = dotRefs.current[features.length - 1];
      const container = containerRef.current;
      if (!first || !last || !container) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      setLineStyle({
        left: firstRect.left - containerRect.left + firstRect.width / 2,
        top: first.offsetTop + firstRect.height / 2,
        height: lastRect.top - firstRect.top,
      });
    };

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(updateLine);
    });
    const timer = setTimeout(updateLine, 300);

    window.addEventListener("resize", updateLine);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("resize", updateLine);
    };
  }, [features]);

  return (
    <section className="mt-20">
      <div>
        <h2 className="text-3xl text-center lg:text-start container md:text-3xl font-semibold font-montserrat uppercase tracking-wide text-[#1a1a1a] mb-12">
          {heading}
        </h2>

        <div className="bg-[#F7FAFF]">
          <div className="flex flex-col container relative" ref={containerRef}>
            {/* Vertical line */}
            <div
              className="absolute w-px bg-gray-300 pointer-events-none z-0"
              style={{
                left: `${lineStyle.left}px`,
                top: `${lineStyle.top}px`,
                height: `${lineStyle.height}px`,
              }}
            />

            {features.map((feature, i) => (
              <div
                key={i}
                className="border-b border-gray-100 last:border-none py-8 md:py-10"
              >
                {/* Mobile: dot + title in a row, Desktop: 3-col grid */}
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr] gap-x-4 md:gap-x-6 gap-y-3 items-start">
                  {/* Mobile only: dot (shows left of title on mobile) */}
                  <div className="flex md:hidden items-start justify-center pt-1 relative z-10">
                    <div
                      ref={(el) => {
                        dotRefs.current[i] = el;
                      }}
                      className="w-3 h-3 rounded-full bg-primary shrink-0"
                    />
                  </div>

                  {/* Title — full width on mobile, right-aligned on desktop */}
                  <div className="md:text-right md:pr-4">
                    <p className="text-base md:text-sm font-semibold md:font-medium text-[#1a1a1a] leading-snug">
                      {feature.title}
                    </p>
                  </div>

                  {/* Desktop only: dot (center column) */}
                  <div className="hidden md:flex items-start justify-center pt-1 relative z-10">
                    <div
                      ref={(el) => {
                        dotRefs.current[i] = el ?? dotRefs.current[i];
                      }}
                      className="w-3 h-3 rounded-full bg-primary shrink-0"
                    />
                  </div>

                  {/* Content — spans full width on mobile */}
                  <div className="col-span-2 md:col-span-1 flex flex-col gap-4 pl-7 md:pl-0">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.body}
                    </p>

                    {feature.subCards && feature.subCards.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {feature.subCards.map((card, j) => {
                          const Icon = (
                            Icons as unknown as Record<
                              string,
                              React.ComponentType<{
                                size?: number;
                                className?: string;
                              }>
                            >
                          )[card.icon];
                          return (
                            <div
                              key={j}
                              className="border border-gray-200 p-3 md:p-4 flex flex-col items-center gap-2 text-center"
                            >
                              {Icon && (
                                <Icon size={18} className="text-[#4f46e5]" />
                              )}
                              <p className="text-xs text-gray-500">
                                {card.label}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {feature.closing && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.closing}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineFeatureSection;
