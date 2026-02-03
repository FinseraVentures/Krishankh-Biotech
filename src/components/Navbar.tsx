import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/assets/Logo.png";

interface NavItem {
  label: string;
  href: string;
  isRoute: boolean;
  children?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  {
    label: "Produce",
    href: "#",
    isRoute: false,
    children: [
      { label: "Microgreens", href: "/microgreens" },
      { label: "Polyhouse Crops", href: "/polyhouse" },
    ],
  },
  {
    label: "Energy",
    href: "#",
    isRoute: false,
    children: [
      { label: "Biocoal", href: "/biocoal" },
      { label: "Solar", href: "/solar" },
    ],
  },
  { label: "Impact", href: "/impact", isRoute: true },
  { label: "Partners", href: "/partners", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const useWhiteNav = !isHome && !isScrolled;

  /* ---------------- Active helpers ---------------- */
  const isActiveRoute = (href: string) => location.pathname === href;

  const isActiveParent = (children?: { href: string }[]) =>
    children?.some((child) => location.pathname === child.href);

  /* ---------------- Scroll detection ---------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Lock body scroll on mobile menu ---------------- */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  /* ---------------- Click outside ---------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- Helpers ---------------- */
  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    if (isRoute) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  /* ---------------- Desktop nav link style ---------------- */
  const getNavLinkClass = (active: boolean) => `
    relative transition-colors duration-300
    ${
      active
        ? "text-gold font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:rounded-full"
        : useWhiteNav
          ? "text-white/90 hover:text-white font-semibold"
          : "text-foreground hover:text-primary font-semibold"
    }
  `;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={Logo}
              alt="Krishankh Biotech Logo"
              className="w-[285px] h-15 object-contain -my-[110px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {navLinks.map((link) => {
              const active =
                isActiveRoute(link.href) || isActiveParent(link.children);

              return (
                <div key={link.label} className="relative">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className={`flex items-center gap-1 bg-transparent font-semibold border-none cursor-pointer ${getNavLinkClass(
                          active,
                        )}`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 py-2 bg-card border border-border rounded-xl shadow-lg min-w-[180px] animate-fade-in">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => handleNavClick(child.href, true)}
                              className={`block px-4 py-2 transition-colors ${
                                isActiveRoute(child.href)
                                  ? "bg-secondary text-primary font-medium"
                                  : "text-foreground hover:bg-secondary hover:text-primary"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href, link.isRoute)}
                      className={`bg-transparent font-semibold" border-none cursor-pointer ${getNavLinkClass(
                        active,
                      )}`}
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/microgreens" className="btn-primary text-sm">
              Buy Produce
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              useWhiteNav ? "text-white/90" : "text-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-[#151f31] border-t border-border animate-fade-in"
        >
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => {
              const active =
                isActiveRoute(link.href) || isActiveParent(link.children);

              return (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className={`flex items-center justify-between w-full py-2 ${
                          active ? "text-gold font-semibold" : "text-white/90"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === link.label && (
                        <div className="pl-4 border-l border-primary/20">
                          {link.children.map((child) => (
                            <button
                              key={child.href}
                              onClick={() => {
                                navigate(child.href);
                                setIsMobileMenuOpen(false);
                                setOpenDropdown(null);
                                window.scrollTo({ top: 0 });
                              }}
                              className={`block w-full text-left py-2 ${
                                isActiveRoute(child.href)
                                  ? "text-gold font-semibold"
                                  : "text-white/90"
                              }`}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href, link.isRoute)}
                      className={`block w-full text-left py-2 ${
                        active ? "text-gold font-semibold" : "text-white/90"
                      }`}
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => {
                navigate("/microgreens");
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0 });
              }}
              className="btn-gold w-full mt-4"
            >
              Buy Produce
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
