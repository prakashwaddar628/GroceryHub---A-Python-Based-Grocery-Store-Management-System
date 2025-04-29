"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", name: "Awesome T-Shirt", price: 25.99, quantity: 2 },
    { id: "2", name: "Cool Coffee Mug", price: 12.50, quantity: 1 },
  ]);
  const [loading, setLoading] = useState(false); // No actual loading now
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
    // Since we're using mock data, we can directly set the count
    setCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]); // Re-run if cartItems change (for testing updates)

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error loading cart: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      {cartItems.length === 0 ? (
        <div className="px-8 py-6">
          <h1 className="text-gray-900 font-bold">
            Cart <span>({count} items)</span>
          </h1>
          <div className="px-6 py-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/images/empty-cart.svg"}
                alt="Empty Cart"
                width={300}
                height={300}
              />
              <h2 className="text-gray-700 text-xl mt-4 text-center">
                Your cart is empty. Add items to continue shopping.
              </h2>
              <div className="mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                  onClick={() => router.push("/")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="px-8 py-6">
            <h1 className="text-gray-900 font-bold">
              Cart <span>({count} items)</span>
            </h1>
          </div>
          <div className="px-6 py-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <p>{item.name}</p>
                <span className="ml-4">Quantity: {item.quantity}</span>
                <span className="ml-4">Price: ${item.price.toFixed(2)}</span>
                {/* Add remove button, etc. */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}