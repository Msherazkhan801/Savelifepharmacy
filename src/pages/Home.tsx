import HeroSlider from "@/components/HeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Shield, Clock, Truck, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const features = [
  { icon: Heart, title: "Quality Medicines", desc: "Certified and genuine pharmaceutical products" },
  { icon: Shield, title: "Licensed Pharmacy", desc: "Fully licensed and regulated pharmacy services" },
  { icon: Clock, title: "Extended Hours", desc: "Open 7 days a week for your convenience" },
  { icon: Truck, title: "Home Delivery", desc: "Fast and reliable medicine delivery service" },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Happy Customers" },
  { value: "10K+", label: "Products" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  { name: "Sarah M.", text: "Save Life Pharmacy has been my go-to for years. Amazing service and genuine products!", rating: 5 },
  { name: "James K.", text: "The home delivery service is incredibly fast. Highly recommended!", rating: 5 },
  { name: "Emily R.", text: "Friendly staff and expert pharmaceutical advice. I trust them completely.", rating: 5 },
  { name: "Emily R.", text: "Friendly staff and expert pharmaceutical advice. I trust them completely.", rating: 5 },
  { name: "Emily R.", text: "Friendly staff and expert pharmaceutical advice. I trust them completely.", rating: 5 },
];

const Home = () => (
  <main>
    <HeroSlider />

    {/* Features */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Choose <span className="text-primary">Save Life</span> Pharmacy
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            We're committed to providing exceptional healthcare services to our community.
          </p>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center transition-transform hover:scale-105 hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm text-primary-foreground/70">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
<section className="py-20">
  <div className="container mx-auto px-4">
    
    <AnimatedSection className="text-center mb-12">
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
        What Our Customers Say
      </h2>
    </AnimatedSection>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      speed={800}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <AnimatedSection delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-6 h-full">
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground italic">
                "{t.text}"
              </p>

              {/* User */}
              <div className="mt-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {t.name}
                </span>
              </div>

            </div>
          </AnimatedSection>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>

    {/* CTA */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Need a Prescription Filled?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Visit us today or call to get your prescriptions filled quickly and safely.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
            >
              View Products
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default Home;
