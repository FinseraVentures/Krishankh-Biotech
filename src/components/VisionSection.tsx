import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const visions = [
  "Build India's first national network of self-sustaining agro-biomes that enable green rural industries, reverse ecological damage, empower farming communities, and fuel a clean, circular economy at scale.",

  "Transform rural India into a climate-positive powerhouse by integrating circular agriculture, renewable energy, and decentralized processing ecosystems.",

  "Create resilient village economies where waste becomes wealth, farmers become entrepreneurs, and nature is regenerated for future generations.",

  "Scale sustainable agri-infrastructure that balances profitability, planetary health, and long-term rural prosperity.",

  "Build a generational climate legacy where every Krishankh agro-biome restores land, uplifts livelihoods, and proves that sustainable growth can power a stronger, self-reliant India.",
];

const VisionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-highlight mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Future We're Building</span>
          </div>

          <h2 className="section-title mb-8">
            Transformational Long-Term Vision
          </h2>

          {/* Slider Text */}
          <div className="max-w-4xl mx-auto min-h-[140px] flex items-center justify-center">
            <p
              key={activeIndex}
              className="text-xl md:text-2xl text-foreground/80 leading-relaxed animate-fade-in"
            >
              {visions[activeIndex]}
            </p>
          </div>

          {/* Slider Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {visions.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
