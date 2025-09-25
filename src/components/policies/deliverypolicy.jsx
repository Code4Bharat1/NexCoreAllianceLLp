import React from 'react';

export default function ShippingPolicy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
      <div className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
          Shipping and Delivery Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            At <strong>NexCore-Alliance</strong>, we ensure a seamless shipping and delivery process for any physical materials or certificates (if applicable). Our shipping policy is as follows:
          </p>

          <ol className="list-decimal list-inside space-y-4 pl-4">
            <li>
              <strong>Shipping Timeline:</strong>
              <p>Materials will be shipped within <strong>7-10 business days</strong> after order confirmation.</p>
            </li>
            <li>
              <strong>Shipping Costs:</strong>
              <p>Any applicable shipping charges will be displayed at the time of checkout.</p>
            </li>
            <li>
              <strong>Delivery Timelines:</strong>
              <p>Delivery times vary depending on your location and the courier services available.</p>
            </li>
            <li>
              <strong>Tracking Information:</strong>
              <p>Tracking details will be provided once your order is shipped for your convenience.</p>
            </li>
          </ol>

          <p>
            For any shipping or delivery-related concerns, please contact us at&nbsp;
            <a href="mailto:nexcorealliance@gmail.com" className="text-blue-500 hover:underline">
              nexcorealliance@gmail.com
            </a>. We’re here to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
