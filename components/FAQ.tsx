'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with property management?",
      answer: "Getting started is easy! Simply sign up for an account, add your first property, and begin managing tenants and tracking performance all in one place."
    },
    {
      question: "What types of properties can I manage?",
      answer: "Our platform supports residential properties, commercial spaces, multi-family buildings, and mixed-use properties. You can manage everything from single apartments to large portfolios."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely! We use bank-level encryption, regular security audits, and comply with all data protection regulations to ensure your information is always safe."
    },
    {
      question: "Can I integrate with other tools?",
      answer: "Yes! We offer integrations with popular accounting software, CRM systems, and payment processors. Plus, our API allows for custom integrations."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 email support, phone support for Premium plans, extensive documentation, and video tutorials to help you succeed."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile apps for iOS and Android allow you to manage properties on the go, receive notifications, and handle urgent tasks from anywhere."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <p className="text-gray-600">
            Everything you need to know about our property management platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
