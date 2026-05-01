export function MobileAppMockup() {
  return (
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
  );
}
