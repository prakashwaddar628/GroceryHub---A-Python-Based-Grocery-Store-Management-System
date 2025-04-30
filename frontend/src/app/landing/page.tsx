"use client";

import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

export default function Landing() {
  const bestSellingBannerItems = [
    {
      name: "Limited Time Offer!",
      describe: "Save Big on Bestsellers",
      image: "/images/banners/banner_image.jpg",
      buttonText: "See Deals",
    },
  ];

  const featuredBannerItems = [
    {
      name: "Our Top Picks",
      describe: "Discover Our Featured Products",
      image: "/images/banners/featured-banner.jpg",
      buttonText: "Explore Now",
    },
  ];

  const bottomBannerItems = [
    {
      name: "Join Our Newsletter",
      describe: "Get Exclusive Updates & Discounts",
      image: "/images/banners/newsletter-banner.jpg",
      buttonText: "Sign Up",
    },
  ];

  const bestSellingProducts = productsData.slice(0, 4);
  const featuredProducts = productsData.slice(4, 8);

  return (
    <div className="overflow-y-hidden max-w-screen bg-gray-50">
      <Banner items={bestSellingBannerItems} />

      {/* Best Selling Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Best Selling</h2>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
            Show More
          </button>
        </div>
        <ProductCard products={bestSellingProducts} />
      </section>

      <Banner items={featuredBannerItems} />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Featured</h2>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
            Show More
          </button>
        </div>
        <ProductCard products={featuredProducts} />
      </section>

      <Banner items={bottomBannerItems} />

      <div className="py-10 bg-white">
        <Brands />
      </div>
    </div>
  );
}
