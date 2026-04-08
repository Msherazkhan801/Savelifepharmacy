import AnimatedSection from "@/components/AnimatedSection";
import { Pill, Stethoscope, Heart, Truck, Clock, ShieldCheck } from "lucide-react";

const services = [
  { icon: Pill, title: "Prescription Dispensing", desc: "Fast and accurate prescription filling by our expert pharmacists." },
  { icon: Stethoscope, title: "Health Consultations", desc: "Free health consultations and medication reviews." },
  { icon: Heart, title: "Health Screenings", desc: "Blood pressure, blood sugar, and cholesterol screenings." },
  { icon: Truck, title: "Home Delivery", desc: "Convenient medicine delivery right to your doorstep." },
  { icon: Clock, title: "24/7 Emergency", desc: "Emergency pharmaceutical services available around the clock." },
  { icon: ShieldCheck, title: "Insurance Processing", desc: "We process all major insurance plans quickly and efficiently." },
];

const Services = () => (
  <main className="pt-20">
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive pharmaceutical services designed to keep you and your family healthy.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 h-full transition-transform hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Services;
