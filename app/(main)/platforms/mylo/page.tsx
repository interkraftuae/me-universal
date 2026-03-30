import HeroSection from "../../solutions/sections/hero-section";
import Info from "../sections/info";
import TimelineFeatureSection from "../sections/timeline-feature";
import {
  Activity,
  Droplet,
  AlertTriangle,
  BarChart2,
  Building2,
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
        img={"/platforms/mylo/banner-1.png"}
        title={"Mylo"}
        desc={"AI Pool Monitoring Platform"}
      />
      <Info
        tagline="Intelligent Safety for Swimming Pools"
        body={[
          "ME Universal provides Mylo, an AI-powered pool monitoring platform designed to improve safety around swimming pools, both commercial and residential, through continuous visual monitoring and intelligent detection.",
          "Traditional pool safety solutions such as fences, covers, or simple alarms cannot actively monitor swimmers or recognize dangerous situations in the water.",
          "Mylo uses AI-powered computer vision and camera monitoring technology to continuously observe pool activity and detect potential drowning incidents. When a risk is detected, the system triggers immediate alerts, allowing responsible individuals to respond quickly.",
        ]}
        ctaLabel="Speak to an Expert"
        ctaHref="#contact"
      />
      <TimelineFeatureSection
        heading=" Why Mylo for your Pool Environment?"
        features={[
          {
            title: "  AI-Based Drowning Detection",
            body: "Mylo uses computer vision and artificial intelligence to monitor swimmers and detect potential drowning situations. Unlike traditional motion-based alarms, the system visually analyzes activity in the pool and identifies when a swimmer may be in distress. This allows for more accurate and intelligent safety monitoring.",
          },
          {
            title: "Immediate Alert Notifications",
            body: "When Mylo detects a potential safety event, the system sends instant alerts to connected devices. These alerts notify caregivers or responsible individuals immediately so they can respond quickly to potential incidents, even if they are not directly watching the pool.",
            subCards: [
              { icon: "Activity", label: "Real-time water monitoring" },
              { icon: "Droplet", label: "Usage insights & patterns" },
              { icon: "AlertTriangle", label: "Leak & waste detection" },
              { icon: "BarChart2", label: "Sustainability analytics" },
              { icon: "Building2", label: "Building-wide water data" },
            ],
            closing:
              "This enables smarter water management, reduces waste, and supports long-term sustainability goals across the building.",
          },
        ]}
      />
      <HowItWorksSection
        heading="How It Works"
        subheading="Mylo combines AI-powered monitoring cameras with intelligent computer vision algorithms to continuously observe activity in and around the swimming pool."
        hubLabel="Mylo platform"
        hubDesc="Central intelligence hub"
        centerLabel=" What Aguardio Monitors"
        items={[
          {
            label: "Pool activity and swimmer presence",
            desc: "Monitor real-time activity and detect swimmer presence in the pool",
          },
          {
            label: "Movement patterns in the water",
            desc: "Analyze motion behavior to identify normal and irregular patterns",
          },
          {
            label: "Potential drowning incidents",
            desc: "Detect signs of distress and possible drowning situations",
          },
          {
            label: "Continuous visual monitoring",
            desc: "Enable uninterrupted surveillance of the entire pool area",
          },
        ]}
      />
      <DarkFeatureSection
        label=" Mylo Connected Monitoring"
        body="The Mylo digital ecosystem operates as a vigilant safety layer that bridges the gap between traditional pool hardware and proactive life-saving technology. This intelligent platform transforms high-resolution visual data into real-time security insights, allowing property managers and homeowners to oversee aquatic environments with unparalleled precision. By centralizing AI-driven detection and instant notification workflows into a streamlined mobile interface, it ensures that every second counts, providing stakeholders with the constant transparency and peace of mind required for modern high-performance leisure facilities."
        cards={[
          {
            num: "01",
            desc: "AI-based drowning detection and distress pattern recognition",
          },
          {
            num: "02",
            desc: "Instant safety alerts and multi-device notification management",
          },
          {
            num: "03",
            desc: "Continuous visual monitoring of pool activity and swimmer presence",
          },
        ]}
      />
      <ProvenGridSection
        heading="  Proven Across Pool & Leisure Environments"
        topRow={[
          {
            src: "/platforms/mylo/private-residential-pools.webp",
            alt: "Corporate office",
            label: "Private Residential Pools",
          },
          {
            src: "/platforms/mylo/luxury-residential-developments.webp",
            alt: "Healthcare",
            label: "Luxury Residential Developments",
          },
          {
            src: "/platforms/mylo/hotel-and-resort-pools.avif",
            alt: "High performance",
            label: "Hotel & Resort Pools",
          },
        ]}
        bottomRow={[
          {
            src: "/platforms/mylo/Community-Pools.jpg",
            alt: "Laboratory",
            label: "Private Clubs & Community Pools",
          },
          {
            src: "/platforms/mylo/Leisure-Properties.webp",
            alt: "Institutional",
            label: "Hospitality & Leisure Properties",
          },
          {
            src: "/platforms/mylo/recreational-swimming-facilities.jpg",
            alt: "Mixed use",
            label: "Recreational Swimming Facilities",
          },
        ]}
      />
      <PlatformSolutionsSection
        heading="Platform Solutions"
        subheading="Mylo provides AI-powered monitoring solutions focused on swimming pool safety."
        image="/platforms/mylo/platform-solution.png"
        imageAlt="Modern building architecture"
        solutions={[
          {
            title: "Mylo AI Pool Monitoring",
            desc: "Continuous AI-powered camera monitoring of swimming pools using computer vision technology.",
          },
          {
            title: "Mylo Drowning Detection",
            desc: "Real-time analysis of pool activity to identify potential drowning situations.",
          },
          {
            title: "Mylo Smart Alert System",
            desc: "Instant notifications sent to connected devices when a safety risk is detected.",
          },
          {
            title: "Mylo Connected Pool Safety",
            desc: "Enables remote monitoring and alerts to keep users informed about pool safety conditions.",
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
