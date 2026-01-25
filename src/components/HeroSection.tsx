import { ArrowRight, ShoppingBag, Handshake, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-primary/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
      </div>

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide mx-auto px-6 md:px-12 pt-28 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-10 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Now Delivering Fresh Microgreens in Pune & Mumbai
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100 tracking-tight leading-tight">
            Circular Agriculture.
            <span className="block text-primary">
              Real Produce. Real Impact.
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up delay-200 leading-relaxed">
            We grow premium microgreens & exotic produce, convert agri-waste
            into biocoal, and power farms with solar — creating a profitable,
            sustainable ecosystem.
          </p>

          {/* 3 Audience-Specific CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            {/* CTA 1: Buy Our Produce */}
            <Link
              to="/microgreens"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <ShoppingBag className="w-5 h-5" />
              Buy Our Produce
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* CTA 2: Partner / Invest */}
            <Link
              to="/partners"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-accent"
            >
              <Handshake className="w-5 h-5" />
              Partner / Invest
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* CTA 3: Explore Our Impact Model */}
            <Link
              to="/impact"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-card text-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <Globe className="w-5 h-5" />
              Explore Impact Model
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 animate-fade-up delay-400">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  7+
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  Microgreen Varieties
                </p>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  &lt;24hrs
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  Farm to Door
                </p>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  B2B
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  & Retail Ready
                </p>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  ESG
                </span>
                <p className="text-sm text-muted-foreground mt-1">Aligned</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
