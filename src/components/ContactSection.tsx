import { useState } from "react";
import {
  ArrowRight,
  Send,
  Droplets,
  Recycle,
  Sun,
  HeartPulse,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { icon: Droplets, label: "Hydroponic Farming" },
  { icon: Recycle, label: "Waste Conversion" },
  { icon: Sun, label: "Solar Integration" },
  { icon: HeartPulse, label: "Wellness Products" },
  { icon: Users, label: "Rural Empowerment" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 text-white/90"
    >
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join us in revolutionizing rural India
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Partner with us to build a sustainable future for India's farming
            communities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="/partners" className="btn-gold group">
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold border-2 border-primary-foreground/30 text-primary-foreground rounded-full transition-all duration-300 hover:bg-primary-foreground/10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-8">
              Explore Our Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-3 p-4 bg-primary-foreground/5 rounded-xl hover:bg-primary-foreground/10 transition-colors duration-200 cursor-pointer"
                >
                  <link.icon className="w-5 h-5 text-primary-foreground/70" />
                  <span className="font-medium">{link.label}</span>
                </div>
              ))}
            </div>

            {/* Location Info */}
            <div className="mt-12 p-6 bg-primary-foreground/5 rounded-2xl">
              <h4 className="font-semibold mb-2">Our Location</h4>
              <p className="text-primary-foreground/70">
                Tambad, Taluka Bhor
                <br />
                District Pune, Maharashtra
                <br />
                India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form">
            <h3 className="font-serif text-2xl font-semibold mb-8">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button type="submit" className="btn-gold w-full group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Krishankh Biotech LLP | Circular Agriculture & Clean Energy
              Infrastructure.{" "}
              <a
                href="https://finseraa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                Designed & Powered by Finsera
              </a>
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-emerald-400 transition-colors duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-emerald-400 transition-colors duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
