export function PortalAppSync() {
  return (
    <section className="py-16 lg:py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Built to work together
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Everything assigned in the portal is instantly reflected in the student app.
              Updates, uploads, and progress are synced in real time—so nothing gets missed,
              and everyone stays aligned.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { label: "Portal", desc: "Consultant assigns tasks and requests documents", color: "bg-brand-yellow" },
                { label: "Sync", desc: "Real-time synchronization across platforms", color: "bg-brand-yellow-light" },
                { label: "MyAlva", desc: "Student receives tasks and uploads documents", color: "bg-brand-yellow-deep" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full ${item.color} mt-2.5 flex-shrink-0`} />
                  <div>
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-sm text-gray-400"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sync Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Portal mockup */}
              <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-5 w-72">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                  <span className="text-sm font-medium">Portal</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-2.5 bg-white/20 rounded-full w-full" />
                  <div className="h-2.5 bg-white/10 rounded-full w-4/5" />
                  <div className="h-2.5 bg-white/10 rounded-full w-3/5" />
                </div>
              </div>

              {/* Sync arrows */}
              <div className="flex justify-center -my-3 relative z-10">
                <div className="bg-brand-yellow rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-brand-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </div>

              {/* App mockup */}
              <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-5 w-72 mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-yellow-deep" />
                  <span className="text-sm font-medium">MyAlva</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-2.5 bg-white/20 rounded-full w-full" />
                  <div className="h-2.5 bg-white/10 rounded-full w-4/5" />
                  <div className="h-2.5 bg-white/10 rounded-full w-2/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
