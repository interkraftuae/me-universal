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
    <section className="mt-24 bg-gray-50 py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-primary text-xs tracking-widest mb-3">
              // HOW WE WORK
            </p>
            <h2 className="text-4xl uppercase font-semibold font-montserrat leading-tight">
              From Brief to Building
              <br />A Structured Process
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-primary/30" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group relative px-4"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-sm bg-white group-hover:bg-primary group-hover:text-white transition-all duration-200 z-10 relative">
                {step.num}
              </div>
              <div className="mt-5">
                <div className="w-6 h-0.5 bg-primary mx-auto mb-3" />
                <h3 className="text-sm font-semibold font-roboto tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px] mx-auto">
                  {step.desc}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="lg:hidden w-px h-8 bg-primary/30 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
