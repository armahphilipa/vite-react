import React from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "#CMP801",
    user: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?img=1",
    size: "XXL",
    branch: "Effiakuma",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CMP802",
    user: "Kate Morrison",
    avatar: "https://i.pravatar.cc/40?img=2",
    size: "L",
    branch: "Takoradi",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CMP803",
    user: "Drew Cano",
    avatar: "https://i.pravatar.cc/40?img=3",
    size: "XL",
    branch: "Anaji",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CMP804",
    user: "Orlando Diggs",
    avatar: "https://i.pravatar.cc/40?img=4",
    size: "XL",
    branch: "Effiakuma",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CMP805",
    user: "Andi Lane",
    avatar: "https://i.pravatar.cc/40?img=5",
    size: "S",
    branch: "Effiakuma",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const statusStyles = {
  "In Progress": "text-blue-500",
  Complete: "text-green-500",
  Pending: "text-yellow-500",
  Approved: "text-orange-500",
  Rejected: "text-red-500",
};

export default function OrderList() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Same as Dashboard */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col">
        <div className="font-bold text-lg mb-6">
          <Link to="/dashboard" className="block">Overview</Link>
        </div>
        <nav className="space-y-2">
          <Link to="/orders" className="block text-left text-gray-700 hover:text-black hover:font-medium">OrderList</Link>
          <Link to="/ecommerce" className="block text-left text-gray-700 hover:text-black hover:font-medium">Ecommerce</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Order List</h1>

        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Dress Size</th>
                <th className="py-3 px-6 text-left">Branch</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6">{order.id}</td>
                  <td className="py-3 px-6 flex items-center">
                    <img
                      className="w-6 h-6 rounded-full mr-2"
                      src={order.avatar}
                      alt="avatar"
                    />
                    {order.user}
                  </td>
                  <td className="py-3 px-6">{order.size}</td>
                  <td className="py-3 px-6">{order.branch}</td>
                  <td className="py-3 px-6">{order.date}</td>
                  <td className={`py-3 px-6 font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
