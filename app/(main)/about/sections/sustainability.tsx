import Link from "next/link";
import Image from "next/image";
const Sustainability = () => {
  return (
    <section className=" pt-12 pb-12 lg:pb-24  lg:max-w-full mx-auto bg-white">
      <div className="relative container  w-full lg:rounded-3xl overflow-hidden h-[380px] lg:h-[480px]">
        <Image
          src="/about/sustainability/img.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
        />
        {/* Gradient overlay — stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/75" />

        {/* Overlaid text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-12">
          <h2 className="text-2xl lg:text-4xl font-rubik uppercase font-light text-white mb-4">
            Sustainability &amp; Responsibility
          </h2>
          <p className="italic text-white/90 font-inter text-sm lg:text-base mb-4 max-w-4xl">
            Sustainability guides everyday decisions from product selection to
            supplier partnerships.
          </p>
          <p className="text-white/80 hidden lg:block font-inter leading-relaxed text-sm lg:text-base max-w-4xl mb-8">
            We actively support energy-efficient technologies, cleaner mobility
            solutions, and responsible manufacturing practices that help
            businesses reduce environmental impact without compromising
            operational performance. By promoting practical sustainability, we
            help our partners align commercial success with environmental
            responsibility.
          </p>
          <Link href="/sustainability">
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-yellow-300 transition">
              Learn more about our approach
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
