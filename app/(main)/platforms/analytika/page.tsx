import HeroSection from "../../solutions/sections/hero-section";
import Info from "../sections/info";
import TimelineFeatureSection from "../sections/timeline-feature";
import { ScanSearch, BarChart2, Wrench } from "lucide-react";
import ProvenGridSection from "../sections/provengrid";
import PlatformSolutionsSection from "../sections/platform-solution";
import DarkFeatureSection from "../sections/dark-feature-section";
import HowItWorksSection from "../sections/networkMap";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/platforms/analytika/highrise-building.jpg"}
        title={"Analytika"}
        desc={"Intelligent Building Diagnostics Platform"}
      />
      <Info
        tagline="See What Your Building Is Really Doing"
        body={[
          "ME Universal introduces Analytika, a powerful Automated Fault Detection & Diagnostics (AFDD) platform built to continuously monitor, analyze, and optimize building performance.",
          "Instead of reacting to breakdowns, Analytika identifies inefficiencies, detects faults early, and prioritizes what truly needs attention - helping you reduce energy waste, improve comfort, and protect operational reliability.",
        ]}
        ctaLabel="Speak to an Expert"
        ctaHref="#contact"
      />
      <TimelineFeatureSection
        heading="Why Analytika for your Commercial Building?"
        features={[
          {
            title: "24/7 Intelligent Monitoring",
            body: "Analytika works around the clock, collecting and analyzing real-time data from your building systems. It gives you a clear, continuous view of performance, so issues are identified before they become costly problems. This constant oversight transforms raw building data into clear, actionable intelligence for smarter facility management.",
          },
          {
            title: "Advanced Fault Detection & Diagnostics",
            body: "With 2,500+ algorithms powered by AI and human intelligence (HI), Analytika automatically detects:",
            subCards: [
              { icon: "ScanSearch", label: "System anomalies" },
              { icon: "BarChart2", label: "Performance deviations" },
              { icon: "Wrench", label: "Equipment inefficiencies" },
            ],
            closing:
              "This enables proactive maintenance, reduced downtime, and smarter operational decisions.",
          },
        ]}
      />
      <HowItWorksSection
        heading="How It Works"
        subheading="Analytika securely integrates with your Building & Process Automation Systems."
        hubLabel="Analytika platform"
        hubDesc="Central intelligence hub"
        centerLabel="What Analytika Monitors"
        items={[
          { label: "HVAC systems", desc: "Heating, cooling, ventilation" },
          { label: "Lighting systems", desc: "Smart controls" },
          { label: "Metering & utilities", desc: "Energy, water, gas" },
          { label: "Process systems", desc: "Pumps, motors, BAS" },
          {
            label: "Facility performance data",
            desc: "Dashboards & reporting",
          },
        ]}
      />
      <DarkFeatureSection
        label="Analytika Online Portal"
        body="The platform serves as a centralized intelligence hub that transforms complex operational data into a user-friendly digital interface accessible from any location. This customizable environment empowers your team to monitor real-time building health while facilitating high-level decision-making through an intuitive and streamlined layout. By bridging the gap between raw data and facility management, it ensures that every stakeholder has the transparency needed to maintain peak institutional performance."
        cards={[
          { num: "01", desc: "Detailed fault analysis and explanations" },
          { num: "02", desc: "Graphing and advanced data visualization" },
          { num: "03", desc: "Seamless BMS integration for oversight" },
        ]}
      />
      <ProvenGridSection
        heading="Proven Across Complex Commercial & Institutional Buildings"
        topRow={[
          {
            src: "/platforms/analytika/Corporate-office.webp",
            alt: "Corporate office",
            label: "Corporate & Commercial Office Buildings",
          },
          {
            src: "/platforms/analytika/Healthcare.webp",
            alt: "Healthcare",
            label: "Healthcare Facilities & Hospitals",
          },
          {
            src: "/platforms/analytika/high-performance.jpg",
            alt: "High performance",
            label: "High-Performance & Mission Critical Buildings",
          },
        ]}
        bottomRow={[
          {
            src: "/platforms/analytika/Laboratory.jpg",
            alt: "Laboratory",
            label: "Research & Laboratory Environments",
          },
          {
            src: "/platforms/analytika/Institutional.webp",
            alt: "Institutional",
            label: "Institutional & Educational Campuses",
          },
          {
            src: "/platforms/analytika/Mixed-use.jpg",
            alt: "Mixed use",
            label: "Large Mixed-Use Developments",
          },
        ]}
      />
      <PlatformSolutionsSection
        heading="Platform Solutions"
        subheading="Analytika is structured into specialized service modules:"
        image="/platforms/analytika/platform.png"
        imageAlt="Modern building architecture"
        solutions={[
          {
            title: "Analytika Energy & Carbon",
            desc: "Drive measurable energy reduction and carbon impact improvement.",
          },
          {
            title: "Analytika Perform",
            desc: "Enhance preventative maintenance and prioritize O&M actions for better comfort and system performance.",
          },
          {
            title: "Analytika Construct",
            desc: "Support commissioning and warranty phases with performance validation.",
          },
          {
            title: "Analytika Assure",
            desc: "Improve reliability, reduce downtime, support compliance, and mitigate operational risk.",
          },
          {
            title: "Analytika Chart",
            desc: "Advanced data visualization and historical analysis for deeper performance insights.",
          },
          {
            title: "Analytika Utility",
            desc: "Track utility usage through dashboards and metering analytics.",
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
