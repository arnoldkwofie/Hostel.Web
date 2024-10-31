import React, { useState } from "react";
import Header from "pages/Home/Header";
import NewFooter from "pages/Home/Footer";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the check-in time?",
      answer: "Check-in time is from 3 PM onwards."
    },
    {
      question: "Are pets allowed?",
      answer: "Yes, we allow pets with prior notification."
    },
    {
      question: "Is breakfast included?",
      answer: "Yes, breakfast is included in your stay."
    },
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel for free up to 24 hours before check-in."
    },
    {
      question: "Do you have free Wi-Fi?",
      answer: "Yes, we offer free Wi-Fi throughout the property."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overall-container">
      <Header />
      <div className="max-w-3xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-gray-50 border-t border-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default Faqs;
