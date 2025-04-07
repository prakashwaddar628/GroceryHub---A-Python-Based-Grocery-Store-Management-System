"use client";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        <div className="text-black font-semibold text-2xl flex items-center">
          <span className="text-green-500 font-bold">G</span>rocery
          <span className="text-fuchsia-800 font-bold">HUB</span>
        </div>
        <div>
          <ul className="flex space-x-4 font-semibold text-lg">
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-500">
                Home
              </Link>
            </li>
            <li className="flex space-x-4 font-semibold text-lg">
              <Link href="/dashboard" className="text-gray-700 hover:text-green-500">
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-gray-700 hover:text-green-500"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-500"
              >
                About Us
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/profile"
                className="text-gray-700 hover:text-green-500"
              >
                <RxAvatar className="text-3xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
