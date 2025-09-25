import React from 'react';

export default function ProductPricing() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
      <div className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <h1 className="text-4xl  md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
          Product Pricing
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            At <strong>NexCore-Alliance</strong>, our courses are designed to deliver maximum value at competitive prices.
          </p>

          <ol className="list-decimal list-inside space-y-4 pl-4">
            <li>
              <strong>Transparent Pricing:</strong>
              <p>
                All course prices are clearly listed on our website, ensuring complete transparency.
              </p>
            </li>
            <li>
              <strong>Inclusive of Taxes:</strong>
              <p>
                Prices include applicable taxes unless otherwise specified, so there are no hidden costs.
              </p>
            </li>
            <li>
              <strong>Discounts and Promotions:</strong>
              <p>
                Any available discounts or promotions will be automatically applied and reflected at the time of checkout.
              </p>
            </li>
            <li>
              <strong>Price Changes:</strong>
              <p>
                Prices are subject to change at our discretion; however, confirmed bookings will remain unaffected.
              </p>
            </li>
          </ol>

          <p>
            For detailed pricing, please visit the respective course pages on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
