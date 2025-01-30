"use client";

export default function Solutions() {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 text-gray-200">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Our Solutions</h1>
      <p className="mb-6">We help SMBs integrate AI-driven solutions like...</p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white/10 p-4 rounded-md shadow hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow">
          <h2 className="text-xl text-cyan-300 font-semibold mb-2">Workflow Automation</h2>
          <p className="text-sm">
            Automate repetitive tasks, scheduling, or paperwork with AI integrations.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white/10 p-4 rounded-md shadow hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow">
          <h2 className="text-xl text-cyan-300 font-semibold mb-2">AI Chatbots</h2>
          <p className="text-sm">
            24/7 customer support that learns from interactions and reduces manual overhead.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white/10 p-4 rounded-md shadow hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow">
          <h2 className="text-xl text-cyan-300 font-semibold mb-2">Predictive Analytics</h2>
          <p className="text-sm">
            Use data-driven insights to forecast demand, optimize inventory, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
