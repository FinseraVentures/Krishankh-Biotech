import { Droplets, Flame, Sun, Leaf } from 'lucide-react';

const highlights = [
  {
    icon: Droplets,
    title: 'Smart Hydroponic Farming',
    description: '90% less water, zero pesticides',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Flame,
    title: 'Biocoal Energy',
    description: 'Converting waste to clean fuel',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Sun,
    title: 'Solar Infrastructure',
    description: '100% renewable operations',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Leaf,
    title: 'Organic Processing',
    description: 'Premium wellness products',
    color: 'bg-green-50 text-green-600',
  },
];

const CoreHighlights = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="card-elevated group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`icon-box ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreHighlights;
