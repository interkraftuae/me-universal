import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Logo from "@/app/header/Logo";
import Image from "next/image";
const quickLinks = [
  "Home",
  "About Us",
  "Platforms",
  "Careers",
  "Contact Us",
  "Commercial Solutions",
];
const legalLinks = ["Privacy Policy", "Terms & Conditions"];
const supportLinks = [
  "Vendor Registration",
  "Submit Plans",
  "Service Request",
  "Installation & Extended Warranty",
];

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-md font-montserrat tracking-tight font-bold text-gray-100 uppercase mb-2">
      {title}
    </h4>
    <ul className="space-y-3 font-roboto">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-xs text-gray-300 uppercase tracking-wide transition-colors hover:text-primary"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16  pt-12 pb-6 px-6 relative md:px-16">
      <Image
        src={"/footer.png"}
        alt={"footer bg"}
        fill
        className="object-cover"
      />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 col-span-2">
            <div>
              <Logo mode="dark" className="w-40" />
            </div>

            <p className="text-sm text-gray-200 leading-relaxed max-w-xl">
              ME Universal is a system aggregator offering a wide range of
              solutions tailored to the AEC industry. Our core objective is to
              provide advanced building and home automation systems that
              integrate seamlessly into both new and retrofit properties. By
              implementing these solutions, we help our clients achieve their
              specific energy efficiency goals through intelligent integration.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.facebook.com/p/Persqm-India-61564105435108/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-gray-200"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/persqmglobal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-gray-200"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07ZM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/persqm-india/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-gray-200"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@persqmglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-gray-200"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Legal Links" links={legalLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-200 tracking-widest uppercase">
            © 2026 MEUniversal · All Rights Reserved
          </p>
          <p className="text-xs text-gray-200 font-[500] tracking-widest uppercase">
            Created by{" "}
            <a
              href={"https://spok.digital"}
              className="text-red-500 underline underline-offset-2"
            >
              Spok Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
