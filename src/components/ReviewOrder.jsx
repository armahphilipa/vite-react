import React from "react";

export default function ReviewOrder({ formData, onBack, onNext }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">3. Review Order</h3>

          <div className="space-y-4">
            <div className=" rounded-lg p-4 bg-gray-50">
              <div className="flex flex-row gap-4 mb-2">
                <img src="/assets/productimg1.jpeg" alt="productimg1" className="w-[340px] h-[220px] object-cover rounded-lg"/>
                <img src="/assets/productimg2.jpeg" alt="productimg2" className="w-[340px] h-[220px] object-cover rounded-lg "/>
              </div>
              <div className="text-xs text-gray-500">Qty: 1</div>
            </div>


            <div className="mt-4 p-4 bg-white border rounded">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>GHS 350.90</span>
              </div>
              <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
                <span>Order Total</span>
                <span>GHS 350.90</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="bg-white border rounded p-4 shadow-sm">
          <h4 className="font-semibold mb-3">Delivery Details</h4>
          <div className="text-sm text-gray-600">
            <p>{formData.fullName || "—"}</p>
            <p>{formData.phone || "—"}</p>
            <p>{formData.branch || "—"}</p>
            <div className="mt-4 text-xs text-gray-500">If everything looks good click Continue to pay.</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
