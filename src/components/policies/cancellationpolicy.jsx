import React from 'react';

export default function CancellationPolicy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
      <div className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
          Cancellation Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            At <strong>NexCore-Alliance</strong>, we aim to provide a transparent and user-friendly cancellation process. You may cancel your course enrollment under the following conditions:
          </p>

          <ol className="list-decimal list-inside space-y-4 pl-4">
            <li>
              <strong>Submission of Cancellation Requests:</strong>
              <p>
                All cancellation requests must be submitted in writing via email to&nbsp;
                <a href="mailto:nexcorealliance@gmail.com" className="text-blue-500 hover:underline">
                  nexcorealliance@gmail.com
                </a>.
              </p>
            </li>
            <li>
              <strong>Eligibility:</strong>
              <p>
                Cancellations will not be eligible for refunds if more than <strong>25% of the course content</strong> has been accessed.
              </p>
            </li>
            <li>
              <strong>Cancellation Fees:</strong>
              <p>
                Any applicable cancellation fees will be deducted before processing refunds.
              </p>
            </li>
          </ol>

          <p>
            For assistance or queries, please contact our support team. We’re here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
