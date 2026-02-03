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

const varieties = [
  {
    name: "Radish Red",
    price: "₹150",
    weight: "80-100g",
    popular: true,
    img: radishRedImg,
  },
  {
    name: "Radish Green",
    price: "₹150",
    weight: "80-100g",
    popular: false,
    img: radishGreenImg,
  },
  {
    name: "Knol Knol",
    price: "₹160",
    weight: "80-100g",
    popular: false,
    img: knolKnolImg,
  },
  {
    name: "Broccoli",
    price: "₹180",
    weight: "80-100g",
    popular: true,
    img: broccoliImg,
  },
  {
    name: "Sunflower",
    price: "₹160",
    weight: "80-100g",
    popular: true,
    img: sunflowerImg,
  },
  {
    name: "Amaranthus Red",
    price: "₹170",
    weight: "80-100g",
    popular: false,
    img: amaranthusRedImg,
  },
  {
    name: "Dill (Premium)",
    price: "₹200",
    weight: "80-100g",
    popular: true,
    img: dillImg,
  },
  {
    name: "Aragula",
    price: "₹160",
    weight: "80-100g",
    popular: false,
    img: aragula,
  },
  {
    name: "Moong beans",
    price: "₹145",
    weight: "80-100g",
    popular: false,
    img: moongBeans,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((variety) => (
              <div
                key={variety.name}
                className={`relative rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  variety.img
                    ? "text-white hover:shadow-xl"
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
                {/* Overlay for image cards */}
                {variety.img && (
                  <div className="absolute inset-0 bg-black/45 rounded-xl" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {variety.popular && (
                    //
                    <span
                      className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                        variety.img
                          ? "bg-yellow-500/80 text-white"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      Popular
                    </span>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4  invisible ${
                      variety.img ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    {/* <Leaf
                      className={`w-6 h-6 ${
                        variety.img ? "text-white" : "text-primary"
                      }`}
                    /> */}
                  </div>

                  <h3 className="text-lg font-bold mb-1">{variety.name}</h3>

                  <p
                    className={`text-sm mb-3 ${
                      variety.img ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {variety.weight} box
                  </p>

                  <p
                    className={`text-2xl font-bold ${
                      variety.img ? "text-white" : "text-primary"
                    }`}
                  >
                    {variety.price}/-
                  </p>
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
      <Footer />
    </main>
  );
};

export default Microgreens;
