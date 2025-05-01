"use client";

import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  const bestSellingBannerItems = [
    {
      name: "Limited Time Offer!",
      describe: "Save Big on Bestsellers",
      image: "/images/banners/banner_image.jpg",
      buttonText: "See Deals",
    },
  ];

  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ];

  const categorySections = categories.map((category) => ({
    category,
    products: productsData
      .filter((product) => product.category === category)
      .slice(0, 4),
  }));

  return (
    <div className="overflow-y-hidden max-w-screen bg-gray-50">
      <Banner items={bestSellingBannerItems} />

      {categorySections.map(({ category, products }) => (
        <section
          key={category}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">{category}</h2>
            <button
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
              onClick={() =>
                router.push(
                  `/products?category=${encodeURIComponent(category)}`
                )
              }
            >
              Show More
            </button>
          </div>
          <ProductCard products={products} />
        </section>
      ))}

      <div className="py-10 bg-white">
        <Brands />
      </div>
    </div>
  );
}
