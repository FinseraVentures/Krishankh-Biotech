import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import bg from "@/assets/Poluhouse Exotic Produce.png";
import { Leaf, Droplets, Shield, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cherrTomatoImg from "@/assets/corps/Cherry Tomato.png";
import bellPepperImg from "@/assets/corps/Bell Pepper.png";
import cucumberImg from "@/assets/corps/Cucumbers.png";
import lettuceImg from "@/assets/corps/Lettuce.png";
import exoticHerbsImg from "@/assets/corps/Exotic Herbs.png";
import specialtyGreensImg from "@/assets/corps/Speciality Greens.png";
const crops = [
  {
    name: "Cherry Tomatoes",
    status: "In Season",
    availability: "Available",
    img: cherrTomatoImg,
  },
  {
    name: "Bell Peppers",
    status: "In Season",
    availability: "Available",
    img: bellPepperImg,
  },
  {
    name: "Cucumbers",
    status: "Year-round",
    availability: "Available",
    img: cucumberImg,
  },
  {
    name: "Lettuce Varieties",
    status: "Year-round",
    availability: "Available",
    img: lettuceImg,
  },
  {
    name: "Exotic Herbs",
    status: "Limited",
    availability: "Pre-order",
    img: exoticHerbsImg,
  },
  {
    name: "Specialty Greens",
    status: "Seasonal",
    availability: "Contact Us",
    img: specialtyGreensImg,
  },
];

const features = [
  {
    icon: Droplets,
    title: "Hydroponic Growing",
    description:
      "State-of-the-art hydroponic systems for consistent, high-quality produce.",
  },
  {
    icon: Shield,
    title: "Residue-Free",
    description: "No harmful pesticides. Safe for direct consumption.",
  },
  {
    icon: Truck,
    title: "B2B Supply",
    description: "Reliable bulk supply for restaurants, hotels, and retailers.",
  },
];

const Polyhouse = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Polyhouse Exotic Produce"
        subtitle="Hydroponic, residue-free vegetables and greens grown in controlled environments. Consistent quality for B2B partners."
        badge="B2B Supply"
        backgroundImage={`${bg}`}
      />

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Crops */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Crops
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fresh, hydroponic produce available for bulk orders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {crops.map((crop) => (
              // <div
              //   key={crop.name}
              //   className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300"
              // >
              //   <div className="flex items-start justify-between mb-4">
              //     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              //       <Leaf className="w-6 h-6 text-primary" />
              //     </div>
              //     <span
              //       className={`px-3 py-1 rounded-full text-xs font-medium ${
              //         crop.availability === "Available"
              //           ? "bg-green-100 text-green-700"
              //           : "bg-yellow-100 text-yellow-700"
              //       }`}
              //     >
              //       {crop.availability}
              //     </span>
              //   </div>
              //   <h3 className="text-lg font-bold text-foreground mb-1">
              //     {crop.name}
              //   </h3>
              //   <p className="text-sm text-muted-foreground">{crop.status}</p>
              // </div>
              <div
                key={crop.name}
                className={`relative rounded-xl border border-border p-6 transition-all duration-300 overflow-hidden ${
                  crop.img
                    ? "text-white hover:shadow-xl"
                    : "bg-card hover:shadow-lg"
                }`}
                style={
                  crop.img
                    ? {
                        backgroundImage: `url(${crop.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                {/* Dark overlay for readability when image exists */}
                {crop.img && (
                  <div className="absolute inset-0 bg-black/40 rounded-xl" />
                )}

                {/* Card content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl display-hidden  flex items-center justify-center invisible ${
                        crop.img ? "bg-white/15" : "bg-primary/10"
                      }`}
                    ></div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        crop.availability === "Available"
                          ? crop.img
                            ? "bg-green-600/80 text-white"
                            : "bg-green-100 text-green-700"
                          : crop.img
                            ? "bg-yellow-500/80 text-white"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {crop.availability}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1">{crop.name}</h3>

                  <p
                    className={`text-sm ${
                      crop.img ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {crop.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Inquire About Bulk Orders
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Polyhouse;
