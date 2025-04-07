"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

interface Product {
  product_id: number;
  name: string;
  uom_name: string;
  price_per_unit: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);
  return (
    <>
    <Navbar />
      <main className="max-w-7xl mx-auto p-4 py-8 overflow-y-hidden">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Products</h1>

        {loading ? (
          <p className="text-gray-600">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.product_id}
                id={product.product_id}
                name={product.name}
                price={product.price_per_unit}
                uom={product.uom_name}
                image="/placeholder.png"
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
