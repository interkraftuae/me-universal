import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const images = [
  {
    img: "tech-team.avif",
    title: "In-House Design & Development",
  },
  {
    img: "in-house-design.jpg",
    title: "Manufacturing & Assembly Capabilities",
  },
  {
    img: "assembly.webp",
    title: "Energy-Efficient Building Technologies",
  },
  {
    img: "smart-home.jpg",
    title: "Certified Engineers & Technologists",
  },
];
const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);
const WhyChoose = () => {
  return (
    <div className=" mt-6 mb-18">
      <div className="">
        <h1 className="text-5xl max-w-4xl font-montserrat tracking-tight mb-3 text-center mx-auto">
          Why <span className="text-primary">Choose</span> US?
        </h1>
        <p className="max-w-4xl text-center mx-auto">
          ME Universal focuses on delivering integrated IoT and automation
          solutions for modern buildings, combining technical expertise with
          practical implementation.
        </p>
        <ImageMarquee />
      </div>
    </div>
  );
};

export default WhyChoose;

const ReviewCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="absolute size-full inset-0 bg-black/50" />
      <figcaption className="absolute top-1/2 -translate-y-1/2 left-1/2 text-white -translate-x-1/2 text-xl text-center font-medium ">
        {title}
      </figcaption>
      <img
        className="object-cover w-66 lg:w-110 aspect-square"
        alt={title}
        src={`/home/why-choose/${img}`}
      />
    </figure>
  );
};
function ImageMarquee() {
  return (
    <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
