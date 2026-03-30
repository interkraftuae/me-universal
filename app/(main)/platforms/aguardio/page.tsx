import HeroSection from "../../solutions/sections/hero-section";
import Info from "../sections/info";
import TimelineFeatureSection from "../sections/timeline-feature";
import { Link2, Workflow, Smartphone, BellRing } from "lucide-react";
import ProvenGridSection from "../sections/provengrid";
import PlatformSolutionsSection from "../sections/platform-solution";
import DarkFeatureSection from "../sections/dark-feature-section";
import HowItWorksSection from "../sections/networkMap";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/platforms/aguardio/banner.jpg"}
        title={"Aguardio"}
        desc={"Intelligent Water Conservation Platform"}
      />
      <Info
        tagline="See, Understand, and Reduce Water Usage"
        body={[
          "ME Universal introduces Aguardio, an intelligent water conservation platform designed to help buildings monitor, understand, and reduce water consumption through smart ai technology and behavioral insights.",
          "Instead of relying on conventional water management methods that lack visibility, Aguardio provides real-time monitoring and actionable insights that reveal how water is used across a building.",
          "By combining AI water monitoring, real-time feedback, and behavioral nudging technology, Aguardio helps organizations reduce water waste, improve sustainability performance, and manage water usage more efficiently.",
        ]}
        ctaLabel="Speak to an Expert"
        ctaHref="#contact"
      />
      <TimelineFeatureSection
        heading=" Why Aguardio for your Building?"
        features={[
          {
            title: " Real-Time Water Visibility",
            body: "Aguardio continuously monitors water usage across fixtures and spaces, providing building operators with clear insights into consumption patterns. This real-time visibility helps identify inefficiencies, highlight unusual usage behavior, and support more informed water management decisions.",
          },
          {
            title: " Behavioral Water Conservation",
            body: "Unlike conventional monitoring tools, Aguardio combines technology with behavioral insights to encourage more responsible water use. Through visual feedback and subtle nudges, the system encourages occupants to shorten water usage and reduce unnecessary consumption, helping organizations achieve measurable sustainability improvements.",
            subCards: [
              { icon: "Link2", label: "Hospitality system integration" },
              { icon: "Workflow", label: "Automated service workflows" },
              { icon: "Smartphone", label: "Connected room ecosystem" },
              { icon: "BellRing", label: "Real-time service updates" },
            ],
            closing:
              "This results in improved operational efficiency, better resource management, and a consistent guest experience across the property.",
          },
        ]}
      />
      <HowItWorksSection
        heading="How It Works"
        subheading="Aguardio integrates smart water monitoring devices with an intelligent analytics platform."
        hubLabel="Aguardio platform"
        hubDesc="Central intelligence hub"
        centerLabel=" What Aguardio Monitors"
        items={[
          {
            label: "Water usage patterns",
            desc: "Analyze consumption trends across fixtures and spaces",
          },
          {
            label: "Shower and fixture consumption",
            desc: "Track water usage at individual fixtures and shower points",
          },
          {
            label: "Behavioral usage trends",
            desc: "Understand occupant behavior and usage habits over time",
          },
          {
            label: "Water waste and inefficiencies",
            desc: "Identify excessive usage and areas of potential savings",
          },
          {
            label: "Building-level water performance data",
            desc: "Monitor overall consumption and efficiency across the property",
          },
        ]}
      />
      <DarkFeatureSection
        label="Aguardio Digital Platform"
        body="The Aguardio digital ecosystem serves as a comprehensive sustainability dashboard that converts raw consumption data into clear, actionable strategies for water conservation. This intuitive platform allows facility managers to bridge the gap between complex utility monitoring and real-world occupant behavior, fostering a culture of responsibility through data-driven transparency. By centralizing multi-fixture performance and behavioral trends into a single interface, it empowers organizations to meet rigorous environmental standards while streamlining the management of water assets across diverse property portfolios."
        cards={[
          { num: "01", desc: "Real-time water usage insights" },
          { num: "02", desc: "Usage trend analysis" },
          { num: "03", desc: "Water conservation performance tracking" },
        ]}
      />
      <ProvenGridSection
        heading=" Proven Across Sustainable Building Environments"
        topRow={[
          {
            src: "/platforms/aguardio/hotels.jpg",
            alt: "Corporate office",
            label: "Hotels & Hospitality Facilities",
          },
          {
            src: "/platforms/aguardio/office-building.jpg",
            alt: "Healthcare",
            label: "Corporate & Commercial Office Buildings",
          },
          {
            src: "/platforms/aguardio/residential.jpeg",
            alt: "High performance",
            label: "Residential Developments & Apartments",
          },
        ]}
        bottomRow={[
          {
            src: "/platforms/aguardio/swimming-pool.jpg",
            alt: "Laboratory",
            label: "Educational Campuses & Institutions",
          },
          {
            src: "/platforms/aguardio/fitness.avif",
            alt: "Institutional",
            label: "Fitness Centers & Sports Facilities",
          },
          {
            src: "/platforms/aguardio/green-building.jpg",
            alt: "Mixed use",
            label: "Sustainable & Green Building Projects",
          },
        ]}
      />
      <PlatformSolutionsSection
        heading="Platform Solutions"
        subheading="Aguardio is structured into specialized water conservation service modules:"
        image="/platforms/aguardio/water-management.jpg"
        imageAlt="Modern building architecture"
        solutions={[
          {
            title: "Aguardio Smart Water Monitoring",
            desc: "IoT-enabled devices that track water usage and provide real-time consumption visibility.",
          },
          {
            title: "Aguardio Behavioral Nudging",
            desc: "Visual feedback technology that encourages occupants to reduce water usage and adopt sustainable habits.",
          },
          {
            title: "Aguardio Leak & Waste Detection",
            desc: "Detects abnormal usage patterns to identify leaks and prevent water waste.",
          },
          {
            title: "Aguardio Sustainability Insights",
            desc: "Delivers analytics to improve water conservation performance and sustainability outcomes.",
          },
          {
            title: "Aguardio Building Water Analytics",
            desc: "Centralized platform for analyzing building-wide water usage and supporting sustainability reporting.",
          },
        ]}
      />

      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default Page;
