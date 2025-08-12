import React from "react";
import { Link } from "react-router-dom";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Create a simple error boundary component
class ChartErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Chart Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 bg-red-50 text-red-600">Chart failed to load</div>;
    }
    return this.props.children;
  }
}

export default function Dashboard() {
  // Properly structured chart data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Previous Week",
        data: [10, 12, 15, 13, 18, 20, 22],
        borderColor: "#BFD3E6",
        backgroundColor: "#BFD3E6",
        fill: false,
        tension: 0.4
      },
      {
        label: "Current Week",
        data: [8, 9, 12, 14, 17, 21, 25],
        borderColor: "#000000",
        backgroundColor: "#000000",
        fill: false,
        tension: 0.4
      }
    ]
  };

  const barData = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic by Device",
        data: [15, 20, 18, 22, 10, 8],
        backgroundColor: ["#A5D8FF", "#C8A2C8", "#000000", "#BFD3E6", "#A5D8FF", "#C8A2C8"]
      }
    ]
  };

  const doughnutData = {
    labels: ["Accra", "Kojokrom", "Takoradi", "_"],
    datasets: [
      {
        data: [38.6, 22.5, 30.8, 8.1],
        backgroundColor: ["#000000", "#B1E3AD", "#A5D8FF", "#C8A2C8"]
      }
    ]
  };

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="md:hidden bg-white p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-gray-700"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white border-r p-4 flex flex-col`}>
        <div className="font-bold text-lg mb-6">
          <Link to="/dashboard" className="block">Overview</Link>
        </div>
        <nav className="space-y-2">
          <Link to="/orders" className="block text-left text-gray-700 hover:text-black hover:font-medium">OrderList</Link>
          <Link to="/ecommerce" className="block text-left text-gray-700 hover:text-black hover:font-medium">Ecommerce</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <header className="hidden md:flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Dashboard / Default</h1>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1"
          />
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard title="Views" value="721K" change="+11.01%" />
          <MetricCard title="Visits" value="367K" change="-0.03%" />
          <MetricCard title="New Users" value="1,156" change="+15.03%" />
          <MetricCard title="Active Users" value="239K" change="+6.08%" />
        </div>

        {/* Charts with Error Boundaries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Total Users</h2>
            <ChartErrorBoundary>
              <Line 
                data={lineData} 
                options={{ responsive: true, maintainAspectRatio: true }}
              />
            </ChartErrorBoundary>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Traffic by Website</h2>
            <ul className="space-y-2">
              {['Google', 'YouTube', 'Instagram', 'Pinterest', 'Facebook', 'Twitter', 'Tumblr'].map((site) => (
                <li key={site}>{site}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Traffic by Device</h2>
            <ChartErrorBoundary>
              <Bar 
                data={barData} 
                options={{ responsive: true, maintainAspectRatio: true }}
              />
            </ChartErrorBoundary>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Traffic by Location</h2>
            <ChartErrorBoundary>
              <Doughnut 
                data={doughnutData} 
                options={{ responsive: true, maintainAspectRatio: true }}
              />
            </ChartErrorBoundary>
          </div>
        </div>
      </main>

      {/* Notifications - Hidden on mobile */}
      <aside className="hidden lg:block w-64 bg-white border-l p-4">
        <h2 className="font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          <Notification message="New user registered" time="59 minutes ago" />
          <Notification message="You have a bug that needs fixing" time="12 hours ago" />
          <Notification message="Andi Lane subscribed to you" time="Today, 11:59 AM" />
        </div>
      </aside>
    </div>
  );
}

// Metric Card Component
function MetricCard({ title, value, change }) {
  return (
    <div className="bg-white p-4 rounded shadow h-full">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl md:text-2xl font-bold">{value}</p>
      <span className={`text-xs md:text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
  );
}

// Notification Component
function Notification({ message, time }) {
  return (
    <div className="border-b pb-2">
      <p className="text-sm line-clamp-1">{message}</p>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}