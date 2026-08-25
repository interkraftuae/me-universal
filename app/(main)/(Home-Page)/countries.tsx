const coverage = [
  { no: "01", country: "United Arab Emirates", region: "GCC" },
  { no: "02", country: "Saudi Arabia", region: "GCC" },
  { no: "03", country: "Qatar", region: "GCC" },
  { no: "04", country: "Oman", region: "GCC" },
  { no: "05", country: "Kuwait", region: "GCC" },
  { no: "06", country: "Iraq", region: "Middle East" },
  { no: "07", country: "Kenya", region: "Africa" },
  { no: "08", country: "Ethiopia", region: "Africa" },
  { no: "09", country: "India", region: "South Asia" },
];

function CornerMark({ className }: { className: string }) {
  return (
    <div className={`absolute w-4 h-4 pointer-events-none ${className}`}>
      <div className="absolute top-1/2 left-0 w-full h-px bg-primary/50" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-primary/50" />
    </div>
  );
}

export default function CountriesWeServe() {
  return (
    <section className="mt-20 py-20 bg-[#15141D] text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-primary text-xs tracking-widest mb-4 font-mono">
            // WHERE WE OPERATE
          </p>
          <h2 className="text-4xl font-montserrat tracking-tight mb-6">
            Smart Building Solutions Across the GCC, Middle East, Africa &amp; India
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            ME Universal supplies and installs smart building and lifestyle
            technology through exclusive partners and experience centers
            across India, the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Iraq,
            Kenya, and Ethiopia. Every market runs on our Per Sqm model — a
            simple, area-based pricing structure that lets architects,
            developers, and homeowners budget automation, lighting, and
            infrastructure upgrades for an entire property in one
            calculation.
          </p>
        </div>

        {/* Coverage schedule — styled like the coordination drawings / BOQs this audience actually reads */}
        <div className="relative border border-white/15 max-w-4xl mx-auto">
          <CornerMark className="-top-2 -left-2" />
          <CornerMark className="-top-2 -right-2" />
          <CornerMark className="-bottom-2 -left-2" />
          <CornerMark className="-bottom-2 -right-2" />

          {/* Title block */}
          <div className="flex items-center justify-between border-b border-white/15 px-6 py-3 font-mono text-[11px] tracking-widest text-white/50 uppercase">
            <span>Coverage Schedule</span>
            <span>09 Markets — Per Sqm Delivery</span>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[3rem_1fr_10rem] px-6 py-2 border-b border-white/10 font-mono text-[10px] tracking-widest text-white/40 uppercase">
            <span>No.</span>
            <span>Country</span>
            <span className="text-right">Region</span>
          </div>

          {coverage.map((row) => (
            <div
              key={row.country}
              className="grid grid-cols-[3rem_1fr_10rem] px-6 py-3 border-b border-white/5 last:border-b-0 text-sm hover:bg-white/[0.03] transition"
            >
              <span className="font-mono text-white/40">{row.no}</span>
              <span className="text-gray-200">{row.country}</span>
              <span className="text-right text-gray-500 font-mono text-xs tracking-wide uppercase">
                {row.region}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}