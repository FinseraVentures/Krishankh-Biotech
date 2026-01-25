import { MapPin, Users, Sprout, Building2, CheckCircle } from 'lucide-react';

const milestones = [
  {
    icon: MapPin,
    title: 'Land Secured',
    status: 'Completed',
  },
  {
    icon: Users,
    title: 'Vendor Network',
    status: 'Established',
  },
  {
    icon: Sprout,
    title: 'First Harvest',
    status: 'Microgreens Success',
  },
  {
    icon: Building2,
    title: 'Infrastructure Development',
    status: 'Planning Underway',
  },
];

const EarlyTraction = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge-highlight mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Verified Progress</span>
          </div>
          <h2 className="section-title">Proven Early Traction</h2>
          <p className="section-subtitle mx-auto">
            Tangible milestones demonstrating our commitment and capability
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative card-elevated text-center hover:scale-[1.02] transition-all duration-300">
                {/* Icon */}
                <div className="icon-box mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <milestone.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>

                {/* Status */}
                <span className="text-sm text-primary font-medium">
                  {milestone.status}
                </span>

                {/* Checkmark */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlyTraction;
