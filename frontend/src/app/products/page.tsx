"use client";

import { useSearchParams } from "next/navigation";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? productsData.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : productsData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {category ? `Products in ${category}` : "All Products"}
      </h1>{ filteredProducts.length > 0 ? (
        <ProductCard products={filteredProducts} />):
        (
          <p className="text-gray-600">"No Products found in this category."</p>
        )
      }
    </div>
  );
}
