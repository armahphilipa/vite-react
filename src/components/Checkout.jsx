import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import PersonalDetails from "./PersonalDetails";
import OrderSummary from "./OrderSummary";
import ReviewOrder from "./ReviewOrder";
import Payment from "./Payment";
import Navbar from "./Navbar";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const [formData, setFormData] = useState({
    country: "United Kingdom",
    fullName: "",
    email: "",
    phone: "",
    postcode: "",
    address: "",
    city: "",
    region: ""
  });

  const next = () => setStep(s => Math.min(4, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));
  const goTo = (n) => setStep(n);

  const handlePaySuccess = () => {
    setCompleted(true);
    // You could redirect to a success page here
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen py-10">
      {/* container with inner white card like your template */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="py-6 border-b">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-10 bg-black/10 rounded flex items-center justify-center font-bold">TUMUS</div>
              <div className="text-lg font-semibold">REGISTRATION</div>
            </div>

            {/* small top controls area */}
            <div className="text-sm text-gray-500">Step {step} of 4</div>
          </div>
        </div>

        {/* Progress */}
        <div className="py-6">
          <ProgressBar step={step} />
        </div>

        {/* Steps content */}
        <div className="py-4">
          {completed ? (
            <div className="max-w-6xl mx-auto px-6 text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Payment successful!</h2>
              <p className="text-gray-600">Thank you — your order has been placed.</p>
            </div>
          ) : (
            <>
              {step === 1 && <PersonalDetails formData={formData} setFormData={setFormData} onNext={next} />}
              {step === 2 && <OrderSummary formData={formData} onBack={back} onNext={next} />}
              {step === 3 && <ReviewOrder formData={formData} onBack={back} onNext={next} />}
              {step === 4 && <Payment formData={formData} onBack={back} onPay={handlePaySuccess} />}
            </>
          )}
        </div>

        {/* Fixed bottom action bar */}
        {!completed && (
          <div className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <div>
                <button
                  onClick={() => { /* cancel resets or go home — implement as needed */ window.location.href = "/"; }}
                  className="px-4 py-2 rounded border text-sm"
                >
                  Cancel
                </button>
              </div>

              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button
                    onClick={back}
                    className="px-4 py-2 rounded border text-sm"
                  >
                    Back
                  </button>
                )}
                {step < 4 && (
                  <button
                    onClick={next}
                    className="px-6 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    Continue
                  </button>
                )}

                {/* On final step, the Payment component renders its own Pay button. */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
