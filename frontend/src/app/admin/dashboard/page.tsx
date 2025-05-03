'use client'

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

// Dummy data for the charts
const userChartData = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 500 },
    { name: 'Apr', users: 200 },
    { name: 'May', users: 600 },
    { name: 'Jun', users: 450 },
];

const salesChartData = [
    { name: 'Jan', sales: 2000 },
    { name: 'Feb', sales: 1500 },
    { name: 'Mar', sales: 2500 },
    { name: 'Apr', sales: 1800 },
    { name: 'May', sales: 3000 },
    { name: 'Jun', sales: 2200 },
];

const orderChartData = [
    { name: 'Q1', orders: 120 },
    { name: 'Q2', orders: 150 },
    { name: 'Q3', orders: 180 },
    { name: 'Q4', orders: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const AdminDashboard = () => {
    return (
        <div className="flex max-h-screen">
            <div className="flex-1 py-2 px-8 text-gray-800 overflow-y-hidden">
                <div>
                    <div>
                        <h1 className="text-4xl text-gray-900 font-serif font-semibold mb-4">Hey Admin Welcome...</h1>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Products</CardTitle>
                            <CardDescription>Number of products in the store</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">125</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Total Users</CardTitle>
                            <CardDescription>Number of registered users</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">540</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Total Orders</CardTitle>
                            <CardDescription>Number of orders placed</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">890</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <h1 className="text-2xl font-bold border rounded-3xl text-center py-2 text-white bg-gray-700">Statistics</h1>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {/* User Chart (Bar Chart) */}
                        <Card className='h-90'>
                            <CardHeader>
                                <CardTitle className='text-lg'>User Growth</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={userChartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="users" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Sales Chart (Line Chart) */}
                        <Card className='h-90'>
                            <CardHeader>
                                <CardTitle className='text-lg'>Sales Trend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={salesChartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Order Chart (Pie Chart) */}
                        <Card className='h-90'>
                            <CardHeader>
                                <CardTitle className='text-lg'>Order Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={250}>
                                    <PieChart>
                                        <Pie
                                            data={orderChartData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="orders"
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index,
                                            }: any) => {
                                                const RADIAN = Math.PI / 180;
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill={COLORS[index % COLORS.length]}
                                                        textAnchor={x > cx ? 'start' : 'end'}
                                                        dominantBaseline="central"
                                                    >
                                                        {orderChartData[index].name} ({value})
                                                    </text>
                                                );
                                            }}
                                        >
                                            {orderChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminDashboard;
