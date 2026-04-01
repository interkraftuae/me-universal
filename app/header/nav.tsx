"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

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
          <NavLink
            key={item.label}
            item={item}
            mode={mode}
            active={path === item.link}
          />
        ) : (
          <Dropdown key={index} item={item} mode={mode} />
        ),
      )}
    </ul>
  );
};

export default Nav;

function NavLink({
  item,
  mode,
  active,
}: {
  item: { label: string; link: string };
  mode: string;
  active: boolean;
}) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    if (active) return;
    gsap.to(underlineRef.current, {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
      transformOrigin: "left center",
    });
  };

  const handleLeave = () => {
    if (active) return;
    gsap.to(underlineRef.current, {
      scaleX: 0,
      duration: 0.25,
      ease: "power2.in",
      transformOrigin: "right center",
    });
  };

  return (
    <li className={`relative ${mode}`}>
      <Link
        href={item.link}
        className={`relative inline-block text-[15px] ${active ? "text-primary" : ""}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {item.label}
        {!active && (
          <span
            ref={underlineRef}
            className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-current"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          />
        )}
        {active && (
          <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-current" />
        )}
      </Link>
    </li>
  );
}

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
  const underlineRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const bgRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [open, setOpen] = useState(false);
  // Track whether we're currently in an open state to prevent race conditions
  const isOpen = useRef(false);

  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      menuRef.current,
      { opacity: 0, y: 10, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power3.out" },
    );

    const validItems = itemRefs.current.filter(Boolean);
    if (validItems.length > 0) {
      gsap.fromTo(
        validItems,
        { opacity: 0, x: -8 },
        {
          opacity: 1,
          x: 0,
          duration: 0.22,
          ease: "power2.out",
          stagger: 0.04,
          delay: 0.06,
        },
      );
    }
  }, [open]);

  const handleEnter = () => {
    // Kill any ongoing close animation immediately
    gsap.killTweensOf(menuRef.current);
    gsap.killTweensOf(iconRef.current);
    gsap.killTweensOf(underlineRef.current);

    isOpen.current = true;
    setOpen(true);

    gsap.to(underlineRef.current, {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
      transformOrigin: "left center",
    });

    gsap.to(iconRef.current, {
      rotate: 180,
      duration: 0.28,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    isOpen.current = false;

    // Kill any ongoing open animation immediately
    gsap.killTweensOf(menuRef.current);
    gsap.killTweensOf(iconRef.current);
    gsap.killTweensOf(underlineRef.current);
    gsap.killTweensOf(itemRefs.current.filter(Boolean));

    gsap.to(underlineRef.current, {
      scaleX: 0,
      duration: 0.2,
      ease: "power2.in",
      transformOrigin: "right center",
    });

    gsap.to(iconRef.current, {
      rotate: 0,
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(menuRef.current, {
      opacity: 0,
      y: 10,
      scale: 0.97,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        // Only close if we haven't re-entered
        if (!isOpen.current) setOpen(false);
      },
    });
  };

  const handleItemEnter = (i: number) => {
    if (!bgRefs.current[i] || !barRefs.current[i]) return;
    gsap.killTweensOf(bgRefs.current[i]);
    gsap.killTweensOf(barRefs.current[i]);
    gsap.to(bgRefs.current[i], {
      xPercent: 0,
      duration: 0.22,
      ease: "power2.out",
    });
    gsap.to(barRefs.current[i], {
      scaleY: 1,
      duration: 0.18,
      ease: "power2.out",
    });
  };

  const handleItemLeave = (i: number) => {
    if (!bgRefs.current[i] || !barRefs.current[i]) return;
    gsap.killTweensOf(bgRefs.current[i]);
    gsap.killTweensOf(barRefs.current[i]);
    gsap.to(bgRefs.current[i], {
      xPercent: -101,
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(barRefs.current[i], {
      scaleY: 0,
      duration: 0.16,
      ease: "power2.in",
    });
  };

  return (
    <li
      className={`relative ${mode}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-2 relative text-[15px]">
        <span className="relative inline-block">
          {item.label}
          <span
            ref={underlineRef}
            className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-current"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          />
        </span>
        <div ref={iconRef}>
          <ChevronDown className="size-4" />
        </div>
      </button>

      <div
        ref={menuRef}
        className="absolute left-0 top-full pt-4 min-w-[240px] w-max"
        style={{ opacity: 0, pointerEvents: open ? "auto" : "none" }}
      >
        <div className="bg-white text-black shadow-2xl rounded-sm overflow-hidden border border-gray-100">
          {item.children?.map((child, i) => (
            <Link
              key={child.label}
              href={child.link}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative flex items-center px-5 py-3.5 text-[13.5px] text-gray-800 text-nowrap overflow-hidden"
              onMouseEnter={() => handleItemEnter(i)}
              onMouseLeave={() => handleItemLeave(i)}
            >
              <span
                ref={(el) => {
                  bgRefs.current[i] = el;
                }}
                className="absolute inset-0 bg-gray-50"
                style={{ transform: "translateX(-101%)" }}
              />
              <span
                ref={(el) => {
                  barRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 h-full w-[2.5px] bg-black"
                style={{ transform: "scaleY(0)", transformOrigin: "center" }}
              />
              <span className="relative">{child.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
