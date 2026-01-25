import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Check, Clock, Package, Star, ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import bg from "@/assets/Microgreens.png";
import radishRedImg from "@/assets/microgreen/Radish Red.png";
import radishGreenImg from "@/assets/microgreen/Radish Green.png";
import knolKnolImg from "@/assets/microgreen/knol knol.png";
import broccoliImg from "@/assets/microgreen/Broccoli.png";
import sunflowerImg from "@/assets/microgreen/Sunflower.png";
import amaranthusRedImg from "@/assets/microgreen/Amranthus.png";
import dillImg from "@/assets/microgreen/Dill.png";

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
    title: "< 24 Hour Delivery",
    description:
      "Harvested fresh and delivered within 24 hours to Pune & Mumbai",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Chef-grade microgreens grown in controlled hydroponic environments",
  },
];

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
    const phoneNumber = "919876543210";
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
      {/* <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-wide mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Pune & Mumbai Delivery
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fresh Microgreens,
              <span className="block text-primary">Grown to Order</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premium, chef-grade microgreens harvested and delivered within 24
              hours. Custom quantities for restaurants, hotels, caterers, and
              health-conscious consumers.
            </p>

            <a
              href="#quote-form"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Request a Custom Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section> */}
      <PageHero
        title="Fresh Microgreens, Grown to Order"
        subtitle="Premium, chef-grade microgreens harvested and delivered within 24 hours. Custom quantities for restaurants, hotels, caterers, and health-conscious consumers."
        badge="Pune & Mumbai Delivery"
        backgroundImage={bg}
      />

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
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
