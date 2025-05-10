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
    "Transportation",
    "Commercial / Residential"
  ];

  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-extrabold text-accentIndigo">Industries We Serve</h1>
            <div className="h-1 w-[50ch] bg-primaryDark rounded-full mx-auto mt-2" />
            <p className="text-lg textMuted max-w-2xl mx-auto">
              We specialize in helping field-based SMBs modernize their operations with AI communication + automation across the U.S.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-surface p-6 rounded-xl shadow-md text-center text-lg font-semibold text-textPrimary border-l-4 border-primaryDark hover:shadow-lg transition"
              >
                {industry}
              </div>
            ))}
          </div>

          {/* Catch-All Message */}
          <div className="bg-surface p-8 rounded-lg shadow-md border-t-4 border-primaryDark text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-accentIndigo">Don’t See Your Industry?</h2>
            <p className="text-textPrimary text-md">
              No two businesses are the same — and we treat them that way. But whether it’s dropped leads, clunky workflows, or too much manual work, the root causes often echo across industries.
            </p>
            <p className="textMuted">
              At Adapt22, we make it our mission to deeply understand how you experience those problems — and then build smart, scalable systems around your reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}