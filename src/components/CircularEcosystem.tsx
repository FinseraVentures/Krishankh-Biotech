import {
  Droplets,
  Recycle,
  Sun,
  Factory,
  Users,
  ArrowRight,
} from "lucide-react";

const ecosystemSteps = [
  {
    icon: Droplets,
    title: "Polyhouse Corps",
    description: "Water-efficient crop production",
    color: "bg-blue-500",
  },
  {
    icon: Recycle,
    title: "Waste Conversion",
    description: "Biomass to biocoal transformation",
    color: "bg-green-500",
  },
  {
    icon: Sun,
    title: "Solar Integration",
    description: "100% renewable energy powered",
    color: "bg-amber-500",
  },
  {
    icon: Factory,
    title: "Organic Processing",
    description: "Value-added wellness products",
    color: "bg-rose-500",
  },
  {
    icon: Users,
    title: "Rural Empowerment",
    description: "Community-driven prosperity",
    color: "bg-purple-500",
  },
];

const CircularEcosystem = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Circular Innovation Ecosystem
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            An integrated system where every output becomes an input, creating
            zero-waste operations
          </p>
        </div>

        {/* Circular Diagram - Desktop */}
        <div className="hidden lg:block relative max-w-4xl mx-auto">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/20 flex items-center justify-center">
            <span className="font-serif text-lg font-semibold text-center">
              Circular
              <br />
              Economy
            </span>
            {/* <img src="" alt="" /> */}
          </div>

          {/* Circular Path */}
          <div className="relative w-full aspect-square max-w-2xl mx-auto">
            {ecosystemSteps.map((step, index) => {
              const angle = (index * 360) / ecosystemSteps.length - 90;
              const radius = 45;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={step.title}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-xs text-primary-foreground/70 max-w-24">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Circular Arrow Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
                strokeDasharray="4 2"
              />
            </svg>
          </div>
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {ecosystemSteps.map((step, index) => (
              <div key={step.title}>
                <div className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-2xl">
                  <div
                    className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-primary-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < ecosystemSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-primary-foreground/40 rotate-90" />
                  </div>
                )}
              </div>
            ))}
            {/* Loop back indicator */}
            <div className="flex items-center justify-center gap-2 pt-4 text-primary-foreground/60">
              <Recycle className="w-5 h-5" />
              <span className="text-sm">Continuous cycle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEcosystem;
