import { Salad, HeartPulse, Flame } from 'lucide-react';

const streams = [
  {
    icon: Salad,
    title: 'Fresh Hydroponic Produce',
    description:
      'Premium leafy greens, herbs, and vegetables sold to organic food chains, hotels, restaurants, and health-conscious urban consumers.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Products',
    description:
      'Raw jams, dehydrated powders, and nutrient-rich processed foods targeting the booming wellness market.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: Flame,
    title: 'Biocoal Supply',
    description:
      'Clean-burning biocoal briquettes for thermal industries, supporting government biomass mandates.',
    gradient: 'from-orange-500 to-amber-600',
  },
];

const RevenueStreams = () => {
  return (
    <section id="revenue" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Diversified Revenue Streams</h2>
          <p className="section-subtitle mx-auto">
            Multiple pathways to sustainable profitability
          </p>
        </div>

        {/* Revenue Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {streams.map((stream) => (
            <div
              key={stream.title}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-elevated hover:shadow-prominent transition-all duration-300"
            >
              {/* Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stream.gradient}`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <stream.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {stream.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stream.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueStreams;
