import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
const Logos = [
  {
    img: "google.png",
    title: "Inhouse Design & Development",
  },
  {
    img: "amazon.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "bankofamerica.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "cipla.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "honda.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "hp.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "kpmg.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "nestle.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "sap.jpg",
    title: "Inhouse Design & Development",
  },
  {
    img: "veolia.jpg",
    title: "Inhouse Design & Development",
  },
];
const firstRow = Logos.slice(0, Logos.length / 2);

const PartnerLogo = () => {
  return (
    <div className="my-16">
      <ImageMarquee />
    </div>
  );
};

const ReviewCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <figure
      className={cn(
        "relative flex items-center justify-center lg:h-20 h-20 w-44 lg:w-44 mx-6 cursor-pointer overflow-hidden",
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
