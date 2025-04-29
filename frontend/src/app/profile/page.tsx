'use client';

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  MapPin,
  ShoppingCart,
  Coins,
  CalendarDays,
  ChevronsRight,
} from "lucide-react";

interface Order {
  orderId: string;
  date: string;
  total: number;
  items: string[];
}

interface ProfileProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  orders: Order[];
  totalSpent: number;
  recentOrders: Order[];
  image: string;
}


export default function Profile(props: ProfileProps) {
  const { name, email, phone, address, orders = [], recentOrders = [], image } = props;
  const totalOrders = orders ? orders.length : 0;
  const totalSpent = recentOrders ? recentOrders.reduce((acc, order) => acc + order.total, 0).toFixed(2) : "0.00";

  return (
    <div className="bg-blue-100 min-h-screen py-10" 
    style={{
        background: 'url(./images/profile.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto px-4" >
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Profile</h1>

        <Card className="shadow-lg" >
          <CardHeader>
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6 relative">
                {image ? (  // Check if image is not empty or null
                  <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 flex items-center justify-center w-full h-full">
                    {/* You can replace this with a default image or a placeholder icon */}
                    <User className="w-10 h-10 text-gray-500" />
                  </div>
                )}
              </div>
              <div>
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {name}
                </CardTitle>
                <p className="text-gray-500 text-sm">{email}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Contact Information
                </h3>
                <p className="text-gray-600">
                  Phone: <span className="font-medium text-gray-900">{phone}</span>
                </p>
                <p className="text-gray-600">
                  Address: <span className="font-medium text-gray-900">{address}</span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Order Summary
                </h3>
                <p className="text-gray-600">
                  Total Orders: <span className="font-medium text-gray-900">{totalOrders}</span>
                </p>
                <p className="text-gray-600 flex items-center gap-1">
                  <Coins className="w-4 h-4" />
                  Total Spent: <span className="font-medium text-green-600">₹{totalSpent}</span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Recent Orders
                </h3>
                {recentOrders?.length > 0 ? (
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.orderId}
                        className="bg-white rounded-md p-4 border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">Order ID: {order.orderId}</p>
                          <p className="text-sm text-gray-500">Date: {order.date}</p>
                          <p className="text-sm font-semibold text-gray-900">Total: ₹{order.total.toFixed(2)}</p>
                          <p className="text-xs text-gray-500">
                            Items: <span className="font-medium"> {order.items.join(', ')}</span>
                          </p>
                        </div>
                        <ChevronsRight className="w-5 h-5 text-gray-500" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Badge variant="secondary" className="text-gray-600">
                    No recent orders.
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
