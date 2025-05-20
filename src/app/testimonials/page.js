// src/app/testimonials/page.js — Testimonials Page (Improved for Responsiveness & Polish)

export const metadata = {
  title: "Testimonials | Adapt22",
  description: "Hear how Adapt22 helps service-based businesses scale with AI + automation.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* Heading + Gold Bar */}
<div className="text-center space-y-4">
  <div className="inline-flex flex-col items-center">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-accentIndigo">Client Testimonials</h1>
    <div className="h-1 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[103%] bg-primaryDark rounded-full mt-2" />
  </div>
  <p className="text-md sm:text-lg textMuted max-w-3xl mx-auto text-balance">
    Here’s what real business owners are saying about working with Adapt22. From AI-driven systems to hands-off automation — our clients are getting time back, cutting costs, and scaling smarter.
  </p>
</div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                company: "Residential Plumbing – Knoxville, TN",
                text: "Our team was drowning in paperwork. Now, quotes and scheduling are handled with one click.",
              },
              {
                company: "Private Medical Practice – Charlotte, NC",
                text: "The automation around reminders, scheduling, and lead management has dramatically improved our workflow.",
              },
              {
                company: "Commercial Fencing & Decking – Houston, TX",
                text: "We were spending hours chasing down leads and manually quoting jobs. Adapt22 gave us back our evenings.",
              },
              {
                company: "Senior Care Facility – Orlando, FL",
                text: "Adapt22 built us an AI calling bot that actually answers questions and books appointments. It’s a game changer.",
              },
              {
                company: "Commercial Roofing – Tampa, FL",
                text: "The CRM & automations they implemented doubled our follow-up rate. We’re seeing way more closed jobs.",
              },
              {
                company: "Residential Landscaping – Boise, ID",
                text: "They handled everything: AI tools, setup, marketing — even our website. I just run my business now.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-surface p-6 rounded-xl shadow-md border-l-4 border-primaryDark hover:shadow-lg transition"
              >
                <p className="text-textPrimary italic mb-4 leading-relaxed">“{testimonial.text}”</p>
                <p className="text-accentIndigo font-semibold text-sm">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}