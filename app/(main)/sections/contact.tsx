"use client";
import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
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
interface FormFields {
  name: string;
  phone: string;
  email: string;
  subject: string;
  service: string;
  country: string;
  message: string;
}
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
type FormErrors = Partial<Record<keyof FormFields, string>>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

// ─── Validation ───────────────────────────────────────────────────────────────

const PHONE_RE = /^[+\d][\d\s\-().]{6,19}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!fields.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_RE.test(fields.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!fields.service || fields.service === "SELECT SERVICE") {
    errors.service = "Please select a service.";
  }

  if (!fields.country || fields.country === "country") {
    errors.country = "Please select an country type.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

// ─── Submission ───────────────────────────────────────────────────────────────

async function submitContactForm(fields: FormFields): Promise<void> {
  const res = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.message ?? "Server error. Please try again.");
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const INITIAL: FormFields = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  service: "SELECT SERVICE",
  country: "country",
  message: "",
};

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p role="alert" className="mt-1 text-xs text-red-500">
      {msg}
    </p>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 border resize-none rounded-lg focus:outline-none transition ${
    hasError
      ? "border-red-400 focus:border-red-500 bg-red-50"
      : "border-gray-300 focus:border-primary"
  }`;
}

// ─── Component ────────────────────────────────────────────────────────────────

const Contact = ({ color = "bg-[#FFEDEE]" }: { color?: string }) => {
  const [fields, setFields] = useState<FormFields>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormFields, boolean>>
  >({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState("");

  // Live-validate only fields the user has already touched
  const getVisibleErrors = (): FormErrors => {
    const all = validate(fields);
    return Object.fromEntries(
      Object.entries(all).filter(([key]) => touched[key as keyof FormFields]),
    ) as FormErrors;
  };

  const set =
    (key: keyof FormFields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const updated = { ...fields, [key]: e.target.value };
      setFields(updated);
      if (touched[key]) {
        // Re-validate this field immediately after change
        setErrors((prev) => ({ ...prev, [key]: validate(updated)[key] }));
      }
    };

  const blur = (key: keyof FormFields) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validate(fields)[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validate(fields);

    // Mark every field touched so all errors show
    setTouched(
      Object.keys(INITIAL).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    );
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) return;

    setStatus("loading");
    setServerError("");

    try {
      await submitContactForm(fields);
      setStatus("success");
      setFields(INITIAL);
      setTouched({});
      setErrors({});
    } catch (err: any) {
      setStatus("error");
      setServerError(err?.message ?? "Something went wrong.");
    }
  };

  const visibleErrors = getVisibleErrors();

  // ── Success state ──
  if (status === "success") {
    return (
      <section className={`py-12 ${color} mb-14`} id="contact">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-10 text-center max-w-md mx-auto">
            <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="size-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-500 mb-6">
              We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-yellow-500 transition font-semibold"
            >
              Send Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 ${color} mb-14`} id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* ================= LEFT ================= */}
          <div>
            <h2 className="text-4xl font-[500] font-rubik text-black mb-4 leading-tight">
              Have Questions? We Have Answers
            </h2>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>
                ME Universal is an established premier provider of project
                solutions to the commercial real estate and industrial sectors.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We support a wide range of essential solutions across areas like
                automation, lighting or waste management. With a deep product
                portfolio and an extensive network of developers, builders,
                industry professionals and project partners, ME Universal has
                developed a reputation for designing and delivering complex
                customized solutions for both small and large projects.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a unique extended warranty service Unicare for our
                installations. Our team of technical experts offer round the
                clock support online and offline to ensure uninterrupted
                operations and top-notch after-sales service.
              </p>
            </div>
          </div>

          {/* ================= RIGHT: FORM ================= */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              {/* Row 1: Name + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={fields.name}
                    onChange={set("name")}
                    onBlur={blur("name")}
                    aria-invalid={!!visibleErrors.name}
                    className={inputClass(!!visibleErrors.name)}
                  />
                  <FieldError msg={visibleErrors.name} />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={fields.phone}
                    onChange={set("phone")}
                    onBlur={blur("phone")}
                    aria-invalid={!!visibleErrors.phone}
                    className={inputClass(!!visibleErrors.phone)}
                  />
                  <FieldError msg={visibleErrors.phone} />
                </div>
              </div>

              {/* Row 2: Email + Subject */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={fields.email}
                    onChange={set("email")}
                    onBlur={blur("email")}
                    aria-invalid={!!visibleErrors.email}
                    className={inputClass(!!visibleErrors.email)}
                  />
                  <FieldError msg={visibleErrors.email} />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={fields.subject}
                    onChange={set("subject")}
                    onBlur={blur("subject")}
                    aria-invalid={!!visibleErrors.subject}
                    className={inputClass(!!visibleErrors.subject)}
                  />
                  <FieldError msg={visibleErrors.subject} />
                </div>
              </div>

              {/* Row 3: Service + country */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <select
                    value={fields.service}
                    onChange={set("service")}
                    onBlur={blur("service")}
                    aria-invalid={!!visibleErrors.service}
                    className={`${inputClass(!!visibleErrors.service)} text-gray-600`}
                  >
                    <option value="SELECT SERVICE" disabled>
                      SELECT SERVICE
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <FieldError msg={visibleErrors.service} />
                </div>
                <div>
                  <select
                    name="country"
                    value={fields.country}
                    onChange={set("country")}
                    onBlur={blur("country")}
                    aria-invalid={!!visibleErrors.country}
                    className={`${inputClass(!!visibleErrors.country)} text-gray-600`}
                  >
                    <option value="">Your Country *</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Leave your Message"
                  rows={3}
                  value={fields.message}
                  onChange={set("message")}
                  onBlur={blur("message")}
                  aria-invalid={!!visibleErrors.message}
                  className={inputClass(!!visibleErrors.message)}
                />
                <FieldError msg={visibleErrors.message} />
              </div>

              {/* Server error banner */}
              {status === "error" && serverError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 bg-red-50 border border-red-300 text-red-600 text-sm rounded-lg px-4 py-3"
                >
                  <svg
                    className="size-4 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {serverError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-white py-2.5 hover:bg-primary/90 transition font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
