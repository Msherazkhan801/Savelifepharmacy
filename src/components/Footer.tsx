import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Save Life Pharmacy" className="h-10 w-10" />
            <span className="font-display text-xl font-bold">Save Life Pharmacy</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            Your trusted partner in health and wellness. Quality medicines and
            expert pharmaceutical care.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {["Home", "About", "Products", "Services", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-background transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +1 (234) 567-8900</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@savelifepharmacy.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 123 Health Avenue, Medical District</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Mon – Fri: 8AM – 10PM</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Saturday: 9AM – 8PM</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Sunday: 10AM – 6PM</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-background/10 pt-6 text-center text-sm text-background/40">
        © {new Date().getFullYear()} Save Life Pharmacy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
