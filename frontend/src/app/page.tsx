"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section Placeholder */}
      <section className="text-center py-20 bg-green-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-green-600">GroceryHub</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Your one-stop shop for fresh groceries. Explore our top products and shop with ease!
        </p>
      </section>

      {/* Products Preview */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Product Cards */}
          <ProductCard
            name="Fresh Tomatoes"
            price={2.99}
            uom="kg"
            imageUrl="/images/tomato.jpg"
          />
          <ProductCard
            name="Organic Carrots"
            price={1.49}
            uom="kg"
            imageUrl="/images/carrots.jpg"
          />
          {/* Add more or map over your fetched data here */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
