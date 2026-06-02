import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
// import microgreenLogo from "@/assets/MicroGreen-Lo.jpeg";
import microgreenLogo from "@/assets/test-3.png";
import {
  Check,
  Clock,
  Package,
  Star,
  ArrowRight,
  Leaf,
  ArrowDown,
  Sparkles,
  Instagram,
  Grid3x3,
  Calculator,
  Globe,
  Phone,
  Mail,
  Leaf as LeafIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import bg from "@/assets/Microgreens.png";
import radishRedImg from "@/assets/microgreen/Radish Red.png";
import radishGreenImg from "@/assets/microgreen/Radish Green.png";
import knolKnolImg from "@/assets/microgreen/knol knol.png";
import broccoliImg from "@/assets/microgreen/Broccoli.png";
import sunflowerImg from "@/assets/microgreen/Sunflower.png";
import amaranthusRedImg from "@/assets/microgreen/Amranthus.png";
import dillImg from "@/assets/microgreen/Dill.png";
import aragula from "@/assets/microgreen/Aragula.png";
import moongBeans from "@/assets/microgreen/Moong Beans.png";
import mustardImg from "@/assets/microgreen/Mustard.jpeg";
import fenugreekImg from "@/assets/microgreen/Fenugreek.jpeg";
import alfalafaImg from "@/assets/microgreen/Alfalfa.jpeg";
import peasShootsImg from "@/assets/microgreen/Pea Shoots.jpeg";
import swissChardImg from "@/assets/microgreen/Swiss Chard.jpeg";


const varieties = [
  {
    name: "Radish Red",
    price: "₹150",
    weight: "80-100g",
    popular: true,
    img: radishRedImg,
    tagline: "Bold • Peppery • Crisp",
    description:
      "Vibrant crimson stems with a bold, spicy peppery kick. Perfect for adding a satisfying crunch and striking color to any dish.",
  },
  {
    name: "Radish Green",
    price: "₹150",
    weight: "80-100g",
    popular: false,
    img: radishGreenImg,
    tagline: "Sharp • Fresh • Classic",
    description:
      "Crisp, fresh, and intensely flavorful. Delivers a sharp, classic radish bite in a delicate green leaf.",
  },
  {
    name: "Knol Knol",
    price: "₹160",
    weight: "80-100g",
    popular: false,
    img: knolKnolImg,
    tagline: "Mild • Sweet • Hearty",
    description:
      "Features a crisp texture and a mild, sweet cabbage-like flavor. A hearty and versatile green for everyday luxury.",
  },
  {
    name: "Broccoli",
    price: "₹180",
    weight: "80-100g",
    popular: true,
    img: broccoliImg,
    tagline: "Earthy • Dense • Delicate",
    description:
      "Mild, earthy, and highly nutrient-dense. Celebrated for its delicate texture and exceptionally high sulforaphane content.",
  },
  {
    name: "Sunflower",
    price: "₹160",
    weight: "80-100g",
    popular: true,
    img: sunflowerImg,
    tagline: "Nutty • Thick • Juicy",
    description:
      "Rich and nutty with a thick, juicy crunch. Acts as an excellent hearty base for premium salads and gourmet sandwiches.",
  },
  {
    name: "Amaranthus Red",
    price: "₹170",
    weight: "80-100g",
    popular: false,
    img: amaranthusRedImg,
    tagline: "Fuchsia • Earthy • Striking",
    description:
      "Stunning glowing fuchsia color with a mild, earthy taste. The ultimate luxury garnish for high-end plating.",
  },
  {
    name: "Dill (Premium)",
    price: "₹200",
    weight: "80-100g",
    popular: true,
    img: dillImg,
    tagline: "Aromatic • Elegant • Intense",
    description:
      "Feathery, elegant, and highly aromatic. Delivers a concentrated burst of classic dill flavor, ideal for seafood.",
  },
  {
    name: "Arugula",
    price: "₹160",
    weight: "80-100g",
    popular: false,
    img: aragula,
    tagline: "Nutty • Bold • Punchy",
    description:
      "Bold, nutty, and distinctly peppery. A delicate, sophisticated leaf that packs a punchy flavor profile.",
  },
  {
    name: "Moong Beans",
    price: "₹145",
    weight: "80-100g",
    popular: false,
    img: moongBeans,
    tagline: "SWEET FRESH • HYDRATING ",
    description:
      "Packed with protein, fiber, and essential nutrients, Moong Bean sprouts offer a fresh, crunchy texture and mild flavor. Perfect for salads, sandwiches, stir-fries, and healthy snacks."
  },
  {
    name: "Mustard",
    price: "₹170",
    weight: "80-100g",
    popular: true,
    img: mustardImg,
    tagline: "ZESTY  • PUNGENT  • BOLD",
    description:
      "  Delivers a sharp, zesty, and intensely spicy kick reminiscent of horseradish. Ideal for adding bold flavor and a vibrant green visual contrast to meats, salads, and gourmet sandwiches."
  },
  {
    name: "Fenugreek",
    price: "₹170",
    weight: "80-100g",
    popular: true,
    img: fenugreekImg,
    tagline: "BITTER  • SPICY  • AROMATIC",
    description:
      "Features a distinct, slightly bitter, and intensely aromatic flavor profile. A staple for adding complex, earthy notes to savory dishes, curries, and flatbreads."
  },
  {
    name: "Alfa Alfa",
    price: "₹180",
    weight: "80-100g",
    popular: false,
    img: alfalafaImg,
    tagline: "MILD  • NUTTY  • CRISP",
    description:
      "Delicate and crisp with a mild, slightly nutty flavor. Highly nutritious and excellent for adding light volume and a satisfying fresh crunch to sandwiches, wraps, and salads."
  },
  {
    name: "Peas (Shoots)",
    price: "₹170",
    weight: "80-100g",
    popular: true,
    img: peasShootsImg,
    tagline: "Sweet • Tender • Fresh",
    description:
      "Sweet farm-fresh pea flavor with elegant, tender tendrils. Beautifully delicate yet bursting with taste.",
  },
  {
    name: "Swiss Chard",
    price: "₹180",
    weight: "80-100g",
    popular: false,
    img: swissChardImg,
    tagline: "Vibrant • Earthy • Sweet",
    description:
      "Earthy and slightly sweet, featuring vibrant brightly colored stems that instantly elevate the aesthetics of any plate.",
  },
];

const benefits = [
  {
    icon: Package,
    title: "Custom MOQ",
    description:
      "Flexible order quantities for restaurants, hotels, and retail",
  },
  {
    icon: Clock,
    title: "Assured timely delivery",
    description: "Harvested fresh and assured timely delivery to Pune & Mumbai",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Chef-grade microgreens grown in controlled hydroponic environments",
  },
];

const title = "Fresh Microgreens, Grown to Order";
const subtitle =
  "Premium, chef-grade microgreens harvested and assured timely delivery. Custom quantities for restaurants, hotels, caterers, and health-conscious consumers.";
const badge = "Pune & Mumbai Delivery";
const backgroundImage = bg;
const showScrollIndicator = true;

const Microgreens = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    varieties: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const phoneNumber = "918826425252";
    const text = encodeURIComponent(
      `Hi! I'd like to request a quote for microgreens.\n\nName: ${formData.name}\nBusiness: ${formData.businessType}\nVarieties: ${formData.varieties}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`,
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

      {/* Hero */}
      {/* <PageHero
        title="Fresh Microgreens, Grown to Order"
        subtitle="Premium, chef-grade microgreens harvested and assured timely delivery. Custom quantities for restaurants, hotels, caterers, and health-conscious consumers."
        badge="Pune & Mumbai Delivery"
        backgroundImage={bg}
      /> */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {backgroundImage ? (
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
          )}

          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/40 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />

          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-pattern" x="0" y="0" width="40" height="40">
                  <circle
                    cx="20"
                    cy="20"
                    r="1"
                    fill="currentColor"
                    className="text-primary-foreground"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-foreground/5 rounded-full blur-xl animate-pulse" />

        {/* Content */}
        <div className="relative z-10 container-wide mx-auto px-6 md:px-12 text-center text-primary-foreground py-32">
          {/* Logo + Brand */}
          <div className="flex flex-col items-center gap-4 mb-6 animate-fade-in">
            {/* Logo */}

            <div className="flex items-center justify-center mb-6 relative">
              {/* Wave Ring – Light Green */}
              <span
                className="
      absolute
      w-32 h-32 md:w-36 md:h-36
      rounded-full
      border-2 border-green-300/40
      animate-waveLight
    "
              />

              {/* Wave Ring – Dark Green */}
              <span
                className="
      absolute
      w-32 h-32 md:w-36 md:h-36
      rounded-full
      border-2 border-green-600/40
      animate-waveDark
    "
              />

              {/* Logo Container */}
              <div
                className="
      relative z-10
      w-28 h-28 md:w-32 md:h-32
      rounded-full
      bg-transparent
      shadow-lg
      overflow-hidden
      flex items-center justify-center
    "
              >
                <img
                  src={microgreenLogo}
                  alt="Microgreen Synergy"
                  className="w-full h-full object-contain scale-110"
                />
              </div>
            </div>

            {/* 
            <img
              src={microgreenLogo}
              alt="Microgreen Synergy"
              className="h-28 md:h-32 object-contain"
            /> */}

            <p className="text-sm uppercase tracking-widest text-primary-foreground/80">
              Microgreens by{" "}
              <span className="font-semibold">Microgreen Synergy</span>
            </p>
          </div>

          {/* Premium Tagline */}
          <p className="text-base md:text-lg font-medium text-primary-foreground/90 mb-6 animate-fade-in">
            Premium • Fresh • Custom-Grown
          </p>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-foreground/50" />
            <Leaf className="w-5 h-5 text-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-foreground/50" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in mb-6">
            {subtitle}
          </p>

          {/* Support Line */}
          <p className="text-sm md:text-base text-primary-foreground/80 animate-fade-in mb-8">
            Custom orders • Harvested to order • HORECA ready
          </p>

          {/* Instagram Social Proof */}
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <a
              href="https://www.instagram.com/microgreen_synergy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 animate-fade-in hover:opacity-90 transition"
            >
              <Instagram className="w-5 h-5 text-primary-foreground/90" />
              <span className="text-sm text-primary-foreground/80">
                Follow us on Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        )}

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t to-transparent" />
      </section>

      {/* Why You Win */}
      <section className="py-20 bg-card">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why You Win
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partnering with Krishankh means access to the freshest,
              highest-quality microgreens with unmatched flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varieties Grid */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Varieties
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chef-curated selection of premium microgreens, each grown with
              care in our controlled hydroponic facility.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((variety) => (
              <div
                key={variety.name}
                className="relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {variety.popular && (
                  <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Popular
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {variety.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {variety.weight} box
                </p>
                <p className="text-2xl font-bold text-primary">
                  {variety.price}
                </p>
              </div>
            ))}
          </div> */}

          {/* ORGGGGGGGGGGGGGGGGGGGGGG */}


          {/* chanagagsgaga */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((variety) => (
              <div
                key={variety.name}
                className={`relative h-[320px] rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${variety.img
                  ? "text-white hover:shadow-2xl"
                  : "bg-card hover:shadow-lg"
                  }`}
                style={
                  variety.img
                    ? {
                      backgroundImage: `url(${variety.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                    : undefined
                }
              >
                {/* IMAGE OVERLAYS */}
                {variety.img && (
                  <>
                    {/* Slight dark overlay */}
                    <div className="absolute inset-0 bg-black/15" />

                    {/* Bottom Blur Layer */}
                    <div className="absolute bottom-0 left-0 right-0 h-44">
                      <div className="absolute inset-0 " />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                    </div>

                    {/* Additional fade for smoother transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </>
                )}

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full p-6">
                  {/* Popular Badge */}
                  {variety.popular && (
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${variety.img
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      Popular
                    </span>
                  )}

                  {/* Push content to bottom */}
                  <div className="mt-auto">
                    <h3
                      className={`text-2xl font-bold mb-2 ${variety.img ? "text-white" : "text-foreground"
                        }`}
                    >
                      {variety.name}
                    </h3>

                    <p
                      className={`text-xs uppercase tracking-[3px] font-medium ${variety.img
                        ? "text-yellow-300"
                        : "text-primary"
                        }`}
                    >
                      {variety.tagline}
                    </p>

                    <p
                      className={`mt-3 text-sm leading-relaxed line-clamp-3 ${variety.img
                        ? "text-white/90"
                        : "text-muted-foreground"
                        }`}
                    >
                      {variety.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                Volume-based & recurring discounts available.
              </span>
              <br />
              Contact us for custom pricing on bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-secondary/30">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Request a Custom Quote
              </h2>
              <p className="text-muted-foreground">
                Tell us about your requirements and we'll get back to you within
                24 hours.
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
                    Phone Number
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
                    placeholder="john@restaurant.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select...</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="caterer">Caterer</option>
                    <option value="retail">Retail Store</option>
                    <option value="individual">Individual Consumer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested Varieties
                  </label>
                  <input
                    type="text"
                    name="varieties"
                    value={formData.varieties}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g., Broccoli, Sunflower, Dill"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estimated Weekly Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g., 20 boxes/week"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about any specific requirements, delivery schedule preferences, etc."
                />
              </div>

              <button
                type="submit"
                className="w-[85%] mx-auto flex items-center justify-center gap-3 px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request Quote via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section - Portfolio & Calculator */}
      {/* Navigation Cards Section - Portfolio & Calculator */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Explore More
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our premium quality standards or calculate your custom requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Portfolio Card */}
            <Link
              to="/portfolio"
              className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Grid3x3 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Portfolio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore our premium quality microgreens collection and see what makes us different
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>

            {/* Requirements Calculator Card */}
            <Link
              to="/requirement-calculator"
              className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Requirement Calculator
                </h3>
                <p className="text-muted-foreground mb-4">
                  Calculate your custom microgreens requirements and get instant estimates
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Calculate Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Microgreen Synergy Premium Contact Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-primary/80 py-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-pattern" x="0" y="0" width="60" height="60">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>

        {/* Decorative Leaves */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
          <LeafIcon className="w-full h-full text-white" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 rotate-45">
          <LeafIcon className="w-full h-full text-white" />
        </div>

        <div className="relative z-10 container-wide mx-auto px-6 md:px-12 text-center">
          {/* Main Quote */}
          <div className="max-w-4xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-wide mb-6 text-white">
              CURATED FOR EXCELLENCE.
              <br />
              <span className="font-semibold text-primary-foreground/90">GROWN FOR TASTE.</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          </div>

          {/* Contact Info */}
          <div className="max-w-3xl mx-auto mb-6">
            <p className="text-white/80 text-lg md:text-xl mb-6 font-light">
              To request samples, access our harvest schedule, or discuss a partnership:
            </p>

            <div className="space-y-4">
              {/* <div className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors group">
                <Globe className="w-5 h-5 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://www.krishankhbiotech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  www.krishankhbiotech.com
                </a>
              </div> */}

             <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-6 text-center px-4">

  {/* Website */}
  <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors group break-all">
    <Globe className="w-5 h-5 shrink-0 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
    <a
      href="https://www.krishankhbiotech.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline underline-offset-4"
    >
      www.krishankhbiotech.com
    </a>
  </div>

  <span className="hidden sm:inline text-white/30">•</span>

  {/* Phone */}
  <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors group">
    <Phone className="w-5 h-5 shrink-0 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
    <a
      href="tel:+917821018001"
      className="hover:underline underline-offset-4"
    >
      +91 78210 18001
    </a>
  </div>

  <span className="hidden sm:inline text-white/30">•</span>

  {/* Email */}
  <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors group break-all">
    <Mail className="w-5 h-5 shrink-0 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
    <a
      href="mailto:microgreensynergy@gmail.com"
      className="hover:underline underline-offset-4"
    >
      microgreensynergy@gmail.com
    </a>
  </div>

</div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />

          {/* Bottom Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              <span className="text-sm uppercase tracking-wider text-white/70 font-medium">100% Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              <span className="text-sm uppercase tracking-wider text-white/70 font-medium">Urban Wellness</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              <span className="text-sm uppercase tracking-wider text-white/70 font-medium">Sustainable Farming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Original Footer */}
      <Footer />
    </main>
  );
};

export default Microgreens;