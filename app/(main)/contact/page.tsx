import React from "react";
import Contact from "../sections/contact";

const page = () => {
  return (
    <>
      <section className="relative pt-20 flex flex-col items-center justify-center min-h-[400px] w-full h-full">
        <div className="relative z-10 text-center ">
          <h2 className="text-4xl font-rubik mb-4">
            We’d Love to Hear From You
          </h2>
          <p className="text-lg max-w-2xl text-gray-700">
            Whether you’re looking for reliable electronics, stylish apparel, or
            durable travel bags, our team is here to answer your questions and
            explore new opportunities with you. Reach out today and let’s build
            something lasting together.
          </p>
        </div>

        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={"/contact/banner.jpg"}
          alt={"banner"}
        />
      </section>
      <section>
        <Contact color={"bg-white"} />
      </section>
    </>
  );
};

export default page;
