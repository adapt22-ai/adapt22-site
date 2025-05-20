export const metadata = {
  title: "Terms of Service | Adapt22",
  description: "Understand the terms for using our services and website.",
};

export default function TermsPage() {
  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Heading + Gold Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-accentIndigo">Terms of Service</h1>
              <div className="h-1 w-[110%] sm:w-[103%] bg-primaryDark rounded-full mt-2" />
            </div>
            <p className="text-md sm:text-lg textMuted">
              By accessing this website or using our services, you agree to be bound by the following terms. If you do not agree, please do not use this site or our services.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-10 text-base leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primaryDark mb-2">1. Use of Services</h2>
              <p>
                You agree to use Adapt22 services responsibly, for lawful purposes only, and in accordance with all applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primaryDark mb-2">2. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of Adapt22 unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primaryDark mb-2">3. Liability</h2>
              <p>
                Adapt22 is not liable for any damages arising from the use of this website or its services, including errors, omissions, or interruptions.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primaryDark mb-2">4. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Continued use of the website after changes means you accept the new terms.
              </p>
            </div>

            <p className="text-sm textMuted mt-8">Last updated: May 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}