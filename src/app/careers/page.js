export default function CareersPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-4xl mx-auto text-white">
      <h1 className="text-5xl font-bold mb-6 text-cyan-400">Careers at Adapt22</h1>
      <p className="text-lg text-gray-300 mb-8">
        We're on a mission to make AI + automation accessible to the businesses that keep our world running. If you're passionate about tech, entrepreneurship, and serving others — we’d love to hear from you.
      </p>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Who We Hire</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Creative problem-solvers with a bias toward action</li>
            <li>People who care deeply about client success and long-term impact</li>
            <li>Those who love learning, experimenting, and building</li>
            <li>Folks who can operate independently, but thrive in collaboration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How We Work</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Flexible, hybrid work culture with a strong team bond</li>
            <li>Optional 4-day work week — Fridays for rest, learning, focused work or service</li>
            <li>We prioritize impact, not hours</li>
            <li>Quarterly meetups in new cities (when remote)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Don’t see an open role?</h2>
          <p className="text-gray-300">
            That’s okay — we’re always looking for talented people who want to be part of something meaningful. Reach out and tell us how you could contribute.
          </p>
        </div>

        <div className="mt-6">
          <a
            href="mailto:jackson@adapt22.ai"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Email Us Your Resume
          </a>
        </div>
      </div>
    </section>
  );
}
