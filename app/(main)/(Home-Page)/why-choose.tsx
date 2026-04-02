import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const images = [
  {
    img: "Inhouse-Manufacturing-Facility.jpeg",
    title: "Inhouse Manufacturing Facility",
  },
  {
    img: "Trained-Technicians.jpeg",
    title: "Trained Technicians",
  },
  {
    img: "Certified-Engineers.jpeg",
    title: "Certified- Engineers",
  },
  {
    img: "Inhouse-Design-Engineering.jpeg",
    title: "Inhouse Design Engineering",
  },
  {
    img: "Integration-and-Testing.jpeg",
    title: "Integration & Testing",
  },
  {
    img: "Inhouse-Fabrication.jpeg",
    title: "Inhouse Fabrication",
  },
];

const WhyChoose = () => {
  return (
    <div className=" mt-20">
      <ImageMarquee />
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
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {images.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
