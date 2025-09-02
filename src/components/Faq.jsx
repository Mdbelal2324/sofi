import React, { useState } from "react";

const faqs = [
  {
    question: "What makes Sofiloft Technologies different from other IT providers?",
    answer:
      "Our edge lies in proven expertise, transparent processes, cutting-edge technology, agile methods, and a client-first approach that ensures solutions are both innovative and results-driven",
  },
  {
    question: "How long does it take to develop a custom software or app?",
    answer:
      "Development timelines depend on your project’s complexity and requirements. Typically, websites take 2-8 weeks, mobile apps 8-12 weeks, and advanced solutions like AI or e-commerce vary accordingly",
  },
  {
    question: "Do you provide maintenance and support after project delivery?",
    answer:
      "Absolutely. Our team offers ongoing maintenance, bug fixes, enhancements, and security updates to ensure your software remains reliable, secure, and up-to-date post-launch.",
  },
  {
    question: "What types of software development services do you offer?",
    answer: "Sofiloft Technologies offers website development, mobile app development, e-commerce solutions, CRM platforms, AI/ML services, chatbot solutions, digital marketing, AR/VR applications, and more—tailored for various industries.",
  
  },
  {
    question: "What industries do you serve with your solutions?",
    answer: "We work with businesses in healthcare, finance, retail, education, logistics, real estate, travel, entertainment, manufacturing, and more. Our solutions are adaptable to your industry’s needs.",
      
  },
  {
    question: "Do you offer AI-driven solutions for business automation? ",
    answer: 
      "Yes, Sofiloft specializes in AI/ML-powered automation, helping businesses optimize processes, enhance decision-making, and improve efficiency with intelligent data-driven technology.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "We provide regular progress reports, milestone updates, and direct access to your project manager. Communication is clear, responsive, and collaborative throughout every project stage.",
  },
  {
    question: "What are the benefits of implementing AI agents in sales and marketing?",
    answer:
      "Our AI agents automate lead qualification, personalize customer journeys, and deliver real-time engagement, helping you accelerate sales cycles and improve marketing ROI. ",
  },
    {
    question: "What Is The Average Cost and Timeline for Developing a Website or Mobile App?",
    answer:
      "The cost and timeline for building a website or mobile app depend on project complexity and required features. Typically, a basic website or app takes about 15 days to 4 months to launch and ranges from $1,000 to $10,000. Advanced solutions with custom integrations or unique designs may need more time and investment. Reach out to Sofiloft Technologies for a personalized estimate based on your specific goals and requirements. ",
  },
    {
    question: "How do I get started with Sofiloft Technologies?",
    answer:
      "Simply contact us through our website or by email. Share your business goals, and we’ll schedule a discovery consultation to design the ideal solution for your needs. ",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-gray-500 text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
