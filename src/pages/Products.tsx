import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Search } from "lucide-react";

// Define your branch contact details
const BRANCH_CONTACTS = {
  "Shezi Branch": "+923472943510", // Replace with actual number
  "Muntazir Branch": "+923265109797", // Replace with actual number
};

const categories = ["All", "Medicines", "Vitamins", "Skincare", "First Aid", "Baby Care", "Wellness"];
const branches = ["All", "Shezi Branch", "Muntazir Branch"];

const products = [
  { name: "Pain Relief Tablets", category: "Medicines", price: "$8.99", badge: "Best Seller", branch: "Shezi Branch" },
  { name: "Vitamin C 1000mg", category: "Vitamins", price: "$12.99", badge: "Popular", branch: "Muntazir Branch" },
  { name: "Moisturizing Cream", category: "Skincare", price: "$15.99", badge: "", branch: "Shezi Branch" },
  { name: "First Aid Kit", category: "First Aid", price: "$24.99", badge: "Essential", branch: "Muntazir Branch" },
  { name: "Baby Lotion", category: "Baby Care", price: "$9.99", badge: "", branch: "Shezi Branch" },
  { name: "Multivitamin Complex", category: "Vitamins", price: "$18.99", badge: "Top Rated", branch: "Shezi Branch" },
  { name: "Antiseptic Solution", category: "First Aid", price: "$6.99", badge: "", branch: "Muntazir Branch" },
  { name: "Omega-3 Fish Oil", category: "Wellness", price: "$22.99", badge: "Popular", branch: "Muntazir Branch" },
  { name: "Cold & Flu Syrup", category: "Medicines", price: "$11.99", badge: "", branch: "Shezi Branch" },
  { name: "Sunscreen SPF 50", category: "Skincare", price: "$14.99", badge: "", branch: "Muntazir Branch" },
  { name: "Prenatal Vitamins", category: "Vitamins", price: "$16.99", badge: "", branch: "Shezi Branch" },
  { name: "Herbal Tea Blend", category: "Wellness", price: "$7.99", badge: "", branch: "Muntazir Branch" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBranch, setActiveBranch] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      (activeBranch === "All" || p.branch === activeBranch) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleWhatsApp = (product) => {
    const number = BRANCH_CONTACTS[product.branch];
    const message = encodeURIComponent(`Hi, I am interested in ${product.name} from the ${product.branch}.`);
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our range of products across our branches.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search */}
          <AnimatedSection className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-3 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </AnimatedSection>

          {/* Branch Filter */}
          <div className="mb-6 flex flex-col items-center">
            <span className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Select Branch</span>
            <div className="flex flex-wrap justify-center gap-2">
              {branches.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBranch(b)}
                  className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                    activeBranch === b
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeCategory === c
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.05}>
                <div className="glass-card rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                    <span className="text-4xl">💊</span>
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase">
                      {p.branch}
                    </div>
                  </div>
                  <div className="p-5">
                    {p.badge && (
                      <span className="inline-block rounded-full bg-accent/20 px-3 py-0.5 text-xs font-semibold text-accent-foreground mb-2">
                        {p.badge}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">{p.price}</span>
                      </div>
                      <button 
                        onClick={() => handleWhatsApp(p)}
                        className="w-full rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-green-700 active:scale-95 flex items-center justify-center gap-2"
                      >
                        Contact {p.branch.split(" ")[0]}
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products found for this branch or category.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;