import React from "react";
import Contact from "../sections/contact";

const page = () => {
  return (
    <>
      <section className="relative pt-20 flex flex-col items-center justify-center min-h-[400px] w-full h-full">
        <div className="relative z-10 text-center container ">
          <h2 className="text-4xl font-rubik mb-4 text-gray-50">
            We’d Love to Hear From You
          </h2>
          <p className="text-lg max-w-2xl text-gray-100 mx-auto">
            Whether you’re looking for reliable electronics, stylish apparel, or
            durable travel bags, our team is here to answer your questions and
            explore new opportunities with you. Reach out today and let’s build
            something lasting together.
          </p>
        </div>

        <img
          className="absolute inset-0 w-full h-full object-top object-cover"
          src={"/contact.jpg"}
          alt={"banner"}
        />
        <div className="bg-black/60 absolute inset-0 size-full " />
      </section>
      <section>
        <Contact color={"bg-white"} />
      </section>
      <div className="container space-y-5">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl lg:text-4xl font-rubik font-semibold text-gray-900">
            Visit Our Location
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            We are proudly based in United Arab Emirates, serving clients with cutting-edge
            automation and technology solutions. Feel free to explore our
            location or visit us for a consultation.
          </p>
        </div>

        {/* Map Card */}
        <div className="relative min-h-[420px] group bg-white">
          {/* Top Bar */}
          <div className=" overflow-hidden">
            {/* Map iframe */}
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109820.85542852838!2d55.380653!3d25.184713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67967665c997%3A0x1b7a250ad795bdc!2sME%20Integra%20Wireless%20Equipment%20and%20Instruments%20Trading%20LLC!5e1!3m2!1sen!2sin!4v1775477929709!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] group-hover:scale-[1.01] transition-transform duration-500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
