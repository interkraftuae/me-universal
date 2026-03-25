"use client";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="min-h-[80dvh] lg:min-h-[95dvh] relative flex py-26 lg:py-0 justify-center items-center overflow-hidden">
      <video
        className="absolute w-full h-full object-cover inset-0"
        muted
        loop
        autoPlay
      >
        <source src={"/home/hero/hero.mp4"} type="video/mp4" />
      </video>
      <div className="absolute inset-0 size-full bg-black/50" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] container items-center gap-8">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-2">
          <h1 className="text-3xl lg:text-5xl font-montserrat tracking-tight text-gray-50">
            <span className="text-primary">Integrated Technologies</span> for{" "}
            <br className="hidden lg:block" />
            Smarter, Sustainable Buildings
          </h1>

          <p className="text-gray-200 mb-4 mt-3">
            Delivering end-to-end building and lifestyle technology solutions
            that enhance operational efficiency, comfort, and support long-term
            sustainability goals.
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start gap-4">
            <Link
              href="#solutions"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("solutions");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <button className="btn">Explore Solutions</button>
            </Link>

            <Link href={"/per-sqm-concept"}>
              <button className="btn bg-transparent! border! border-primary!">
                Visit PER SQM Experience
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Image
            src="/home/hero/hero-image.png"
            width={500}
            height={500}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
