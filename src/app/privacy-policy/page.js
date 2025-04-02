export const metadata = {
    title: "Privacy Policy | Adapt22",
    description: "How we handle your data at Adapt22.",
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-white">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-gray-300">
          At Adapt22, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We collect personal data that you provide directly to us, such as your name, email address, phone number, and business information when filling out contact forms, booking a call, or subscribing to updates.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>To provide and improve our services</li>
          <li>To communicate with you about updates, offers, and inquiries</li>
          <li>To personalize your experience on our site</li>
          <li>To analyze usage for internal improvements</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Protection</h2>
        <p className="text-gray-300 mb-4">
          We implement best practices for data security and store your information using trusted third-party platforms. Your data is never sold to third parties.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cookies</h2>
        <p className="text-gray-300 mb-4">
          Adapt22 uses cookies to track website performance, preferences, and visitor interactions. You can disable cookies in your browser settings at any time.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Contact Us</h2>
        <p className="text-gray-300">
          If you have questions about this Privacy Policy or your personal data, please email us at{" "}
          <a href="mailto:jackson@adapt22.ai" className="text-cyan-400 hover:underline">
            jackson@adapt22.ai
          </a>
          .
        </p>
      </div>
    );
  }