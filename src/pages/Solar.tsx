import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import bg from "@/assets/Solar.png";
import {
  Sun,
  Zap,
  TrendingDown,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Zap,
    title: "Reduced Energy Costs",
    description:
      "Significantly lower operational costs for agricultural facilities.",
  },
  {
    icon: Leaf,
    title: "Carbon Footprint Reduction",
    description: "Clean energy that aligns with sustainability goals.",
  },
  {
    icon: TrendingDown,
    title: "Long-term Savings",
    description: "25+ year lifespan with minimal maintenance requirements.",
  },
];

const features = [
  "Grid-tied and off-grid solutions",
  "Agricultural pumping systems",
  "Cold storage power solutions",
  "Processing unit electrification",
  "Smart monitoring systems",
  "Maintenance support included",
];

const Solar = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Solar Integration for Farms"
        subtitle="Powering sustainable agriculture with clean solar energy. Reduce costs, reduce emissions, and ensure reliable power for your agricultural operations."
        badge="Sustainable Power"
        backgroundImage={`${bg}`}
      />

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Solar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clean, reliable energy that pays for itself while supporting
              sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-8 bg-background rounded-2xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
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

      {/* Our Model */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Solar Model
              </h2>
              <p className="text-muted-foreground mb-8">
                We integrate solar power into agricultural operations, from
                irrigation pumps to cold storage facilities. Our comprehensive
                solutions ensure reliable, sustainable energy for modern
                farming.
              </p>

              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-border p-8 text-center">
              <Sun className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in Solar for Your Farm?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how solar energy can transform your agricultural
                operations.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Our Model
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl font-bold text-primary">50%+</span>
              <p className="text-muted-foreground mt-2">
                Energy Cost Reduction
              </p>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary">25+</span>
              <p className="text-muted-foreground mt-2">Years Lifespan</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary">Zero</span>
              <p className="text-muted-foreground mt-2">Emissions</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary">24/7</span>
              <p className="text-muted-foreground mt-2">Monitoring</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Solar;
