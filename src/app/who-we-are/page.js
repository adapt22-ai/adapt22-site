import Image from "next/image";


export default function WhoWeArePage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto text-white">
      <h1 className="text-5xl font-bold mb-4 text-cyan-400">Who We Are</h1>

      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Adapt22 started from a personal, deep routed frustration, <strong>“Why do the companies who keep our world going not have the software they need to thrive?”</strong>
        This bothered founder, Jackson McConnell, for a long time as he had a foot in both worlds - home service and software. 
      </p>

      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <Image
          src="/headshot.png"
          alt="Jackson McConnell"
          width={260}
          height={260}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-2">Jackson McConnell</h2>
          <p className="text-gray-400 text-md leading-relaxed">
            Jackson started a home services business in high school and grew it over 5 years. As Covid struck and the evolution of AI emerged, he pivoted into the world of software. Eventually, Jackson was leading a team building custom software for SMBs in trades, construction, service industries, retail, and medical.
            <br /><br />
            While it was incredibly fulfilling to be serving these companies and working directly with the entrepreneurs, he still didn’t feel like he was doing enough for them. One last problem remained, and likely the most pressing — no matter how shiny the solution was, implementing, managing, and scaling it was still a disaster.
            <br /><br />
            “Implement, Manage, Scale” are the three ends of the triskelion in the Adapt22 logo and happen to be what Jackson enjoyed doing most. This is why Adapt22 was born — to be a white-glove service handling everything tech related, so you get to solely focus on your craft and team.
            <br /><br />
            Our mission is straightforward: <strong>“Serving Those Who Serve Us.”</strong> Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have. Too many people feel as if modern AI and software solutions have left them behind — we exist to change that narrative.
            <br /><br />
            <em>“Long-term partnerships mean everything to me in this space. I’m not in this for a ‘one-and-done’ relationship. I want to see you and your team continue to win again and again, and get to be a small part of that equation.”</em>
            <br />— Jackson McConnell
          </p>
        </div>
      </div>

      {/* What You Receive */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">What You Receive</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>More of your two most important resources — Time and Money</li>
          <li>Scalable, future-proof solutions to each of your problems</li>
          <li>A team equipped to understand and serve your needs</li>
        </ul>
      </div>

      {/* What We Believe */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">What We Believe</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>AI should serve people — not confuse them.</li>
          <li>Providing white-glove, done-for-you solutions tailored to your needs.</li>
          <li>Your time is better spent on your craft — not clicking around 20 dashboards.</li>
        </ul>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Adapt22 Core Values</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Honesty</li>
          <li>Accountability</li>
          <li>Service</li>
          <li>Resilience</li>
          <li>Tenacity</li>
        </ul>
      </div>

      {/* Scripture */}
      <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center mb-16">
        <p className="italic text-gray-300 text-sm">
          “You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.”
          <br />— Galatians 5:13
        </p>
      </div>

      {/* Team */}
      <section>
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">The Team Behind Adapt22</h2>
        <p className="text-gray-300 mb-6 max-w-3xl">
          Our team is made up of hard-working and compassionate leaders focused on supporting you:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white text-lg mb-1">Software Strategists</h4>
            <p className="text-gray-400 text-sm">Understanding your operations and tailoring the right systems to support your business growth.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white text-lg mb-1">Client Success</h4>
            <p className="text-gray-400 text-sm">Helping you onboard smoothly, answering questions, and ensuring long-term results.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white text-lg mb-1">Developers & Integrators</h4>
            <p className="text-gray-400 text-sm">Managing the buildout of your AI workflows, integrations, and automation.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white text-lg mb-1">AI Specialists</h4>
            <p className="text-gray-400 text-sm">Using the latest AI tools (OpenAI, Agents, LangChain, etc.) to solve real business problems.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
