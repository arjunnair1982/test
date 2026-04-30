export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set up student workflows",
      description: "Define requirements, deadlines, and tasks for each student and their target universities."
    },
    {
      number: "02",
      title: "Students receive tasks and reminders",
      description: "Your students get clear instructions on the MyAlva app, with timely notifications to keep them on track."
    },
    {
      number: "03",
      title: "Track progress in real time",
      description: "Stay on top of every student with a live view of what&apos;s done, what&apos;s pending, and what needs attention."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Three simple steps to bring structure to your process
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gray-200" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dark text-white text-sm font-semibold mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
