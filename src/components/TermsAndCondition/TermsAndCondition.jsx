
"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, FileText, Mail, Phone, MapPin, Clock, Shield, Users, Globe, CheckCircle, AlertTriangle, Menu } from "lucide-react";

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({ 'general-terms': true });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [lastUpdated] = useState("January 15, 2024");

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false); // Close mobile sidebar after navigation
  };

  const tableOfContents = [
    { id: 'general-terms', title: 'General Terms', icon: FileText },
    { id: 'website-services', title: 'Use of Website & Services', icon: Globe },
    { id: 'services-offerings', title: 'Services and Offerings', icon: Users },
    { id: 'payments-refunds', title: 'Payments and Refunds', icon: CheckCircle },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: Shield },
    { id: 'termination', title: 'Termination', icon: AlertTriangle },
    { id: 'governing-law', title: 'Governing Law', icon: Shield },
    { id: 'contact-info', title: 'Contact Information', icon: Mail }
  ];

  const CollapsibleSection = ({ id, title, children, defaultExpanded = false }) => {
    const isExpanded = expandedSections[id] ?? defaultExpanded;

    return (
      <div id={id} className="mb-6">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200 rounded-lg shadow-sm"
        >
          <h2 className="text-lg font-semibold text-[#2c3e50] text-left">
            {title}
          </h2>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
          )}
        </button>
        {isExpanded && (
          <div className="mt-2 p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 select-none">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-[#3498db]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#2c3e50] mb-2 mt-0">Terms and Conditions</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-left sm:text-right">
        <div className="text-lg font-semibold text-[#2c3e50]">NexCore Alliance LLP</div>
        <div className="text-sm text-gray-500">Version 2.1</div>
      </div>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile TOC Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              <Menu className="w-5 h-5 text-[#3498db]" />
              <span className="font-medium text-[#2c3e50]">Table of Contents</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 ml-auto transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Sidebar - Table of Contents */}
          <div className={`lg:w-72 lg:flex-shrink-0 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border sticky top-6">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#3498db]" />
                  <h3 className="font-semibold text-[#2c3e50]">Table of Contents</h3>
                </div>
              </div>
              <nav className="p-2">
                {tableOfContents.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
  key={item.id}
  onClick={() => scrollToSection(item.id)}
  className="w-full text-left px-3 py-2.5 rounded-md text-sm text-gray-700 flex items-center gap-3 cursor-pointer"
>
  <Icon className="w-4 h-4 flex-shrink-0" />
  <span className="truncate">{item.title}</span>
</div>

                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Introduction */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-[#3498db]">
              <h2 className="text-lg font-semibold text-[#2c3e50] mb-3">Welcome to Nex Core Alliance LLP</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our website (www.nexcorealiance.com) and services provided under the brands 
                ISRC (International STEM and Robotics Championship), Code4Bharat, and Education.Code4Bharat, you 
                agree to comply with and be bound by the following Terms and Conditions.
              </p>
              <div className="p-4 bg-yellow-100 border border-yellow-200 rounded-md flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-yellow-800 text-sm">
                  If you do not agree to these terms, please do not use our websites or services.
                </p>
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-4">
              <CollapsibleSection id="general-terms" title="1. General Terms" defaultExpanded>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">1.1. Acceptance of Terms</h3>
                    <p className="text-gray-700 leading-relaxed">
                      By using our website and services, you confirm that you have read, understood, and agreed to these 
                      Terms and Conditions, as well as any additional guidelines, rules, or legal notices published on our site.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">1.2. Changes to Terms</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nex Core Alliance LLP reserves the right to modify or update these Terms and Conditions at any time. 
                      Any changes will be posted on this page, and your continued use of the website or services will be 
                      considered acceptance of the updated terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">1.3. Privacy Policy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our collection and use of personal information are governed by our Privacy Policy. By using our 
                      website and services, you agree to the collection and use of data in accordance with our Privacy Policy.
                    </p>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="website-services" title="2. Use of Our Website and Services">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">2.1. Website Content</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All content, materials, trademarks, and logos displayed on the Nex Core Alliance LLP website, 
                      including those of ISRC, Code4Bharat, and Education.Code4Bharat, are the intellectual property 
                      of Edu Momentum LLP and/or its affiliates. You may not reproduce, distribute, or otherwise use 
                      any content without written permission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">2.2. User Account</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      To access certain features or services, you may be required to create an account. You are 
                      responsible for maintaining the confidentiality of your account information and for all 
                      activities that occur under your account.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-red-800 text-sm">
                        If you suspect unauthorized access or any security breach, please notify us immediately.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">2.3. Prohibited Conduct</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
                    <ul className="space-y-3">
                      {[
                        "Use the website for any illegal or unauthorized purpose",
                        "Interfere with the proper functioning of the website or services",
                        "Transmit any viruses, malware, or harmful code",
                        "Engage in unauthorized data mining, scraping, or other automated methods",
                        "Violate any applicable local, national, or international laws"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="services-offerings" title="3. Services and Offerings">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* ISRC Card */}
                    <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-[#3498db]" />
                        <h3 className="text-lg font-semibold text-[#2c3e50]">ISRC</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        International STEM and Robotics Championship organizes global STEM competitions, events, and educational programs.
                      </p>
                      <span className="inline-block text-xs text-blue-800 bg-blue-100 px-2 py-1 rounded">
                        Age-based participation groups
                      </span>
                    </div>

                    {/* Code4Bharat Card */}
                    <div className="p-6 border border-green-200 rounded-lg bg-green-50">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-green-600" />
                        <h3 className="text-lg font-semibold text-[#2c3e50]">Code4Bharat</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Offers IT solutions including web development, mobile applications, and offshore development services.
                      </p>
                      <span className="inline-block text-xs text-green-800 bg-green-100 px-2 py-1 rounded">
                        Custom service agreements
                      </span>
                    </div>

                    {/* Education.Code4Bharat Card */}
                    <div className="p-6 border border-purple-200 rounded-lg bg-purple-50">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <h3 className="text-lg font-semibold text-[#2c3e50]">Education.Code4Bharat</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Provides IT training courses and job placement assistance with performance-based outcomes.
                      </p>
                      <span className="inline-block text-xs text-purple-800 bg-purple-100 px-2 py-1 rounded">
                        No employment guarantee
                      </span>
                    </div>
                  </div>

                  {/* Additional service details */}
                  <div className="space-y-4">
                    <h4 className="text-md font-semibold text-[#2c3e50]">Client Responsibilities</h4>
                    <p className="text-gray-700">
                      Clients engaging with Code4Bharat agree to provide the necessary materials, feedback, and approvals 
                      required for project completion. Delays caused by the client may impact the delivery schedule.
                    </p>
                    
                    <h4 className="text-md font-semibold text-[#2c3e50]">Job Placement Assistance</h4>
                    <p className="text-gray-700">
                      While Education.Code4Bharat offers job placement services to students who complete their courses, 
                      it does not guarantee employment. Placement services are based on the student's performance, 
                      job availability, and other factors beyond our control.
                    </p>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="payments-refunds" title="4. Payments and Refunds">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">4.1. Fees</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Fees for our services, including participation in ISRC competitions, IT solutions through Code4Bharat, 
                      and courses offered by Education.Code4Bharat, are listed on the relevant service pages. All fees must 
                      be paid as outlined in the respective service agreements or registration forms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#2c3e50]">4.2. Refund Policy</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-red-600" />
                          </div>
                          <h4 className="font-semibold text-sm mb-2">ISRC Events</h4>
                          <p className="text-xs text-gray-600">Non-refundable unless canceled by ISRC</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Globe className="w-6 h-6 text-yellow-600" />
                          </div>
                          <h4 className="font-semibold text-sm mb-2">Code4Bharat</h4>
                          <p className="text-xs text-gray-600">Refunds if service delivery fails</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FileText className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-sm mb-2">Education</h4>
                          <p className="text-xs text-gray-600">Non-refundable once course begins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="limitation-liability" title="5. Limitation of Liability">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-3">Important Liability Notice</h3>
                      <p className="text-red-700 leading-relaxed">
                        Nex Core Alliance LLP, including its brands ISRC, Code4Bharat, and Education.Code4Bharat, 
                        is not liable for any indirect, incidental, consequential, or punitive damages arising from 
                        the use of our websites, services, or events. Users agree to use our services at their own risk.
                      </p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="termination" title="6. Termination">
                <p className="text-gray-700 leading-relaxed">
                  Nex Core Alliance LLP reserves the right to suspend or terminate user accounts or access to services 
                  for violation of these Terms and Conditions, or for any reason deemed necessary to protect the 
                  integrity of our website or services.
                </p>
              </CollapsibleSection>

              <CollapsibleSection id="governing-law" title="7. Governing Law">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 leading-relaxed">
                    These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of 
                    our website or services will be subject to the jurisdiction of the courts in Mumbai, India.
                  </p>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="contact-info" title="8. Contact Information">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    If you have questions about these Terms and Conditions or wish to inquire about our services:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#3498db]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Email</p>
                        <a href="mailto:nexcorealiancellp@gmail.com" className="text-[#3498db] hover:text-blue-700 text-sm">
                          nexcorealiancellp@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Phone</p>
                        <a href="tel:+919594430295" className="text-[#3498db] hover:text-blue-700 text-sm">
                          +91 95944 30295
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Address</p>
                        <p className="text-gray-600 text-sm">Off BKC, Mumbai, India 400070</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>
            </div>

            {/* Terms Acceptance */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;