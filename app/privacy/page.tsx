export default function PrivacyPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sunset Cannabis ("we," "us," "our") respects your privacy. This Privacy Policy explains how we collect,
              use, and protect information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We may collect:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Basic browsing data (IP address, browser type, device information)</li>
              <li>Contact information you voluntarily provide (email, name)</li>
              <li>Usage data (pages visited, time spent, interactions)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              What We Don't Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because we don't process transactions, we do NOT collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Payment information</li>
              <li>Credit card or banking details</li>
              <li>Transaction histories</li>
              <li>Purchase records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              How We Use Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Operate and maintain the platform</li>
              <li>Improve user experience</li>
              <li>Respond to inquiries and support requests</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you click "Contact Seller on WhatsApp," you are redirected to WhatsApp, a third-party service.
              WhatsApp's privacy policy governs any data shared through that platform. We do not control or monitor
              communications between buyers and sellers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect information. However, no method of transmission over
              the internet is 100% secure. Users share information at their own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Cookies and Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies and similar tracking technologies to improve platform functionality and analyze usage.
              You can disable cookies in your browser settings, though this may affect platform functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain information only as long as necessary to operate the platform and comply with legal
              requirements. You may request deletion of your data by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sunset Cannabis is not intended for users under 18. We do not knowingly collect information from minors.
              If we discover we've collected data from a minor, we will delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
              "Last Updated" date. Continued use of the platform constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at info@sunsetcannabis.co.za
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
