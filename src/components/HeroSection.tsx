import {
  ArrowRight,
  ShoppingBag,
  Handshake,
  Globe,
  Smartphone,
  Sun,
  Zap,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";
import circularBioeconomy from "@/assets/circular-main.jpeg";
import bgVid from "@/assets/bg-main.mp4";

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
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.3]"
        >
          <source src={bgVid} type="video/mp4" />
        </video>
      </div>

      <div className="container-wide mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-[100%] items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-10 animate-fade-up text-[10px] sm:text-xs md:text-sm">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary"></span>
              </span>
              <span className="font-medium text-primary line-clamp-2 sm:line-clamp-1">
                Now Delivering Fresh Microgreens in Pune & Mumbai
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up delay-100 tracking-tight leading-tight">
              Circular Agriculture.
              <span className="block text-primary">
                Real Produce. Real Impact.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 animate-fade-up delay-200 leading-relaxed">
              We grow premium microgreens & exotic produce, convert agri-waste
              into biocoal, and power farms with solar creating a profitable,
              sustainable ecosystem.
            </p>

            {/* 3 Audience-Specific CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 sm:gap-3 animate-fade-up delay-300 w-full">
              {/* CTA 1: Buy Our Produce */}
              <Link
                to="/microgreens"
                className="group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[65%] sm:w-auto whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Buy Produce</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* CTA 2: Partner / Invest */}
              <Link
                to="/partners"
                className="group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-accent text-accent-foreground font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-accent w-[65%] sm:w-auto whitespace-nowrap"
              >
                <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Partner/Invest</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* CTA 3: Explore Our Impact Model */}
              <Link
                to="/impact"
                className="group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-card text-foreground font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border w-[65%] sm:w-auto whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Explore Impact</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 sm:mt-10 md:mt-12 animate-fade-up delay-400">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-5 md:gap-6 justify-center lg:justify-start text-center lg:text-left">
                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start whitespace-normal">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-foreground">
                    <strong className="text-primary">7+</strong> Microgreen
                    Varieties
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start whitespace-normal">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-foreground">
                    Bio-Coal for{" "}
                    <strong className="text-primary">Industrial & PSU</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start whitespace-normal">
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-foreground">
                    <strong className="text-primary">Solar-Powered</strong>{" "}
                    Operations
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start whitespace-normal">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-foreground">
                    <strong className="text-primary">Krish-E</strong> Platform
                    <span className="ml-1 text-xs text-primary">
                      (Launching)
                    </span>
                  </span>
                </div>
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
