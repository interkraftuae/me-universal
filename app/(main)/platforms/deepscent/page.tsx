import HeroSection from "../../solutions/sections/hero-section";
import Info from "../sections/info";
import TimelineFeatureSection from "../sections/timeline-feature";
import { SlidersHorizontal, Clock, Smartphone, Network } from "lucide-react";
import ProvenGridSection from "../sections/provengrid";
import PlatformSolutionsSection from "../sections/platform-solution";
import DarkFeatureSection from "../sections/dark-feature-section";
import HowItWorksSection from "../sections/networkMap";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/platforms/deepscent/banner.webp"}
        title={"Deepscent"}
        desc={"AI Fragrance Intelligence Platform"}
      />
      <Info
        tagline="Transform Spaces Through Intelligent Scent"
        body={[
          "ME Universal introduces Deepscent, an AI-powered digital fragrance platform designed to create controlled scent environments across hospitality, retail, commercial, and residential spaces.",
          "Instead of relying on traditional air fresheners or manual scenting methods, Deepscent uses smart AI fragrance devices and programmable scent diffusion to deliver consistent and precisely managed fragrance experiences, helping businesses enhance atmosphere, reinforce brand identity, and improve customer experience.",
        ]}
        ctaLabel="Speak to an Expert"
        ctaHref="#contact"
      />
      <TimelineFeatureSection
        heading="Why Deepscent for your Commercial Space?"
        features={[
          {
            title: "AI-Powered Digital Fragrance System",
            body: "Deepscent uses AI-enabled fragrance control and IoT-connected diffusion devices to deliver consistent scent experiences across indoor environments. The system ensures fragrance is distributed evenly throughout the space, maintaining a pleasant atmosphere without overwhelming occupants or visitors.",
          },
          {
            title: "Smart & Programmable Scent Control",
            body: "The platform allows organizations to manage scent environments with precision through centralized digital control. ",
            subCards: [
              {
                icon: "SlidersHorizontal",
                label: "Fragrance intensity control",
              },
              { icon: "Clock", label: "Scheduled scent programs" },
              { icon: "Smartphone", label: "Remote device management" },
              { icon: "Network", label: "Multi-zone scent distribution" },
            ],
            closing:
              "This ensures fragrance delivery remains consistent, subtle, and aligned with the brand identity and purpose of the space",
          },
        ]}
      />
      <HowItWorksSection
        heading="How It Works"
        subheading="Deepscent integrates IoT fragrance diffusion devices with a centralized AI-powered scent management platform."
        hubLabel="Deepscent platform"
        hubDesc="Central intelligence hub"
        centerLabel="What Deepscent Manages"
        items={[
          {
            label: "Fragrance diffusion devices",
            desc: "Advanced systems for consistent and controlled scent delivery",
          },
          {
            label: "Scent intensity and coverage",
            desc: "Adjustable diffusion levels for optimal spatial coverage",
          },
          {
            label: "Multi-zone scent environments",
            desc: "Independent fragrance control across multiple areas",
          },
          {
            label: "Automated fragrance schedules",
            desc: "Time-based scent programs for dynamic environments",
          },
          {
            label: "Centralized fragrance management",
            desc: "Unified control and monitoring across all scent systems",
          },
        ]}
      />
      <DarkFeatureSection
        label="Deepscent Digital Platform"
        body="The Deepscent digital ecosystem provides a sophisticated command center that allows facility teams to oversee their entire sensory infrastructure from a single pane of glass. This intuitive interface bridges the gap between hardware and environment, enabling users to orchestrate complex scent profiles that adapt to shifting footfall and operational hours. By centralizing management, it ensures that your brand’s signature scent remains uniform across multiple floors or global locations through a streamlined, data-driven workflow."
        cards={[
          { num: "01", desc: "Remote device monitoring" },
          { num: "02", desc: "Scent scheduling and automation" },
          { num: "03", desc: "Fragrance program management" },
        ]}
      />
      <ProvenGridSection
        heading=" Proven Across Premium Commercial Environments"
        topRow={[
          {
            src: "/platforms/deepscent/luxury-hotels-and-hospitality-spaces.jpg",
            alt: "Corporate office",
            label: "Luxury Hotels & Hospitality Spaces",
          },
          {
            src: "/platforms/deepscent/retail-stores-and-shopping-malls.jpg",
            alt: "Healthcare",
            label: "Retail Stores & Shopping Malls",
          },
          {
            src: "/platforms/deepscent/corporate-offices-and-business-centers.webp",
            alt: "High performance",
            label: "Corporate Offices & Business Centers",
          },
        ]}
        bottomRow={[
          {
            src: "/platforms/deepscent/airports-and-transportation-terminals.jpg",
            alt: "Laboratory",
            label: "Airports & Transportation Terminals",
          },
          {
            src: "/platforms/deepscent/restaurants-cafés-and-lifestyle-venues.avif",
            alt: "Institutional",
            label: "Restaurants, Cafés & Lifestyle Venues",
          },
          {
            src: "/platforms/deepscent/luxury-residential-developments.webp",
            alt: "Mixed use",
            label: "Luxury Residential Developments",
          },
        ]}
      />
      <PlatformSolutionsSection
        heading="Platform Solutions"
        subheading="Deepscent is structured into specialized fragrance delivery solutions:"
        image="/platforms/deepscent/platforms-solutions.png"
        imageAlt="Modern building architecture"
        solutions={[
          {
            title: "Deepscent IoT Diffusion Devices",
            desc: "Advanced digital fragrance devices for consistent scent coverage across indoor environments.",
          },
          {
            title: "Deepscent AI Control System",
            desc: "AI-powered platform for automated scent diffusion, scheduling, and intensity control.",
          },
          {
            title: "Deepscent Signature Scent Program",
            desc: "Custom fragrance identities designed to reflect brand personality and enhance recognition.",
          },
          {
            title: "Deepscent Multi-Zone Scent Management",
            desc: "Independent fragrance control across multiple rooms, floors, and zones in large spaces.",
          },
          {
            title: "Deepscent Smart Scheduling",
            desc: "Automated scent programs that adapt to time, occupancy, and environmental conditions.",
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
