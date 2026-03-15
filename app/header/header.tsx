"use client";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const menuLinks = [
    { label: "Home", link: "/" },
    {
      label: "About us",
      link: "",
      children: [
        { label: "about us", link: "/lighting" },
        { label: "sustaiinability", link: "/automation" },
        { label: "per sqm concept", link: "/networking" },
      ],
    },
    {
      label: "Products",
      link: "",
      children: [
        { label: "Apparel & Footwear Accessories", link: "/lighting" },
        { label: "Cooling jacket", link: "/automation" },
        { label: "Ai pool monitoring sensor", link: "/networking" },
        { label: "Air Purifier & Odour Control", link: "/networking" },
        { label: "Kitchen Air Conditioner", link: "/networking" },
        { label: "Push Pull Locks", link: "/networking" },
        { label: "Digital Electric Towel Warmer", link: "/networking" },
      ],
    },
    {
      label: "Commercial Solutions",
      link: "",
      children: [
        { label: "Air Powered Laundry Collection", link: "/lighting" },
        { label: "Building Automation System", link: "/automation" },
        { label: "Centralised Vacuum Cleaning", link: "/networking" },
        { label: "DC Lighting & Automation", link: "/networking" },
        { label: "Highrise Community Automation", link: "/networking" },
        { label: "Mirror TV", link: "/networking" },
        { label: "Office & AV Automation", link: "/networking" },
        { label: "Public Address & Evacuation", link: "/networking" },
        { label: "Retrofit Wireless Automation", link: "/networking" },
      ],
    },
    {
      label: "Platforms",
      link: "",
      children: [
        { label: "Aguardio: Water Conservation", link: "/lighting" },
        { label: "Aiello: Voice Assist Concierge", link: "/automation" },
        { label: "Analytika: Building Diagnostics", link: "/networking" },
        { label: "Archflow: HVAC Optimisation", link: "/networking" },
        { label: "Deepscent: Digital Fragrance", link: "/networking" },
      ],
    },
    { label: "Blogs", link: "/blogs" },
    { label: "Careers", link: "/careers" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const normalizedPath = pathName.toLowerCase();
    if (normalizedPath !== "/") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [pathName]);
  const textColor = scrolled
    ? "text-white"
    : isDark
      ? "text-black"
      : "text-white";

  const colorMode = scrolled ? false : isDark ? true : false;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-20 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-lg" : ""}`}
    >
      <nav className="w-full flex container py-4 items-center gap-5 justify-between">
        <Logo
          mode={colorMode ? "light" : "dark"}
          className="w-45 relative z-10"
        />
        <Nav mode={textColor} data={menuLinks} />
        <MobileNav data={menuLinks} />

        <div className="hidden  lg:flex items-center gap-4">
          <button className="btn">Contact</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
