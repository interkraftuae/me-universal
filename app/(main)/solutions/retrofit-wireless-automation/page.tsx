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
        img={"/solutions/retrofit-wireless-automation/banner.jpg"}
        title={"Retrofit Wireless Automation System"}
        desc={"Smarter Spaces. Zero Disruption."}
      />
      <HeadTitle
        title={"Commercial & Workspace Wireless Automation"}
        desc={[
          "ME Universal delivers advanced Retrofit Wireless Automation Systems powered by EnOcean technology, designed for offices, corporate buildings, hospitals, shopping malls, airports, and high-performance commercial spaces.",
          "In modern buildings, operational efficiency and occupant comfort directly impact productivity, energy consumption, and facility performance. Managing spaces manually  without real-time data on occupancy, environment, or equipment status  leads to wasted energy, inefficient cleaning schedules, underutilized spaces, and rising operational costs.",
          "Our system retrofits seamlessly into existing buildings without wiring or major civil works, deploying a network of battery-free wireless sensors and actuators that monitor spaces, automate controls, and feed real-time data into a unified management platform  safely, intelligently, and continuously.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Smart Workstation Management",
            desc: "Intelligent workstation solutions for efficient workspace utilization",
            list: [
              "Real-time workstation occupancy monitoring",
              "Automated lighting and HVAC adjustment based on usage",
              "Workstation power linked to occupancy status",
              "Mobile-based desk reservation with floor plan view",
              "Usage analytics for optimized workspace utilization",
            ],
            img: "/solutions/retrofit-wireless-automation/smart-workstation-management.jpg",
          },
          {
            title: "Smart Meeting Room Management",
            desc: "Automated meeting room control for seamless collaboration",
            list: [
              "Real-time people counting and occupancy detection",
              "One-touch conference scene activation",
              "Automatic room release when unoccupied",
              "Reservation system with door display and notifications",
              "Energy optimization through smart HVAC control",
            ],
            img: "/solutions/retrofit-wireless-automation/smart-meeting-room.jpg",
          },
          {
            title: "Smart Training Room Automation",
            desc: "Automated environments for enhanced training experiences",
            list: [
              "Automated control of lighting, HVAC, curtains, and equipment",
              "Environmental monitoring for temperature, humidity, and CO₂",
              "Sensor-based occupancy and activity detection",
              "Automated scene control for different training modes",
              "Centralized control with minimal manual intervention",
            ],
            img: "/solutions/retrofit-wireless-automation/smart-training-room-Automation.webp",
          },
          {
            title: "Smart Restroom Management",
            desc: "Data-driven restroom monitoring for hygiene and efficiency",
            list: [
              "Real-time monitoring of usage and occupancy",
              "Automated cleaning alerts based on usage data",
              "Water leak detection and consumable tracking",
              "Smoking detection with alerts and notifications",
              "Energy and water consumption monitoring",
            ],
            img: "/solutions/retrofit-wireless-automation/smart-restroom-management.jpg",
          },
          {
            title: "Smart Cleaning Management",
            desc: "Optimized cleaning operations through intelligent automation",
            list: [
              "Real-time tracking of cleaning staff activity",
              "Sensor-triggered cleaning work orders",
              "Automated cleaning schedule management",
              "Task completion monitoring and reporting",
              "Data-driven optimization of cleaning operations",
            ],
            img: "/solutions/retrofit-wireless-automation/smart-cleaning-management.png",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Zero-Disruption Retrofit Capability",
            desc: "Upgrading a building's intelligence no longer requires tearing down walls or installing miles of cabling. Our systems utilize EnOcean Energy Harvesting to deploy battery-free, wireless sensors that power themselves through light, motion, or temperature changes. This modularity is ideal for occupied offices, heritage buildings, or hospitals where downtime is not an option. Architects can instantly transform 'dumb' infrastructure into a data-rich environment by mounting sensors onto existing surfaces, ensuring a high-tech upgrade with zero civil works and zero disruption to daily operations.",
            image:
              "/solutions/retrofit-wireless-automation/placing-a-small-wireless-sensor.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Data-Driven Operational Intelligence",
            desc: "Beyond simple control, our wireless network acts as a continuous sensory organ that adapts to the real-time heartbeat of your workspace. From Smart Restroom alerts triggered by footfall to Workstation Monitoring that optimizes desk utilization, the system feeds CO₂, humidity, and occupancy data into a unified Cloud-Based Platform. This empowers developers and MEP consultants to implement automation that is reactive rather than scheduled, ensuring even the oldest buildings can scale effortlessly to meet modern sustainability goals and high-performance building standards",
            image:
              "/solutions/retrofit-wireless-automation/data-driven-operational-intelligence.png",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Wireless retrofit automation uses energy-harvesting technology to enable smart building control without extensive wiring or civil modifications."
        }
        lastRow={[
          {
            title: "Energy Harvesting Sensors",
            desc: "Battery-free wireless sensors powered by motion, light, or temperature differences.",
            image:
              "/solutions/retrofit-wireless-automation/energy-harvesting.jpeg",
          },
          {
            title: "Unified Gateway Connectivity",
            desc: "Single gateway connects sensors, switches, actuators, and smart devices through a unified protocol.",
            image:
              "/solutions/retrofit-wireless-automation/one-central-device-multiple-connected-nodes.jpg",
          },
        ]}
        firstRow={[
          {
            title: "Comprehensive Environmental Monitoring",
            desc: "Tracks temperature, humidity, CO₂, air quality, noise, illumination, and occupancy.",
            image:
              "/solutions/retrofit-wireless-automation/close-up-of-small-modern-sensor.jpeg",
          },
          {
            title: "Automated Building Control",
            desc: "Sensor data automatically controls lighting, HVAC, curtains, motors, and power systems.",
            image:
              "/solutions/retrofit-wireless-automation/smart-office-environmental-sensors-temperature.jpg",
          },
          {
            title: "Cloud-Based Monitoring Platform",
            desc: "Real-time visualization, system monitoring, and data analytics through web and mobile dashboards.",
            image:
              "/solutions/retrofit-wireless-automation/laptop-mobile-screens-with-dashboard.jpeg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter, More Efficient Building Design"
        description="Wireless retrofit automation is becoming a defining feature of intelligent, future-ready buildings."
        image="/solutions/retrofit-wireless-automation/platform-solutions.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our systems support architects, MEP consultants, and facility managers in creating spaces that:"
        bullets={[
          "Eliminate the need for sensor wiring in both retrofit and new-build projects",
          "Improve space utilization through real-time occupancy data and analytics",
          "Automate energy systems based on actual conditions rather than timers",
          "Enhance hygiene, cleaning standards, and operational efficiency across commercial and healthcare environments",
          "Enable long-term, data-driven facility management through a unified platform",
        ]}
        closing="We work closely with project teams to ensure the wireless automation system aligns with spatial planning, MEP design intent, and overall building performance strategy."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
