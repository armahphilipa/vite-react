import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    branch: "",
    fullName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    region: "",
    dressSize: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile updated:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <Link to="/dashboard" className="text-yellow-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Profile Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button className="py-4 px-6 text-center border-b-2 font-medium text-sm border-yellow-500 text-yellow-600">
                Personal Information
              </button>
              <button className="py-4 px-6 text-center border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Order History
              </button>
              <button className="py-4 px-6 text-center border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Payment Methods
              </button>
            </nav>
          </div>

          {/* Profile Content */}
          <div className="p-6 grid md:grid-cols-3 gap-8">
            {/* Delivery Address Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mb-4">1. Delivery Address</h3>

                <div className="space-y-4">
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  >
                    <option value="">Select Branch</option>
                    <option>Main Branch</option>
                    <option>Kwesimintsim</option>
                    <option>Effiakuma</option>
                    <option>Kojokrom</option>
                    <option>Tanokrom</option>
                    <option>Takoradi</option>
                    <option>Beach Road</option>
                    <option>Sekondi</option>
                  </select>

                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />

                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />

                  <select
                    name="dressSize"
                    value={formData.dressSize}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  >
                    <option value="">Dress Size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>

                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address line"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Town / City"
                      className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                    <input
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      placeholder="Region"
                      className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Profile Summary */}
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-3">Account Details</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <p className="font-medium">{formData.fullName || "Your Name"}</p>
                    <p className="text-sm text-gray-500">{formData.email || "email@example.com"}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-500">Phone:</span> {formData.phone || "Not provided"}</p>
                  <p><span className="text-gray-500">Address:</span> {formData.address || "Not provided"}</p>
                  <p><span className="text-gray-500">Dress Size:</span> {formData.dressSize || "Not selected"}</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/orderlist" className="text-yellow-600 hover:underline">
                      View Order History
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce" className="text-yellow-600 hover:underline">
                      Continue Shopping
                    </Link>
                  </li>
                  <li>
                    <button className="text-red-600 hover:underline">
                      Delete Account
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}