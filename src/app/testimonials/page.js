export const metadata = {
  title: "Testimonials | Adapt22",
  description: "Hear how Adapt22 helps service-based businesses scale with AI + automation.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Heading + Gold Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-5xl font-extrabold text-primary">Client Testimonials</h1>
              <div className="h-1 w-[103%] bg-accent rounded-full mt-2" />
            </div>
            <p className="text-lg text-gray-700 max-w-3xl">
              Here’s what real business owners are saying about working with Adapt22. From AI-driven systems to hands-off automation — our clients are getting time back, cutting costs, and scaling smarter.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "Residential Fencing & Decking - Houston, TX.",
                text: "We were spending hours chasing down leads and manually quoting jobs. Adapt22 gave us back our evenings.",
              },
              {
                company: "Commercial Roofing - Tampa, FL.",
                text: "The CRM & automations they implemented doubled our follow-up rate. We’re seeing way more closed jobs.",
              },
              {
                company: "Residential HVAC - Knoxville, TN.",
                text: "Our team was drowning in paperwork. Now, quotes and scheduling are handled with one click.",
              },
              {
                company: "Senior Care Facility - Orlando, FL.",
                text: "Adapt22 built us an AI calling bot that actually answers questions and books appointments. It’s a game changer.",
              },
              {
                company: "Commercial Landscaping - Boise, ID.",
                text: "They handled everything: AI tools, setup, marketing — even our website. I just run my business now.",
              },
              {
                company: "Private Medical Practice - Charlotte, NC.",
                text: "The automation around reminders, scheduling, and lead management has dramatically improved our workflow.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition"
              >
                <p className="text-gray-800 italic mb-4">“{testimonial.text}”</p>
                <p className="text-primary font-semibold text-sm">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}