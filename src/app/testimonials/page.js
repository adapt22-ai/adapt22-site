export const metadata = {
  title: "Testimonials | Adapt22",
  description: "Hear how Adapt22 helps service-based businesses scale with AI + automation.",
};

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto text-white">
      <h1 className="text-5xl font-bold mb-6 text-cyan-400">Client Testimonials</h1>
      <p className="text-lg text-gray-300 mb-12 max-w-3xl">
        Here’s what real business owners are saying about working with Adapt22. From AI-driven systems to hands-off automation — our clients are getting time back, cutting costs, and scaling smarter.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            company: "Residential Fencing & Decking - Houston, TX.",
            text: "We were spending hours chasing down leads and manually quoting jobs. Adapt22 gave us back our evenings."
          },
          {
            company: "Commercial Roofing - Tampa, FL.",
            text: "The CRM & automations they implemented doubled our follow-up rate. We’re seeing way more closed jobs."
          },
          {
            company: "Residential HVAC - Knoxville, TN.",
            text: "Our team was drowning in paperwork. Now, quotes and scheduling are handled with one click."
          },
          {
            company: "Senior Care Facility - Orlando, FL.",
            text: "Adapt22 built us an AI calling bot that actually answers questions and books appointments. It’s a game changer."
          },
          {
            company: "Commercial Landscaping - Boise, ID.",
            text: "They handled everything: AI tools, setup, marketing — even our website. I just run my business now."
          },
          {
            company: "Private Medical Practice - Charlotte, NC.",
            text: "The automation around reminders, scheduling, and lead management has dramatically improved our workflow."
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md space-y-4"
          >
            <p className="text-gray-300 italic">“{testimonial.text}”</p>
            <p className="text-cyan-400 font-semibold text-sm">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
