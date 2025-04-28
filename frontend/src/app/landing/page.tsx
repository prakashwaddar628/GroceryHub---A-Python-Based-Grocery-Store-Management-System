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
    <div className="overflow-y-hidden max-w-screen">
      <Banner items={bestSellingBannerItems} />

      <section className="max-w-7xl mx-auto px-0 py-4">
        <h2 className="text-2xl font-bold mb-6 text-black">Best Selling</h2>
        <ProductCard products={bestSellingProducts} />
      </section>

      <Banner items={featuredBannerItems} />

      <section className="max-w-7xl mx-auto px-0 py-4">
        <h2 className="text-2xl font-bold mb-6 text-black">Featured</h2>
        <ProductCard products={featuredProducts} />
      </section>

      <Banner items={bottomBannerItems} />
      
      <Brands />
    </div>
  );
}