'use client';

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PiShoppingCartThin } from "react-icons/pi";
import { CgBolt } from "react-icons/cg";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="bg-white backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" onClick={()=>router.push(`/product/${product.id}`)}>
          <CardHeader>
            <div className="relative w-full h-64 overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <CardTitle className="text-lg font-semibold text-black mt-4">{product.name}</CardTitle>
            <CardDescription className="text-gray-500 line-clamp-2">{product.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-green-600">RS.{product.new_price?.toFixed(2)}</span>
              {product.old_price && (
                <span className="text-gray-400 line-through">RS.{product.old_price.toFixed(2)}</span>
              )}
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-black">{product.rating}</span>
            </div>
          </CardContent>

          
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;