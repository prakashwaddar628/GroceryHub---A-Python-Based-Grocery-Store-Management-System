// components/StatsCards.tsx
"use client";

export default function StatsCards() {
  const stats = [
    {
      title: "Total sales",
      value: "USD 2,500",
      subtitle: "Total number of sales",
    },
    {
      title: "Inventory status",
      value: "98 items",
      subtitle: "Current stock level",
    },
    {
      title: "Recent orders",
      value: "5 new orders",
      subtitle: "Latest purchase by Anderson",
    },
    {
      title: "User activity",
      value: "Active users today",
      subtitle: "Signup, Login, Visit Website",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all"
        >
          <h4 className="text-sm text-gray-500 font-medium">{stat.title}</h4>
          <p className="text-xl font-bold text-gray-800 mt-1">{stat.value}</p>
          <p className="text-sm text-gray-400 mt-2">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
