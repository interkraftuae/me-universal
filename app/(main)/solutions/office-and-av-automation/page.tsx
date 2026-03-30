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
        title={"Office & AV Automation Solutions"}
        desc={"Intelligent Control for Modern Workspaces"}
      />
      <HeadTitle
        title={" Commercial Office & Audio-Visual Automation Systems"}
        desc={[
          "ME Universal introduces  Office & AV Automation Solutions designed to simplify the management of technology in commercial environments such as offices, conference rooms, classrooms, and collaborative workspaces.",
          "Modern work environments rely on multiple systems including displays, projectors, lighting, audio equipment, and presentation technologies. Managing these systems individually can be complex and inefficient during meetings and presentations.",
          "Our automation solutions bring these systems together through centralized control, allowing users to manage multiple technologies through a single interface such as a touchpanel, remote control, smartphone, or tablet.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Conference Room Control Systems",
            desc: "Integrated control solutions for modern meeting rooms and boardrooms",
            list: [
              "Designed for meeting rooms and boardrooms",
              "Control multiple room technologies from a single interface",
              "Prepare meeting environments at the touch of a button",
              "Automate lighting, projection, screens, and audio settings",
              "Simplifies setup and operation of meetings and presentations",
            ],
            img: "",
          },
          {
            title: "Audio-Visual System Control",
            desc: "Centralized control of AV equipment for seamless presentations",
            list: [
              "Centralized control of audio and video equipment",
              "Supports displays, projectors, and AV sources",
              "Enables smooth management of AV technologies during presentations",
              "Reduces complexity of operating multiple AV systems",
              "Designed for professional commercial environments",
            ],
            img: "",
          },
          {
            title: "Centralized Device Control Platforms",
            desc: "Unified control platforms for managing multiple connected technologies",
            list: [
              "Control via remotes, touch panels, mobile devices, or tablets",
              "Operate multiple technologies through a single interface",
              "Consistent control experience across rooms and spaces",
              "Supports automation of various technology functions",
              "Built for reliable commercial operation",
            ],
            img: "",
          },
          {
            title: "Commercial Automation Integration",
            desc: "Smart automation integration for coordinated technology environments",
            list: [
              "Integrates AV systems with other room technologies",
              "Coordinates lighting, displays, screens, and audio systems",
              "Simple and unified user control interface",
              "Enables synchronized operation of multiple technologies",
              "Ideal for offices, classrooms, and commercial facilities",
            ],
            img: "",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Intuitive Workspace Synergy",
            desc: "Modern boardrooms and classrooms shouldn't be defined by a clutter of remotes and cables. Our automation solutions are designed to disappear into the architectural fabric of the workspace, replacing complex manual setups with a single, streamlined interface. Whether it is a wall-mounted touchpanel or a mobile device, our technology integrates directly with your lighting, climate, and AV hardware. This modular approach allows architects to design clean, collaborative spaces where the technology from motorized screens to audio levels adjusts instantly to the task at hand with the touch of a single button.",
            image: "/features/architectural-integration.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Scalable & Reliable Enterprise Control",
            desc: "Our platforms are built for the rigors of professional environments, offering a consistent control experience across an entire facility. From small huddle rooms to massive multi-floor corporate headquarters, the system’s architecture is fully scalable and interoperable. By centralizing the management of displays, projectors, and audio equipment into a unified control platform, we reduce the burden on IT and facility management. This ensures that your office infrastructure remains adaptable to new presentation technologies and evolving workplace trends, providing a reliable foundation for long-term operational performance.",
            image: "/features/scalable-design.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike traditional setups where each device is operated separately, automation platforms bring technologies together under centralized command and control systems."
        }
        lastRow={[
          {
            title: "Centralized Control Systems",
            desc: "Users can manage displays, projectors, lighting, and audio equipment through a single control interface.",
            image: "/tech/return-line.jpg",
          },
          {
            title: "Touchpanel-Based Room Automation",
            desc: "Meeting rooms can be controlled through wall-mounted touchpanels or handheld controllers.",
            image: "/tech/low-noise.jpg",
          },
        ]}
        firstRow={[
          {
            title: " Mobile Device Integration",
            desc: "Control interfaces can also operate on smartphones and tablets for flexible system management.",
            image: "/tech/air-powered.jpg",
          },
          {
            title: " Reliable Commercial Automation",
            desc: "Designed for professional environments where dependable control of technology systems is essential.",
            image: "/tech/inlet-design.jpg",
          },
          {
            title: "Centralized Collection",
            desc: "All laundry is delivered directly to a designated collection or washer-feed area",
            image: "/tech/centralized.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Technology-Enabled Workplace Design"
        description="Modern commercial buildings rely on integrated technology systems to support efficient workplace operations."
        image="/sections/architect-corner.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our systems support architects, MEP consultants, and developers in creating buildings that:"
        bullets={[
          "Create intuitive meeting and presentation environments",
          "Simplify control of AV, lighting, and room technologies",
          "Enhance efficiency in workspace technology management",
          "Integrate seamlessly with modern office infrastructure",
          "Enable reliable and scalable automation for commercial spaces",
        ]}
        closing="We work closely with project teams to ensure the system aligns with intent, service planning, and overall performance strategy."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
