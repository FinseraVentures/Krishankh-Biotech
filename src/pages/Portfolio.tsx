import React, { useEffect, useRef, useState, useCallback } from 'react';

// Define TypeScript interfaces
interface ProductCard {
  id: number;
  name: string;
  category: string;
  tags: string[];
  description: string;
  delay: string;
}

// Define Lucide window interface
interface LucideWindow extends Window {
  lucide?: {
    createIcons: () => void;
  };
}

const MicrogreenSynergy: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isNavScrolled, setIsNavScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const productGridRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Product data
  const products: ProductCard[] = [
    { id: 1, name: 'Radish Red', category: 'bold-peppery', tags: ['Bold', 'Peppery', 'Crisp'], description: 'Vibrant crimson stems with a bold, spicy peppery kick. Perfect for adding a satisfying crunch and striking color to any dish.', delay: '' },
    { id: 2, name: 'Radish Green', category: 'bold-peppery', tags: ['Sharp', 'Fresh', 'Classic'], description: 'Crisp, fresh, and intensely flavorful. Delivers a sharp, classic radish bite in a delicate green leaf.', delay: 'reveal-delay-1' },
    { id: 3, name: 'Arugula', category: 'bold-peppery', tags: ['Nutty', 'Bold', 'Punchy'], description: 'Bold, nutty, and distinctly peppery. A delicate, sophisticated leaf that packs a punchy flavor profile.', delay: 'reveal-delay-2' },
    { id: 4, name: 'Amaranthus Red', category: 'earthy-vibrant', tags: ['Fuchsia', 'Earthy', 'Striking'], description: 'Stunning, glowing fuchsia color with a mild, earthy taste. The ultimate luxury garnish for high-end plating.', delay: '' },
    { id: 5, name: 'Broccoli', category: 'earthy-vibrant', tags: ['Earthy', 'Dense', 'Delicate'], description: 'Mild, earthy, and highly nutrient-dense. Celebrated for its delicate texture and exceptionally high sulforaphane content.', delay: 'reveal-delay-1' },
    { id: 6, name: 'Swiss Chard', category: 'earthy-vibrant', tags: ['Vibrant', 'Earthy', 'Sweet'], description: 'Earthy and slightly sweet, featuring vibrant, brightly colored stems that instantly elevate the aesthetics of any plate.', delay: 'reveal-delay-2' },
    { id: 7, name: 'Knol Knol', category: 'sweet-fresh', tags: ['Mild', 'Sweet', 'Hearty'], description: 'Features a crisp texture and a mild, sweet cabbage-like flavor. A hearty and versatile green for everyday luxury.', delay: '' },
    { id: 8, name: 'Sunflower', category: 'sweet-fresh', tags: ['Nutty', 'Thick', 'Juicy'], description: 'Rich and nutty with a thick, juicy crunch. Acts as an excellent, hearty base for premium salads and gourmet sandwiches.', delay: 'reveal-delay-1' },
    { id: 9, name: 'Peas (Shoots)', category: 'sweet-fresh', tags: ['Sweet', 'Tender', 'Fresh'], description: 'Sweet, farm-fresh pea flavor with elegant, tender tendrils. Beautifully delicate yet bursting with taste.', delay: 'reveal-delay-2' },
    { id: 10, name: 'Moong Beans', category: 'sweet-fresh', tags: ['Sweet', 'Fresh', 'Hydrating'], description: 'Fresh, sweet, and incredibly crunchy. A hydrating staple perfect for modern Asian-inspired dishes and fresh bowls.', delay: '' },
    { id: 11, name: 'Dill', category: 'aromatic', tags: ['Aromatic', 'Elegant', 'Intense'], description: 'Feathery, elegant, and highly aromatic. Delivers a concentrated burst of classic dill flavor, ideal for seafood.', delay: 'reveal-delay-1' },
  ];

  // Scroll reveal animation using Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (isMobileMenuOpen && mobileMenu && menuButton && 
          !mobileMenu.contains(target) && !menuButton.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Card glare effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Filter products
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const cards = productGridRef.current?.children;
    if (cards) {
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      }
    }
  };

  // Smooth scroll for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Initialize Lucide icons
  useEffect(() => {
    const loadLucide = () => {
      const lucideWindow = window as unknown as LucideWindow;
      if (Object.prototype.hasOwnProperty.call(lucideWindow, 'lucide') && lucideWindow.lucide) {
        lucideWindow.lucide.createIcons();
      }
    };

    if (document.querySelector('script[src*="lucide"]')) {
      loadLucide();
    } else {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/lucide@latest';
      script.onload = loadLucide;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  // Set current year in footer
  useEffect(() => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();
  }, []);

  return (
    <>
      <style>
        {`
          body {
            background-color: #07180e;
            color: #f8fafc;
            overflow-x: hidden;
          }
          
          ::selection {
            background-color: #d4af37;
            color: #07180e;
          }

          /* Smooth Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #07180e; }
          ::-webkit-scrollbar-thumb { background: #143b23; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #d4af37; }

          /* Premium Glassmorphism */
          .glass-panel {
            background: rgba(11, 36, 21, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(212, 175, 55, 0.15);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          }

          /* Scroll Reveal Animations */
          .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
          .reveal-delay-1 { transition-delay: 0.2s; }
          .reveal-delay-2 { transition-delay: 0.4s; }

          /* Interactive Dynamic Glare Card */
          .product-card {
            position: relative;
            overflow: hidden;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.4s ease;
          }
          .product-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            z-index: 10;
          }
          .card-glare {
            position: absolute;
            inset: 0;
            background: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(212, 175, 55, 0.15) 0%, 
              transparent 50%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 1;
          }
          .product-card:hover .card-glare {
            opacity: 1;
          }

          /* Gold Text Clipping */
          .text-gold-gradient {
            background: linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #aa7c11 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Subtle float animation for hero elements */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          /* Filter Button Active State */
          .filter-btn.active {
            background: linear-gradient(135deg, #d4af37, #aa7c11);
            color: #07180e;
            border-color: transparent;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          }

          /* Mobile Menu Styles - FIXED */
          .mobile-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(7, 24, 14, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 49;
          }
          
          .mobile-menu.open {
            transform: translateY(0);
          }
          
          .mobile-nav-link {
            display: block;
            padding: 1rem 1.5rem;
            text-align: center;
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #f8fafc;
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
            transition: all 0.3s ease;
          }
          
          .mobile-nav-link:hover {
            color: #d4af37;
            background: rgba(212, 175, 55, 0.1);
            padding-left: 2rem;
          }
          
          .mobile-nav-link:last-child {
            border-bottom: none;
          }
          
          /* Menu button animation */
          .menu-icon {
            transition: all 0.3s ease;
          }
          
          /* Responsive fixes */
          @media (max-width: 768px) {
            .container-padding {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            h1 {
              font-size: 0.9rem;
            }
            .hero-title {
              font-size: 2.5rem;
            }
          }
          
          /* Desktop nav links */
          .desktop-nav-link {
            position: relative;
            transition: color 0.3s ease;
          }
          
          .desktop-nav-link:hover {
            color: #d4af37;
          }
          
          .desktop-nav-link::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 0;
            height: 1px;
            background: #d4af37;
            transition: width 0.3s ease;
          }
          
          .desktop-nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>

      <div className="font-sans antialiased bg-dark-gradient">
        {/* Navigation */}
        <nav
          id="navbar"
          className={`fixed w-full top-0 z-50 glass-panel border-b-0 transition-all duration-300 ${
            isNavScrolled ? 'h-16 md:h-20 bg-brand-dark/95' : 'h-20 md:h-24 bg-brand-dark/90'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo & Brand */}
              <div
                className="flex items-center gap-2 md:gap-4 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 relative flex-shrink-0 rounded-full overflow-hidden border border-brand-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <img
                    src="microgreen%20logo.png"
                    alt="Microgreen Synergy Logo"
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const imgElement = e.currentTarget;
                      imgElement.onerror = null;
                      imgElement.src = 'https://placehold.co/100x100/143b23/d4af37?text=MS';
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="font-serif font-bold text-sm md:text-xl lg:text-2xl tracking-[0.1em] md:tracking-[0.15em] text-gold-gradient uppercase whitespace-nowrap">
                    Microgreen Synergy
                  </h1>
                  <p className="text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-brand-muted mt-0.5 hidden sm:block">
                    A Krishankh Biotech Brand
                  </p>
                </div>
              </div>

              {/* Desktop Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-[0.1em] uppercase">
                <a 
                  href="#about" 
                  className="desktop-nav-link text-brand-text"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                >
                  Philosophy
                </a>
                <a 
                  href="#portfolio" 
                  className="desktop-nav-link text-brand-text"
                  onClick={(e) => handleSmoothScroll(e, '#portfolio')}
                >
                  Portfolio
                </a>
                <a 
                  href="#contact" 
                  className="desktop-nav-link text-brand-text"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button - FIXED: Always visible on mobile */}
              <button
                id="menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-brand-gold/30 hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6 text-brand-gold menu-icon" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Dropdown - FIXED: Now visible and functional */}
        <div id="mobile-menu" className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col py-2">
            <a 
              href="#about" 
              className="mobile-nav-link"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              <span className="inline-flex items-center gap-2">
                <i data-lucide="leaf" className="w-4 h-4"></i>
                Philosophy
              </span>
            </a>
            <a 
              href="#portfolio" 
              className="mobile-nav-link"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
            >
              <span className="inline-flex items-center gap-2">
                <i data-lucide="grid" className="w-4 h-4"></i>
                Portfolio
              </span>
            </a>
            <a 
              href="#contact" 
              className="mobile-nav-link"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              <span className="inline-flex items-center gap-2">
                <i data-lucide="phone" className="w-4 h-4"></i>
                Contact
              </span>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative pt-28 md:pt-40 pb-16 md:pb-24 min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Floating decorative leaves */}
          <i
            data-lucide="leaf"
            className="absolute top-1/4 left-[5%] md:left-1/4 w-8 md:w-12 h-8 md:h-12 text-brand-gold/20 -rotate-45 animate-float blur-[2px]"
          ></i>
          <i
            data-lucide="leaf"
            className="absolute bottom-1/4 right-[5%] md:right-1/4 w-10 md:w-16 h-10 md:h-16 text-brand-gold/10 rotate-12 animate-float blur-[4px]"
            style={{ animationDelay: '2s' }}
          ></i>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="reveal inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full border border-brand-gold/40 bg-brand-light/50 backdrop-blur-sm mb-6 md:mb-10">
              <i data-lucide="award" className="w-3 h-3 md:w-4 md:h-4 text-brand-gold"></i>
              <span className="text-[9px] md:text-xs font-semibold tracking-[0.15em] md:tracking-[0.2em] uppercase text-brand-gold-light whitespace-nowrap">
                Built for Chefs • Made for Quality
              </span>
            </div>

            <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 md:mb-8 leading-[1.2] md:leading-[1.1]">
              Premium Food Deserves <br className="hidden sm:block" />
              <span className="text-gold-gradient italic">Premium Greens.</span>
            </h2>

            <p className="reveal reveal-delay-2 max-w-2xl mx-auto text-base md:text-xl mb-8 md:mb-12 text-brand-muted font-light leading-relaxed px-4">
              One of the only specialized microgreens brands in Delhi NCR and Pune. We don't just grow greens. We
              cultivate freshness, nutrition, consistency, and unparalleled chef-grade quality.
            </p>

            <a
              href="#portfolio"
              className="reveal reveal-delay-2 group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-5 overflow-hidden rounded-sm bg-brand-gold text-brand-dark font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] text-sm md:text-base transition-all hover:scale-105"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
            >
              <span className=" absolute inset-0 w-full h-full bg-gradient-to-r from-brand-gold-dark to-brand-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                View The Harvest
                <i data-lucide="arrow-down" className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform"></i>
              </span>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative border-y border-brand-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Image/Badge Side */}
              <div className="order-2 lg:order-1 reveal glass-panel p-2 rounded-2xl relative">
                <div className="absolute -inset-4 border border-brand-gold/20 rounded-3xl pointer-events-none"></div>
                <div className="h-[350px] md:h-[500px] rounded-xl flex flex-col items-center justify-center bg-brand-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
                  <div className="z-10 text-center flex flex-col items-center px-4">
                    <div className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-8 relative rounded-full overflow-hidden border-2 border-brand-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                      <img
                        src="microgreen%20logo.png"
                        alt="Microgreen Synergy Organic"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          const imgElement = e.currentTarget;
                          imgElement.onerror = null;
                          imgElement.src =
                            'https://placehold.co/200x200/143b23/d4af37?text=100%25+Organic';
                        }}
                      />
                    </div>
                    <h4 className="text-xl md:text-3xl font-serif font-bold mb-2 md:mb-3 text-brand-gold-light">100% Organic</h4>
                    <div className="w-12 h-px bg-brand-gold/50 mx-auto mb-2 md:mb-3"></div>
                    <p className="text-brand-muted tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs">Urban Wellness • Sustainable</p>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="order-1 lg:order-2">
                <h3 className="reveal text-xs md:text-sm font-semibold tracking-[0.2em] text-brand-gold mb-3 md:mb-4 uppercase">
                  The Philosophy
                </h3>
                <h2 className="reveal text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-8 text-brand-text leading-tight">
                  Freshness You Can <span className="text-gold-gradient italic">Truly Taste.</span>
                </h2>
                <p className="reveal reveal-delay-1 mb-8 md:mb-10 text-base md:text-lg leading-relaxed text-brand-muted font-light">
                  From high-end gourmet restaurant plating to elevated everyday meals, our sustainably cultivated
                  microgreens bridge the gap between culinary artistry and nutrient-dense, hyper-local agriculture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-y-6 md:gap-x-4">
                  <div className="reveal reveal-delay-1 flex items-start gap-3 md:gap-4">
                    <div className="mt-1 p-1 rounded-full bg-brand-gold/10">
                      <i data-lucide="droplets" className="text-brand-gold w-4 h-4 md:w-5 md:h-5"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-text text-sm md:text-base">Hydroponically Grown</h5>
                      <p className="text-xs md:text-sm text-brand-muted mt-1">Water-efficient and clean.</p>
                    </div>
                  </div>
                  <div className="reveal reveal-delay-1 flex items-start gap-3 md:gap-4">
                    <div className="mt-1 p-1 rounded-full bg-brand-gold/10">
                      <i data-lucide="shield-check" className="text-brand-gold w-4 h-4 md:w-5 md:h-5"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-text text-sm md:text-base">Pesticide Free</h5>
                      <p className="text-xs md:text-sm text-brand-muted mt-1">100% pure and organic roots.</p>
                    </div>
                  </div>
                  <div className="reveal reveal-delay-2 flex items-start gap-3 md:gap-4">
                    <div className="mt-1 p-1 rounded-full bg-brand-gold/10">
                      <i data-lucide="clock" className="text-brand-gold w-4 h-4 md:w-5 md:h-5"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-text text-sm md:text-base">Harvested Daily</h5>
                      <p className="text-xs md:text-sm text-brand-muted mt-1">Peak nutritional value.</p>
                    </div>
                  </div>
                  <div className="reveal reveal-delay-2 flex items-start gap-3 md:gap-4">
                    <div className="mt-1 p-1 rounded-full bg-brand-gold/10">
                      <i data-lucide="chef-hat" className="text-brand-gold w-4 h-4 md:w-5 md:h-5"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-text text-sm md:text-base">Chef-Grade Quality</h5>
                      <p className="text-xs md:text-sm text-brand-muted mt-1">Designed for visual & flavor impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <h3 className="reveal text-xs md:text-sm font-semibold tracking-[0.2em] text-brand-gold mb-3 md:mb-4 uppercase">
                The Collection
              </h3>
              <h2 className="reveal text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-brand-text">
                Our Culinary Portfolio
              </h2>
              <div className="reveal w-24 h-px bg-brand-gold/50 mx-auto mb-6 md:mb-10"></div>

              {/* Filters - Responsive wrapping */}
              <div className="reveal flex flex-wrap justify-center gap-2 md:gap-4 px-2">
                {['all', 'bold-peppery', 'earthy-vibrant', 'sweet-fresh', 'aromatic'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`filter-btn px-3 md:px-6 py-1.5 md:py-2.5 rounded-sm text-[10px] md:text-sm font-medium tracking-wide transition-all border uppercase whitespace-nowrap ${
                      activeFilter === filter
                        ? 'active'
                        : 'border-brand-gold/30 text-brand-text hover:border-brand-gold'
                    }`}
                  >
                    {filter === 'all'
                      ? 'Complete Harvest'
                      : filter === 'bold-peppery'
                        ? 'Bold & Peppery'
                        : filter === 'earthy-vibrant'
                          ? 'Earthy & Vibrant'
                          : filter === 'sweet-fresh'
                            ? 'Sweet & Fresh'
                            : 'Aromatic'}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8" ref={productGridRef}>
              {products.map((product) => (
                <div
                  key={product.id}
                  data-category={product.category}
                  className={`reveal ${product.delay} product-card glass-panel p-5 md:p-8 rounded-xl border border-brand-gold/20 transition-all duration-300`}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                >
                  <div className="card-glare"></div>
                  <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5">
                    <i data-lucide="leaf" className="w-20 h-20 md:w-32 md:h-32 text-brand-gold -rotate-12 transform translate-x-4 md:translate-x-8 -translate-y-4 md:-translate-y-8"></i>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 text-brand-gold-light">{product.name}</h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] md:text-[9px] font-semibold tracking-[0.1em] md:tracking-[0.15em] px-2 md:px-2.5 py-0.5 md:py-1 bg-brand-dark/80 border border-brand-gold/30 text-brand-gold-light uppercase rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed text-brand-muted font-light">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 relative border-t border-brand-gold/10 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h3 className="reveal text-xs md:text-sm font-semibold tracking-[0.2em] text-brand-gold mb-3 md:mb-4 uppercase">
                Partnerships
              </h3>
              <h2 className="reveal text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-brand-text">
                Ready to Elevate Your Menu?
              </h2>
              <p className="reveal reveal-delay-1 text-base md:text-lg text-brand-muted font-light max-w-2xl mx-auto px-4">
                Request exclusive chef samples, view our weekly harvest schedule, or discuss a bespoke culinary supply
                program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="reveal glass-panel p-6 md:p-10 rounded-xl">
                <h4 className="text-lg md:text-xl font-serif font-bold mb-5 md:mb-8 flex items-center gap-2 md:gap-3 text-brand-gold-light">
                  <i data-lucide="map-pin" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold"></i> Our Farms
                </h4>
                <div className="space-y-6 md:space-y-8">
                  <div className="group relative pl-3 md:pl-4 border-l-2 border-brand-gold/20 hover:border-brand-gold transition-colors">
                    <p className="text-base md:text-lg font-medium text-white mb-1">Delhi NCR Region</p>
                    <p className="text-xs md:text-sm text-brand-muted font-light">Serving the National Capital's elite dining.</p>
                  </div>
                  <div className="group relative pl-3 md:pl-4 border-l-2 border-brand-gold/20 hover:border-brand-gold transition-colors">
                    <p className="text-base md:text-lg font-medium text-white mb-1">Pune, Maharashtra</p>
                    <p className="text-xs md:text-sm text-brand-muted font-light">Supplying Maharashtra's culinary hub.</p>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-delay-1 glass-panel p-6 md:p-10 rounded-xl">
                <h4 className="text-lg md:text-xl font-serif font-bold mb-5 md:mb-8 flex items-center gap-2 md:gap-3 text-brand-gold-light">
                  <i data-lucide="book-open" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold"></i> Concierge
                </h4>
                <div className="space-y-4 md:space-y-6">
                  <a
                    href="tel:+918826425252"
                    className="group flex items-center gap-3 md:gap-4 text-brand-text hover:text-brand-gold transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                      <i data-lucide="phone" className="w-3 h-3 md:w-4 md:h-4 text-brand-gold"></i>
                    </div>
                    <span className="tracking-wider md:tracking-widest text-xs md:text-sm">+91 88264 25252</span>
                  </a>
                  <a
                    href="tel:+917821018001"
                    className="group flex items-center gap-3 md:gap-4 text-brand-text hover:text-brand-gold transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                      <i data-lucide="phone" className="w-3 h-3 md:w-4 md:h-4 text-brand-gold"></i>
                    </div>
                    <span className="tracking-wider md:tracking-widest text-xs md:text-sm">+91 78210 18001</span>
                  </a>
                  <a
                    href="mailto:microgreensynergy@gmail.com"
                    className="group flex items-center gap-3 md:gap-4 text-brand-text hover:text-brand-gold transition-colors break-all"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0 bg-brand-dark border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                      <i data-lucide="mail" className="w-3 h-3 md:w-4 md:h-4 text-brand-gold"></i>
                    </div>
                    <span className="tracking-wider md:tracking-widest text-[10px] md:text-sm lowercase">microgreensynergy@gmail.com</span>
                  </a>
                  <a
                    href="https://www.instagram.com/microgreen_synergy"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 md:gap-4 text-brand-text hover:text-brand-gold transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                      <i data-lucide="instagram" className="w-3 h-3 md:w-4 md:h-4 text-brand-gold"></i>
                    </div>
                    <span className="tracking-wider md:tracking-widest text-xs md:text-sm lowercase">@microgreen_synergy</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 border-t border-brand-gold/10 bg-[#040e08]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
            <i data-lucide="leaf" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold/50 mb-3 md:mb-4"></i>
            <p className="text-[10px] md:text-xs text-brand-muted tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 md:mb-4 text-center">
              &copy; <span id="year"></span> Microgreen Synergy. All rights reserved.
            </p>
            <a
              href="https://krishankhbiotech.com/microgreens"
              target="_blank"
              className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-brand-gold/60 hover:text-brand-gold transition-colors border-b border-transparent hover:border-brand-gold pb-1"
            >
              A Krishankh Biotech Brand
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MicrogreenSynergy;