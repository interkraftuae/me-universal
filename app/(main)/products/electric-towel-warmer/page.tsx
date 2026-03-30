import HeroSection from "../../solutions/sections/hero-section";
import HeadTitle from "../../solutions/sections/headTitle";
import ProductRange from "../sections/productRange";
import NumberedCardsSection from "../sections/cardSelection";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/products/towel-warmer/banner.png"}
        title={" Electric Towel Warmers"}
        desc={"Bathroom Comfort & Hygiene Solutions"}
      />
      <HeadTitle
        title={"Smart Heating Solutions for Modern Bathrooms"}
        desc={[
          "ME Universal supplies advanced customised digital electric towel warmers designed to enhance comfort, hygiene, and everyday bathroom convenience.",
          "Developed for residential, hospitality, and premium commercial environments, these systems gently heat towels while helping maintain dryness and reduce moisture buildup in bathroom spaces. ",
          "Digital Electric towel warmers are widely used across luxury homes, hotels, serviced apartments, wellness facilities, and premium residential developments where comfort and functionality are essential.",
          "Modern designs, efficient heating technology, and durable construction allow these systems to integrate seamlessly into contemporary bathrooms while supporting long-term performance and energy efficiency.",
        ]}
      />
      <ProductRange
        products={[
          {
            label: "Wall Mounted Electric Towel Warmer",
            img: "/products/towel-warmer/wall-mounted-electric-towel-warmer.avif",
            lists: [
              "Elegant wall-mounted towel warmer designed for modern bathroom interiors",
              "Provides consistent heating for improved towel comfort",
              "Suitable for residential and hospitality bathrooms",
            ],
          },
          {
            label: "Digital Temperature Controlled Towel Warmer",
            img: "/products/towel-warmer/temp-control.png",
            lists: [
              "Integrated digital control for adjustable heating settings",
              "Maintains consistent temperature for reliable towel warming",
              "Ideal for luxury residential and hotel environments",
            ],
          },
          {
            label: "Premium Stainless Steel Towel Warmer",
            img: "/products/towel-warmer/stainless-steel.webp",
            lists: [
              "Corrosion-resistant stainless steel construction for durability",
              "Provides efficient heat distribution across multiple towel bars",
              "Designed for long-term bathroom installations",
            ],
          },
          {
            label: "Compact Electric Towel Warmer",
            img: "/products/towel-warmer/compact-towel.webp",
            lists: [
              "Space-efficient design suitable for smaller bathrooms",
              "Provides gentle and energy-efficient towel heating",
              "Ideal for apartments, guest bathrooms, and hospitality suites",
            ],
          },
        ]}
      />
      <NumberedCardsSection
        title="Electric Towel Warmers for Everyday Bathroom Comfort"
        cards={[
          {
            num: "01",
            desc: "Help keep towels warm, dry, and ready for use.",
          },
          { num: "02", desc: "Improve everyday bathroom comfort and hygiene." },
          { num: "03", desc: "Designed to complement modern interior spaces." },
          { num: "04", desc: "Built for reliable long-term performance." },
        ]}
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default Page;
