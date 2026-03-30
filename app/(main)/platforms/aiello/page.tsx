import HeroSection from "../../solutions/sections/hero-section";
import Info from "../sections/info";
import TimelineFeatureSection from "../sections/timeline-feature";
import {
  Info as Information,
  ConciergeBell,
  Tablet,
  BellRing,
} from "lucide-react";
import ProvenGridSection from "../sections/provengrid";
import PlatformSolutionsSection from "../sections/platform-solution";
import DarkFeatureSection from "../sections/dark-feature-section";
import HowItWorksSection from "../sections/networkMap";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/platforms/aiello/banner-2.png"}
        title={"Aiello"}
        desc={"AI Voice Concierge Platform"}
      />
      <Info
        tagline="Intelligent Guest Interaction for Modern Hospitality"
        body={[
          "ME Universal introduces Aiello, an advanced AI-powered Voice Concierge platform designed to transform how guests interact with hospitality environments.",
          "Instead of relying on traditional phone-based guest services or manual concierge interactions, Aiello enables guests to communicate naturally with their room using voice commands to access services, information, and room controls instantly.",
        ]}
        ctaLabel="Speak to an Expert"
        ctaHref="#contact"
      />
      <TimelineFeatureSection
        heading="Why Aiello for your Hospitality Environment?"
        features={[
          {
            title: "AI-Powered Guest Interaction",
            body: "Aiello enables guests to interact with hotel rooms and services through natural voice commands. The platform allows guests to request services, access hotel information, and control room functions without needing to contact the front desk.",
          },
          {
            title: "Smart Service Automation",
            body: "By connecting voice interaction with hotel systems and IoT devices, Aiello enables automated service responses and streamlined operations.",
            subCards: [
              { icon: "ConciergeBell", label: "Guest service requests" },
              { icon: "Tablet", label: "Room control commands" },
              { icon: "Information", label: "Information assistance" },
              {
                icon: "BellRing",
                label: "Service notifications and reminders",
              },
            ],
            closing:
              "This enables faster service delivery while improving operational efficiency for hospitality teams.",
          },
        ]}
      />
      <HowItWorksSection
        heading="How It Works"
        subheading="Aiello integrates AI voice recognition technology with hotel IoT systems and hospitality service platforms."
        hubLabel="Aiello platform"
        hubDesc="Central intelligence hub"
        centerLabel="What Aiello Manages"
        items={[
          {
            label: "Guest voice commands",
            desc: "Hands-free interaction for seamless room and service control",
          },
          {
            label: "Room automation controls",
            desc: "Control lighting, climate, and devices through a unified interface",
          },
          {
            label: "Hotel service requests",
            desc: "Request housekeeping, dining, and concierge services instantly",
          },
          {
            label: "Information assistance",
            desc: "Access hotel services, local information, and support on demand",
          },
          {
            label: "Multilingual guest interaction",
            desc: "Support for multiple languages to enhance guest experience",
          },
        ]}
      />
      <DarkFeatureSection
        label="Aiello Management Platform"
        body="The Aiello digital ecosystem functions as a centralized command center that bridges the gap between natural guest interactions and back-of-house hospitality operations. This intuitive interface allows hotel administrators to orchestrate complex service workflows while gaining real-time visibility into guest preferences and room automation performance across the entire property. By consolidating multilingual voice data and IoT controls into a single streamlined dashboard, it empowers hospitality teams to deliver high-touch service at scale while maintaining peak operational efficiency."
        cards={[
          { num: "01", desc: "Service request monitoring" },
          { num: "02", desc: "Voice interaction management" },
          { num: "03", desc: "System configuration and customization" },
        ]}
      />
      <ProvenGridSection
        heading=" Proven Across Premium Commercial Environments"
        topRow={[
          {
            src: "/platforms/aiello/hotels.jpg",
            alt: "Corporate office",
            label: "Luxury Hotels & Resorts",
          },
          {
            src: "/platforms/aiello/hostpital.jpg",
            alt: "Healthcare",
            label: "Business Hotels & Serviced Apartments",
          },
          {
            src: "/platforms/aiello/boutique.jpg",
            alt: "High performance",
            label: "Boutique Hospitality Properties",
          },
        ]}
        bottomRow={[
          {
            src: "/platforms/aiello/residential.jpg",
            alt: "Laboratory",
            label: "High-End Residential Serviced Residences",
          },
          {
            src: "/platforms/aiello/smart-guest-room.webp",
            alt: "Institutional",
            label: "Hospitality Suites & Smart Guest Rooms",
          },
          {
            src: "/platforms/aiello/smart-hotels.jpg",
            alt: "Mixed use",
            label: "Integrated Smart Hotel Developments",
          },
        ]}
      />
      <PlatformSolutionsSection
        heading="Platform Solutions"
        subheading="Aiello is structured into specialized hospitality voice service modules:"
        image="/platforms/aiello/voice-changer.jpg"
        imageAlt="Modern building architecture"
        solutions={[
          {
            title: "Aiello Voice Concierge",
            desc: "AI-powered voice assistant enabling guests to request services and interact with their room through natural speech.",
          },
          {
            title: "Aiello Smart Room Control",
            desc: "Voice-enabled control of lighting, climate, and connected room devices for a seamless in-room experience.",
          },
          {
            title: "Aiello Guest Service Assistant",
            desc: "Allows guests to request housekeeping, room service, and concierge assistance using voice commands.",
          },
          {
            title: "Aiello Multilingual Voice Interaction",
            desc: "Supports multiple languages for convenient communication with international guests.",
          },
          {
            title: "Aiello Hospitality Integration",
            desc: "Integrates with hotel service platforms to streamline operations and enhance guest service management.",
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
