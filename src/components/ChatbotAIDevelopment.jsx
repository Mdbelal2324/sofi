// ChatbotDevelopment.jsx
import React, { useState } from "react";
import { FaRobot, FaUserTie, FaCode, FaShoppingCart } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/Healthcare.jpg";
import retail from "../assets/image/Retail.jpg";
import edu from "../assets/image/Education.jpg";
import ecom from "../assets/image/Retail1.jpg";
import state from "../assets/image/State.jpg";
import tele from "../assets/image/Tele.jpg";
import travel3 from "../assets/image/Travel3.jpg";
import finance2 from "../assets/image/Finance2.jpg";

const ChatbotDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Services
  const services = [
    {
      id: 1,
      icon: <FaRobot size={28} />,
      title: "Customer Support Chatbots",
      description:
        "Designed to provide quick, accurate answers, our AI-driven customer support chatbots reduce wait times and lighten the load on human agents. Handling FAQs, service requests, and troubleshooting, they deliver consistent, efficient support across platforms, improving satisfaction and freeing your team for complex issues.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "Lead Generation Bots",
      description:
        "Our lead generation chatbots engage website visitors proactively with personalized conversations that qualify prospects, capture contact information, and schedule follow-ups. They seamlessly connect to CRM systems, helping your sales team focus on closing deals and nurturing high-quality leads generated automatically through chatbot interactions.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaShoppingCart size={28} />,
      title: "E-commerce Chatbots",
      description:
        "We develop chatbots that guide shoppers through product discovery, recommendation, order tracking, returns, and payment assistance. These bots enhance the online shopping experience, reduce cart abandonment, and increase conversions by providing immediate, helpful responses throughout the buyer’s journey.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCode size={28} />,
      title: "Conversational AI Assistants",
      description:
        "Our advanced AI assistants manage dynamic conversations, using context and intent to perform tasks like booking appointments, managing calendars, answering complex queries, and offering personalized recommendations. These assistants learn and adapt over time to deliver more natural, human-like interactions.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaCode size={28} />,
      title: "Multilingual Chatbots",
      description:
        "With multilingual capabilities, our chatbots break language barriers to serve global audiences effectively. They communicate fluently in multiple languages, ensuring your business can support customers worldwide with consistent, relevant, and culturally appropriate responses.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCode size={28} />,
      title: "Voice-Enabled Chatbots",
      description:
        "Combining AI with speech recognition, we build voice-enabled chatbots that allow users to interact naturally through spoken commands. These hands-free assistants improve accessibility, operate on smart devices, and enhance user convenience across many platforms.",
      color: "bg-pink-500",
    },
    {
      id: 7,
      icon: <FaCode size={28} />,
      title: "Internal Workflow Bots",
      description:
        "Our internal workflow chatbots automate common employee queries and tasks such as HR information retrieval, IT support tickets, and onboarding processes. By improving internal communication and reducing manual work, they help increase productivity and employee satisfaction.",
      color: "bg-indigo-500",
    },
    {
      id: 8,
      icon: <FaCode size={28} />,
      title: "Social Media Chatbots",
      description:
        "We create chatbots that operate seamlessly on popular social media channels like Facebook Messenger, WhatsApp, and Instagram. These bots respond instantly to customer messages, promote campaigns and offers, and engage social audiences to drive brand loyalty and sales.",
      color: "bg-orange-500",
    },
    {
      id: 9,
      icon: <FaCode size={28} />,
      title: "Analytics and Optimization",
      description:
        "Beyond development, we continuously monitor chatbot performance using detailed analytics. We track user interactions, response accuracy, and engagement rates to identify improvement areas, optimize conversation flows, and boost your chatbot’s effectiveness over time.",
      color: "bg-teal-500",
    },
  ];

  // ✅ Industries
  const industryServices = [
    {
      title: "Retail & E-commerce",
      img: retail,
      desc: "Our chatbots enhance customer journeys in retail by offering personalized product recommendations, handling order tracking, managing returns, and answering common queries, which leads to improved user experience and higher sales conversions.",
    },
    {
      title: "Healthcare",
      img: web5,
      desc: "We build secure chatbots that assist patients with appointment scheduling, symptom screening, medication reminders, and answering medical FAQs, improving accessibility and efficiency in patient care while maintaining privacy compliance.",
    },
    {
      title: "Banking & Finance",
      img: finance2,
      desc: "Chatbots streamline banking interactions by providing instant access to account balances, transaction history, loan information, fraud alerts, and personalized financial advice, significantly enhancing customer service and operational speed.",
    },
    {
      title: "Travel & Hospitality",
      img: travel3 ,
      desc: "Our chatbots help travelers book flights, hotels, and tours, provide itinerary updates, answer travel-related questions, and offer destination recommendations, creating seamless and engaging travel experiences.",
    },
    {
      title: "Education",
      img: edu,
      desc: "We develop chatbots for educational institutions that support admissions queries, course information, exam schedules, campus updates, and online learning assistance, helping students and staff find information quickly and easily.",
    },
    {
      title: "Real Estate",
      img: state,
      desc: "Our chatbots assist real estate agencies in capturing leads, scheduling property visits, offering virtual tours, and answering client questions, thereby improving lead management and accelerating the buying process.",
    },
    {
      title: "Telecommunications",
      img: tele,
      desc: "Telecom chatbots handle billing inquiries, service troubleshooting, plan upgrades, and appointment scheduling automatically, reducing wait times and supporting customer retention.",
    },
    {
      title: "Insurance",
      img: web4,
      desc: "We build chatbots that simplify insurance claim submissions, provide policy details, calculate premiums, answer FAQs, and guide customers through complex insurance processes, enhancing customer trust and satisfaction.",
    },
    {
      title: "Logistics & Transportation",
      img: web4,
      desc: "Chatbots in logistics offer shipment tracking, delivery status notifications, route information, and customer support, improving communication transparency and operational efficiency.",
    },
  ];

  // ✅ FAQs
  const faqs = [
    {
      question: "What is a chatbot and how does it work?",
      answer:
        "A chatbot is an AI-powered software that interacts with users via text or voice, answering questions and performing tasks by understanding natural language.",
    },
    {
      question: "How can a chatbot improve my business?",
      answer:
        "Chatbots reduce response times, automate repetitive tasks, engage customers proactively, and improve overall operational efficiency, leading to higher satisfaction and revenue.",
    },
    {
      question: "Are chatbots suitable for every industry?",
      answer:
        "Yes, chatbots are versatile and can be customized to meet the unique demands of industries like retail, healthcare, finance, education, and more.",
    },
    {
      question: "What platforms can chatbots be integrated with?",
      answer:
        "We deploy chatbots on websites, mobile apps, social media channels (e.g., Facebook Messenger, WhatsApp), and voice platforms like Alexa and Google Assistant.",
    },
    {
      question: "Can chatbots handle multiple languages?",
      answer:
        "Absolutely, our chatbots can communicate fluently in several languages to serve diverse audiences worldwide effectively.",
    },
    {
      question: "Do chatbots understand complex queries?",
      answer:
        "Using advanced natural language processing (NLP), our chatbots interpret intent and context to handle complex, multi-turn conversations.",
    },
    {
      question: "How long does it take to build a chatbot?",
      answer:
        "Development time varies based on features and complexity but generally ranges from a few weeks for simple bots to several months for advanced systems.",
    },
    {
      question: "Can chatbots integrate with my existing software?",
      answer:
        "Yes, chatbots can be integrated with CRMs, payment gateways, helpdesk systems, and other enterprise software for seamless functionality.",
    },
    {
      question: "What ongoing support do you provide post-launch?",
      answer:
        "We offer continuous monitoring, updates, performance analysis, and optimization to ensure your chatbot remains effective and improves over time.",
    },
    {
      question: "How do I start the chatbot development process?",
      answer:
        "Start by consulting with our experts to discuss your requirements. We then analyze your goals and data before planning and building a tailored chatbot solution.",
    },
  ];

  return (
    <div id="chatbotdevelopment">
      {/* HERO SECTION */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Chatbot Development Services by <span className="relative text-red-500">SofiLoft Technologies</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Chatbots are transforming customer interaction by providing instant, personalized, and scalable support 24/7. At SofiLoft Technologies, we craft intelligent chatbot solutions that enhance user experience, automate routine queries, and improve operational efficiency. Leveraging state-of-the-art AI and natural language processing, our chatbots can understand complex queries, engage users seamlessly, and integrate with your existing systems.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether for customer support, lead generation, or internal automation, our flexible chatbot solutions are tailor-made to fit your specific business needs and industry demands.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-700">
                  Get In Touch
                </a>
                <a href="#" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-pink-500 to-pink-600">
                  Book A Consultation
                </a>
              </div>
            </div>
            <div className="md:w-5/12 flex justify-center pt-20">
              <img src={web2} alt="Chatbot Development" className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img src={web3} alt="Chatbot Solutions" className="max-w-sm w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proven <span className="text-pink-500 underline">Chatbot Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600">
              From customer support automation to lead generation, our chatbot solutions drive results across industries.
            </p>
            <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md">
              Connect With Experts Now!
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Chatbot Development Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 h-[320px] flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our chatbots serve retail, healthcare, finance, travel, education, real estate, telecom, insurance, and logistics sectors.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryServices.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl">
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions About Chatbot Development
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border ${openIndex === index ? "bg-blue-700 text-white" : "bg-white"}`}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && <div className="px-6 pb-4">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChatbotDevelopment;
