export default function TermsPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">
            Terms & Disclaimer
          </h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Platform Nature
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sunset Cannabis is a product discovery and listing platform only. We are NOT a seller, retailer, or
              distributor of cannabis or related products. We do not process payments, handle transactions, ship
              products, or facilitate any commercial exchange.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Age Restriction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This platform is for adults aged 18 years or older only. By using Sunset Cannabis, you confirm that you
              are of legal age in your jurisdiction. We do not verify ages but require all users to comply with this
              requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              No Transaction Processing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All transactions, negotiations, payments, and arrangements occur directly between buyers and sellers via
              WhatsApp or other external channels. Sunset Cannabis has no involvement in, responsibility for, or
              liability regarding any transactions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              User Responsibility
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Users are solely responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Verifying the legality of cannabis-related activities in their jurisdiction</li>
              <li>Ensuring compliance with all applicable local, regional, and national laws</li>
              <li>Conducting due diligence on sellers before engaging in transactions</li>
              <li>Arranging secure and safe payment methods</li>
              <li>Meeting in safe, public locations if exchanging goods in person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              No Guarantees
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We make no guarantees or warranties about product quality, authenticity, seller reliability, or
              transaction outcomes. All product descriptions, images, and information are provided by sellers. Users
              engage with sellers at their own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Legal Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cannabis laws vary widely by location. Users must understand and comply with all applicable laws in their
              area. Sunset Cannabis does not provide legal advice and is not responsible for users' legal compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sunset Cannabis, its owners, operators, and affiliates are not liable for any damages, losses, disputes,
              legal issues, or problems arising from use of the platform or transactions between users and sellers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Content Accuracy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to maintain accurate listings, we cannot guarantee the accuracy, completeness, or
              timeliness of any information on the platform. Users should verify all details directly with sellers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these terms, please contact us at info@sunsetcannabis.co.za
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
