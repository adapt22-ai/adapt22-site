// src/app/industries/page.js — Final Adapt22 Themed Industries Page

export const metadata = {
  title: "Industries We Serve | Adapt22",
  description: "Discover the trades, field services, retail, construction, and medical industries Adapt22 empowers through AI + automation.",
};

export default function IndustriesPage() {
  const industries = [
    "Trades",
    "Service Businesses",
    "Construction",
    "Medical Practice",
    "B2B / B2C",
    "Retail Service",
    "Care Facilities",
    "Transporttion",
    "Commercial - Residential"
  ];

  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-extrabold text-primary">Industries We Serve</h1>
            <div className="h-1 w-[50ch] bg-accent rounded-full mx-auto mt-2" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We specialize in helping field-based SMBs modernize their operations with AI communication + automation across the U.S.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-center text-lg font-semibold text-primary border-l-4 border-primary hover:shadow-lg transition"
              >
                {industry}
              </div>
            ))}
          </div>

          {/* Catch-All Message */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary">Don’t See Your Industry?</h2>
            <p className="text-gray-800 text-md">
            No two businesses are the same — and we treat them that way. But whether it’s dropped leads, clunky workflows, or too much manual work, the root causes often echo across industries - the symptoms vary, but the core issues are the same. 
            </p>
            <p className="text-gray-700">
            At Adapt22, we make it our mission to deeply understand how you experience those problems — and then build smart, scalable systems around your reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}