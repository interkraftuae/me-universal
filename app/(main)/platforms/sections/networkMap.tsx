type MonitorItem = {
  label: string;
  desc: string;
};

type HowItWorksSectionProps = {
  heading: string;
  subheading: string;
  hubLabel: string;
  hubDesc: string;
  items: MonitorItem[];
  centerLabel?: string;
};

const HowItWorksSection = ({
  heading,
  subheading,
  hubLabel,
  hubDesc,
  items,
  centerLabel,
}: HowItWorksSectionProps) => {
  return (
    <section className="mt-24 ">
      <div className="container max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-medium">
            // How it works
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-[#1a1a1a] max-w-sm leading-tight">
              {heading}
            </h2>
            <p className="text-sm text-gray-400 max-w-xs md:text-right leading-relaxed border-l-2 border-primary/20 pl-4 md:border-l-0 md:border-r-2 md:pr-4 md:pl-0">
              {subheading}
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-primary/40 via-gray-200 to-transparent" />
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Hub card */}
          <div className="lg:w-72 shrink-0 bg-primary rounded-2xl p-8 flex flex-col justify-between min-h-[200px] lg:min-h-0 relative overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-white/10" />

            <div className="relative">
              <div className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center mb-7">
                <div className="w-2 h-2 rounded-full bg-white/70" />
              </div>
              <p className="text-white font-semibold text-lg leading-snug tracking-tight">
                {hubLabel}
              </p>
              <p className="text-white/50 text-xs mt-2 leading-relaxed">
                {hubDesc}
              </p>
            </div>

            {centerLabel && (
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-10 relative">
                {centerLabel}
              </p>
            )}
          </div>

          {/* Items grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl px-6 py-5 flex gap-4 items-start group hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <span className="text-primary/25 font-mono text-[11px] pt-0.5 shrink-0 group-hover:text-primary/60 transition-colors duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors duration-200 leading-snug">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
