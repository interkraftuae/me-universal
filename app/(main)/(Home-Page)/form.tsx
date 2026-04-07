"use client";
import React, { useState } from "react";

const SERVICES = [
  "Select Service",
  "Project Design",
  "Smart Consulting",
  "OEM Inquiry",
  "Sales",
  "Partnership",
  "Warranty",
  "Installation",
  "Service",
  "Complaints",
];
const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

type FormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  country: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialForm: FormFields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  service: "",
  country: "",
  message: "",
};

function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-()]{7,20}$/.test(form.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.service) errors.service = "Please select a service.";
  if (!form.country) errors.country = "Please select your country.";
  if (!form.message.trim()) errors.message = "Message is required.";

  return errors;
}

const Form = () => {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          enquiry: form.country, // ⚠️ map if backend expects enquiry
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send message");
      }

      // ✅ success
      setStatus("success");
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (err: any) {
      setStatus("error");
      setServerError(err?.message || "Something went wrong");
    }
  };
  const inputCls = (error?: string) =>
    `p-3 text-sm rounded border bg-white w-full focus:outline-none transition ${
      error
        ? "border-red-400 focus:border-red-500"
        : "border-gray-300 focus:border-primary"
    }`;

  return (
    <div className="container grid md:grid-cols-2 gap-16 items-start">
      {/* Left */}
      <div>
        <p className="text-primary text-xs tracking-widest mb-3">
          // GET IN TOUCH
        </p>
        <h2 className="text-3xl font-montserrat font-semibold leading-snug mb-3">
          Find Your Perfect Product Solution
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Discover the Right Technology for Your Project
        </p>
        <div className="w-12 h-0.5 bg-primary mb-6" />
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          ME Universal is an established premier provider of project solutions
          to the commercial real estate and industrial sectors.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We support a wide range of essential solutions across areas like
          automation, lighting or waste management. With a deep product
          portfolio and an extensive network of developers, builders, industry
          professionals and project partners, ME Universal has developed a
          reputation for designing and delivering complex customized solutions
          for both small and large projects.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We offer a unique extended warranty service Unicare for our
          installations. Our team of technical experts offer round the clock
          support online and offline to ensure uninterrupted operations and
          top-notch after-sales service.
        </p>
      </div>

      {/* Form */}
      <div className="bg-[#cfcde2] p-8 rounded">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Message Sent!
            </h3>
            <p className="text-gray-600 text-sm">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-primary text-sm underline underline-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className={inputCls(errors.name)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className={inputCls(errors.email)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className={inputCls(errors.phone)}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  className={inputCls(errors.subject)}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
            </div>

            <div>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputCls(errors.service)}
              >
                <option value="">Select Service *</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            <div>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={inputCls(errors.country)}
              >
                <option value="">Your Country *</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message *"
                rows={4}
                className={inputCls(errors.message) + " resize-none"}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn py-3! hover:bg-primary/80 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
