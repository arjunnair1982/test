export function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Scattered communication",
      description: "Messages spread across WhatsApp, email, and SMS make it impossible to track what was said and when."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Endless follow-ups",
      description: "Hours spent chasing students for documents and updates that should be automatic."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c6.073.009 9.03-2.51 8.974-4.508m0 0c-1.116.009-1.054-.018 0 0zM9 20H4v-2a3 3 0 015.356-1.857M9 20v-2c0-1.1.9-2 2-2s2 .9 2 2v2m0 0h6" />
        </svg>
      ),
      title: "Unclear responsibility",
      description: "No one knows who owns what. Tasks fall through the gaps between consultant, student, and parents."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Missed deadlines",
      description: "Critical application dates slip through the cracks when everything lives in spreadsheets."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="problem">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
            Managing student applications shouldn&apos;t feel this messy
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-yellow/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-yellow/15 flex items-center justify-center text-brand-yellow mb-4">
                {problem.icon}
              </div>
              <h3 className="text-base font-semibold text-brand-charcoal">{problem.title}</h3>
              <p className="mt-2 text-sm text-brand-mid-grey leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
