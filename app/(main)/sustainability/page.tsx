import Image from "next/image";
import Form from "../(Home-Page)/form";
const page = () => {
  return (
    <div className="">
      <div className="relative  h-[50vh] lg:h-[70vh] w-full">
        <div className="absolute bg-black/20 w-full h-full z-[1] inset-0" />
        <div className="h-[80%] overflow-hidden">
          <Image
            fill
            src="/sustainability/hero.jpg"
            alt="Sustainability Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl lg:text-5xl font-montserrat font-[500] uppercase absolute z-10 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          Sustainability
        </h1>
        <div className="bg-white shadow-md container z-10 rounded-xl absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-xs lg:max-w-5xl p-6 lg:p-10 ">
          <p className="font-inter text-center">
            ME Universal integrates sustainability into every aspect of
            engineering and system integration. From technology selection to
            project implementation, we focus on responsible solutions that
            reduce energy consumption, optimise resources, and support efficient
            infrastructure management. Our sustainable approach ensures that all
            smart building systems  from automation and lighting controls to
            ventilation optimisation and intelligent waste management deliver
            measurable performance improvements while minimising environmental
            impact.
          </p>
        </div>
      </div>
      <section className="container mx-auto mt-60 lg:mt-32 py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="h-[230px] overflow-hidden lg:h-[440px] relative">
            <Image
              src={"/sustainability/sustainability.jpg"}
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
              ME Universal is a smart infrastructure and IoT system integration
              company. We work with developers, architects, consultants, and
              project stakeholders to deliver automation solutions that are
              practical, scalable, and built for real building environments. Our
              focus is on connecting advanced technologies with everyday
              operational needs. We design and implement systems that help
              buildings operate efficiently while reducing energy use and
              environmental impact.
            </p>
            <p>
              Our solutions include energy-efficient lighting controls,
              intelligent automation systems, smart ventilation technologies,
              integrated waste management solutions, and data-driven monitoring
              platforms that enhance long-term building performance. We deliver
              tailored, sustainable solutions that reduce operational costs and
              environmental impact, ensuring smarter, healthier buildings for
              the future.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2 - Planet Responsibility */}

      <section className="mt-4 mb-5">
        <div className="container relative overflow-hidden  h-[300px]">
          <div className="size-full absolute inset-0 bg-black/30 z-10" />
          <Image
            src={"/sustainability/cta.jpg"}
            alt={"Cta"}
            className="object-cover"
            fill
          />
          <div className="flex relative h-full z-10 flex-col items-center justify-center  gap-4">
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

      <section className="container space-y-4 mb-7 text-center font-inter">
        <p>
          Sustainability is embedded into our engineering approach. We carefully
          evaluate technologies, partners, and system designs to ensure
          responsible integration while maintaining performance and reliability.
          We support energy-efficient automation, resource optimisation systems,
          and responsible engineering practices that help clients reduce
          environmental impact without compromising operational functionality or
          long-term asset value
        </p>
      </section>

      <section className="mt-24 mb-5">
        <div className="container relative overflow-hidden  h-[500px]">
          <Image
            src={"/sustainability/cta-2.jpg"}
            alt={"Cta"}
            className="object-cover w-full h-full"
            fill
          />
          <div className="flex relative h-full w-full flex-col  bg-linear-to-t from-black/80 items-center justify-end pb-10  gap-4">
            <h3 className="text-2xl md:text-4xl text-center lg:text-start font-montserrat text-white">
              SUSTAINABILITY & RESPONSIBILITY
            </h3>
            <div className="mt-5 space-y-2">
              <p className="text-white max-w-6xl mx-auto text-center ">
                Sustainability guides our daily decisions, from system design to
                technology partnerships.
              </p>
              <p className="text-white max-w-6xl mx-auto text-center">
                We implement smart monitoring platforms, energy optimisation
                controls, and infrastructure solutions that help reduce carbon
                footprint and resource waste while maintaining consistent
                building performance. Our integrated approach ensures enhanced
                efficiency, lower operational costs, and a sustainable future
                for buildings and industries alike, boosting both performance
                and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <Form />
      </section>
    </div>
  );
};

export default page;
