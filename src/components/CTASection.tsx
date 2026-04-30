export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-turquoise-light" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark tracking-tight">
            Bring structure to your student workflows
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how Alva can help your team manage applications with clarity and confidence.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@alva.com?subject=Demo Request"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-dark rounded-xl hover:bg-dark-light transition-colors shadow-lg shadow-dark/10"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
