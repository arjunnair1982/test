"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <Image
        src="/Hero Background.png"
        alt="Hero Background"
        fill
        className="object-cover object-top opacity-50 pointer-events-none"
        priority
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-charcoal tracking-tight leading-tight">
            Simple, student-friendly communication with smart alerts — so you never miss a deadline.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-mid-grey leading-relaxed">
            Alva helps education consultants manage student applications, deadlines, and requirements — with a clear, real-time view of every student&apos;s progress
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-brand-charcoal bg-brand-yellow rounded-xl hover:bg-brand-yellow-deep transition-colors shadow-lg shadow-brand-yellow/20"
            >
              Request a Demo
            </a>
            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-brand-dark bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              See How It Works
              <svg className="ml-2 w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Dashboard + App Mockup */}
        <div className="mt-16 lg:mt-20 relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Portal Dashboard Mockup */}
            <div className="md:col-span-3 bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                </div>
                <span className="text-xs text-gray-400 ml-2">Alva Portal</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-semibold text-brand-charcoal">Student Overview</h3>
                    <p className="text-xs text-gray-400 mt-0.5">42 active applications</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-yellow-50 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                    </div>
                    <div className="w-6 h-6 rounded bg-brand-yellow/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-brand-yellow-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xl font-semibold text-green-600">28</div>
                    <div className="text-xs text-gray-500 mt-0.5">On Track</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="text-xl font-semibold text-yellow-600">9</div>
                    <div className="text-xs text-gray-500 mt-0.5">Pending</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="text-xl font-semibold text-red-500">5</div>
                    <div className="text-xs text-gray-500 mt-0.5">At Risk</div>
                  </div>
                </div>

                {/* Student List */}
                <div className="space-y-2.5">
                  {[
                    { name: "Sarah Chen", uni: "Stanford University", status: "On Track", statusColor: "bg-green-100 text-green-700" },
                    { name: "James Wilson", uni: "University of Oxford", status: "Pending Docs", statusColor: "bg-yellow-100 text-yellow-700" },
                    { name: "Priya Sharma", uni: "TU Munich", status: "Deadline Soon", statusColor: "bg-red-100 text-red-700" },
                  ].map((student) => (
                    <div key={student.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-yellow-deep text-xs font-semibold">
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-brand-charcoal">{student.name}</div>
                          <div className="text-xs text-gray-400">{student.uni}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${student.statusColor}`}>
                        {student.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile App Mockup */}
            <div className="md:col-span-2 flex justify-center md:pt-4">
              <div className="w-64 bg-brand-charcoal rounded-3xl p-2 shadow-2xl shadow-gray-400/30">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-5 py-2 bg-brand-charcoal text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 py-3 bg-brand-yellow">
                    <div className="text-brand-charcoal text-sm font-semibold">MyAlva</div>
                    <div className="text-brand-charcoal/70 text-xs mt-0.5">Welcome back, Sarah</div>
                  </div>

                  {/* Tasks */}
                  <div className="p-4 space-y-2.5">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Your Tasks</div>
                    {[
                      { task: "Submit transcript", due: "Due tomorrow", urgent: true },
                      { task: "Personal essay draft", due: "Due in 5 days", urgent: false },
                      { task: "Recommendation form", due: "Completed", done: true },
                    ].map((item, i) => (
                      <div key={i} className={`p-3 rounded-lg border ${item.done ? "bg-gray-50 border-gray-100" : item.urgent ? "bg-yellow-50 border-yellow-100" : "bg-white border-gray-100"}`}>
                        <div className={`text-sm font-medium ${item.done ? "text-gray-400 line-through" : "text-brand-charcoal"}`}>
                          {item.task}
                        </div>
                        <div className={`text-xs mt-1 ${item.urgent ? "text-yellow-700 font-medium" : item.done ? "text-green-600" : "text-gray-400"}`}>
                          {item.due}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
