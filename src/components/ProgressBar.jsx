import React from "react";

export default function ProgressBar({ step }) {
  const steps = [
    "Personal Details",
    "Order Summary",
    "Review Order",
    "Payment"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow-sm py-4 px-6">
        <div className="flex items-center justify-between">
          {steps.map((label, idx) => {
            const i = idx + 1;
            const completed = i < step;
            const active = i === step;
            return (
              <div key={label} className="flex items-center flex-1 min-w-0">
                <div className="flex items-center">
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold ${
                      completed ? "bg-yellow-500 text-white" : active ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {i}
                  </div>
                </div>

                <div className="ml-3 mr-4">
                  <div className={`text-xs ${active ? "text-gray-800 font-medium" : "text-gray-500"}`}>{label}</div>
                </div>

                {/* connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-0.5 bg-gray-200 mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

