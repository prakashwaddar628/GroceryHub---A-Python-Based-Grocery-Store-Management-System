"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = productsData.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(results);
  }, [query]);

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Search Results for "{query}"
        </h1>
        {filteredProducts.length > 0? (
            <ProductCard products={filteredProducts} />
        ) : (
            <p className="text-gray-600">"No products found matching your search."</p>
        )}
    </div>
    </>
  )
}
