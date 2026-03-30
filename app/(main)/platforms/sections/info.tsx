"use client";
import { PhoneCall } from "lucide-react";
type SplitIntroSectionProps = {
  tagline: string;
  body: string[];
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
};
const Info = ({
  tagline,
  body,
  ctaLabel,
  ctaHref = "#",
  onCtaClick,
}: SplitIntroSectionProps) => {
  return (
    <section className="mt-16">
      <div className="container">
        {/* TOP RIGHT TAGLINE + LINE */}
        <div className="flex items-center justify-end gap-4 mb-6">
          {/* Line */}
          <div className="flex-1 h-[1px] bg-primary/40" />

          {/* Tagline */}
          <p className="text-primary text-base md:text-lg font-medium whitespace-nowrap">
            {tagline}
          </p>
        </div>

        {/* BODY */}
        <div className="max-w-4xl">
          <div className="space-y-4">
            {body.map((item, idx) => (
              <p key={idx} className=" text-gray-700 leading-relaxed">
                {item}
              </p>
            ))}
          </div>

          {/* CTA */}
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 transition text-white text-xs font-medium tracking-widest uppercase px-5 py-3"
          >
            <PhoneCall size={14} />
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
