import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className=" mt-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative w-full h-[360px] lg:h-[520px]">
            <Image
              src="/home/about/graphic.png"
              alt="team"
              width={300}
              height={300}
              className="absolute w-full h-full -bottom-14 -left-28 object-contain"
            />
            <div className="relative w-full h-full  rounded z-10 overflow-hidden">
              <Image
                src="/home/about/about.png"
                alt="team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Decorative Shape */}
          <div className="absolute -bottom-6 left-12 w-40 h-40 border border-indigo-300 rotate-45 opacity-50"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold font-montserrat tracking-tight mb-6">
            ABOUT ME UNIVERSAL
          </h2>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            ME Universal is a technology-driven solutions provider specializing
            in intelligent building systems, IoT integration, and advanced
            automation technologies.
          </p>

          <p className="text-gray-600 mb-3 text-sm leading-relaxed">
            The company works across residential, commercial, hospitality,
            healthcare, and institutional projects, delivering solutions that
            enhance energy efficiency, operational intelligence, and occupant
            experience.
          </p>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed">
            Through strategic partnerships with global technology providers and
            in-house technical expertise, ME Universal delivers solutions
            designed to support modern building ecosystems and evolving
            sustainability requirements.
          </p>
          <p className="text-gray-600 mb-5 text-sm leading-relaxed">
            Our focus is on building long-term value through smart
            infrastructure, efficient system integration, and future-ready
            technology platforms.
          </p>

          {/* BUTTON */}
          <Link href={"/about"}>
            <button className="btn mb-8 hover:bg-primary/90 transition">
              About MEUniversal →
            </button>
          </Link>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="pt-4 border-t md:border-t-0 md:border-r border-primary md:pr-6">
              <h3 className="text-xl font-semibold">30–40%</h3>
              <p className="text-primary text-xs font-medium mb-2">
                ENERGY COST REDUCTION
              </p>
              <p className="text-xs text-gray-600">
                Potential energy cost reduction through optimized building
                technologies.
              </p>
            </div>

            <div className="pt-4 border-t md:border-t-0 md:border-r border-primary md:px-6">
              <h3 className="text-xl font-semibold">2–4 YRS</h3>
              <p className="text-primary text-xs font-medium mb-2">
                RETURN ON INVESTMENT
              </p>
              <p className="text-xs text-gray-600">
                Typical return on investment period for integrated smart
                building systems.
              </p>
            </div>

            <div className="pt-4 border-t md:border-t-0 border-primary md:pl-6">
              <h3 className="text-xl font-semibold">20-25%</h3>
              <p className="text-primary text-xs font-medium mb-2">
                CARBON FOOTPRINT REDUCTION
              </p>
              <p className="text-xs text-gray-600">
                Estimated decrease in operational CO2 emissions through resource
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
