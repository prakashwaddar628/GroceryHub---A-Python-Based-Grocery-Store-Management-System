"use client";

import { Card, CardHeader, CardContent } from "./ui/card";
import Image from "next/image";

const groceryBrands = [
  {
    name: "Kroger",
    logo: "/images/Walmart-logo.png",
    alt: "Kroger Logo",
    width: 80,
    height: 30,
    link: "#",
  },
  {
    name: "Walmart Grocery",
    logo: "/images/Walmart-logo.png",
    alt: "Walmart Grocery Logo",
    width: 100,
    height: 35,
    link: "#",
  },
  {
    name: "Costco",
    logo: "/images/Walmart-logo.png",
    alt: "Costco Logo",
    width: 70,
    height: 25,
    link: "#",
  },
  {
    name: "Trader Joe's",
    logo: "/images/Walmart-logo.png",
    alt: "Trader Joe's Logo",
    width: 90,
    height: 30,
    link: "#",
  },
  {
    name: "Whole Foods Market",
    logo: "/images/Walmart-logo.png",
    alt: "Whole Foods Market Logo",
    width: 120,
    height: 30,
    link: "#",
  },
  {
    name: "Safeway",
    logo: "/images/Walmart-logo.png",
    alt: "Safeway Logo",
    width: 85,
    height: 30,
    link: "#",
  },
  {
    name: "Aldi",
    logo: "/images/Walmart-logo.png",
    alt: "Aldi Logo",
    width: 75,
    height: 30,
    link: "#",
  },
  {
    name: "Target Grocery",
    logo: "/images/Walmart-logo.png",
    alt: "Target Grocery Logo",
    width: 95,
    height: 35,
    link: "#",
  },
];

export default function Brands() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <h2 className="text-2xl font-bold mb-6 text-black w-full text-center">
        Shop Your Favorite Grocery Brands
      </h2>
      {groceryBrands.map((brand) => (
        <Card
          key={brand.name}
          className="w-40 h-24 flex items-center justify-center p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow"
        >
          <CardHeader className="p-0 flex-grow flex items-center justify-center">
            <a href={brand.link} aria-label={`Visit ${brand.name}`}>
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                objectFit="contain"
              />
            </a>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
