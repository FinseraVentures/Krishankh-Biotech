import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import bg from "@/assets/Biocoal.png";
import {
  Flame,
  Recycle,
  Factory,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const specifications = [
  { label: "Calorific Value", value: "4000-4500 kcal/kg" },
  { label: "Moisture Content", value: "< 10%" },
  { label: "Ash Content", value: "< 8%" },
  { label: "Fixed Carbon", value: "> 65%" },
  { label: "Volatile Matter", value: "20-25%" },
  { label: "Bulk Density", value: "600-700 kg/m³" },
];

const useCases = [
  {
    icon: Factory,
    title: "Industrial Boilers",
    description:
      "Cost-effective fuel for steam generation and industrial heating applications.",
  },
  {
    icon: Flame,
    title: "Brick Kilns",
    description:
      "Clean-burning alternative to traditional coal in brick manufacturing.",
  },
  {
    icon: Leaf,
    title: "Agricultural Drying",
    description: "Sustainable fuel for crop drying and processing facilities.",
  },
];

const benefits = [
  "Carbon-neutral fuel source",
  "Lower emissions than traditional coal",
  "Made from agricultural waste",
  "Consistent quality and supply",
  "Cost-effective alternative",
  "Supports circular economy",
];

const Biocoal = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Biocoal ,Clean Energy from Waste"
        subtitle="Converting agricultural waste into high-quality biocoal for industrial and agricultural applications. Sustainable energy that powers progress."
        badge="Clean Energy"
        backgroundImage={`${bg}`}
      />

      {/* Use Cases */}
      <section className="py-20 bg-card">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Versatile clean fuel for multiple industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="text-center p-8 bg-background rounded-2xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technical Specifications
              </h2>
              <p className="text-muted-foreground mb-8">
                Our biocoal meets strict quality standards for industrial
                applications, ensuring consistent performance and reliability.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-card rounded-xl border border-border p-4"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      {spec.label}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Choose Our Biocoal?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request Specifications
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Waste to Energy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our biocoal production process transforms agricultural waste into
            clean, efficient fuel.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border">
              <Recycle className="w-6 h-6 text-primary" />
              <span className="font-medium">Agri-Waste Collection</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border">
              <Factory className="w-6 h-6 text-primary" />
              <span className="font-medium">Carbonization Process</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border">
              <Flame className="w-6 h-6 text-primary" />
              <span className="font-medium">Premium Biocoal</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Biocoal;
