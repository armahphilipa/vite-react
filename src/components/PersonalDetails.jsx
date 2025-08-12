import React from "react";

export default function PersonalDetails({ formData, setFormData, onNext }) {
  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">1. Delivery Address</h3>

          <div className="space-y-3">
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded p-3 bg-gray-50"
            >
              <option value="" className="border border-gray-400 ">Branch</option>
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
              className="w-full border border-gray-400 rounded p-3 bg-gray-50"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border border-gray-400 rounded p-3 bg-gray-50"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full border border-gray-400 rounded p-3 bg-gray-50"
            />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded p-3 bg-gray-50"
            >
              <option value="">Dress Size</option>
              <option>S</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address line"
              className="w-full border border-gray-400 rounded p-3 bg-gray-50"
            />

            <div className="grid md:grid-cols-2 gap-3">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Town / City"
                className="w-full border border-gray-400 rounded p-3 bg-gray-50"
              />
              <input
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Region"
                className="w-full border border-gray-400 rounded p-3 bg-gray-50 "
              />
            </div>
          </div>
        </div>

        {/* Order Summary Column */}
        <aside className="bg-white border rounded p-4 shadow-sm">
          <h4 className="font-semibold mb-3">Order Summary</h4>
          <div className="text-sm text-gray-600 space-y-2">
             <div className="">
              <div className="flex justify-center">
                <img src="/assets/productimg2.jpeg" alt="productimg2" className="w-[210px] h-[220px] object-cover rounded-lg align-middle "/>
              </div>
              <div className="text-xs text-gray-500">Qty: 1</div>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-medium">
              <span>Total</span>
              <span>GHS 350.90</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
