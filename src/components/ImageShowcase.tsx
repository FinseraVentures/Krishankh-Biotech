import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import biocoalImg from "@/assets/Biocoal.png";
import solarImg from "@/assets/solar-farm.jpg";
import polyhouseImg from "@/assets/Poluhouse Exotic Produce.png";
import microGreens from "@/assets/Microgreens.png";

const showcaseItems = [
  {
    image: microGreens,
    title: "Microgreens ",
    description:
      "Advanced vertical farming systems producing premium leafy greens with 90% less water.",
    link: "/about",
  },
  {
    image: biocoalImg,
    title: "Biocoal Production",
    description:
      "Converting agricultural waste into clean-burning fuel for industrial applications.",
    link: "/about",
  },
  {
    image: solarImg,
    title: "Solar Integration",
    description:
      "100% renewable energy powering our entire circular ecosystem operations.",
    link: "/about",
  },
  {
    image: polyhouseImg,
    title: "Polyhouse Corps",
    description:
      "Premium organic products including dehydrated powders and nutrient-rich foods.",
    link: "/about",
  },
];

const ImageShowcase = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Solutions
          </span>
          <h2 className="section-title">See Our Impact in Action</h2>
          <p className="section-subtitle mx-auto">
            Explore how we're transforming agriculture through innovation and
            sustainability
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-background mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-background/80 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-gold font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/about" className="btn-primary group inline-flex">
            Explore All Solutions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
