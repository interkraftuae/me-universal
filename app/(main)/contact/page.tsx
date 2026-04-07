import React from "react";
import Contact from "../sections/contact";

const page = () => {
  return (
    <>
      <section className="relative pt-20 flex flex-col  items-center justify-center min-h-[400px] w-full h-full">
        <div className="relative z-10 text-center  ">
          <h2 className="text-4xl font-rubik mb-4 text-gray-50">
            We’d Love to Hear From You
          </h2>
          <p className="text-lg max-w-2xl text-gray-100 mx-auto">
            ME Universal offers innovative and practical solutions for
            residential, commercial, and industrial spaces designed to help you
            achieve your sustainability goals, including improved energy
            efficiency, a higher return on investment, and increased property
            valuation.Please connect with us so our specialized team can assist
            you with the best solutions for your needs.
          </p>
        </div>

        <img
          className="absolute inset-0 w-full h-full object-top object-cover"
          src={"/contact.jpg"}
          alt={"banner"}
        />
        <div className="bg-black/60 absolute inset-0 size-full " />
      </section>
      <section className="w-full">
        <Contact card={true} color={"bg-white"} />
      </section>
      <div className="container space-y-5">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl lg:text-4xl font-rubik font-semibold text-gray-900">
            Visit Our Location
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            We are proudly based in United Arab Emirates, serving clients with
            cutting-edge automation and technology solutions. Feel free to
            explore our location or visit us for a consultation.
          </p>
        </div>

        {/* Map Card */}
        <div className="relative min-h-[420px] group bg-white">
          {/* Top Bar */}
          <div className=" overflow-hidden">
            {/* Map iframe */}
            <iframe
              title="Our Location"
              src="https://maps.google.com/maps?q=25.184713,55.380653&z=14&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] group-hover:scale-[1.01] transition-transform duration-500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
