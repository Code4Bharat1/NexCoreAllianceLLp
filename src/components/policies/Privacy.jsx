import React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Code4Bharat</title>
        <meta
          name="description"
          content="Learn about how Code4Bharat protects your privacy with this detailed Privacy Policy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Privacy Policy, Code4Bharat, Data Protection, User Privacy"
        />
        <meta name="author" content="NexCore-Alliance" />
        <meta property="og:title" content="Privacy Policy | Code4Bharat" />
        <meta
          property="og:description"
          content="Learn about how Code4Bharat protects your privacy with this detailed Privacy Policy."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
        />

        <meta
          property="og:url"
          content="https://code4bharat.example.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 mt-20">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h1
            className="text-4xl font-bold text-center mb-6"
            style={{ color: "#106EB5" }}
          >
            Privacy Policy
          </h1>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              At <strong>Code4Bharat</strong>, we are committed to safeguarding
              your privacy. This policy explains how we collect, use, and
              protect your personal information to ensure a secure and
              transparent experience.
            </p>
            <ul className="list-decimal list-inside space-y-4">
              <li>
                <strong>Data Collection:</strong>
                <p>
                  We collect only the essential personal data required to
                  provide you with our services, including:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Payment details</li>
                </ul>
                <p>
                  This information helps us process your enrollment and ensure a
                  seamless user experience.
                </p>
              </li>
              <li>
                <strong>Data Usage:</strong>
                <p>Your personal information is used strictly for:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Processing your course enrollment and payments.</li>
                  <li>
                    Sending updates regarding our programs, services, and
                    policies.
                  </li>
                  <li>
                    Enhancing and personalizing your experience by improving our
                    offerings.
                  </li>
                </ul>
                <p>
                  We value your trust and ensure your data is used responsibly.
                </p>
              </li>
              <li>
                <strong>Data Security:</strong>
                <p>
                  We take your data security seriously and have implemented the
                  following measures:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Industry-standard encryption to protect your sensitive
                    information.
                  </li>
                  <li>
                    Secure storage systems to prevent unauthorized access.
                  </li>
                </ul>
                <p>
                  Your privacy is our priority, and we continuously enhance our
                  security protocols.
                </p>
              </li>
              <li>
                <strong>Third-Party Sharing:</strong>
                <p>
                  Your data is never shared with third parties except in the
                  following scenarios:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    For secure payment processing via trusted payment gateways.
                  </li>
                </ul>
                <p>
                  We ensure that all third-party service providers adhere to
                  strict data protection standards.
                </p>
              </li>
              <li>
                <strong>Cookies:</strong>
                <p>Our website uses cookies to:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Enhance your browsing experience.</li>
                  <li>Analyze website traffic and improve functionality.</li>
                </ul>
                <p>
                  You can manage your cookie preferences through your browser
                  settings.
                </p>
              </li>
              <li>
                <strong>Policy Updates:</strong>
                <p>
                  <strong>NexCore-Alliance</strong> reserves the right to update
                  this privacy policy to reflect changes in our practices or
                  legal requirements.
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>All updates will be communicated through our website.</li>
                  <li>
                    We encourage you to review the policy periodically to stay
                    informed.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              If you have any questions or concerns about this policy, please
              feel free to contact us. At <strong>NexCore-Alliance</strong>,
              your privacy and trust are of utmost importance to us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
