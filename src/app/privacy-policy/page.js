export const metadata = {
  title: "Privacy Policy | Adapt22",
  description: "How we handle your data at Adapt22.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-textPrimary">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Heading + Gold Bar */}
          <div className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-5xl font-extrabold text-accentIndigo">Privacy Policy</h1>
              <div className="h-1 w-[103%] bg-primaryDark rounded-full mt-2" />
            </div>
            <p className="text-lg textMuted">
              At Adapt22, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primaryDark mb-2">1. Information We Collect</h2>
              <p className="text-textPrimary">
                We collect personal data that you provide directly to us, such as your name, email address, phone number, and business information when filling out contact forms, booking a call, or subscribing to updates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primaryDark mb-2">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-textPrimary space-y-2">
                <li>To provide and improve our services</li>
                <li>To communicate with you about updates, offers, and inquiries</li>
                <li>To personalize your experience on our site</li>
                <li>To analyze usage for internal improvements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primaryDark mb-2">3. Data Protection</h2>
              <p className="text-textPrimary">
                We implement best practices for data security and store your information using trusted third-party platforms. Your data is never sold to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primaryDark mb-2">4. Cookies</h2>
              <p className="text-textPrimary">
                Adapt22 uses cookies to track website performance, preferences, and visitor interactions. You can disable cookies in your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primaryDark mb-2">5. Contact Us</h2>
              <p className="text-textPrimary">
                If you have questions about this Privacy Policy or your personal data, please email us at{" "}
                <a href="mailto:jackson@adapt22.ai" className="text-primaryLight hover:underline">
                  jackson@adapt22.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}