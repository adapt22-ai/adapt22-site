"use client";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Adapt22 completely transformed how we handle communication with our customers. The AI chatbot alone saves us 10+ hours a week.",
      name: "Commercial Roofing - Tampa, FL.",
    },
    {
      quote: "We’re not tech-savvy at all, but Jackson and his team made everything simple. Now we have automated follow-ups and AI scheduling integrated into our CRM.",
      name: "Residential HVAC - Knoxville, TN.",
    },
    {
      quote: "I was skeptical about AI at first, but now I can’t imagine running my business without the systems Adapt22 built for us.",
      name: "Residential Fencing & Decking - Houston, TX.",
    },
    {
      quote: "In less than 30 days, we saw a noticeable increase in lead conversion just from their Google Ads automation system.",
      name: "Senior Care Facility - Orlando, FL.",
    },
    {
      quote: "Jackson understands business owners like us. He speaks our language and knows how to get results.",
      name: "Commercial Landscaping - Boise, ID.",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-cyan-400">What Our Clients Are Saying</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900/70 border border-gray-700 p-6 rounded-xl shadow-md"
          >
            <p className="italic text-gray-300 mb-4">“{testimonial.quote}”</p>
            <p className="text-cyan-400 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}