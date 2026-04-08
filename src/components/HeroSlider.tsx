import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroPharmacy from "@/assets/hero-pharmacy.jpg";
import heroService from "@/assets/hero-service.jpg";
import heroProducts from "@/assets/hero-products.jpg";

const slides = [
  {
    image: heroPharmacy,
    title: "Your Health, Our Priority",
    subtitle: "Trusted pharmacy care for your family's well-being",
    cta: "Explore Products",
    link: "/products",
  },
  {
    image: heroService,
    title: "Expert Pharmaceutical Care",
    subtitle: "Professional pharmacists ready to serve you 24/7",
    cta: "Our Services",
    link: "/services",
  },
  {
    image: heroProducts,
    title: "Quality Medicines & Supplements",
    subtitle: "Wide range of certified products at affordable prices",
    cta: "Shop Now",
    link: "/products",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="font-display text-5xl font-bold leading-tight text-background md:text-7xl">
                {slides[current].title}
              </h1>
              <p className="mt-4 text-lg text-background/80 md:text-xl">
                {slides[current].subtitle}
              </p>
              <a
                href={slides[current].link}
                className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-lg"
              >
                {slides[current].cta}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        <button onClick={prev} className="rounded-full bg-background/20 p-2 backdrop-blur-sm transition-colors hover:bg-background/40">
          <ChevronLeft className="h-5 w-5 text-background" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-primary" : "w-2 bg-background/40"
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="rounded-full bg-background/20 p-2 backdrop-blur-sm transition-colors hover:bg-background/40">
          <ChevronRight className="h-5 w-5 text-background" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
