import { Sprout, Leaf, Flame, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const businessLines = [
  {
    icon: Sprout,
    title: 'Microgreens',
    subtitle: 'Custom MOQ',
    features: ['Chef-curated varieties', 'Premium & bulk options', 'Pune & Mumbai delivery'],
    cta: 'View Varieties & Pricing',
    link: '/microgreens',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Leaf,
    title: 'Polyhouse Exotic Produce',
    subtitle: 'Hydroponic',
    features: ['Residue-free growing', 'B2B supply focused', 'Consistent quality'],
    cta: 'See Current Crops',
    link: '/polyhouse',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    icon: Flame,
    title: 'Biocoal',
    subtitle: 'Clean Energy',
    features: ['Waste → clean energy', 'Industrial use', 'Agricultural applications'],
    cta: 'Request Specifications',
    link: '/biocoal',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Sun,
    title: 'Solar Integration',
    subtitle: 'Sustainable Power',
    features: ['Farm energy solutions', 'Reduced carbon footprint', 'Cost-effective power'],
    cta: 'Explore Our Model',
    link: '/solar',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-wide mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Four Revenue Streams, One Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From farm-fresh produce to sustainable energy — tangible products you can buy, partner with, or invest in today.
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessLines.map((business, index) => (
            <div
              key={business.title}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${business.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <business.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-foreground mb-1">{business.title}</h3>
              <span className="text-sm text-primary font-medium mb-4">{business.subtitle}</span>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {business.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={business.link}
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
              >
                {business.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
