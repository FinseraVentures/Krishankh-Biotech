import { useState, useEffect, useRef } from "react";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const useWhiteNav = !isHome && !isScrolled;

  /* ---------------- Scroll detection ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Click outside dropdown ---------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
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

  /* ---------------- Dynamic Nav Link Style ---------------- */
  const navLinkClass = `
    nav-link
    transition-colors duration-300
    ${useWhiteNav ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"}
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
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={Logo}
              alt="Krishankh Biotech Logo"
              className="w-[200px] h-15 object-contain -my-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={`flex items-center gap-1 bg-transparent border-none cursor-pointer ${navLinkClass}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        } ${useWhiteNav ? "text-white/80" : "text-muted-foreground"}`}
                      />
                    </button>

                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 py-2 bg-card border border-border rounded-xl shadow-lg min-w-[180px] animate-fade-in">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => handleNavClick(child.href, true)}
                            className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-primary transition-colors"
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
                    className={`bg-transparent border-none cursor-pointer ${navLinkClass}`}
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/microgreens" className="btn-primary text-sm">
              Buy Produce
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              useWhiteNav ? "text-white/90" : "text-foreground"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center justify-between w-full text-left text-foreground font-medium py-2 bg-transparent border-none cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-1 border-l-2 border-primary/20">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => handleNavClick(child.href, true)}
                            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className="block w-full text-left text-foreground font-medium py-2 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}

            <Link
              to="/microgreens"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center mt-4 block"
            >
              Buy Produce
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isHome = location.pathname === "/";
//   const useWhiteNav = !isHome && !isScrolled;

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleNavClick = (href: string, isRoute: boolean) => {
//     setIsMobileMenuOpen(false);
//     setOpenDropdown(null);

//     if (isRoute) {
//       navigate(href);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const toggleDropdown = (label: string) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };
//   const navLinkClass = `
//   nav-link
//   transition-colors duration-300
//   ${useWhiteNav ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"}
// `;

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container-wide mx-auto px-6 md:px-12">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center gap-2 group"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           >
//             {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
//               <Leaf className="w-5 h-5 text-primary-foreground" />
//             </div>
//             <span className="font-serif font-bold text-xl text-foreground">
//               Krishankh
//             </span> */}
//             <img
//               src={Logo}
//               alt="Krishankh Biotech Logo"
//               className="w-[200px] h-15 object-contain -my-[70px]"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
//             {navLinks.map((link) => (
//               <div key={link.label} className="relative">
//                 {link.children ? (
//                   <>
//                     <button
//                       onClick={() => toggleDropdown(link.label)}
//                       className="flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer"
//                     >
//                       {link.label}
//                       <ChevronDown
//                         className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
//                       />
//                     </button>
//                     {openDropdown === link.label && (
//                       <div className="absolute top-full left-0 mt-2 py-2 bg-card border border-border rounded-xl shadow-lg min-w-[180px] animate-fade-in">
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             to={child.href}
//                             onClick={() => handleNavClick(child.href, true)}
//                             className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-primary transition-colors"
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <button
//                     onClick={() => handleNavClick(link.href, link.isRoute)}
//                     className="nav-link bg-transparent border-none cursor-pointer"
//                   >
//                     {link.label}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <Link to="/microgreens" className="btn-primary text-sm">
//               Buy Produce
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 text-foreground"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
//           <div className="px-6 py-6 space-y-2">
//             {navLinks.map((link) => (
//               <div key={link.label}>
//                 {link.children ? (
//                   <div className="space-y-1">
//                     <button
//                       onClick={() => toggleDropdown(link.label)}
//                       className="flex items-center justify-between w-full text-left text-foreground font-medium py-2 bg-transparent border-none cursor-pointer"
//                     >
//                       {link.label}
//                       <ChevronDown
//                         className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
//                       />
//                     </button>
//                     {openDropdown === link.label && (
//                       <div className="pl-4 space-y-1 border-l-2 border-primary/20">
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             to={child.href}
//                             onClick={() => handleNavClick(child.href, true)}
//                             className="block py-2 text-muted-foreground hover:text-primary transition-colors"
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => handleNavClick(link.href, link.isRoute)}
//                     className="block w-full text-left text-foreground font-medium py-2 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
//                   >
//                     {link.label}
//                   </button>
//                 )}
//               </div>
//             ))}
//             <Link
//               to="/microgreens"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="btn-primary w-full text-center mt-4 block"
//             >
//               Buy Produce
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
