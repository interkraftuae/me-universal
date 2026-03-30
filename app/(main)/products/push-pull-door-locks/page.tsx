import HeroSection from "../../solutions/sections/hero-section";
import HeadTitle from "../../solutions/sections/headTitle";
import ProductRange from "../sections/productRange";
import NumberedCardsSection from "../sections/cardSelection";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/products/push-pull-locks/banner.png"}
        title={"Push Pull Door Locks"}
        desc={"Accessible Interior Door Lock Solutions"}
      />
      <HeadTitle
        title={"Interior Push Pull Door Lock Systems"}
        desc={[
          "ME Universal supplies push pull door locks designed to simplify how interior doors are operated while improving accessibility for all users.",
          "Developed for everyday environments, these locks allow doors to be opened with a simple push or pull motion, making them suitable for everyone from children to elderly users and people with limited mobility. ",
          "Unlike traditional door handles that require twisting or gripping, push pull locks operate with a single motion, reducing effort and minimizing the physical strain often associated with conventional latch systems.",
          "The design focuses on ergonomic usability, smooth mechanical operation, and reliable indoor security, making these locks suitable for residential interiors, commercial spaces, and accessible environments.",
        ]}
      />
      <ProductRange
        products={[
          {
            label: "Push Pull Interior Door Lock",
            img: "/products/push-pull-locks/interior-lock.jpg",
            lists: [
              "One-step push pull door operation mechanism",
              "Designed for easy access for children, elderly, and disabled users",
              "Smooth latch system that operates without resistance",
            ],
          },
          {
            label: "Push Pull Door Lock Mechanism",
            img: "/products/push-pull-locks/door.jpg",
            lists: [
              "Push or pull motion activates a 90-degree rotating latch bolt",
              "Eliminates the need for twisting or gripping traditional handles",
              "Enables quick and effortless entry and exit",
            ],
          },
          {
            label: "Ergonomic Interior Lock Design",
            img: "/products/push-pull-locks/ergonomic.jpg",
            lists: [
              "Modern ergonomic design for comfortable door interaction",
              "Reduces wrist movement and physical strain",
              "Suitable for everyday indoor environments",
            ],
          },
          {
            label: "Mechanical Accessibility Lock System",
            img: "/products/push-pull-locks/Mechanical-Accessibility-Lock-System.webp",
            lists: [
              "Non-digital mechanical lock system for reliable operation",
              "Combines traditional security with modern usability",
              "Designed for safe and smooth indoor door access",
            ],
          },
        ]}
      />
      <NumberedCardsSection
        title=" Push Pull Door Locks for Everyday Accessibility "
        cards={[
          {
            num: "01",
            desc: "Simplifies door operation through a single push or pull motion",
          },
          { num: "02", desc: "Improves accessibility and ease of use" },
          { num: "03", desc: "Reduces physical effort during door operation" },
          {
            num: "04",
            desc: "Designed for smooth and reliable indoor performance",
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
