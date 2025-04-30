'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import products from '@/data/products.json';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const found = products.find((p) => p.id === id);
      setProduct(found || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="p-8 text-center text-gray-600">Product not found</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-[580px] p-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] border shadow-2xl rounded-4xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-bold text-green-600">₹{product.new_price}</div>
          {product.old_price && (
            <div className="line-through text-gray-400">₹{product.old_price}</div>
          )}
          <div className="text-yellow-500">Rating: {product.rating} ★</div>
          <button className="mt-4 bg-blue-600 shadow-2xl hover:bg-blue-500 text-white px-4 py-2 rounded-2xl">
            Add to Cart
          </button>
          <button className="mt-4 bg-yellow-600 shadow-2xl hover:bg-yellow-500 text-white px-4 py-2 rounded-xl"> Buy now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
