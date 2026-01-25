import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Terms of Service"
        subtitle="These terms outline the rules, responsibilities, and conditions for using our platform. By accessing our services, you agree to comply with these terms."
        badge="Terms & Conditions"
      />

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legal agreement
                between you and Krishankh Biotech LLP ("Company", "we", "us", or
                "our"). By accessing and using our website and services, you
                agree to be bound by these Terms. If you do not agree to abide
                by the above, please do not use this service.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Krishankh Biotech LLP's
                website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>
                  Attempting to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Removing any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transferring the materials to another person or "mirroring"
                  the materials on any other server
                </li>
                <li>Violating any applicable laws or regulations</li>
                <li>
                  Engaging in any conduct that restricts or inhibits anyone's
                  use or enjoyment of the website
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials on Krishankh Biotech LLP's website are provided on
                an 'as is' basis. Krishankh Biotech LLP makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Further, Krishankh Biotech LLP does not warrant or make any
                representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its website or
                otherwise relating to such materials or on any sites linked to
                this site.
              </p>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Limitations of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Krishankh Biotech LLP or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on
                Krishankh Biotech LLP's website, even if Krishankh Biotech LLP
                or an authorized representative has been notified orally or in
                writing of the possibility of such damage.
              </p>
            </div>

            {/* Accuracy of Materials */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Krishankh Biotech LLP's website could
                include technical, typographical, or photographic errors.
                Krishankh Biotech LLP does not warrant that any of the materials
                on its website are accurate, complete, or current. Krishankh
                Biotech LLP may make changes to the materials contained on its
                website at any time without notice.
              </p>
            </div>

            {/* Materials and Content */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Materials and Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials on Krishankh Biotech LLP's website are protected
                by applicable copyright and trademark law. You are authorized to
                view, download, and print materials from the website solely for
                your personal, non-commercial use, provided that you keep intact
                all copyright and other proprietary notices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unauthorized use of the materials may violate copyright,
                trademark, and other laws. Krishankh Biotech LLP reserves the
                right to revoke this authorization and to restrict or deny your
                access to the website at any time.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Links
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Krishankh Biotech LLP has not reviewed all of the sites linked
                to its website and is not responsible for the contents of any
                such linked site. The inclusion of any link does not imply
                endorsement by Krishankh Biotech LLP of the site. Use of any
                such linked website is at the user's own risk.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you believe we have linked to an inappropriate site, please
                contact us immediately at info@krishankhbiotech.com.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Krishankh Biotech LLP may revise these Terms of Service for its
                website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these
                Terms of Service.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of India, and you irrevocably submit to
                the exclusive jurisdiction of the courts located in Pune,
                Maharashtra.
              </p>
            </div>

            {/* User Conduct */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. User Conduct
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree that you will not use the website for any unlawful
                purposes or in any way that violates these Terms. Specifically,
                you agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Harass or cause distress or discomfort to any person</li>
                <li>Offend, defame, or insult any person</li>
                <li>Disrupt the normal flow of dialogue within our website</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit obscene or offensive content</li>
                <li>Disrupt the normal flow of dialogue within any website</li>
              </ul>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content included on this website, such as text, graphics,
                logos, images, audio clips, digital downloads, and data
                compilations is the property of Krishankh Biotech LLP or its
                content suppliers and protected by international copyright laws.
                The compilation of all content on this website is the exclusive
                property of Krishankh Biotech LLP and protected by international
                copyright laws.
              </p>
            </div>

            {/* Products and Services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Products and Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All product descriptions, pricing, and availability are subject
                to change without notice. Krishankh Biotech LLP reserves the
                right to limit quantities and to discontinue any product or
                service at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Orders are subject to acceptance and confirmation by Krishankh
                Biotech LLP. We reserve the right to refuse any order or to
                cancel orders already placed.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service or any
                other matters related to our website, please contact us:
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

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                14. Severability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms of Service is found to be
                invalid or unenforceable, the remaining provisions shall remain
                in full force and effect, and the invalid provision shall be
                modified to the minimum extent necessary to make it valid and
                enforceable.
              </p>
            </div>

            {/* Entire Agreement */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                15. Entire Agreement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service, together with our Privacy Policy and any
                other policies referenced herein, constitute the entire
                agreement between you and Krishankh Biotech LLP regarding your
                use of the website and services. If there is any conflict
                between these Terms and any other agreement, these Terms shall
                prevail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsOfService;
