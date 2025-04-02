import Image from "next/image";

export const metadata = {
  title: "About Us | Adapt22",
  description: "Get to know the vision, founder, and team behind Adapt22.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto text-white">
      <h1 className="text-5xl font-bold mb-4 text-cyan-400">About Adapt22</h1>
      <p className="text-lg mb-8 text-gray-300">
        Adapt22 is committed to bringing the power of AI and automation to the SMBs that keep the world running — trades, field service, construction, and retail. These companies are often left behind in the tech revolution, and we’re here to fix that.
      </p>

      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <Image
          src="/headshot.png"
          alt="Jackson McConnell"
          width={240}
          height={240}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-2">Jackson McConnell</h2>
          <p className="text-gray-400">
            Jackson is the founder of Adapt22. Born with severe hearing loss and raised with a passion for service, Jackson’s life has been shaped by entrepreneurship, global impact, and a relentless drive to help others succeed.
            <br /><br />
            He started Adapt22 to help the most underserved business owners access and harness cutting-edge tech without the headaches — and to build long-term partnerships that matter.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <section>
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Meet the Team</h2>
        <p className="text-gray-300 mb-6">
          Behind every great implementation is a solid team. While Jackson is the face of the company, Adapt22 is supported by a tight-knit group of passionate professionals, including:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>Client Success Team</strong> – Ensuring seamless onboarding, training, and ongoing support.</li>
          <li><strong>AI & Software Developers</strong> – Handling technical implementations and custom integrations.</li>
          <li><strong>Implementation Consultants</strong> – Working directly with clients to tailor solutions to their workflow.</li>
          <li><strong>Sales & Strategy Team</strong> – Driving growth and identifying new client opportunities.</li>
        </ul>
      </section>
    </div>
  );
}