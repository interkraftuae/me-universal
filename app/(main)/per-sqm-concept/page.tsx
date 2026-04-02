import Image from "next/image";
import Form from "../(Home-Page)/form";
import {
  LineChart,
  Brain,
  FileSearch,
  SlidersHorizontal,
  GitBranch,
} from "lucide-react";
const Page = () => {
  const features = [
    {
      icon: LineChart,
      text: "Evaluate technologies in real-time",
    },
    {
      icon: Brain,
      text: "Understand system integration possibilities",
    },
    {
      icon: FileSearch,
      text: "Explore design-friendly smart solutions",
    },
    {
      icon: SlidersHorizontal,
      text: "Align automation with architectural intent",
    },
    {
      icon: GitBranch,
      text: "Make confident technology decisions",
    },
  ];

  return (
    <div>
      <section className="bg-[#15141D] pt-44 pb-10">
        <div className="container flex justify-center h-full items-center">
          <div className="text-white text-center">
            <h1 className="text-5xl mb-8 uppercase font-montserrat">
              Per Sqm concept
            </h1>
            <p className="text-2xl">See. Experience. Innovate.</p>
          </div>
        </div>
      </section>
      <section className="h-[620px] relative">
        <Image
          src={"/sqm/03.jpg"}
          alt={"per sqm"}
          fill
          className="object-cover object-top"
        />
      </section>

      <section className="container">
        <p className="text-center py-5">
          PER SQM is an immersive building technology and lifestyle experience
          space by ME Universal. It is where smart automation, energy solutions,
          air quality systems, entertainment technologies, and modern living
          concepts come together. Not just to be displayed, but to be
          experienced.
        </p>
      </section>
      <section className="py-8 bg-[#15141D] mt-6">
        <div className="container">
          <p className="text-center text-2xl text-white">
            Because when it comes to intelligent spaces{" "}
            <span className="capitalize bg-gradient-to-t from-[#CCC5FF] to-[#5344C6] bg-clip-text text-transparent">
              seeing is believing !
            </span>
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 container">
          <div className="relative h-[230px] lg:h-[370px]">
            <Image src={"/sqm/20.jpg"} className="" fill alt={"object-cover"} />
          </div>
          <div>
            <h2 className="text-4xl font-montserrat mb-7">
              Multiple Innovations under one Roof for Residential & Commercial
              Projects
            </h2>
            <p className="space-y-5">
              <span className="block">
                PER SQM brings together a curated ecosystem of building
                technologies and lifestyle solutions under a single experiential
                platform.
              </span>{" "}
              <span className="block">
                From smart automation and energy management to air purification,
                ventilation, integrated waste systems, digital entertainment,
                and building solutions, every system is selected to enhance how
                modern spaces function and feel. Instead of imagining how
                products will work inside a project, you can experience them
                firsthand.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-montserrat lg:text-4xl font-[400] text-gray-800">
            This is not a <span className="line-through">Brochure</span>.
          </h2>

          <h3 className="text-4xl lg:text-4xl font-montserrat mt-3">
            It is A LIVE ECOSYSTEM.
          </h3>

          {/* Image Collage */}
        </div>
        <div className="">
          <CollageGrid />
        </div>
      </section>

      <section className="bg-[#0b0b1a] text-white mt-20 py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Top small text */}
          <p className="text-xs tracking-widest text-gray-400 mb-3 uppercase">
            PER SQM WAS CREATED AS A COLLABORATIVE SPACE.
          </p>

          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-montserrat font-medium mb-12">
            DESIGNED FOR RESIDENTS & DEVELOPERS
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#14142b] to-[#1c1c3a] border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-white/20 transition"
                >
                  <Icon className="w-10 h-10 mb-4 text-white opacity-90" />
                  <p className=" text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom text */}
          <p className="max-w-5xl mx-auto text-xs md:text-sm text-gray-400">
            We support both early-stage concept planning and advanced project
            discussions, helping bridge the gap between design vision and
            technical execution.
          </p>
        </div>
      </section>
      <section className="mt-20">
        <Form />
      </section>
    </div>
  );
};

export default Page;

function CollageGrid() {
  const boxes = [
    { id: 1, img: "03.jpg", label: "Bathroom" },
    { id: 2, img: "06.jpg", label: "Architecture" },
    { id: 3, img: "07.jpg", label: "Appliances" },
    { id: 4, img: "08.jpg", label: "Laundry" },
    { id: 5, img: "09.jpg", label: "Lighting" },
    { id: 6, img: "11.jpg", label: "Smart City" },
    { id: 7, img: "15.jpg", label: "Security" },
    { id: 8, img: "17.jpg", label: "Home Cinema" },
  ];

  return (
    <section className="w-full py-16 container">
      <div
        className="
          grid gap-2
          grid-cols-2 grid-rows-[140px_140px_140px]
          md:grid-cols-3 md:grid-rows-[160px_160px_160px]
          lg:grid-cols-[0.55fr_1fr_1fr_1fr_0.55fr] lg:grid-rows-[200px_200px]
        "
      >
        {/* B1 — col1, spans 2 rows. Inset on desktop */}
        <div
          className="
            col-start-1 row-start-1 row-span-2
            lg:mt-6 lg:mb-6
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/03.jpg"
            fill
            alt="Bathroom"
            className="object-cover"
          />
        </div>

        {/* B2 — col2 top */}
        <div
          className="
            col-start-2 row-start-1
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/06.jpg"
            fill
            alt="Architecture"
            className="object-cover"
          />
        </div>

        {/* B3 — col2 bottom */}
        <div
          className="
            col-start-2 row-start-2
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/07.jpg"
            fill
            alt="Appliances"
            className="object-cover"
          />
        </div>

        {/* B4 — center hero. Hidden mobile, col3 spans 2 rows on md+ */}
        <div
          className="
            hidden
            md:block md:col-start-3 md:row-start-1 md:row-span-2
            lg:col-start-3 lg:row-start-1 lg:row-span-2
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/08.jpg"
            fill
            alt="Laundry"
            className="object-cover"
          />
        </div>

        {/* B5 — mobile: col1 row3 | md: col1 row3 | lg: col4 row1 */}
        <div
          className="
            col-start-1 row-start-3
            md:col-start-1 md:row-start-3
            lg:col-start-4 lg:row-start-1
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/09.jpg"
            fill
            alt="Lighting"
            className="object-cover"
          />
        </div>

        {/* B6 — mobile: col2 row3 | md: col2 row3 | lg: col4 row2 */}
        <div
          className="
            col-start-2 row-start-3
            md:col-start-2 md:row-start-3
            lg:col-start-4 lg:row-start-2
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/11.jpg"
            fill
            alt="Smart City"
            className="object-cover"
          />
        </div>

        {/* B7 — hidden mobile | md: col3 row3 | lg: col5 row1 */}
        <div
          className="
            hidden
            md:block md:col-start-3 md:row-start-3
            lg:col-start-5 lg:row-start-1
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/15.jpg"
            fill
            alt="Security"
            className="object-cover"
          />
        </div>

        {/* B8 — desktop only | lg: col5 row2 */}
        <div
          className="
            hidden
            lg:block lg:col-start-5 lg:row-start-2
            rounded-2xl overflow-hidden relative group cursor-pointer
            transition-transform duration-200 ease-out hover:scale-[1.025]
          "
        >
          <Image
            src="/sqm/17.jpg"
            fill
            alt="Home Cinema"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
