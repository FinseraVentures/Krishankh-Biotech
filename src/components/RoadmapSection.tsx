import { Building, Globe, Factory, MapPinned } from "lucide-react";

const roadmapItems = [
  {
    // year: "Year 1",
    icon: Building,
    title: "Model Biome Completion",
    description:
      "Scale Tambad facility as a showcase of integrated circular agriculture",
  },
  {
    // year: "Year 2",
    icon: Globe,
    title: "Export Market Entry",
    description: "Launch premium wellness food line for global markets",
  },
  {
    // year: "Year 3",
    icon: Factory,
    title: "Industrial Partnerships",
    description: "Biocoal supply contracts with 50+ thermal industries",
  },
  {
    // year: "Year 4",
    icon: MapPinned,
    title: "Geographic Expansion",
    description:
      "Replicate the model in 3–5 additional districts through partnerships",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Strategic Roadmap</h2>
          <p className="section-subtitle mx-auto">
            A clear path from pilot to national impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
                >
                  <div className="card-elevated">
                    {/* <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-secondary rounded-full mb-3">
                      {item.year}
                    </span> */}
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:-translate-x-1/2 z-10 shadow-elevated">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
