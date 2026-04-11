'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "",
    },
    {
      question: "What is your cancellation policy?",
      answer: "",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "",
    },
    {
      question: "How does billing work?",
      answer: "",
    },
    {
      question: "How do I change my account email?",
      answer: "",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently asked{" "}
            <span className="text-pink-500">questions</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-pink-200 py-5">
              
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                {/* + / - Button */}
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-pink-500 text-pink-500 text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && faq.answer && (
                <p className="mt-3 text-gray-600 max-w-2xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full mt-12">
  <img
    src="/images/Content.png"
    alt="Why Choose Us"
    className="w-full h-full object-cover"
  />

  <button 
    className="absolute top-[255px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-300 hover:bg-pink-700 hover:shadow-lg hover:scale-105"
    style={{
      width: '195px',
      height: '50px',
      backgroundColor: 'rgba(237, 60, 106, 1)',
      borderRadius: '5px',
      fontFamily: 'DM Sans',
      fontWeight: '700',
      fontSize: '14px',
      textAlign: 'center',
      cursor: 'pointer',
      border: 'none'
    }}
  >
    Get in touch
  </button>
</div>
          
    </section>
  );
}