import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 1700, 2200, 2000, 2500],
        borderColor: "#facc15",
        backgroundColor: "rgba(250, 204, 21, 0.2)",
        fill: true,
      },
    ],
  };

  const projectionsData = {
    labels: ["Dress", "Mask", "Boduah", "T-Shirt"],
    datasets: [
      {
        label: "Projections",
        data: [65, 59, 80, 81],
        backgroundColor: "#facc15",
      },
      {
        label: "Actual",
        data: [60, 55, 75, 78],
        backgroundColor: "#4b5563",
      },
    ],
  };

  const salesDonutData = {
    labels: ["Takoradi", "Sekondi", "Anaji"],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ["#facc15", "#4b5563", "#2563eb"],
        hoverOffset: 4,
      },
    ],
  };

  const navItems = [
    { path: "/dashboard", label: "Overview" },
    { path: "/ecommerce", label: "eCommerce" },
    { path: "/orders", label: "OrderList" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setActiveItem(item.path)}
                className={`block p-2 rounded hover:bg-[#FFC300] ${
                  activeItem === item.path
                    ? "text-[#FFC300] font-semibold bg-yellow-50"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <div className="flex-1 p-6 space-y-6">
        {/* Topbar */}
        <header className="flex justify-between items-center bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded w-64"
          />
          <div className="flex items-center space-x-4">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Customers", "Orders", "Revenue", "Growth"].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded shadow flex flex-col justify-between"
            >
              <h3 className="text-gray-500">{stat}</h3>
              <p className="text-2xl font-bold">+{i * 100 + 200}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-4 font-bold">Revenue</h3>
            <Line data={revenueData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-4 font-bold">Projections vs Actual</h3>
            <Bar data={projectionsData} />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow col-span-2">
            <h3 className="mb-4 font-bold">Top Selling Products</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Sales</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dress</td>
                  <td>500</td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td>Mask</td>
                  <td>400</td>
                  <td>$4,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-4 font-bold">Revenue by Location</h3>
            <Doughnut data={salesDonutData} />
          </div>
        </div>
      </div>
    </div>
  );
}