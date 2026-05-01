import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
                About Alva
              </h1>
              <p className="mt-4 text-lg text-brand-mid-grey leading-relaxed">
                Alva was built by people who have lived the international education journey firsthand — as students, advisors, and operators — and who believe that managing student applications should be structured, transparent, and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-charcoal tracking-tight text-center mb-16">
              The team behind Alva
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
              {/* Niketha */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-brand-yellow/30 mb-6">
                  <Image
                    src="/niketha.jpeg"
                    alt="Niketha"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-brand-charcoal">Niketha Sushilkumar, Co-Founder</h3>
                <p className="mt-4 text-sm text-brand-mid-grey leading-relaxed max-w-sm mx-auto">
                  Previously served as Country Head (India) at Trinity, a US-based strategy consulting firm, where she built and scaled its first international office, driving operational execution and building systems for growth.
                </p>
                <p className="mt-3 text-sm text-brand-mid-grey leading-relaxed max-w-sm mx-auto">
                  She is a Stanford GSB Sloan Fellow, where she focused on education, and a graduate of Dartmouth College. Having studied at leading global institutions, she brings a strong understanding of the student application journey and what it takes to support students effectively.
                </p>
              </div>

              {/* Flavia */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-brand-yellow/30 mb-6">
                  <Image
                    src="/flavia.jpeg"
                    alt="Flavia"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-brand-charcoal">Flavia Siquara de Andrade, Co-Founder</h3>
                <p className="mt-4 text-sm text-brand-mid-grey leading-relaxed max-w-sm mx-auto">
                  Experienced in building and structuring operations from the ground up. She led the creation of AGR Agricultura de Precisao, developing a solid operational model focused on efficiency, execution, and sustainable growth.
                </p>
                <p className="mt-3 text-sm text-brand-mid-grey leading-relaxed max-w-sm mx-auto">
                  With cross-border business experience, she connects vision with execution to deliver real results. Today, she applies this same approach to building solutions in education and technology, creating products that solve real problems and generate consistent value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-brand-yellow/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
                Want to learn more about how Alva works?
              </h2>
              <div className="mt-10">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-charcoal bg-brand-yellow rounded-xl hover:bg-brand-yellow-deep transition-colors shadow-lg shadow-brand-yellow/20"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
