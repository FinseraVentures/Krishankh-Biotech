import { ArrowDown, Leaf, Sparkles } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  badge?: string;
  showScrollIndicator?: boolean;
}

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  badge,
  showScrollIndicator = true,
}: PageHeroProps) => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
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
              <pattern
                id="hero-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
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
      <div
        className="absolute bottom-1/3 right-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-foreground/5 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-6 md:px-12 text-center text-primary-foreground py-32">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in "
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>

        {/* Decorative Line */}
        <div
          className="flex items-center justify-center gap-4 mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-foreground/50" />
          <Leaf className="w-5 h-5 text-gold" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-foreground/50" />
        </div>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {subtitle}
        </p>
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t  to-transparent" />
    </section>
  );
};

export default PageHero;
