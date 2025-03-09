"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Close mobile menu when clicking outside of the drawer
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Navigation links (same for both mobile and desktop)
  const navLinks = [
    { href: "services", label: "Services" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
    { href: "book", label: "Book now" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 lg:px-8 py-4 lg:py-8">
      {/* Logo / Site Title */}
      <div className="text-4xl lg:text-7xl font-bold font-yoyo tracking-wider uppercase">
        <Link href="/">DiscoDen</Link>
      </div>

      {/* Mobile Burger Icon */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex md:hidden text-xl lg:text-2xl font-neue focus:outline-none focus:ring-2 focus:ring-indigo-600"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <AiOutlineClose size={30} /> : <CiMenuBurger size={30} />}
      </button>

      {/* Desktop Navigation remains unchanged */}
      <ul className="hidden md:flex space-x-4 lg:space-x-6 text-xl lg:text-2xl font-neue">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Button id="contact-hero" title={link.label} link={link.href} />
          </li>
        ))}
      </ul>

      {/* Mobile Menu: Overlay and Sliding Drawer */}
      {menuOpen && (
        <>
          {/* Overlay to capture outside clicks */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Drawer */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black z-[99] transform transition-transform duration-500 ease-in-out"
          >
            <div className="p-4">
              {/* Close button inside the drawer */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="mb-12 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                aria-label="Close menu"
              >
                <AiOutlineClose size={30} />
              </button>
              <ul className="space-y-6 text-lg lg:text-2xl font-neue">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Button
                      id="contact-hero"
                      title={link.label}
                      link={link.href}
                      onClick={() => setMenuOpen(false)}
                    />
                    <div className="bg-gray-600 h-[1px] w-full mt-3"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
