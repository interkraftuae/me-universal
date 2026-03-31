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
        img={"/solutions/garbage-and-linen-chutes/banner.jpg"}
        title={"Garbage & Linen Chutes"}
        desc={"Efficient Waste & Linen Management for Modern Buildings"}
      />
      <HeadTitle
        title={" Commercial & Residential Waste & Linen Transfer "}
        desc={[
          "ME Universal delivers Garbage and Linen Chute Systems designed to simplify waste and linen management in residential and commercial developments including apartments, hospitality projects, healthcare facilities, and high-rise buildings.",
          "In modern developments, efficient waste handling and linen movement are critical for maintaining hygiene, operational efficiency, and organized building management. Traditional waste collection and manual linen transport can lead to cluttered service areas, inefficient workflows, and increased handling effort.",
          "Our chute systems provide a vertical transfer solution that allows waste or linen to move directly from designated floor inlets to centralized collection areas, improving building cleanliness and operational flow.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Residential Garbage & Linen Chute System",
            desc: "Designed for apartments, residential towers, and multi-floor housing developments",
            list: [
              "Allows residents to dispose waste through designated floor inlets",
              "Direct vertical transfer to centralized collection rooms",
              "Improves cleanliness and reduces corridor waste handling",
              "Supports organized waste management in residential buildings",
            ],
            img: "/solutions/garbage-and-linen-chutes/reesdential-chutels.png",
          },
          {
            title: "Hospitality Linen Chute System",
            desc: "Engineered for hotels, resorts, and serviced apartments",
            list: [
              "Allows staff to transfer used linen directly to laundry collection areas",
              "Reduces manual handling across floors",
              "Improves housekeeping efficiency and workflow",
              "Supports faster room servicing operations",
            ],
            img: "/solutions/garbage-and-linen-chutes/Hospitality-Linen-System.webp",
          },
          {
            title: "Healthcare & Commercial Chute System",
            desc: "Built for hospitals, clinics, and large commercial facilities",
            list: [
              "Allows controlled linen and waste transfer within the building",
              "Reduces movement of waste through public areas",
              "Improves internal logistics and service operations",
              "Designed for continuous use in high-traffic facilities",
            ],
            img: "/solutions/garbage-and-linen-chutes/healthcare-and-Commercial-Chute-System.png",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Precision-Engineered Vertical Integration",
            desc: "Our chute systems are designed to be sophisticated logistics networks. By establishing a dedicated vertical shaft through professional Duct Erection, we ensure that waste and linen transfer occurs entirely behind the scenes. This integration allows architects to reclaim service elevators and corridor space, as the system is built directly into the building's core. Whether it’s a high-rise residential tower or a compact hotel, our modular components including intake doors and discharge units are installed in coordination with the Electrical & Plumbing Works, ensuring a perfect fit.",
            image:
              "/solutions/garbage-and-linen-chutes/Precision-Engineered.webp",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Hygienic and Operational Fluidity",
            desc: "Adaptability in waste management means more than just a pipe; it’s about maintaining a clean, odor-free, and efficient building environment. Our systems are modularly designed to support Segregated Chute Concepts. This is particularly vital for healthcare and hospitality projects where minimizing cross-contamination is a priority. By automating the journey from floor inlet to the centralized collection room, we remove the 'human factor' from waste transport, ensuring that your building’s operational flow remains uninterrupted and hygienic at all times. ",
            image:
              "/solutions/garbage-and-linen-chutes/Hygienic-and-Operational-Fluidity.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike traditional waste handling methods that require manual transport across floors, chute systems provide a direct vertical transfer mechanism within the building."
        }
        lastRow={[
          {
            title: "Electrical & Plumbing Works",
            desc: "Electrical and plumbing preparations are completed according to project layouts and system requirements during installation.",
            image: "/solutions/garbage-and-linen-chutes/elecctrical-and-plumbing-work.png",
          },
          {
            title: "Chute Wall Erection",
            desc: "After installation works inside the shaft are completed, wall construction is finalized as per the project drawings and layouts.",
            image: "/solutions/garbage-and-linen-chutes/chute-wall-erection.webp",
          },
        ]}
        firstRow={[
          {
            title: "Segregated Chute Concept",
            desc: "Chute systems can support organized waste or linen transfer through dedicated inlets and shafts.",
            image: "/solutions/garbage-and-linen-chutes/segregated-chute-concept.jpg",
          },
          {
            title: "Chute System Components",
            desc: "The system consists of multiple structural components that ensure safe and efficient vertical movement from floor inlets to collection areas.",
            image: "/solutions/garbage-and-linen-chutes/Chute-System-Components.webp",
          },
          {
            title: " Duct Erection",
            desc: "Duct erection forms the starting point of chute installation and establishes the vertical shaft through which materials travel.",
            image: "/solutions/garbage-and-linen-chutes/Duct-Erection.webp",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter Building Service Design"
        description="Efficient waste and linen management is an important part of modern building infrastructure."
        image="/solutions/garbage-and-linen-chutes/platform-solutions.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our chute systems support architects, MEP consultants, and developers in creating buildings that:"
        bullets={[
          "Enable organized vertical waste and linen transfer through dedicated shafts",
          "Reduce movement of waste and laundry through corridors and elevators",
          "Support hygienic service management in high-occupancy buildings",
          "Optimize service floor planning and centralized collection areas",
          "Ensure efficient maintenance access and long-term operational reliability",
        ]}
        closing="We work closely with project teams to ensure the chute system aligns with architectural layouts, shaft planning, and overall building service design."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
