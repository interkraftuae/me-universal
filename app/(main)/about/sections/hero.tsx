import React from "react";

interface HeroProps {
  title: string;
  desc: string;
  image: string | React.ReactElement;
  mode?: "dark" | "light";
  layer?: boolean;
}

const Hero = ({
  title,
  desc,
  image,
  mode = "light",
  layer = false,
}: HeroProps) => {
  return (
    <section className="h-[calc(60vh)] lg:min-h-[calc(100vh-5rem)] relative flex items-end lg:items-center">
      {layer && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black" />
      )}
      <div className="container relative z-10 flex flex-col justify-center pb-20">
        <div className="max-w-2xl">
          <h1
            className={`text-4xl lg:text-5xl font-rubik mb-6 ${mode === "light" ? "text-gray-900" : "text-slate-50"}`}
          >
            {title}
          </h1>
          <p
            className={`text-lg max-w-xl leading-relaxed ${mode === "light" ? "text-gray-700" : "text-slate-50"}`}
          >
            {desc}
          </p>
        </div>
      </div>
      <div className="absolute right-0 overflow-hidden bottom-0 h-full w-full">
        {typeof image === "string" ? (
          <img
            src={image}
            alt="Green leaves"
            className="w-full h-full object-cover"
          />
        ) : (
          React.cloneElement(image as React.ReactElement<any>, {
            className:
              `w-full h-full object-cover rounded-b-2xl ${(image as React.ReactElement<any>).props.className ?? ""}`.trim(),
          })
        )}
      </div>
    </section>
  );
};

export default Hero;
