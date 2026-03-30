import React from "react";

const HeadTitle = ({ title, desc }: { title: string; desc: string[] }) => {
  return (
    <section className="container mt-20">
      <h2 className="text-3xl mb-6 font-montserrat font-medium">{title}</h2>
      <div>
        <p>
          {desc.map((item, id) => (
            <span key={id} className="block">
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default HeadTitle;
