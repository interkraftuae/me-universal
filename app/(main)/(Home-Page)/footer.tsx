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

            <p className="text-sm text-gray-200 leading-relaxed max-w-[220px]">
              A dynamic trading and solutions company and a proud subsidiary of
              ME Universal
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <Facebook className="w-6 h-6 stroke-gray-200" />
              <Instagram className="w-6 h-6 stroke-gray-200" />
              <Linkedin className="w-6 h-6 stroke-gray-200" />
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
