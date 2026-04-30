export function WhyAlva() {
  const reasons = [
    {
      icon: "🧩",
      title: "Simple to use. Easy to operate.",
      description: "Designed to be intuitive from day one — so your team and your students can start using it immediately, without complexity."
    },
    {
      icon: "⏱️",
      title: "Save time. Reduce operational workload.",
      description: "Automate communication, reminders, and follow-ups — minimizing manual work and reducing the need to hire additional staff."
    },
    {
      icon: "💎",
      title: "Build credibility. Reduce errors.",
      description: "Consistent guidance and smart reminders ensure nothing is missed — reducing mistakes, eliminating rework, and reinforcing your professionalism at every step."
    },
    {
      icon: "🔐",
      title: "Secure and centralized data.",
      description: "All student information, documents, and communication are safely stored in one place — organized, protected, and always accessible."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
            Why Alva
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:border-brand-yellow/30 transition-colors"
            >
              <div className="text-2xl mb-3">{reason.icon}</div>
              <h3 className="text-base font-semibold text-brand-charcoal">{reason.title}</h3>
              <p className="mt-2 text-sm text-brand-mid-grey leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
