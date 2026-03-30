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
        img={"ai-powered-laundry/banner.png"}
        title={"Mirror TV Commercial Display Solutions"}
        desc={"Luxury Technology. Invisible Entertainment."}
      />
      <HeadTitle
        title={"Commercial & Hospitality Mirror TV Systems"}
        desc={[
          "ME Universal delivers premium Mirror TV solutions designed for luxury residences, hotels, offices, spas, retail environments, and high-end commercial spaces.",
          "In modern interior design, visible screens can disrupt the aesthetic flow of carefully curated environments. Traditional televisions often clash with refined interiors, especially in luxury hospitality and executive spaces where design and technology must coexist seamlessly.",
          "Our Mirror TV systems elegantly conceal high-definition displays behind specially engineered mirror glass. When switched off, the unit functions as a sophisticated mirror; when activated, it transforms into a vibrant digital display.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Decorative Framed Mirror TV",
            desc: "Luxury mirror TVs that blend seamlessly with elegant interiors",
            list: [
              "Stylishly conceal a television within a luxury framed mirror",
              "Wide range of handcrafted decorative frame options",
              "Frames sourced from premium European collections",
              "Transforms into a high-definition display when switched on",
              "Ideal for living rooms, hotel suites, executive lounges and reception spaces",
            ],
            img: "",
          },
          {
            title: "Frameless Mirror TV (Polished Edge Series)",
            desc: "Minimalist mirror TVs designed for modern and clean aesthetics",
            list: [
              "Minimalist Mirror TV designed for contemporary interiors",
              "Polished edge glass without visible frames",
              "Seamlessly integrates into walls, wardrobes or custom panels",
              "Maximum mirror glass size up to 3000mm × 2000mm",
              "Perfect for spas, bathrooms, luxury bedrooms and modern spaces",
            ],
            img: "",
          },
          {
            title: "Bespoke & Designer Mirror TV Installations",
            desc: "Custom-designed mirror TV solutions for premium and unique spaces",
            list: [
              "Custom-built Mirror TVs tailored to unique project requirements",
              "Supports custom sizes, finishes and architectural integrations",
              "Optional LED front-lit or back-lit lighting features",
              "Can be combined with decorative frames or custom furniture panels",
              "Ideal for luxury hospitality, retail displays, VIP lounges and designer interiors",
            ],
            img: "",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Aesthetic Preservation and Concealment",
            desc: "In premium hospitality and executive design, a blank black screen is often a visual intrusion. Our Dielectric Mirror Glass Technology allows technology to yield to architecture. By integrating high-definition displays behind specialized glass that offers perfect reflection, we ensure that the television only exists when it is needed. This modularity allows architects and interior designers to maintain a clean, uncluttered visual flow. Using the system integrates into the wall or furniture as a design element rather than a peripheral device.",
            image: "/features/architectural-integration.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Bespoke Architectural Scaling",
            desc: "Our systems are not limited by standard screen dimensions; they are defined by your project’s requirements. With glass panels available up to 3000mm x 2000mm, our Mirror TVs can serve as full-height architectural features in VIP lounges or expansive retail displays. The adaptability extends to lighting and finish, with options for front-lit or back-lit LED integration and various glass tints like Onyx Black. This flexibility ensures that developers can provide high-end entertainment experiences in unconventional spaces, such as bathrooms, wardrobes, or custom cabinetry without compromising the luxury finish of the interior. ",
            image: "/features/scalable-design.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike conventional televisions that dominate interior spaces, Mirror TVs combine advanced display technology with specialized mirror glass to create a dual-function design element."
        }
        lastRow={[
          {
            title: "Dielectric Mirror Glass Technology",
            desc: "Specialized mirror coating allows perfect reflection while enabling a clear TV display when activated.",
            image: "/tech/return-line.jpg",
          },
          {
            title: "Dual Function Display System",
            desc: "Operates as a mirror when switched off and a high-definition screen when powered on.",
            image: "/tech/low-noise.jpg",
          },
        ]}
        firstRow={[
          {
            title: "Glass Options",
            desc: "Standard dielectric mirror for balanced reflection and display clarity, or Onyx Black glass for high-gloss contemporary interiors.",
            image: "/tech/air-powered.jpg",
          },
          {
            title: "Custom Size Capability",
            desc: "Mirror glass panels available up to 3000mm x 2000mm for large architectural installations.",
            image: "/tech/inlet-design.jpg",
          },
          {
            title: "Lighting Integration",
            desc: "Optional front-lit or back-lit LED features for premium installations in spas, bathrooms and hospitality spaces.",
            image: "/tech/centralized.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Luxury Design & Seamless Technology Integration"
        description="Luxury interiors increasingly demand technology that integrates discreetly into architectural design."
        image="/sections/architect-corner.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our Mirror TV systems help architects, interior designers and developers create spaces that:"
        bullets={[
          "Maintain clean, uncluttered visual environments",
          "Seamlessly conceal technology without compromising entertainment performance",
          "Elevate luxury hospitality and residential interior aesthetics",
          "Maximize wall space with intelligent dual-function installations",
          "Deliver high-end technology experiences with minimal visual impact",
        ]}
        closing="We collaborate closely with architects, designers, and project teams to ensure Mirror TV installations align perfectly with interior concepts, furniture detailing, and architectural finishes."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
