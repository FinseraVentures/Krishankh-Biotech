import { TrendingUp, AlertCircle } from 'lucide-react';

const stats = [
  {
    value: '15%',
    label: 'CAGR',
    description: "India's hydroponic produce market",
  },
  {
    value: '₹30K Cr',
    label: 'Market Size',
    description: 'Wellness market expected by 2025',
  },
  {
    value: '₹10K+ Cr',
    label: 'Funding Pool',
    description: 'ESG/CSR climate impact funding availability',
  },
];

const MarketOpportunity = () => {
  return (
    <section id="opportunity" className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Growth Potential</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Market Opportunity
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <p className="text-5xl md:text-6xl font-bold font-serif mb-2">{stat.value}</p>
              <p className="text-lg font-semibold text-primary-foreground/90 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Government Mandate Note */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-primary-foreground/10 rounded-2xl border border-primary-foreground/20">
            <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Government Mandate</p>
              <p className="text-primary-foreground/80">
                5–10% biomass co-firing required in thermal plants, creating strong demand for biocoal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
