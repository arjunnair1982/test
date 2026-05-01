export function WhyAlva() {
  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Simple to use. Easy to operate.",
      description: "Designed to be intuitive from day one — so your team and your students can start using it immediately, without complexity."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Save time. Reduce operational workload.",
      description: "Automate communication, reminders, and follow-ups — minimizing manual work and reducing the need to hire additional staff."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Build credibility. Reduce errors.",
      description: "Consistent guidance and smart reminders ensure nothing is missed — reducing mistakes, eliminating rework, and reinforcing your professionalism at every step."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure and centralized data.",
      description: "All student information, documents, and communication are safely stored in one place — organized, protected, and always accessible."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
            Why Alva
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Human Context Image Placeholder */}
          <div className="order-2 lg:order-1 h-full flex flex-col pt-2 lg:pt-0">
            <div className="w-full h-full min-h-[400px] bg-gray-200 animate-pulse rounded-2xl shadow-sm border border-gray-100" />
            <p className="mt-4 text-sm text-brand-mid-grey/60 text-center italic">Image placeholder for advisor reviewing applications</p>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:border-brand-yellow/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-yellow/15 flex items-center justify-center text-brand-yellow mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-base font-semibold text-brand-charcoal">{reason.title}</h3>
                <p className="mt-2 text-sm text-brand-mid-grey leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
