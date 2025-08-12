import React from "react";

export default function OrderSummary({ formData, onBack, onNext }) {
  // Sample shipping options or subtotal, editable if needed
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">2. Order Summary</h3>

          <div className="space-y-4">
            

            <div className="border border-gray-400  rounded p-4 bg-gray-50">
              <div className="flex flex-row gap-4 mb-2">
                <img src="/assets/productimg1.jpeg" alt="productimg1" className="w-[340px] h-[220px] object-cover rounded=lg"/>
                <img src="/assets/productimg2.jpeg" alt="productimg2" className="w-[340px] h-[220px] object-cover rounded=lg"/>
              </div>rounded=lg
              <div className="text-xs text-gray-500">Qty: 1</div>
            </div>

            <div className="mt-4 p-4 bg-white border rounded">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>GHS 350.90</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Postage & Packing</span>
                <span>£0.00</span>
              </div>
              <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>GHS 350.90</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="bg-white border rounded p-4 shadow-sm h-[340px]">
          <h4 className="font-semibold mb-3">Delivery To</h4>
          <div className="text-sm text-gray-600">
            <p>{formData.fullName || "—"}</p>
            <p>{formData.phone || "—"}</p>
            <p>{formData.branch || "—"}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
