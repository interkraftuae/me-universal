import HeroSection from "../../solutions/sections/hero-section";
import Info from "../sections/info";
import TimelineFeatureSection from "../sections/timeline-feature";
import { LayoutGrid, Home, GitCompare, Sparkles } from "lucide-react";
import ProvenGridSection from "../sections/provengrid";
import PlatformSolutionsSection from "../sections/platform-solution";
import DarkFeatureSection from "../sections/dark-feature-section";
import HowItWorksSection from "../sections/networkMap";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/platforms/archflow/banner.png"}
        title={"ArchFlow"}
        desc={"AI-Powered Architectural Design Platform"}
      />
      <Info
        tagline="Design Smarter. Plan Faster."
        body={[
          "ME Universal introduces ArchFlow, an AI-powered architectural design platform built to help architects, planners, and developers generate intelligent design concepts and optimize building layouts with greater speed and precision.",
          "Instead of starting every project from scratch, ArchFlow uses advanced AI models to assist with spatial planning, layout generation, and architectural exploration. The platform helps teams accelerate early-stage design, evaluate multiple possibilities, and improve project efficiency while maintaining creative control.",
        ]}
        ctaLabel="Speak to an Expert"
        ctaHref="#contact"
      />
      <TimelineFeatureSection
        heading="Why ArchFlow for Your Design Workflow?"
        features={[
          {
            title: "AI-Assisted Design Exploration",
            body: "ArchFlow enables architects and design teams to explore multiple design concepts quickly by generating layout ideas and spatial arrangements based on project parameters. The platform supports rapid concept development, helping teams visualize possibilities and refine ideas during early design stages. By combining AI intelligence with architectural workflows, ArchFlow allows designers to focus more on creativity while reducing repetitive manual work.",
          },
          {
            title: "Faster Planning & Layout Optimization",
            body: "Through intelligent analysis and design automation, ArchFlow helps evaluate building layouts for efficiency, space utilization, and planning feasibility.",
            subCards: [
              { icon: "LayoutGrid", label: "Architectural layout generation" },
              { icon: "Home", label: "Floor plan development" },
              { icon: "GitCompare", label: "Design option comparison" },
              { icon: "Sparkles", label: "Early-stage concept visualization" },
            ],
            closing: "All powered through AI-assisted design intelligence.",
          },
        ]}
      />
      <HowItWorksSection
        heading="How It Works"
        subheading="ArchFlow integrates AI-powered design intelligence into architectural workflows to support faster concept development and spatial planning."
        hubLabel="ArchFlow platform"
        hubDesc="Central intelligence hub"
        centerLabel="What ArchFlow manages"
        items={[
          {
            label: "Site planning & building placement",
            desc: "Optimized layouts based on site conditions",
          },
          {
            label: "Automated floor plan generation",
            desc: "AI-driven spatial planning and layouts",
          },
          {
            label: "Building massing & spatial layouts",
            desc: "Efficient volumetric and space design",
          },
          {
            label: "Design variation generation",
            desc: "Multiple options for comparison and iteration",
          },
          {
            label: "Concept visualization & iteration",
            desc: "Rapid early-stage design exploration",
          },
        ]}
      />
      <DarkFeatureSection
        label="Analytika Online Portal"
        body="The platform acts as a centralized design environment that helps transform architectural ideas into structured design outputs through AI-assisted workflows. Accessible through an intuitive interface, the system allows architects and design teams to explore layouts, refine spatial relationships, and visualize early-stage concepts with greater clarity. By bridging AI capabilities with architectural thinking, ArchFlow helps teams accelerate design exploration while maintaining full creative control over the project direction"
        cards={[
          { num: "01", desc: "AI-assisted design generation" },
          { num: "02", desc: "Layout comparison and visualization tools" },
          { num: "03", desc: "Concept exploration for early-stage planning" },
        ]}
      />
      <ProvenGridSection
        heading="Proven Across Modern Architectural Workflows"
        topRow={[
          {
            src: "/platforms/archflow/architecture-design.jpg",
            alt: "Corporate office",
            label: "Architecture & Design Studios",
          },
          {
            src: "/platforms/archflow/real-estate-development.jpg",
            alt: "Healthcare",
            label: "Real Estate Development Projects",
          },
          {
            src: "/platforms/archflow/urban-planning-and-master-planning.jpg",
            alt: "High performance",
            label: "Urban Planning & Master Planning",
          },
        ]}
        bottomRow={[
          {
            src: "/platforms/archflow/commercial-mix-use.jpeg",
            alt: "Laboratory",
            label: "Commercial & Mixed-Use Developments",
          },
          {
            src: "/platforms/archflow/residential-planning-projects.jpg",
            alt: "Institutional",
            label: "Residential Planning Projects",
          },
          {
            src: "/platforms/archflow/Large-Scale-Infrastructure-Developments.jpg",
            alt: "Mixed use",
            label: "Large-Scale Infrastructure Developments",
          },
        ]}
      />
      <PlatformSolutionsSection
        heading="Platform Solutions"
        subheading="ArchFlow is structured to support multiple stages of architectural design and planning:"
        image="/platforms/archflow/platform-solutions.webp"
        imageAlt="Modern building architecture"
        solutions={[
          {
            title: "ArchFlow Concept",
            desc: "Generate AI-assisted architectural concepts and spatial layouts.",
          },
          {
            title: "ArchFlow Plan",
            desc: "Develop optimized floor plans and spatial arrangements.",
          },
          {
            title: "ArchFlow Explore",
            desc: "Compare design alternatives and explore planning approaches.",
          },
          {
            title: "ArchFlow Collaborate",
            desc: "Enable seamless collaboration between architects, planners, and stakeholders.",
          },
          {
            title: "ArchFlow Visual",
            desc: "Visualize design concepts and spatial relationships effectively.",
          },
          {
            title: "ArchFlow Optimize",
            desc: "Enhance space utilization and project feasibility through intelligent analysis.",
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
