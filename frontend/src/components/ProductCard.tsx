'use client';

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { PiShoppingCartThin } from "react-icons/pi";
import { CgBolt } from "react-icons/cg";
import { cn } from "@/lib/utils";

const products = [
    {
        name: 'Product 1',
        new_price: 10.99,
        old_price: 15.99,
        image: '/images/apple.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        quantity: 100,
        category: 'Category 1',
        rating: 4.5
    }
]

const ProductCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <Card key={product.name} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                        <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
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
                            <span className="text-xl font-bold text-green-600">RS.{product.new_price.toFixed(2)}</span>
                            {product.old_price && (
                                <span className="text-gray-400 line-through">RS.{product.old_price.toFixed(2)}</span>
                            )}
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-black">{product.rating}</span>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col sm:flex-row gap-4">
                        <Button
                            className="w-full flex items-center gap-2 bg-yellow-500/50 text-gray-600
                                       hover:bg-yellow-500/30 hover:text-gray-600 border-yellow-500/30"
                        >
                            <PiShoppingCartThin className="w-4 h-4" />
                            Add to Cart
                        </Button>
                        <Button
                            className="w-full flex items-center gap-2 bg-green-500/30 text-green-600
                                       hover:bg-green-500/30 hover:text-green-200 border-green-500/30"
                        >
                            <CgBolt className="w-4 h-4" />
                            Buy Now
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default ProductCard;
