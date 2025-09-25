import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
      <div className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
          Refund Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            At <strong>NexCore-Alliance</strong>, we strive to ensure your satisfaction. However, we understand that circumstances may change, and we are here to assist you with a fair refund process:
          </p>

          <ol className="list-decimal list-inside space-y-4 pl-4">
            <li>
              <strong>Eligibility for Refunds:</strong>
              <p>Refund requests must be submitted within <strong>7 days</strong> of enrollment.</p>
              <p>Refunds are applicable only if less than <strong>25% of the course content</strong> has been accessed.</p>
            </li>
            <li>
              <strong>Processing Fees:</strong>
              <p>Any applicable processing fees will be deducted from the refund amount.</p>
            </li>
            <li>
              <strong>Refund Timeline:</strong>
              <p>Approved refunds will be processed within <strong>10 business days</strong>.</p>
            </li>
          </ol>

          <p>
            We are committed to providing a seamless refund experience while maintaining fairness for all parties.
          </p>
        </div>
      </div>
    </div>
  );
}
