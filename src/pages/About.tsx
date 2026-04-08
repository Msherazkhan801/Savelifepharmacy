import AnimatedSection from "@/components/AnimatedSection";
import teamImg from "@/assets/team.jpg";
import { Award, Heart, Target, Eye } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "We care deeply about every patient's well-being" },
  { icon: Award, title: "Excellence", desc: "Highest standards in pharmaceutical services" },
  { icon: Target, title: "Integrity", desc: "Honesty and transparency in everything we do" },
  { icon: Eye, title: "Innovation", desc: "Embracing modern healthcare solutions" },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            About <span className="text-primary">Save Life</span> Pharmacy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            For over 15 years, we've been the community's most trusted pharmacy,
            delivering quality medicines and expert care to thousands of families.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <img src={teamImg} alt="Our Team" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={720} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded with a simple mission — to make quality healthcare accessible to everyone.
              Save Life Pharmacy started as a small community pharmacy and has grown into a
              trusted name in pharmaceutical care.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of experienced pharmacists is dedicated to providing personalized care,
              expert advice, and the widest range of certified medicines and health products.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center transition-transform hover:scale-105">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 h-full">
            <h3 className="font-display text-2xl font-bold text-primary">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To provide accessible, affordable, and high-quality pharmaceutical products and
              services that improve the health and well-being of our community.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl p-8 h-full">
            <h3 className="font-display text-2xl font-bold text-accent">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be the leading pharmacy in our region, known for exceptional customer service,
              innovation in healthcare delivery, and community engagement.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default About;
