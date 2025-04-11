// src/app/terms/page.js — Restyled Terms of Service Page

export const metadata = {
  title: "Terms of Service | Adapt22",
  description: "Understand the terms for using our services and website.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#f3f5f3] text-gray-900">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-primary">Terms of Service</h1>
            <div className="h-1 w-[26rem] bg-accent rounded-full" />
            <p className="text-lg text-gray-700">
              By accessing this website or using our services, you agree to be bound by the following terms. If you do not agree, please do not use this site or our services.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">1. Use of Services</h2>
              <p className="text-gray-800">
                You agree to use Adapt22 services responsibly, for lawful purposes only, and in accordance with all applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">2. Intellectual Property</h2>
              <p className="text-gray-800">
                All content on this website, including text, graphics, logos, and software, is the property of Adapt22 unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">3. Liability</h2>
              <p className="text-gray-800">
                Adapt22 is not liable for any damages arising from the use of this website or its services, including errors, omissions, or interruptions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">4. Changes to Terms</h2>
              <p className="text-gray-800">
                We reserve the right to update these terms at any time. Continued use of the website after changes means you accept the new terms.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-10">Last updated: May 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
