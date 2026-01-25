import { CheckCircle, Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <div className="text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 badge-highlight mb-6">
            <Target className="w-4 h-4" />
            <span>Our Purpose</span>
          </div>

          <h2 className="section-title">Our Mission</h2>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-10 leading-relaxed">
            To design and scale zero-waste, circular agriculture ecosystems that
            regenerate land, convert waste into clean energy and value-added
            products, empower rural communities, and enable climate-resilient
            development across India.
          </p>

          {/* Mission Pillars */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm text-muted-foreground">
            <span>• Land & ecosystem regeneration</span>
            <span>• Waste-to-wealth & clean energy</span>
            <span>• Water-efficient, chemical-free farming</span>
            <span>• Rural livelihoods & skill development</span>
          </div>

          {/* Current Stage Badge */}
          <div className="inline-flex items-start gap-3 bg-card px-6 py-4 rounded-2xl shadow-elevated max-w-2xl mx-auto text-left">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <span className="block text-sm font-semibold text-primary">
                Current Stage · Early Execution
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">
                Strategic land secured in Pune district, core vendor
                partnerships finalized, and initial hydroponic operations
                validated through a successful microgreens harvest.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
