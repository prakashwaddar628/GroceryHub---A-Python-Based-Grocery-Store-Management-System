'use client';

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
import userData from "@/data/users.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";


const profileData: ProfileProps = userData[0];

export default function Profile() {
  const router = useRouter();
    const { name, email, phone, address, orders, recentOrders, image, gender } = profileData;
    const [firstName, lastName] = name.split(" ");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(true);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("authToken");
        router.push("/login");
    };

    return (
        <>
        <Navbar />
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Navigation (Similar to the image) */}
                <div className="md:col-span-1">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                                    <Image
                                        src={image}
                                        alt={name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="object-cover"
                                    />
                                </div>
                                <CardTitle className="text-4xl font-serif font-bold text-blue-700">{name}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-700">
                            <button  className="w-full justify-start flex">
                              <ShoppingCart className="h-6 w-6 text-gray-600 mr-16" />My Orders
                            </button>
                            <div className="font-semibold text-gray-900">
                                <span >ACCOUNT SETTINGS</span>
                            </div>
                            <button  className="w-full justify-start">
                                Profile Information
                            </button>
                            <button  className="w-full justify-start">
                                Manage Addresses
                            </button>
                            <button  className="w-full justify-start">
                                PAN Card Information
                            </button>
                            <div className="font-semibold text-gray-900">
                                <span >PAYMENTS</span>
                            </div>
                            <button  className="w-full justify-start">
                                Gift Cards
                            </button>
                            <button  className="w-full justify-start">
                                Saved UPI
                            </button>
                            <button  className="w-full justify-start">
                                Saved Cards
                            </button>
                            <div className="font-semibold text-gray-900">
                                <span >MY STUFF</span>
                            </div>
                            <button  className="w-full justify-start">
                                My Coupons
                            </button>

                            <div className="font-semibold text-gray-900">
                                <span >FAQs</span>
                            </div>
                            <button  className="w-full justify-start">
                                What happens when I update my email address (or mobile number)?
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer"
                            onClick={handleLogout}>
                              Logout
                            </button>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Area (Similar to the image) */}
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
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
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
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
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
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
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
                                        <label htmlFor="male" className="ml-2 block text-sm font-medium text-gray-900">
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
                                        <label htmlFor="female" className="ml-2 block text-sm font-medium text-gray-900">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <div className="mt-1 flex items-center">
                                    <input
                                        id="email"
                                        value={email}
                                        readOnly
                                        className="mr-2 w-full md:w-2/3 text-gray-600"
                                    />
                                    <button className=" text-blue-600 hover:underline">Edit</button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Mobile Number
                                </label>
                                <div className="mt-1 flex items-center">
                                    <input
                                        id="mobile"
                                        value={phone}
                                        readOnly
                                        className="mr-2 w-full md:w-2/3 text-gray-600"
                                    />
                                    <button className=" text-blue-600 hover:underline">Edit</button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQs Section (Simplified) */}
                    <Card className="shadow-lg mt-8">
                        <CardHeader>
                            <CardTitle className="text-2xl text-gray-900 font-semibold">FAQs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium text-blue-800">
                                    What happens when I update my email address (or mobile number)?
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    Your login email id for mobile number changes. Likewise, you'll receive all your account-related communications on your updated email...
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        </>
    );
}

