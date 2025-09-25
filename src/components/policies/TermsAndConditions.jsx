import React from "react";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | NexCore-Alliance</title>
        <meta
          name="description"
          content="Read the terms and conditions for using the NexCore-Alliance platform and its services. Ensure compliance and understand your rights and responsibilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Terms and Conditions, NexCore-Alliance, User Agreement, Platform Rules"
        />
        <meta name="author" content="NexCore-Alliance" />
        <meta
          property="og:title"
          content="Terms and Conditions | NexCore-Alliance"
        />
        <meta
          property="og:description"
          content="Understand the terms and conditions for accessing and using the NexCore-Alliance platform."
        />
        <meta
          property="og:url"
          content="https://nexcorealliance.com/terms-and-conditions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
        />
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
        <div className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
            Terms and Conditions
          </h1>

          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Welcome to <strong>NexCore-Alliance</strong>. By accessing or
              using our website (
              <a
                href="https://nexcorealliance.com/"
                className="text-blue-500 hover:underline"
              >
                www.nexcorealliance.com
              </a>
              ), you agree to comply with the following terms and conditions:
            </p>

            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>
                <strong>Eligibility:</strong> Users must be at least 18 years
                old or have explicit parental/guardian consent to access and use
                our services.
              </li>
              <li>
                <strong>Accuracy of Information:</strong> All users are required
                to provide accurate, complete, and up-to-date personal and
                payment details. Falsified or misleading information may result
                in account suspension.
              </li>
              <li>
                <strong>Intellectual Property:</strong> All content, materials,
                and courses on our platform are owned by{" "}
                <strong>NexCore-Alliance</strong> and protected by copyright
                laws. Unauthorized sharing, duplication, or distribution is
                strictly prohibited and may lead to legal action.
              </li>
              <li>
                <strong>Service Modifications:</strong>{" "}
                <strong>NexCore-Alliance</strong> reserves the right to modify,
                suspend, or discontinue any service or course without prior
                notice.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> We are not responsible
                for any indirect, incidental, or consequential damages arising
                from the use of our services. Users agree to use the platform at
                their own risk.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> Any disputes or claims
                arising from the use of our services shall be governed by the
                laws of India and subject to the jurisdiction of Mumbai courts.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
