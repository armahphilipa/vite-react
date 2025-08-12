import React, { useState } from "react";

export default function Payment({ formData, onBack, onPay }) {
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvc: "" });
  const [processing, setProcessing] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    // simple validation
    if (!card.number || !card.name) {
      alert("Please fill card details (this demo simulates payment).");
      return;
    }
    setProcessing(true);
    // Simulate an async payment call
    setTimeout(() => {
      setProcessing(false);
      onPay(); // call parent success callback
    }, 1400);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">4. Payment</h3>

          <form onSubmit={submit} className="space-y-4">
            <input
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
              placeholder="Card number"
              className="w-full border border-gray-400  p-3 rounded bg-gray-50"
            />
            <input
              value={card.name}
              onChange={(e) => setCard({ ...card, name: e.target.value })}
              placeholder="Name on card"
              className="w-full border border-gray-400  p-3 rounded bg-gray-50"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                value={card.expiry}
                onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                placeholder="MM/YY"
                className="border border-gray-400  p-3 rounded bg-gray-50"
              />
              <input
                value={card.cvc}
                onChange={(e) => setCard({ ...card, cvc: e.target.value })}
                placeholder="CVC"
                className="border border-gray-400  p-3 rounded bg-gray-50"
              />
            </div>

            <div className="text-sm text-gray-600">
              This demo simulates a payment. Replace this with Stripe/PayPal integration for production.
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className={`px-6 py-2 rounded text-white ${processing ? "bg-yellow-300" : "bg-yellow-500 hover:bg-yellow-600"}`}
                disabled={processing}
              >
                {processing ? "Processing..." : "Pay GHS350.90"}
              </button>
            </div>
          </form>
        </div>

        <aside className="bg-white border border-gray-400  rounded p-4 shadow-sm">
          <h4 className="font-semibold mb-3">Order Summary</h4>
          <div className="text-sm text-gray-600">
            <div className="">
              <div className="flex justify-center">
                <img src="/assets/productimg2.jpeg" alt="productimg2" className="w-[210px] h-[220px] object-cover rounded-lg align-middle "/>
              </div>
              <div className="text-xs text-gray-500">Qty: 1</div>
            </div>
            <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>GHS 350.90</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
