import React from "react";

const Form = () => {
  return (
    <div>
      <div className="container grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-montserrat font-semibold leading-snug mb-2">
            Find Your Perfect Product Solution
          </h2>

          <p className="text-gray-600 mb-6">
            Discover the Right Technology for Your Project
          </p>

          <div className="border-b border-gray-300 w-full mb-6"></div>

          <p className="text-gray-600 text-sm leading-relaxed mb-2">
            Whether you are planning a residential development, commercial
            building, hospitality project, or institutional facility, ME
            Universal offers a wide range of smart building products and
            integrated technology solutions designed to meet modern
            infrastructure needs.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Connect with our experts to explore how ME Universal can support
            your building with innovative, reliable, and future-ready solutions.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#cfcde2] p-8 rounded">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Your Name"
                className="p-3 text-sm rounded border border-gray-300 bg-white w-full"
              />

              <input
                placeholder="Your Email"
                className="p-3 text-sm rounded border border-gray-300 bg-white w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Phone Number"
                className="p-3 text-sm rounded border border-gray-300 bg-white w-full"
              />

              <input
                placeholder="Subject"
                className="p-3 text-sm rounded border border-gray-300 bg-white w-full"
              />
            </div>

            <select className="w-full p-3 text-sm rounded border border-gray-300 bg-white">
              <option>Select Service</option>
            </select>

            <select className="w-full p-3 text-sm rounded border border-gray-300 bg-white">
              <option>Select Country</option>
            </select>

            <button
              type="submit"
              className="w-full btn py-3! hover:bg-primary/80 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
