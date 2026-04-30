export function WhoItsFor() {
  const audiences = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Education consultants",
      description: "Independent consultants managing their own student caseload"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h.01M11 7h2m-2 4h.01M5 7h1m-1 4h.01M9 11h1m-1 4h.01M5 11h1m-1 4h.01M15 7h1m-1 4h.01M19 11h1m-1 4h.01" />
        </svg>
      ),
      title: "College admissions advisors",
      description: "School-based advisors supporting students through the application process"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: "Boutique consulting firms",
      description: "Small to mid-sized firms delivering high-touch, premium service"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
            Who it&apos;s for
          </h2>
          <p className="mt-4 text-lg text-brand-mid-grey">
            Built for consultants who value structure and quality
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="text-center p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-yellow/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow mx-auto mb-5">
                {audience.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-charcoal">{audience.title}</h3>
              <p className="mt-2 text-sm text-brand-mid-grey leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
