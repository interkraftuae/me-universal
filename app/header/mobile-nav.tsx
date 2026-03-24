"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { createPortal } from "react-dom";
import Logo from "./Logo";

type NavItem = {
  label: string;
  link: string;
  children?: { label: string; link: string }[];
};

const AccordionItem = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      gsap.set(bodyRef.current, { height: 0, opacity: 0 });
    }
  }, []);

  const toggle = () => {
    if (!bodyRef.current) return;
    if (!open) {
      gsap.to(bodyRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    } else {
      gsap.to(bodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
    setOpen((prev) => !prev);
  };

  if (!item.children) {
    return (
      <div className="border-b border-gray-100">
        <a
          href={item.link}
          onClick={onClose}
          className="block py-4 text-2xl font-medium text-gray-800 hover:text-gray-500 transition-colors"
        >
          {item.label}
        </a>
      </div>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={toggle}
        className="w-full flex items-center text-2xl justify-between py-4 font-medium text-gray-800 hover:text-gray-500 transition-colors focus:outline-none"
      >
        <span>{item.label}</span>
        <svg
          className="w-4 h-4 text-gray-400 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div ref={bodyRef} className="overflow-hidden">
        <div className="pb-2 pl-3 flex flex-col">
          {item.children.map((child) => (
            <div key={child.link + child.label}>
              <a
                href={child.link}
                onClick={onClose}
                className="block py-2.5 text-lg text-gray-700 hover:text-gray-800 transition-colors"
              >
                {child.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileNav = ({ data }: { data: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  // Ensure portal mounts only client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && overlayRef.current) {
      gsap.set(overlayRef.current, { xPercent: 100 });
    }
  }, [mounted]);

  useEffect(() => {
    if (!isOpen) return;
    gsap.set(itemsRef.current, { opacity: 0, y: 10 });
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      gsap.to(overlayRef.current, {
        xPercent: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(itemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.06,
        ease: "power2.out",
        delay: 0.2,
      });
    });

    gsap.to(line1Ref.current, { rotate: 45, y: 7, duration: 0.3 });
    gsap.to(line2Ref.current, { opacity: 0, duration: 0.2 });
    gsap.to(line3Ref.current, { rotate: -45, y: -7, duration: 0.3 });
  };

  const closeMenu = () => {
    gsap.to(itemsRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      stagger: 0.04,
    });
    gsap.to(overlayRef.current, {
      xPercent: 100,
      duration: 0.4,
      ease: "power3.in",
      delay: 0.1,
      onComplete: () => {
        setIsOpen(false);
        document.body.style.overflow = "";
      },
    });
    gsap.to(line1Ref.current, { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(line2Ref.current, { opacity: 1, duration: 0.3 });
    gsap.to(line3Ref.current, { rotate: 0, y: 0, duration: 0.3 });
  };

  const handleToggle = () => (isOpen ? closeMenu() : openMenu());

  const overlay = (
    <div
      ref={overlayRef}
      className="bg-white overflow-y-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        willChange: "transform",
      }}
    >
      {/* Logo bar */}
      <div className="sticky top-0 left-0 right-0 bg-white z-10  container py-4 border-b border-gray-100 flex items-center  justify-between">
        <Logo mode="light" className="w-45" />
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="flex items-center justify-center w-8 h-8 focus:outline-none"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M1 1L17 17M17 1L1 17"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Nav items */}
      <nav className="px-6 pt-4 pb-10">
        <ul className="flex flex-col">
          {data.map((item, i) => (
            <li
              key={item.label}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
            >
              <AccordionItem item={item} onClose={closeMenu} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="block lg:hidden">
      {/* Hamburger — sits in the header normally */}
      <button
        onClick={handleToggle}
        aria-label="Toggle menu"
        className="relative z-[200] flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
      >
        <span
          ref={line1Ref}
          className="block h-[2px] w-6 bg-gray-100 rounded-sm origin-center"
        />
        <span
          ref={line2Ref}
          className="block h-[2px] w-6 bg-gray-100 rounded-sm origin-center"
        />
        <span
          ref={line3Ref}
          className="block h-[2px] w-6 bg-gray-100 rounded-sm origin-center"
        />
      </button>

      {/* Overlay rendered into document.body via portal — escapes header stacking context */}
      {mounted && createPortal(overlay, document.body)}
    </div>
  );
};

export default MobileNav;
