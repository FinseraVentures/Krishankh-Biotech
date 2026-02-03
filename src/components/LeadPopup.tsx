import { useState, useEffect } from "react";
import { X, Send, Leaf } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { sendFormEmail } from "@/lib/sendFormEmail";

const STORAGE_KEY = "krishankh_lead_popup_shown";
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const checkAndShowPopup = () => {
      const lastShown = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (!lastShown) {
        // First time visitor
        setTimeout(() => setIsOpen(true), 3000); // Show after 3 seconds
      } else {
        const lastShownTime = parseInt(lastShown, 10);
        if (now - lastShownTime > ONE_MONTH_MS) {
          // More than a month since last shown
          setTimeout(() => setIsOpen(true), 3000);
        }
      }
    };

    checkAndShowPopup();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendFormEmail({
      formType: "newsletter",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      meta: {
        interest: formData.interest,
      },
    });

    setIsSubmitted(true);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());

    // Close after showing success message
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interest: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
            <Leaf className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Welcome to Krishankh Biotech
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Stay updated with our latest innovations in sustainable agriculture
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Your Name *"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Email Address *"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              >
                <option value="">What interests you? *</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="investment">Investment</option>
                <option value="products">Our Products</option>
                <option value="careers">Career Opportunities</option>
                <option value="newsletter">Newsletter Updates</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-primary w-[65%] sm:w-auto mx-auto sm:mx-0 text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg group flex items-center justify-center"
            >
              <span>Get Updates</span>
              <Send className="ml-2 w-4 h-4 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
