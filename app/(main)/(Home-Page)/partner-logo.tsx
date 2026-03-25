import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
const Logos = [
  {
    img: "img-1.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-2.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-3.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-4.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-5.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-6.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-7.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-8.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-9.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-10.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-11.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-12.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-13.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-14.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-15.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-16.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "img-17.png",
    title: "Inhouse Design & Development",
  },
];
const firstRow = Logos.slice(0, Logos.length / 2);

const PartnerLogo = () => {
  return (
    <div className="mt-10 mb-12">
      <ImageMarquee />
    </div>
  );
};

const ReviewCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <figure
      className={cn(
        "relative flex items-center justify-center lg:h-auto w-44 lg:w-52  cursor-pointer overflow-hidden",
      )}
    >
      <img
        src={`/home/partner-logo/${img}`}
        alt={title}
        className="max-h-full max-w-full object-contain"
      />
    </figure>
  );
};
function ImageMarquee() {
  return (
    <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

export default PartnerLogo;
