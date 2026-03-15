import Image from "next/image";
import Sustainability from "../about/sections/sustainability";
import CTASection from "../sections/cta";
const page = () => {
  return (
    <div className="">
      <div className="relative  h-[50vh] lg:h-[90vh] w-full">
        <div className="h-[80%] overflow-hidden">
          <Image
            fill
            src="/sustainability/main-banner.jpg"
            alt="Sustainability Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-md container rounded-xl absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-xs lg:max-w-5xl p-6 lg:p-10 ">
          <h1 className="text-3xl lg:text-4xl mb-6 font-rubik">
            Sustainability
          </h1>
          <p className="font-inter ">
            Middle East Engineering Technologies integrates sustainability into
            every aspect of business be it our process, procurement or
            operations. From product selection to partner engagement, we focus
            on responsible choices that reduce energy use, promote cleaner
            mobility, and support efficient resource management.
          </p>
          <p className="font-inter hidden lg:block">
            Our sustainable approach ensures that all offerings right from
            apparel accessories and cooling jackets to electric bikes, scooters,
            and energy storage solutions deliver real world performance while
            minimizing environmental impact.
          </p>
        </div>
      </div>
      <section className="container mx-auto mt-60 lg:mt-32 py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="h-[230px] overflow-hidden rounded-xl lg:h-[440px] relative">
            <Image
              src={"/sustainability/banner.jpg"}
              alt={"Sustainability Banner"}
              className="object-cover"
              fill
            />
          </div>
          <div>
            <h3 className="text-4xl font-rubik">
              Let’s talk about <br /> Sustainability
            </h3>
            <p className="mt-8 mb-3">
              Middle East Engineering Technologies is a commercial distribution
              and trading company, a subsidiary of ME Universal. We work with
              businesses to deliver specialised products that are practical,
              cost-effective, and built for real working conditions. Our focus
              is on connecting advanced technologies with everyday business use.
              We select products that help companies and consumers operate
              efficiently while reducing energy consumption and environmental
              impact.
            </p>
            <p>
              Our offerings include durable apparel components, cooling jacket
              technology to enhance worker comfort, electric mobility solutions
              that support cleaner transport, and power and automotive batteries
              for energy storage and backup.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2 - Planet Responsibility */}

      <section className="mt-4 mb-5">
        <div className="container relative overflow-hidden lg:rounded-xl h-[300px]">
          <Image
            src={"/sustainability/cta-2.jpg"}
            alt={"Cta"}
            className="object-cover"
            fill
          />
          <div className="flex relative h-full flex-col items-center justify-center  gap-4">
            <h3 className="text-2xl md:text-4xl text-center lg:text-start font-rubik text-white">
              OUR PLANET. OUR RESPONSIBILITY.
            </h3>
            <p className="text-white max-w-3xl mx-auto text-center ">
              We are committed to responsible business practices that minimize
              environmental impact and promote sustainability across all aspects
              of our operations.
            </p>
          </div>
        </div>
      </section>

      <div className="container space-y-4 mb-7 text-center font-inter">
        <p>
          Sustainability is part of our everyday decisions and is in build in
          the company`s DNA. We carefully evaluate products, manufacturers, and
          partnerships to ensure responsible business practices while
          maintaining performance and quality.
        </p>
        <p>
          We support energy efficient technologies, cleaner mobility solutions,
          and responsible sourcing practices that help businesses reduce
          environmental impact without compromising functionality or
          reliability.
        </p>
      </div>
      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
};

export default page;
