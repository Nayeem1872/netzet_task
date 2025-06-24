"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !(menuRef.current as HTMLDivElement).contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative flex items-center justify-center lg:justify-between px-6 mt-3 sm:mt-9 max-w-[1160px] mx-auto">
      <div className="text-2xl font-bold">
        <Image
          src="/images/logo.png"
          alt="Fametonic Logo"
          width={169.2650604248047}
          height={72.25074768066406}
          className="h-auto w-[107.78px] lg:w-[169.27px]"
        />
      </div>

      <nav className="hidden lg:flex gap-10">
        <a
          href="/about"
          className="text-gray-300 text-lg hover:text-white transition-colors font-['Figtree']"
        >
          About us
        </a>
        <a
          href="/contact"
          className="text-gray-300 text-lg hover:text-white transition-colors font-['Figtree']"
        >
          Contact
        </a>
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white cursor-pointer"
      >
        <Menu size={28} />
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="
            lg:hidden 
            absolute top-full left-0 right-0 mt-4 
            bg-gray-800/90 backdrop-blur-sm 
            rounded-lg shadow-xl z-20 mx-4
          "
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} className="text-white cursor-pointer" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 pb-8">
            <a
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 text-xl hover:text-white transition-colors font-['Figtree']"
            >
              About us
            </a>
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 text-xl hover:text-white transition-colors font-['Figtree']"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
