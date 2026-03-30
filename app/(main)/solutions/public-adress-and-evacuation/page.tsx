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
        title={"Public Address & Voice Evacuation Systems"}
        desc={"Be Heard. Be Safe. Every Time."}
      />
      <HeadTitle
        title={"Professional Sound, Communication & Life Safety Systems"}
        desc={[
          "ME Universal delivers professional-grade Public Address and Voice Evacuation Systems powered by the Heinricha German brand with 3,500+ completed installations, fully compliant with International and EN standards.",
          "Without a reliable, centralised sound and evacuation system, commercial buildings, transport hubs, and public spaces face compliance failures, communication breakdowns, and unacceptable safety risks. Our systems cover every requirement,  from voice evacuation and IP-based public address to conference, nurse call, fire alarm, and CCTV all managed under one unified platform. ",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Public Address & Voice Evacuation Systems",
            desc: "Advanced PA/VA systems for safety-critical and large-scale environments",
            list: [
              "Designed for corporate offices, hotels, hospitals, airports, and transport hubs",
              "4, 6, and 8 zone digital and wall-mount voice evacuation systems",
              "IP-based PA/VA systems for fully networked environments",
              "Expandable up to 160 zones with speaker line supervision",
              "EN54-certified with full fire alarm panel integration",
            ],
            img: "",
          },
          {
            title: "Professional Amplifiers & Sound Systems",
            desc: "High-performance audio solutions for large venues and commercial spaces",
            list: [
              "Designed for auditoriums, stadiums, and large commercial venues",
              "Class A, AB, D, H, and professional amplifier range",
              "8, 16, and 32 channel mixers with digital signal processing",
              "Digital line array loudspeakers with directivity control",
              "Professional loudspeakers with subwoofer configurations",
            ],
            img: "",
          },
          {
            title: "Conference & Presentation Systems",
            desc: "Integrated conferencing and presentation solutions for modern workspaces",
            list: [
              "Designed for boardrooms, training facilities, and government spaces",
              "Digital, wireless, and paperless conference systems",
              "Supports up to 80 microphone units per access point",
              "Motorized pop-up monitor lifts for paperless setups",
              "Wireless presentation with AirPlay and encrypted transmission",
            ],
            img: "",
          },
          {
            title: "Emergency Talk Back & Intercom Systems",
            desc: "Reliable communication systems for emergency and industrial environments",
            list: [
              "Designed for tunnels, highways, airports, and industrial sites",
              "IP-based intercom systems with SIP/IP server and call stations",
              "Weather-proof and explosion-proof emergency help points (IP66)",
              "Emergency video intercom with HD camera and LCD display",
              "SIP/IP speakers for wide-area emergency communication",
            ],
            img: "",
          },
          {
            title: "Nurse Call System",
            desc: "Critical communication solutions for healthcare environments",
            list: [
              "Designed for hospitals, clinics, and healthcare facilities",
              "Central controller for multi-bed ward management",
              "Bedside call units with waterproof toilet pull cords",
              "Corridor displays and LED indicators for alerts",
              "Telephone integration with full monitoring capability",
            ],
            img: "",
          },
          {
            title: "Fire Alarm System",
            desc: "Comprehensive fire detection and alarm solutions",
            list: [
              "Designed for commercial, industrial, healthcare, and transport environments",
              "Addressable fire alarm panels with multiple loop configurations",
              "Conventional systems for smaller installations",
              "Smoke, heat, and multi-sensor detectors",
              "Manual call points, sounders, and notification devices",
            ],
            img: "",
          },
          {
            title: "CCTV Surveillance System",
            desc: "Scalable video surveillance for security and monitoring",
            list: [
              "Designed for corporate, retail, industrial, and transport security",
              "Network video recorders with multi-camera HDMI monitoring",
              "IP dome, bullet, PTZ, and smart IR cameras",
              "Scalable IP network over Cat6 infrastructure",
            ],
            img: "",
          },
          {
            title: "Loudspeakers",
            desc: "Versatile speaker solutions for diverse installation environments",
            list: [
              "Suitable for indoor, outdoor, and networked installations",
              "Ceiling, wall, column, pendant, garden, and horn speakers",
              "IP-based speakers for networked audio systems",
              "Compatible with conventional and IP-based PA systems",
            ],
            img: "",
          },
          {
            title: "Induction Loop System",
            desc: "Assistive listening systems for inclusive audio environments",
            list: [
              "Designed for auditoriums, public venues, and transport facilities",
              "T-coil compatible systems for hearing aid users",
              "Phased array loop systems for large venues",
              "AGC limiter with loop integrity monitoring",
              "Integrated mixer with tone control",
            ],
            img: "",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Unified Networked Architecture",
            desc: "Modern safety shouldn't require separate, clunky infrastructures. Our IP-Based PAVA systems integrate seamlessly into your building’s standard LAN, allowing for a unified backbone that manages everything from background music to emergency voice evacuation. This modularity allows architects and MEP consultants to design for 4 to 160+ zones without a massive hardware footprint. By consolidating fire alarms, CCTV, and public address under a single EN54-certified platform, we reduce the complexity of service shafts and control rooms, ensuring that life-safety infrastructure remains as discreet as it is dependable.",
            image: "/features/architectural-integration.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Aesthetic and Inclusive Sound Design",
            desc: "We believe safety should adapt to the environment, not the other way around. Our range of high-fidelity loudspeakers including ceiling, pendant, and garden variants ensures the system matches the interior intent of any space, from luxury lobbies to transport hubs. Furthermore, our commitment to inclusivity ensures that all occupants are protected; through Induction Loop Systems, we provide hearing-aid users with crystal-clear emergency communications. This adaptability ensures your project meets the highest international compliance standards while enhancing the daily experience of every occupant.",
            image: "/features/scalable-design.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Public Address & Voice Alarm systems combine certified life-safety hardware with intelligent control platforms to deliver reliable communication during both daily operations and emergencies."
        }
        lastRow={[
          {
            title: "EN54 Certified Hardware",
            desc: "Life-safety compliant PAVA equipment designed to meet international fire safety standards.",
            image: "/tech/return-line.jpg",
          },
          {
            title: "Integrated Control Software",
            desc: "Centralized platform for announcements, visual displays, monitoring, and system management.",
            image: "/tech/low-noise.jpg",
          },
        ]}
        firstRow={[
          {
            title: "IP-Based System Architecture",
            desc: "Operates over standard LAN infrastructure with distributed processing and network-wide monitoring.",
            image: "/tech/air-powered.jpg",
          },
          {
            title: "Fire Alarm & System Integration",
            desc: "Interfaces with fire panels and building systems for coordinated emergency communication.",
            image: "/tech/inlet-design.jpg",
          },
          {
            title: "Scalable Zone Configuration",
            desc: "Flexible zone architecture that supports expansion from small buildings to large multi-facility campuses.",
            image: "/tech/centralized.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Safe, Compliant & Future-Ready Building Design"
        description="Our systems support architects, MEP consultants, and facility managers in creating spaces that:"
        image="/sections/architect-corner.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our systems support architects, MEP consultants, and developers in creating buildings that:"
        bullets={[
          "Meet EN54 and international life-safety compliance standards",
          "Integrate seamlessly with fire alarm and building safety systems",
          "Support scalable deployment across large facilities",
          "Enable centralized monitoring and fault diagnostics",
          "Support inclusive communication for hearing-impaired occupants",
        ]}
        closing="We work closely with project teams from design through commissioning to ensure every system meets the acoustic, structural, and operational requirements of each space."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
