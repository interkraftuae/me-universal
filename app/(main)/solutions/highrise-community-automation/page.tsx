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
        img={"/solutions/highrise-community-automation/banner.jpg"}
        title={" Highrise & Community Automation"}
        desc={"Smarter Living. Seamlessly Connected."}
      />
      <HeadTitle
        title={"Intelligent Automation for Modern Communities"}
        desc={[
          "ME Universal advanced Apartment Automation and Community Management Solutions are designed for modern residential complexes, gated communities, and luxury highrise developments.",
          "In modern apartment living, disconnected systems, manual operations, and fragmented management directly impact resident satisfaction, operational efficiency, and community experience. Managing lighting, climate, access, visitors, and shared facilities across multiple units without a unified platform creates unnecessary complexity for both residents and building management teams.",
          "Our solution replaces isolated devices and multiple apps with one seamless intelligent platform that connects apartments, residents, and community services, delivering comfort, control, and convenience without the complexity.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Apartment Automation",
            desc: "Smart home automation solutions for modern residential living",
            list: [
              "Designed for apartments, duplexes, and high-rise residential units",
              "Complete control of indoor lighting and ambience",
              "Climate and HVAC system management",
              "Curtains, shades, and motorized blind control",
              "Home appliance integration and automation",
              "Unified access and security control interface",
            ],
            img: "/solutions/highrise-community-automation/smart-home-automation-blog.webp",
          },
          {
            title: "Community Management",
            desc: "Integrated solutions for efficient residential community operations",
            list: [
              "Designed for gated communities and managed residential complexes",
              "Visitor and access management with audit trails",
              "Smart parcel notifications and delivery handling",
              "Common area booking and scheduling",
              "Community alerts and resident communication tools",
              "Remote facility monitoring and parking management",
            ],
            img: "/solutions/highrise-community-automation/smart-package.webp",
          },
          {
            title: "Building Management Hub",
            desc: "Centralized platform for property and facility management",
            list: [
              "Built for property managers and facility teams",
              "Centralized dashboard for complete building oversight",
              "Facility usage insights and automated task management",
              "Real-time alerts for security and community services",
              "Integrated communication for residents and administrators",
            ],
            img: "/solutions/highrise-community-automation/building-management-hub.webp",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Unified Unit-to-Community Architecture",
            desc: "Our systems are designed to bridge the gap between private luxury and communal efficiency. We provide a single, modular backbone that scales from individual apartment automation controlling lighting, climate, and shades to the broader highrise infrastructure. This integration allows architects and developers to offer a cohesive digital experience where a resident’s smart home interface connects directly to community services like visitor management and amenity booking. By consolidating these functions into one interoperable platform, we eliminate 'app fatigue'.",
            image:
              "/solutions/highrise-community-automation/unified-unit-to-community-architecture.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Scalable Management for Modern Developments",
            desc: "Whether you are developing a boutique residential tower or a sprawling gated community, our platform adapts to the specific operational density of the project. The Building Management Hub provides facility teams with a centralized dashboard to oversee security, parking, and parcel deliveries without intruding on resident privacy. For developers, this modularity means the system can be deployed in phases, growing as the community expands. This approach not only enhances the day-to-day resident experience but also significantly boosts the long-term asset value.",
            image:
              "/solutions/highrise-community-automation/scalable-management-for-modern-developments.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Smart community platforms connect residential units, shared amenities, and building services through a unified digital ecosystem."
        }
        lastRow={[
          {
            title: "Unified Smart Integration Platform",
            desc: "Connects devices, sensors, and services across residential units and common areas.",
            image:
              "/solutions/highrise-community-automation/Unified Smart Integration Platform.jpg",
          },
          {
            title: "Scenario Automation",
            desc: "Predefined scenes automate lighting, AC, curtains, and other connected systems.",
            image:
              "/solutions/highrise-community-automation/Scenario-Automation.jpg",
          },
        ]}
        firstRow={[
          {
            title: "Remote Access & Monitoring",
            desc: "Residents and management can control and monitor systems through mobile apps and control panels.",
            image:
              "/solutions/highrise-community-automation/remote-access-and-monitoring.webp",
          },
          {
            title: "Intelligent Scheduling",
            desc: "Automated schedules optimize energy usage across apartments and shared spaces.",
            image:
              "/solutions/highrise-community-automation/intelligent-automation.jpg",
          },
          {
            title: "Community Management Dashboard",
            desc: "Centralized platform for visitor logs, access monitoring, facility management, and resident communication",
            image:
              "/solutions/highrise-community-automation/community-dashboard.png",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter, More Liveable Residential Development"
        description="Integrated automation is becoming a defining feature of premium residential projects."
        image="/solutions/highrise-community-automation/platform-solutions.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our solutions support architects, interior consultants, and property developers in creating communities that:"
        bullets={[
          "Deliver a seamless resident experience across private units and shared spaces",
          "Reduce operational overhead through centralized building management",
          "Enhance property value with fully integrated smart home and community features",
          "Improve safety, security,, and access control across all zones",
          "Scale efficiently from single towers to large gated community developments",
        ]}
        closing="We work closely with project teams to ensure the automation platform aligns with architectural intent, unit layouts, and the overall residential experience strategy."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
