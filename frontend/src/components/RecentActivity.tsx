"use client";

const activity = [
  {
    date: "Sep 26, 2023 11:35 AM",
    user: "Sarah Jones",
    action: "Processed Order #524",
    status: "Completed",
  },
  {
    date: "Sep 26, 2023 09:15 AM",
    user: "John Green",
    action: "Created Order #524",
    status: "Completed",
  },
  {
    date: "Sep 26, 2023 08:06 AM",
    user: "William Smith",
    action: "Refunded Order #124",
    status: "Completed",
  },
  {
    date: "Sep 25, 2023 04:23 PM",
    user: "Elizabeth Taylor",
    action: "Created Order #123",
    status: "Completed",
  },
];

export default function RecentActivity() {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Recent Activity
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase tracking-wider">
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {activity.map((item, index) => (
              <tr key={index} className=" border-t">
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.user}</td>
                <td className="px-6 py-4">{item.action}</td>
                <td className="px-6 py-4">
                  <span className="text-green-600 font-semibold">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
