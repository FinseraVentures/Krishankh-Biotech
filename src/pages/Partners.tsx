import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import bg from "@/assets/partenerwith-us.png";
import {
  Handshake,
  TrendingUp,
  Users,
  Leaf,
  ArrowRight,
  CheckCircle,
  Building,
  Factory,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

const partnerTypes = [
  {
    icon: Store,
    title: "Retail & Distribution Partners",
    description:
      "Stock our premium microgreens and exotic produce in your stores or supply chain.",
    benefits: [
      "Exclusive territory rights",
      "Marketing support",
      "Competitive margins",
      "Reliable supply",
    ],
  },
  {
    icon: Building,
    title: "Institutional Buyers",
    description:
      "Hotels, restaurants, and caterers seeking consistent, high-quality produce.",
    benefits: [
      "Custom MOQ options",
      "Priority delivery",
      "Volume discounts",
      "Dedicated account manager",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Partners",
    description:
      "Biocoal supply for manufacturing, brick kilns, and industrial applications.",
    benefits: [
      "Long-term contracts",
      "Quality guarantees",
      "Flexible logistics",
      "Technical support",
    ],
  },
];

const investmentHighlights = [
  "Proven circular agriculture model",
  "Multiple revenue streams",
  "ESG and SDG aligned",
  "Scalable operations",
  "Experienced leadership team",
  "Growing market demand",
];

const Partners = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnerType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919876543210";
    const text = encodeURIComponent(
      `Hi! I'm interested in partnering with Krishankh Biotech.\n\nName: ${formData.name}\nCompany: ${formData.company}\nPartner Type: ${formData.partnerType}\nMessage: ${formData.message}`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Partner With Us"
        subtitle="Join our mission to transform agriculture. Whether you're looking to source premium produce, distribute our products, or invest in sustainable agri-tech — let's build together."
        badge="Partnerships & Investment"
        backgroundImage={`${bg}`}
      />

      {/* Partner Types */}
      <section className="py-20 bg-card">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to collaborate and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="bg-background rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <type.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Investment Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Invest in Sustainable Agriculture
              </h2>
              <p className="text-muted-foreground mb-8">
                Krishankh Biotech offers a unique investment opportunity at the
                intersection of agriculture, clean energy, and sustainability.
                Our diversified revenue model and circular economy approach
                creates resilient, long-term value.
              </p>

              <ul className="space-y-3 mb-8">
                {investmentHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#partner-form"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Discuss Investment
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl border border-border p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-xl">
                  <span className="text-3xl font-bold text-primary">4</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Revenue Streams
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl">
                  <span className="text-3xl font-bold text-primary">ESG</span>
                  <p className="text-sm text-muted-foreground mt-1">Ready</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl">
                  <span className="text-3xl font-bold text-primary">5</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    SDGs Aligned
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl">
                  <span className="text-3xl font-bold text-primary">
                    ₹15Cr+
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Market Opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner-form" className="py-20 bg-secondary/30">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Connect
              </h2>
              <p className="text-muted-foreground">
                Tell us about your interest and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  I'm Interested In
                </label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select...</option>
                  <option value="retail">
                    Retail & Distribution Partnership
                  </option>
                  <option value="institutional">Institutional Buying</option>
                  <option value="industrial">
                    Industrial Partnership (Biocoal)
                  </option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell Us More
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Share details about your interest, requirements, or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Start Conversation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Partners;
