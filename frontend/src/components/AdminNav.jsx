'use client';

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNav() {
    const router = useRouter();
    const {logout} = useAuth();

    const handleLogout = () => {
      logout()
      router.push('/login');
    };
    
  return (
    <nav className="w-64 min-h-screen bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6 bg-blue-800 px-4 py-4 rounded-tl-full rounded-br-full">Admin Panel</h2>
      <ul className="flex flex-col gap-4">
        <li className="py-6 border-b-2 hover:bg-gray-700 text-center">
          <Link href="/admin/dashboard" className="hover:text-yellow-400 transition">
            Dashboard
          </Link>
        </li>
        <li className="py-6 border-b-2 hover:bg-gray-700 text-center">
          <Link href="/admin/add-product" className="hover:text-yellow-400 transition">
            Add Product
          </Link>
        </li>
        <li className="py-6 border-b-2 hover:bg-gray-700 text-center">
          <Link href="/admin/users" className="hover:text-yellow-400 transition">
            Get Users
          </Link>
        </li>
        <li className="py-6 border-b-2 hover:bg-gray-700 text-center">
          <Link href="/admin/products" className="hover:text-yellow-400 transition">
            Products
          </Link>
        </li>
        <li className="py-6 border-b-2 hover:bg-gray-700 text-center">
          <Link href="/admin/orders" className="hover:text-yellow-400 transition">
            Orders
          </Link>
        </li>
        <li className="py-30 px-8">
            <button className="bg-blue-800 px-6 py-2 text-2xl rounded-full" onClick={handleLogout}>
                Logout
            </button>
        </li>
      </ul>
    </nav>
  );
}
