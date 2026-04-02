import Solutions from "./(Home-Page)/solutions";
import HeroSection from "./(Home-Page)/hero-section";
import TargetAudience from "./(Home-Page)/target-audience";
import Blogs from "./(Home-Page)/blogs";
import FeaturedProduct from "./(Home-Page)/featured-product";
import WhyChoose from "./(Home-Page)/why-choose";
import ProtocolSection from "./(Home-Page)/protocol";
import AboutSection from "./(Home-Page)/about-us";
import ProcessSection from "./(Home-Page)/process-section";
import PartnerLogo from "./(Home-Page)/partner-logo";
import Form from "./(Home-Page)/form";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <PartnerLogo />
      <Solutions />
      <TargetAudience />
      <AboutSection />
      <ProtocolSection />
      <WhyChoose />
      <ProcessSection />
      <div className="w-full container relative  h-[250px]  lg:h-[420px]">
        <Image
          src={"/home/Gemini_Generated_Image_39rk3939rk3939rk.png"}
          fill
          className="hidden lg:block  object-contain"
          alt={""}
        />
        <Image
          src={"/home/banner-m.jpeg"}
          fill
          className="lg:hidden block  object-contain"
          alt={""}
        />
      </div>
      <Blogs />
      <Form />
    </div>
  );
}
