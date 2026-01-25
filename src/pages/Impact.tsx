import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import bg from "@/assets/impact-model.png";
import {
  Recycle,
  Users,
  Leaf,
  Globe,
  ArrowRight,
  TreeDeciduous,
  Droplets,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const impactAreas = [
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Every process feeds into another. Agricultural waste becomes biocoal. Biocoal generates revenue. Revenue funds more sustainable farming.",
    stat: "100%",
    statLabel: "Waste Utilization Goal",
  },
  {
    icon: Users,
    title: "Rural Empowerment",
    description:
      "Creating jobs and income opportunities in rural India through sustainable agriculture and energy production.",
    stat: "500+",
    statLabel: "Rural Jobs Targeted",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description:
      "Hydroponic systems use 90% less water and zero pesticides, producing safer, healthier food.",
    stat: "90%",
    statLabel: "Water Savings",
  },
  {
    icon: Globe,
    title: "Carbon Reduction",
    description:
      "Solar-powered operations and biocoal production significantly reduce carbon emissions.",
    stat: "Net Zero",
    statLabel: "Carbon Goal",
  },
];

const sdgAlignment = [
  {
    number: 2,
    title: "Zero Hunger",
    description: "Sustainable food production",
  },
  {
    number: 7,
    title: "Affordable & Clean Energy",
    description: "Solar & biocoal solutions",
  },
  { number: 8, title: "Decent Work", description: "Rural job creation" },
  {
    number: 12,
    title: "Responsible Consumption",
    description: "Circular economy model",
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Carbon reduction focus",
  },
];

const Impact = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Our Impact Model"
        subtitle="Building a regenerative ecosystem that transforms agriculture, empowers communities, and protects the planet. Real impact, measurable results."
        badge="Sustainability"
        backgroundImage={`${bg}`}
      />

      {/* Impact Areas */}
      <section className="py-20 bg-card">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Create Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our integrated approach addresses multiple sustainability
              challenges simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area) => (
              <div
                key={area.title}
                className="bg-background rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-3xl font-bold text-primary">
                    {area.stat}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {area.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Model Visual */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Circular Model
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            A self-sustaining ecosystem where every output becomes an input.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <TreeDeciduous className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Hydroponic produce with minimal resources
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Convert</h3>
                <p className="text-sm text-muted-foreground">
                  Agricultural waste into biocoal energy
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Power</h3>
                <p className="text-sm text-muted-foreground">
                  Solar energy for sustainable operations
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-lg text-foreground">
                <span className="font-bold text-primary">Result:</span> Zero
                waste, reduced emissions, profitable operations, and rural
                prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SDG Alignment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our work directly contributes to the United Nations Sustainable
              Development Goals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {sdgAlignment.map((sdg) => (
              <div
                key={sdg.number}
                className="bg-card rounded-xl border border-border p-4 text-center min-w-[160px]"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold">
                  {sdg.number}
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">
                  {sdg.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {sdg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-wide mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you buy our produce, partner with us, or invest in our
            vision — you're contributing to a sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/microgreens"
              className="px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Buy Our Produce
            </Link>
            <Link
              to="/partners"
              className="px-8 py-4 rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Impact;
