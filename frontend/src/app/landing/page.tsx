"use client";

import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Landing() {
  return (
    <div className="overflow-y-auto max-w-screen">
      <Banner />

      <section className="max-w-7xl mx-auto px-0 py-4">
        <h2 className="text-2xl font-bold mb-6 text-black">Best Selling</h2>
        <ProductCard />
      </section>
    </div>
  );
}
