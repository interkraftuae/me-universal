"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
const Nav = ({
  data,
  mode,
}: {
  mode: string;
  data: {
    label: string;
    link: string;
    children?: { label: string; link: string }[];
  }[];
}) => {
  const path = usePathname();

  return (
    <ul className="hidden lg:flex items-center font-roboto gap-9">
      {data.map((item, index) =>
        item.link !== "" ? (
          <li
            key={item.label}
            className={`${
              path === item.link
                ? "underline text-primary underline-offset-2"
                : ""
            } ${mode}`}
          >
            <Link href={item.link}>{item.label}</Link>
          </li>
        ) : (
          <Dropdown key={index} item={item} mode={mode} />
        ),
      )}
    </ul>
  );
};

export default Nav;

function Dropdown({
  item,
  mode,
}: {
  item: {
    label: string;
    link: string;
    children?: { label: string; link: string }[];
  };
  mode: string;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleEnter = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
      );
    });

    gsap.to(iconRef.current, {
      rotate: 180,
      duration: 0.3,
    });
  };

  const handleLeave = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });

    gsap.to(iconRef.current, {
      rotate: 0,
      duration: 0.25,
    });
  };

  return (
    <li
      className={`relative ${mode}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-2">
        {item.label}
        <div ref={iconRef}>
          <ChevronDown className="size-4" />
        </div>
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute left-0 top-full pt-4 min-w-[240px] w-max"
        >
          <div className="bg-white text-black shadow-xl">
            {item.children?.map((child) => (
              <Link
                key={child.label}
                href={child.link}
                className="block px-4 py-3 hover:bg-gray-100 text-nowrap"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
