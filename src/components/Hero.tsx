"use client";

import Image from "next/image";
import { PortalMockup } from "./PortalMockup";
import { MobileAppMockup } from "./MobileAppMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <Image
        src="/Hero Background.png"
        alt="Hero Background"
        fill
        className="object-cover object-top opacity-50 pointer-events-none"
        priority
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-charcoal tracking-tight leading-tight">
            Simple, student-friendly communication with smart alerts — so you never miss a deadline.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-mid-grey leading-relaxed">
            Alva helps education consultants manage student applications, deadlines, and requirements — with a clear, real-time view of every student&apos;s progress
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-brand-charcoal bg-brand-yellow rounded-xl hover:bg-brand-yellow-deep transition-colors shadow-lg shadow-brand-yellow/20"
            >
              Request a Demo
            </a>
            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-brand-dark bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              See How It Works
              <svg className="ml-2 w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Dashboard + App Mockup */}
        <div className="mt-16 lg:mt-20 relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Portal Dashboard Mockup */}
            <PortalMockup />

            {/* Mobile App Mockup */}
            <MobileAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
