export function WhatAlvaDoes() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100" id="product">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
            A system designed to keep everything on track
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Portal */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Alva Portal</h3>
            <p className="mt-3 text-brand-mid-grey leading-relaxed">
              The portal is where you manage all student communication and progress.
              You can assign tasks, request documents, track deadlines, and see exactly
              what&apos;s done, pending, or delayed.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Centralised student management",
                "Task assignment and tracking",
                "Document request and status monitoring",
                "Deadline oversight across all students"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-brand-mid-grey">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile App */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-yellow-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-charcoal">MyAlva Mobile App</h3>
            <p className="mt-3 text-brand-mid-grey leading-relaxed">
              The mobile app is where students see exactly what they need to do.
              They can view tasks, upload documents, and track progress in one place.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Clear task visibility for students",
                "Document upload and sharing",
                "Deadline reminders and notifications",
                "Progress tracking at a glance"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-yellow-deep mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-brand-mid-grey">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-brand-charcoal">
            &ldquo;Everything is structured, visible, and followed through.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
