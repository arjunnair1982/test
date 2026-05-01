export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-yellow/10" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
            Bring structure to your student workflows
          </h2>
          <p className="mt-4 text-lg text-brand-mid-grey">
            See how Alva can help your team manage applications with clarity and confidence.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@alva.com?subject=Demo Request"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-charcoal bg-brand-yellow rounded-xl hover:bg-brand-yellow-deep transition-colors shadow-lg shadow-brand-yellow/20"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
