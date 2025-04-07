"use client";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  uom: string;
  image?: string;
}

export default function ProductCard({
  name,
  price,
  uom,
  image = "/placeholder.png",
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 w-full max-w-sm">
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-green-600 font-bold text-md">
          ₹{price.toFixed(2)} / {uom}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">Per {uom}</span>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm">
            View Product
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
            <MdAddShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
