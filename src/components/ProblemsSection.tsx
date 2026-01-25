import { Trash2, Droplets, Factory, Users } from 'lucide-react';

const problems = [
  {
    icon: Trash2,
    title: 'Waste Crisis',
    description:
      'Agricultural and municipal waste creates massive pollution and greenhouse gas emissions across rural India',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Droplets,
    title: 'Water Scarcity',
    description:
      'Traditional farming consumes excessive water while climate change intensifies drought conditions',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Factory,
    title: 'Fossil Dependency',
    description:
      'Rural industries rely heavily on polluting fossil fuels, contributing to environmental degradation',
    color: 'bg-gray-100 text-gray-600',
  },
  {
    icon: Users,
    title: 'Farmer Poverty',
    description:
      'Lack of value-addition and post-harvest losses trap farmers in cycles of low income and debt',
    color: 'bg-amber-50 text-amber-600',
  },
];

const ProblemsSection = () => {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            The Critical Problems We're Solving
          </h2>
          <p className="section-subtitle mx-auto">
            India faces interconnected challenges that demand integrated solutions
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="card-elevated group flex gap-6"
            >
              <div
                className={`icon-box ${problem.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <problem.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
