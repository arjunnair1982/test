"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Alva" width={32} height={32} className="rounded-lg" />
            <span className="text-xl font-semibold text-dark">Alva</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#product" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium">
              Our Product
            </a>
            <a href="#about" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-dark rounded-lg hover:bg-dark-light transition-colors"
            >
              Request a Demo
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium py-2">
                Home
              </a>
              <a href="#product" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium py-2">
                Our Product
              </a>
              <a href="#about" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium py-2">
                About Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-dark transition-colors text-sm font-medium py-2">
                Contact
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-dark rounded-lg hover:bg-dark-light transition-colors mt-2"
              >
                Request a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
