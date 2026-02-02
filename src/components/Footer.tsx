import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: "Products",
      links: [
        { id: "microgreens", label: "Microgreens", href: "/microgreens" },
        { id: "polyhouse", label: "Polyhouse Crops", href: "/polyhouse" },
        { id: "biocoal", label: "Biocoal", href: "/biocoal" },
        { id: "solar", label: "Solar", href: "/solar" },
      ],
    },
    {
      category: "Company",
      links: [
        { id: "about", label: "About Us", href: "/about" },
        { id: "team", label: "Team", href: "/team" },
        { id: "impact", label: "Impact", href: "/impact" },
        { id: "partners", label: "Partners", href: "/partners" },
      ],
    },
    {
      category: "Support",
      links: [
        { id: "contact", label: "Contact Us", href: "/contact" },
        { id: "faq", label: "FAQ", href: "#" },
        { id: "docs", label: "Documentation", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <Leaf className="h-8 w-8 text-emerald-400" /> */}
              <span className="text-2xl font-bold text-white">Krishankh</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Transforming agriculture through sustainable innovation and
              circular economy principles.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((category) => (
            <div key={category.category}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Krishankh Biotech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-emerald-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-emerald-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-emerald-400 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>
            © {currentYear} Krishankh Biotech LLP | Circular Agriculture & Clean
            Energy Infrastructure
            <span className="mx-2">|</span>
            <a
              href="https://finseraa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
            >
              Designed & Powered by Finsera
            </a>
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-emerald-400 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-emerald-400 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
