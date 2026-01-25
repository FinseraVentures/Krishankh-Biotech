import { Award, Network, Cpu, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import teamHero from "@/assets/team-hero.jpg";

const leadership = [
  {
    name: "Kashika Sodhi",
    role: "Founder & Director",
    initials: "KS",
    bio: "Kashika brings deep expertise in circular economy implementation and a strong network in the sustainable agriculture sector. With a proven track record in technology integration and scaling, she leads Krishankh Biotech with vision and purpose.",
    expertise: [
      {
        icon: Award,
        text: "Deep expertise in circular economy implementation",
      },
      {
        icon: Network,
        text: "Strong network in sustainable agriculture sector",
      },
      { icon: Cpu, text: "Track record in technology integration and scaling" },
    ],
  },
];

const advisors = [
  {
    name: "Coming Soon",
    role: "Advisory Board",
    initials: "AB",
    description:
      "We are building a world-class advisory board with experts in agriculture, sustainability, and technology.",
  },
  {
    name: "Coming Soon",
    role: "Advisory Board",
    initials: "AB",
    description:
      "We are building a world-class advisory board with experts in agriculture, sustainability, and technology.",
  },
  {
    name: "Coming Soon",
    role: "Advisory Board",
    initials: "AB",
    description:
      "We are building a world-class advisory board with experts in agriculture, sustainability, and technology.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technology to solve age-old agricultural challenges.",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in all our dealings.",
  },
  {
    title: "Impact",
    description:
      "Every action we take is measured by its positive impact on communities and environment.",
  },
  {
    title: "Inclusion",
    description:
      "We believe in creating opportunities for all, especially rural communities.",
  },
];

const Team = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Enhanced Hero Section */}
      <PageHero
        title="Our Team"
        subtitle="Guided by vision, driven by purpose — meet the passionate individuals behind Krishankh Biotech's mission"
        backgroundImage={teamHero}
        badge="Leadership & Expertise"
      />

      {/* Leadership Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Leadership & Expertise</h2>
            <p className="section-subtitle mx-auto">
              Experienced leaders driving sustainable innovation
            </p>
          </div>

          {leadership.map((leader, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className="card-elevated">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-forest-light flex items-center justify-center shadow-lg">
                      <span className="text-5xl font-serif font-bold text-primary-foreground">
                        {leader.initials}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-2 text-center md:text-left">
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium text-lg mb-6">
                      {leader.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {leader.bio}
                    </p>

                    {/* Expertise */}
                    <div className="space-y-4">
                      {leader.expertise.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-muted-foreground">{item.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-8 justify-center md:justify-start">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Advisory Board</h2>
            <p className="section-subtitle mx-auto">
              Expert guidance from industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-muted-foreground">
                    {advisor.initials}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {advisor.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {advisor.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {advisor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Culture & Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-forest-light/20 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who share our vision
            for sustainable agriculture
          </p>
          <Link to="/contact" className="btn-gold group inline-flex">
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Team;
