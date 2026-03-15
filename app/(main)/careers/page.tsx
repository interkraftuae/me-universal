"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type FormData = {
  name: string;
  contact: string;
  email: string;
  file: File | null;
  country: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const PERKS = [
  "Competitive compensation packages",
  "Collaborative cross-border teams",
  "Continuous learning & development",
  "Real impact from day one",
];

const CareersPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    file: null,
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(form.contact.trim())) {
      newErrors.contact = "Enter a valid contact number.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.file) {
      newErrors.file = "Please upload your CV.";
    } else {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(form.file.type))
        newErrors.file = "Only PDF or Word documents are accepted.";
      else if (form.file.size > 5 * 1024 * 1024)
        newErrors.file = "File size must be under 5MB.";
    }
    if (!form.country) newErrors.country = "Please select your country.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, file }));
    if (errors.file) setErrors((prev) => ({ ...prev, file: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("contact", form.contact);
    data.append("email", form.email);
    data.append("country", form.country);
    data.append("message", form.message);
    if (form.file) data.append("file", form.file);

    const res = await fetch("/api/careers", { method: "POST", body: data });

    if (res.ok) {
      setErrors({});
      setSubmitted(true);
    } else {
      const { error } = await res.json();
      setErrors({ message: error ?? "Submission failed. Please try again." });
    }
    setLoading(false);
  };

  const inputCls = (err?: string) =>
    `w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 ${
      err ? "border-red-400 bg-red-50" : "border-gray-300"
    }`;

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section
        className="relative flex items-center justify-center text-center pt-32 py-20 px-4 overflow-hidden"
        style={{ minHeight: "48vh" }}
      >
        <Image
          src="/careers/backgrund.jpg"
          alt=""
          fill
          className="object-left object-cover lg:object-top "
          priority
        />
        <div className="absolute inset-0 bg-black/40 w-full h-full" />

        <div className="relative z-10 max-w-2xl">
          <div className="bg-amber-50 inline-flex text-primary items-center gap-2 border text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="size-3" /> We're Hiring
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-rubik text-gray-200 leading-tight mb-4">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-base text-gray-300 md:text-lg leading-relaxed">
            Be part of a growing organization where innovation, collaboration,
            and excellence drive everything we do.
          </p>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(20,184,166,0.3), transparent)",
        }}
      />

      {/* ─── MAIN: TEXT + FORM ─── */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── LEFT ── */}
          <div className="">
            <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-3">
              Career Opportunities
            </p>
            <h2 className="text-3xl md:text-4xl font-rubik font-[500] leading-snug mb-5">
              Your next chapter
              <br />
              starts <span className="text-primary">here</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
              <p>
                We believe our employees' personal and professional success{" "}
                <em>is</em> the organization's success. We attract talented
                individuals and give them the support and tools to thrive.
              </p>
              <p>
                It doesn't matter if we have a vacancy or not — if you are
                talented, we will take you onboard.
              </p>
            </div>

            <ul className="space-y-3">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-sm  text-gray-700"
                >
                  <span className="flex-shrink-0 border border-amber-100 bg-amber-50 w-5 h-5 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="size-3 text-yellow-400" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* accent line */}
            <div className="mt-10 flex items-center gap-2 opacity-30">
              <div className="h-px w-10" style={{ background: "#2dd4bf" }} />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2dd4bf" }}
              />
              <div className="h-px w-5" style={{ background: "#2dd4bf" }} />
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="rounded-2xl border border-amber-50 bg-gray-100 p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <CheckCircle2 className="size-12 fill-green-500 text-gray-100" />
                </div>
                <h3 className="text-xl font-rubik text-primary mb-2">
                  Application Submitted!
                </h3>
                <p className="text-sm" style={{ color: "#94a3b8" }}>
                  Thank you for your interest. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls(errors.name)}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number *"
                      value={form.contact}
                      onChange={handleChange}
                      className={inputCls(errors.contact)}
                    />
                    {errors.contact && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={inputCls(errors.country)}
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="">Your Country *</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  {errors.country && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className={`flex items-center bg-white gap-3 rounded-lg px-4 py-3 cursor-pointer transition border ${errors.file ? "border-red-400" : " border-gray-400/50"}`}
                    style={{
                      background: errors.file ? "rgba(239,68,68,0.07)" : "",
                    }}
                  >
                    <span className="text-lg">📎</span>
                    <span className="text-sm">
                      {form.file ? (
                        <span style={{ color: "#2dd4bf" }}>
                          {form.file.name}
                        </span>
                      ) : (
                        <>
                          <span className="text-gray-400">
                            Upload CV · PDF, DOC, DOCX — max 5MB
                          </span>{" "}
                        </>
                      )}
                    </span>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  {errors.file && (
                    <p className="text-red-400 text-xs mt-1">{errors.file}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message (optional)"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border bg-white border-gray-300 placeholder:text-gray-400 rounded-lg px-3.5 py-2.5 text-sm outline-none transition resize-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className={`w-full shadow-md disabled:bg-gray-400 font-rubik text-white flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:scale-[1.01] ${
                    submitted
                      ? "bg-green-500 hover:bg-green-600"
                      : errors.message
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {loading ? (
                    <>Submitting...</>
                  ) : submitted ? (
                    <>Application Sent! ✓</>
                  ) : errors.message ? (
                    <>Submission Failed — Try Again</>
                  ) : (
                    <>
                      Submit Application <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
