"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { CartItem } from "@/types/cart";
import toast from "react-hot-toast";
import  useAuth  from "@/hooks/useAuth";

export default function Cart() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartKey = `cart_${user?.email || "guest"}`;

  // Load cart from localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && isAuthenticated) {
      const storedCart = localStorage.getItem(cartKey);
      setCartItems(storedCart ? JSON.parse(storedCart) : []);
    } else {
      setCartItems([]);
    }
  }, [isAuthenticated, user]);

  // Persist cart to localStorage on update
  useEffect(() => {
    if (typeof window !== "undefined" && isAuthenticated) {
      localStorage.setItem(cartKey, JSON.stringify(cartItems));
    }
  }, [cartItems, isAuthenticated, user]);

  const updateCartItemQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Item removed");
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.floor(total * 0.2);
  const delivery = total > 1000 ? 0 : 40;
  const finalAmount = total - discount + delivery;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="px-4 py-6 md:px-12">
        <h1 className="text-2xl text-blue-700 font-bold mb-6">
          My Cart <span className="text-gray-600 text-base">({cartItems.length} items)</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl">
            <Image
              src="/images/empty-cart.svg"
              alt="Empty Cart"
              width={300}
              height={300}
            />
            <h2 className="text-gray-700 text-xl mt-4 text-center">
              {isAuthenticated
                ? "Your cart is empty. Add items to continue shopping."
                : "Please log in to view your cart."}
            </h2>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              onClick={() => router.push(isAuthenticated ? "/" : "/login")}
            >
              {isAuthenticated ? "Continue Shopping" : "Login"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Cart Items */}
            <div className="flex-1 bg-white p-6 rounded-3xl shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-gray-800">From Saved Address</h2>
                <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">
                  Enter Delivery Pincode
                </button>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-t py-6 first:border-t-0"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={item.image || "/images/fallback.png"}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="rounded-xl"
                      onError={(e) =>
                        (e.currentTarget.src = "/images/fallback.png")
                      }
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                        className="text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                        className="text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">Seller: SuperComNet</p>
                      <div className="flex gap-3 mt-2 items-center">
                        <span className="text-lg font-bold text-gray-800">
                          ₹{item.price}
                        </span>
                        <span className="line-through text-gray-400">
                          ₹{item.price + 300}
                        </span>
                        <span className="text-green-600 font-semibold">
                          30% off
                        </span>
                      </div>
                      <p className="text-green-600 text-sm mt-1">
                        2 offers available
                      </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => router.push(`/product/${item.id}`)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => router.push("/checkout")}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* Right: Price Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-3xl shadow-lg h-fit">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                PRICE DETAILS
              </h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Price ({cartItems.length} items)</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className={delivery === 0 ? "text-green-600" : ""}>
                    {delivery === 0 ? "Free" : `₹${delivery}`}
                  </span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{finalAmount}</span>
                </div>
                <p className="text-green-600 text-sm mt-2">
                  You will save ₹{discount} on this order
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
