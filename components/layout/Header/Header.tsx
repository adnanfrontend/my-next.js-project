"use client";

import { useState, useEffect, useRef } from "react";
import { navigation } from "@/config/navigation";
import NavItem from "./NavItem";
import { Settings, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="w-full   bg-white rounded-[5.61px] mx-auto my-[5.61px] shadow-sm"
        style={{ fontFamily: "SF Compact, sans-serif" }}
        ref={menuRef}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">

          {/* LEFT */}
          <div className="flex items-center gap-6">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
              <div className="bg-pink-500 text-white w-8 h-8 flex items-center justify-center rounded-md font-bold flex-shrink-0">
                H
              </div>
              <span className="font-semibold text-lg text-pink-500">
                heyy
              </span>
              </a>
            </div>

            {/* Desktop Navigation — hidden below 870px */}
            <nav className="hidden items-center gap-4" style={{ display: "none" }}
              /* Tailwind can't do arbitrary breakpoints, so we use a style tag below */
            />
            <nav className="nav-desktop hidden items-center gap-4">
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </nav>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <Settings size={18} className="text-gray-500 cursor-pointer nav-desktop-icon" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-500 text-white flex items-center justify-center rounded-full text-sm font-semibold flex-shrink-0">
                M
              </div>
              <span className="nav-desktop-icon font-[600] text-[9.82px] text-black leading-[100%] tracking-[0]">
                Michael Johnson
              </span>
            </div>

            {/* Hamburger — visible below 870px */}
            <button
              className="hamburger-btn flex items-center justify-center w-9 h-9 rounded-[5.61px] text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150 focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className="transition-all duration-200"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {mobileOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
              </span>
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`mobile-menu overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "mobile-menu-open" : ""
          }`}
          style={{
            maxHeight: mobileOpen ? `${navigation.length * 56 + 72}px` : "0px",
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <div className="px-4 pb-4 pt-1 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                  mobile
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </nav>

            {/* Mobile user row */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-500 text-white flex items-center justify-center rounded-full text-sm font-semibold">
                  M
                </div>
                <span className="font-semibold text-[11px] text-black">Michael Johnson</span>
              </div>
              <Settings size={17} className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Responsive style overrides */}
      <style jsx global>{`
        /* Show desktop nav + icons above 870px */
        @media (min-width: 870px) {
          .nav-desktop { display: flex !important; }
          .nav-desktop-icon { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        /* Hide desktop nav + icons below 870px */
        @media (max-width: 869px) {
          .nav-desktop { display: none !important; }
          .nav-desktop-icon { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
