"use client";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { href: "#hero", label: "INICIO" },
    { href: "#about", label: "PRODUCTOS" },
    { href: "#projects", label: "TALLERES" },
    /*     { href: "#blogs", label: "Blog" }, */
    { href: "#contact", label: "TIENDA" },
    { href: "#contact", label: "QUIÉNES SOMOS" },
  ];
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Desktop menu */}
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-primary">
            Indigo Mascotas
          </a>
          {/* Desktop menus */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-amber-500 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="py-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} onClick={toggleMobileMenu}>
                <a
                  href={item.href}
                  className="block py-2 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
