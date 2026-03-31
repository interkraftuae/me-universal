import HeroSection from "../sections/hero-section";
import HeadTitle from "../sections/headTitle";
import ProductRange from "../sections/product-range";
import Features from "../sections/features";
import FeatureHighlight from "../sections/highlight";
import TechnologyCorner from "../sections/techcorner";
import Form from "../../(Home-Page)/form";
const page = () => {
  return (
    <div>
      <HeroSection
        img={"/solutions/ai-powered-laundry/banner.png"}
        title={"AI Powered Laundry Collection System"}
        desc={"Simplify Laundry. Streamline Movement."}
      />
      <HeadTitle
        title={"Commercial & Residential Automated Laundry Transfer"}
        desc={[
          "ME Universal delivers advanced Air-Powered Laundry Collection Systems designed for Residential and Commercial spaces including villas, apartments, hotels, healthcare facilities, serviced residences, and high-performance buildings.",
          "In modern spaces operational efficiency and hygiene directly impact building performance, staff productivity, and occupant experience. Manual laundry handling across floors increases labor costs, clutter, cross-contamination risk, and inefficiency.",
          "Our system replaces traditional carts and baskets with a fully integrated air-powered transport network that quietly transfers laundry from designated inlet points to a centralized collection area - safely, discreetly, and efficiently.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Residential Laundry Collection System",
            desc: "Designed for villas, duplexes & multi-floor apartments",
            list: [
              "Wall or closet inlet points for easy access",
              "Transfers laundry directly to utility/laundry rooms",
              "Safe, quiet, and family-friendly operation",
              "Adds premium automation value to modern homes",
            ],
            img: "/solutions/ai-powered-laundry/residential-laundry.png",
          },
          {
            title: "Hospitality Laundry Collection System",
            desc: "Engineered for hotels, resorts & serviced apartments",
            list: [
              "Moves guest linens directly to centralized laundry areas",
              "Reduces housekeeping transport time",
              "Improves operational workflow efficiency",
              "Supports faster room turnaround",
            ],
            img: "/solutions/ai-powered-laundry/hospitality-laundry.webp",
          },
          {
            title: "Healthcare & Commercial Laundry System",
            desc: "Built for hospitals, clinics & large facilities",
            list: [
              "Minimizes manual handling of contaminated linen",
              "Improves hygiene control and infection management",
              "Heavy-duty performance for continuous operation",
              "Optimized for high-volume environments",
            ],
            img: "/solutions/ai-powered-laundry/healthcare-and-Commercial-.webp",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Smart Architectural Integration",
            desc: "Our air-powered transport networks are engineered to disappear into your building’s infrastructure. By utilizing smooth, anti-static piping that can be routed through wall cavities, ceilings, or service shafts, we eliminate the need for bulky laundry chutes and oversized service corridors. This allows architects and MEP consultants to reclaim valuable square footage while maintaining the aesthetic integrity of the space. Whether it is a luxury villa or a multi-story hotel, the system integrates seamlessly into the original architectural intent without requiring massive structural changes.",
            image:
              "/solutions/ai-powered-laundry/smart-architectural-integration.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Scalable & Mission-Specific Design",
            desc: "From single-point inlets in private residential closets to heavy-duty, high-volume networks in healthcare facilities, our modular technology adapts to your specific operational load. The system is designed to grow with your project allowing for additional discreet inlet points or even an Optional Return Line for clean linens. By automating the movement of laundry directly to centralized washer-feed areas, we minimize cross-floor traffic and elevator congestion, ensuring your facility operates at peak efficiency regardless of its size or complexity.",
            image: "/solutions/ai-powered-laundry/scalable-laundry.avif",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike conventional laundry handling methods that rely on manual movement, our system uses controlled pneumatic air transport technology."
        }
        lastRow={[
          {
            title: "Optional Return Line",
            desc: "Premium installations allow clean laundry to be returned to specific zones",
            image: "/solutions/ai-powered-laundry/laundry-return-line.jpg",
          },
          {
            title: "Low Noise & Energy Optimized",
            desc: "Quiet operation with controlled energy consumption for continuous use",
            image: "/solutions/ai-powered-laundry/low-noise-laundry.webp",
          },
        ]}
        firstRow={[
          {
            title: "Air-Powered Transfer System",
            desc: "Creates negative air pressure to move laundry swiftly through smooth, anti-static piping networks.",
            image: "/solutions/ai-powered-laundry/air-powered-transfer.jpg",
          },
          {
            title: "Discreet Inlet Design",
            desc: "Wall, ceiling, or closet-mounted inlets integrate seamlessly into architectural layouts",
            image: "/solutions/ai-powered-laundry/discreet-inlet-design.jpg",
          },
          {
            title: "Centralized Collection",
            desc: "All laundry is delivered directly to a designated collection or washer-feed area",
            image: "/solutions/ai-powered-laundry/centralized-collection.avif",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter, More Efficient Building Design"
        description="Efficient internal logistics is becoming a key part of modern building planning."
        image="/solutions/ai-powered-laundry/paltoform-solutions.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our systems support architects, MEP consultants, and developers in creating buildings that:"
        bullets={[
          "Reduce service corridor congestion",
          "Improve spatial efficiency and internal workflow",
          "Minimize cross-floor traffic and elevator use",
          "Enhance hygiene standards in residential and commercial projects",
          "Support long-term operational efficiency",
        ]}
        closing="We work collaboratively with project teams to ensure air quality solutions align with architectural intent, sustainability considerations, and long-term building performance."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
