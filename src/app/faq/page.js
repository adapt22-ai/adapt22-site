"use client";

export default function FAQPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-white">
      <h1 className="text-5xl font-bold mb-8 text-gold-400 text-center">Frequently Asked Questions</h1>

      <div className="space-y-8 text-left">
        <div>
          <h2 className="text-xl font-semibold text-cyan">What industries do you work with?</h2>
          <p className="text-gray-300 mt-2">
            We serve small and medium-sized businesses in the trades, retail, field services, and construction. If you’re not sure whether you fall into one of those categories, just reach out — we’re happy to assess if there’s a fit.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">Do I need to know anything about AI or automation to work with you?</h2>
          <p className="text-gray-300 mt-2">
            Not at all. We exist to handle all of that for you. Think of us as your personal AI/tech concierge — we’ll assess your business, understand your goals, and take care of implementation, training, and management.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">What kinds of problems can Adapt22 solve?</h2>
          <p className="text-gray-300 mt-2">
            We solve problems like poor lead follow-up, inconsistent quoting, missed appointments, marketing headaches, and clunky tech systems. Whether you need one specific automation or full-stack implementation, we’ve got it handled.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">What tools or systems do you use?</h2>
          <p className="text-gray-300 mt-2">
            We leverage cutting-edge tools from OpenAI, Zapier, GoHighLevel, LangChain, Voiceflow, and more — depending on your unique needs. Everything is customized to your workflow.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">What’s the onboarding process like?</h2>
          <p className="text-gray-300 mt-2">
            We’ll start with a free discovery call. From there, we’ll map out your workflow, identify problems, recommend solutions, and begin implementing. You’ll always know exactly what’s being done and why.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">Is this a one-time service or an ongoing partnership?</h2>
          <p className="text-gray-300 mt-2">
            Both options are available — many clients start with a project and continue with us long-term for ongoing management, support, and system optimization. Think of us as your outsourced CTO.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">Do you offer white-label or subcontractor work?</h2>
          <p className="text-gray-300 mt-2">
            Yes. If you’re a marketing agency or tech provider looking to expand into AI or automation, we offer partnership models and implementation support behind the scenes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan">What’s the investment?</h2>
          <p className="text-gray-300 mt-2">
            Pricing depends on the size of your team, systems in place, and what needs to be built. We offer flexible options — from one-time builds to monthly retainers. We’re happy to walk through it on a call.
          </p>
        </div>
      </div>
    </div>
  );
}
