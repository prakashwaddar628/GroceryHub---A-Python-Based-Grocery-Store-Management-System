"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  MapPin,
  ShoppingCart,
  Coins,
  CalendarDays,
  ChevronsRight,
  Pencil,
} from "lucide-react";
import { ProfileProps } from "@/types/profile";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState<ProfileProps | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setUserData(data);
      } else {
        console.error("Error fetching user data:", data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
      fetchUserData();
    } else {
      router.push("/login");
    }
  }, [router]);

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  // If data is not available yet, render a loading message
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, email, phone, address, image, gender } = userData;
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="md:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative">
                    <Image
                      src={image || "/default-avatar.png"}
                      alt={name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="/default-avatar.png"
                    />
                  </div>
                  <CardTitle className="text-4xl font-serif font-bold text-blue-700">
                    {name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <button className="w-full justify-start flex">
                  <ShoppingCart className="h-6 w-6 text-gray-600 mr-16" />
                  My Orders
                </button>
                {/* Other buttons as before */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-black text-2xl font-semibold flex items-center gap-2">
                    Personal Information
                  </CardTitle>
                  <button className="text-blue-600 hover:underline">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      value={firstName}
                      readOnly
                      className="mt-1 text-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      value={lastName}
                      readOnly
                      className="mt-1 text-gray-600"
                    />
                  </div>
                </div>
                {/* Gender, Email, and Mobile Fields */}
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Gender
                  </label>
                  <div className="mt-1 flex gap-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        readOnly
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="male"
                        className="ml-2 block text-sm font-medium text-gray-900"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        readOnly
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="female"
                        className="ml-2 block text-sm font-medium text-gray-900"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                {/* Email and Mobile Inputs */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      id="email"
                      value={email}
                      readOnly
                      className="mr-2 w-full md:w-2/3 text-gray-600"
                    />
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      id="mobile"
                      value={phone}
                      readOnly
                      className="mr-2 w-full md:w-2/3 text-gray-600"
                    />
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
