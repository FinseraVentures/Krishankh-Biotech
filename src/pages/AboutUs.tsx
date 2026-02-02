import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Leaf,
  Recycle,
  Sun,
  Sprout,
  Shield,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Every decision we make prioritizes environmental regeneration and long-term ecological balance.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Empowering rural communities through education, employment, and shared prosperity.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Transforming waste into valuable resources, creating zero-waste agricultural ecosystems.",
  },
  {
    icon: Sun,
    title: "Clean Energy",
    description:
      "Powering our operations with 100% renewable solar energy for a carbon-neutral footprint.",
  },
];

const stats = [
  { value: "90%", label: "Less Water Usage" },
  { value: "100%", label: "Renewable Energy" },
  { value: "Zero", label: "Waste to Landfill" },
  { value: "500+", label: "Farmers Impacted" },
];

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Enhanced Hero Section */}
      <PageHero
        title="About Krishankh Biotech"
        subtitle="Pioneering sustainable agriculture through innovation, technology, and community empowerment since our inception"
        backgroundImage={aboutHero}
        badge="Transforming Rural India"
      />

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Vision to Reality
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Krishankh Biotech LLP was born from a simple yet powerful
                vision: to transform India's agricultural landscape by creating
                a circular ecosystem that benefits both the environment and
                rural communities.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based in Baner Gaon, Haveli, District Pune, we are building a
                model biome that demonstrates how sustainable agriculture can be
                both profitable and regenerative. Our integrated approach
                combines hydroponic farming, biocoal production, solar energy,
                and organic processing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that the future of agriculture lies in circular
                economies—where waste becomes wealth, where technology empowers
                farmers, and where sustainability drives profitability.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-forest-light/20 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-6 text-center shadow-soft"
                    >
                      <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="icon-box mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a zero-waste, circular ecosystem that regenerates
                land, empowers communities, and drives climate-resilient rural
                development across India.
              </p>
            </div>
            <div className="card-elevated">
              <div className="icon-box mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build India's first national network of self-sustaining
                agro-biomes that enable green rural industries, reverse
                ecological damage, and fuel a clean, circular economy at scale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Commitment
            </span>
            <h2 className="section-title">Ethics, Responsibility & Impact</h2>
            <p className="section-subtitle mx-auto">
              Building a sustainable future through principled practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-elevated text-center">
              <div className="icon-box mx-auto mb-6 bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Ethical Operations
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transparent operations with fair rural participation and
                responsible sourcing at every step.
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="icon-box mx-auto mb-6 bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Responsible Growth
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sustainable agriculture and clean energy practices that scale
                without compromising our values.
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="icon-box mx-auto mb-6 bg-primary/10">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Closed-Loop Systems
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Responsible waste sourcing and renewable energy usage with
                complete resource utilisation.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-foreground leading-relaxed text-center max-w-4xl mx-auto">
              At Krishankh Biotech LLP, ethics are embedded into how we grow,
              source, produce, and scale. We focus on{" "}
              <span className="font-semibold text-primary">
                sustainable agriculture
              </span>
              ,<span className="font-semibold text-primary"> clean energy</span>
              ,
              <span className="font-semibold text-primary">
                {" "}
                transparent operations
              </span>
              , and
              <span className="font-semibold text-primary">
                {" "}
                fair rural participation
              </span>
              . Our practices emphasise responsible waste sourcing, renewable
              energy usage, and closed-loop resource utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="icon-box mx-auto mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Partner with us to build a sustainable future for India's farming
            communities
          </p>
          <Link to="/contact" className="btn-gold group inline-flex">
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
