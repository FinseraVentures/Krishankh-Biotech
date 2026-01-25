import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This page explains how we collect, use, store, and protect your personal information when you interact with our platform."
        badge="Data Protection & Privacy"
      />

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <p className="text-muted-foreground text-lg">
              Last updated: January 2026
            </p>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Krishankh Biotech LLP ("we", "us", "our", or "Company") is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please read this Privacy Policy carefully. If you do not agree
                with our policies and practices, please do not use our services.
                By accessing and using our website, you acknowledge that you
                have read, understood, and agree to be bound by all the
                provisions of this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect information that you voluntarily provide to us,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                <li>Name and contact information (email, phone, address)</li>
                <li>Business information (company name, industry, role)</li>
                <li>
                  Information about your interests in our products and services
                </li>
                <li>Messages and inquiries you send us</li>
                <li>Payment and transaction information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Automatically Collected Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we automatically collect certain
                information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                <li>
                  Device information (IP address, browser type, operating
                  system)
                </li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location information (approximate, based on IP address)</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide and maintain our services and products</li>
                <li>To process transactions and send related information</li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
                <li>
                  To send marketing and promotional communications (with your
                  consent)
                </li>
                <li>To analyze website usage and improve our services</li>
                <li>
                  To detect, prevent, and address fraud and security issues
                </li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To establish and manage business partnerships</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Data Protection and Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* Sharing of Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Sharing Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  With service providers and vendors who assist us in operating
                  our website and conducting our business
                </li>
                <li>
                  With business partners for joint ventures or collaborative
                  efforts
                </li>
                <li>When required by law or to protect our legal rights</li>
                <li>
                  With your consent for specific purposes you've authorized
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience. These may include session
                cookies (temporary) and persistent cookies (stored on your
                device). You can control cookie settings through your browser
                preferences, but disabling cookies may affect website
                functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at
                info@krishankhbiotech.com.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of
                13. We do not knowingly collect personal information from
                children under 13. If we become aware that we have collected
                information from a child under 13, we will take steps to delete
                such information.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 mt-4">
                <p className="text-foreground font-semibold mb-2">
                  Krishankh Biotech LLP
                </p>
                <p className="text-muted-foreground">Tambad, Taluka Bhor</p>
                <p className="text-muted-foreground">
                  District Pune, Maharashtra, India
                </p>
                <p className="text-muted-foreground mt-4">
                  Email: info@krishankhbiotech.com
                </p>
              </div>
            </div>

            {/* Policy Changes */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, and
                other factors. We will notify you of any material changes by
                updating the "Last updated" date at the top of this policy and,
                when necessary, by email or prominent notice on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
