import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
const Logos = [
  { img: "amazon.png", title: "Amazon" },
  { img: "honda.png", title: "Honda" },
  { img: "hp.png", title: "Hewlett Packard" },
  { img: "veolia.png", title: "Veolia" },
  { img: "kotak.png", title: "Kotak" },
  { img: "damac.png", title: "DAMAC" },
  { img: "oracle.png", title: "Oracle" },
  { img: "cipla.png", title: "Cipla" },
  { img: "microsoft.png", title: "Microsoft" },
  { img: "bank-of-america.png", title: "Bank of America" },
  { img: "adobe.png", title: "Adobe" },
  { img: "uber.png", title: "Uber" },
  { img: "sap.png", title: "SAP" },
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
        "relative z-10 flex items-center justify-center lg:h-auto w-44 lg:w-40 transition-all duration-300 lg:mr-12 brightness-0 grayscale-100 hover:grayscale-0 hover:brightness-100 cursor-pointer overflow-hidden",
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
