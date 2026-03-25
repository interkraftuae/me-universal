const steps = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "We begin by understanding the project requirements, building type, and performance objectives.",
  },
  {
    num: "02",
    title: "System Design",
    desc: "Our engineers develop a detailed system architecture aligned with project needs and building infrastructure.",
  },
  {
    num: "03",
    title: "Value Engineering",
    desc: "Solutions are optimized to balance performance, cost efficiency, and long-term operational value.",
  },
  {
    num: "04",
    title: "Supply & Install",
    desc: "Products and systems are supplied and installed in coordination with project stakeholders.",
  },
  {
    num: "05",
    title: "Commission & Handover",
    desc: "Final testing, system calibration, and documentation ensure the solution operates reliably after handover.",
  },
];

export default function ProcessSection() {
  return (
    <section className=" mt-20 ">
      <div className="container text-center">
        {/* Subtitle */}
        <p className="text-primary text-sm tracking-widest mb-4">
          // HOW WE WORK
        </p>

        {/* Heading */}
        <h2 className="text-4xl uppercase font-semibold font-montserrat mb-14">
          From Brief to Building - A Structured Process
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-[2px] bg-primary/40 -translate-y-1/2" />

            {/* Vertical line — mobile only */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-16 bottom-16 w-[2px] bg-primary/40" />
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex relative flex-col items-center`}
              >
                {/* Circle */}
                <div className="size-32  text-3xl lg:size-18 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 border-2 border-primary flex items-center justify-center text-primary bg-white font-medium">
                  {step.num}
                </div>

                {/* Title */}
                <div className="bg-white py-2 lg:py-0 mt-6">
                  <h3 className=" text-xl lg:text-lg font-medium font-roboto">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="lg:text-xs text-gray-500 mt-2 max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
