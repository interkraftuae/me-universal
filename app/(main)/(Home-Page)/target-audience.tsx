import React from "react";
import { BadgeCheck } from "lucide-react";
const TargetAudience = () => {
  const cards = [
    {
      title: "Architects & Interior Designers",
      desc: "We support architects and designers by integrating smart systems early in the design phase. Our team provides CAD-compatible layouts, product specifications, and visualization support, enabling seamless integration of smart technologies into modern architectural concepts.",
    },
    {
      title: "MEP & Specialist Consultants",
      desc: "Our technical team works closely with consultants by providing BOQ preparation, protocol selection, system architecture planning, and detailed coordination drawings to ensure smart building technologies integrate efficiently with core building systems.",
    },
    {
      title: "Developers & Investors",
      desc: "ME Universal helps developers evaluate the financial and operational benefits of smart building technologies, including energy optimization potential, building efficiency improvements, and long-term asset value enhancement.",
    },
    {
      title: "Engineering Companies",
      desc: "We provide supply, integration, and technical partnership services for contractors and EPC companies, including product support, system integration, installation guidance, and post-deployment assistance.",
    },
  ];
  return (
    <section className="bg-[#15141D] py-20">
      <div className="container text-center">
        <span className=" text-primary">// Our Target Audience</span>
        <h1 className="font-montserrat mt-3 uppercase tracking-tight text-4xl font-semibold text-gray-200">
          Designed around your role
        </h1>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12 ">
        {cards.map((item, key) => (
          <div
            key={key}
            className="text-white bg-linear-to-br from-[#5344C61F12] to-primary/20 border border-gray-600 px-5 py-10 rounded "
          >
            <div className=" flex flex-col items-center justify-center gap-2">
              <BadgeCheck className="size-10" />
            </div>
            <h3 className="text-2xl lg:text-lg mt-6 text-center">
              {item.title}
            </h3>
            <p className="text-sm mt-4 text-center ">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;
