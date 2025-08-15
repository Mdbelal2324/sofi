// ChatbotDevelopment.jsx
import React, { useState } from "react";
import { FaRobot, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png";
import porto1 from "../assets/image/E-commerce.png";

const ChatbotDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaRobot size={28} />,
      title: "Custom Chatbot Application Development",
      description:
        "From simple FAQ bots to advanced AI-powered assistants, we design and develop chatbots tailored to your business needs.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "Chatbot Strategy & Consulting",
      description:
        "Get professional guidance on choosing the right chatbot type, platform, and technology stack for maximum ROI.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      title: "AI & NLP Integration",
      description:
        "Integrate Natural Language Processing and AI models to make your chatbot smart, interactive, and context-aware.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCode size={28} />,
      title: "Multichannel Chatbot Deployment",
      description:
        "Deploy chatbots on websites, mobile apps, WhatsApp, Messenger, and other popular channels.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaCode size={28} />,
      title: "Chatbot Maintenance & Optimization",
      description:
        "We ensure your chatbot stays updated, bug-free, and continuously improves based on user interactions.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCode size={28} />,
      title: "E-commerce Chatbots",
      description:
        "Automate sales, product recommendations, and customer support with smart retail-focused chatbots.",
      color: "bg-pink-500",
    },
  ];

  const industryServices = [
    {
      title: "E-commerce",
      img: web4,
      desc: "Automate product recommendations, order tracking, and customer support with AI-powered chatbots.",
    },
    {
      title: "Healthcare",
      img: web4,
      desc: "Provide instant patient support, appointment scheduling, and symptom checking through chatbots.",
    },
    {
      title: "Education",
      img: web4,
      desc: "Offer interactive learning assistants, quiz bots, and student support systems.",
    },
    {
      title: "Travel & Hospitality",
      img: web4,
      desc: "Assist travelers with booking, itinerary suggestions, and instant customer support.",
    },
    {
      title: "Finance & Banking",
      img: web4,
      desc: "Enhance customer experience with secure, instant banking support via chatbots.",
    },
    {
      title: "Food & Restaurant",
      img: web4,
      desc: "Enable easy food ordering, reservations, and menu navigation through chatbots.",
    },
  ];

  const techStacks = [
    {
      category: "AI & NLP",
      items: [
        { name: "Dialogflow", img: "/images/dialogflow.png" },
        { name: "Rasa", img: "/images/rasa.png" },
        { name: "Wit.ai", img: "/images/witai.png" },
        { name: "OpenAI GPT", img: "/images/openai.png" },
      ],
    },
    {
      category: "Platforms",
      items: [
        { name: "WhatsApp API", img: "/images/whatsapp.png" },
        { name: "Messenger", img: "/images/messenger.png" },
        { name: "Slack", img: "/images/slack.png" },
        { name: "Telegram", img: "/images/telegram.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", img: "/images/nodejs.png" },
        { name: "Python", img: "/images/python.png" },
        { name: "Flask", img: "/images/flask.png" },
        { name: "FastAPI", img: "/images/fastapi.png" },
      ],
    },
    {
      category: "Integration",
      items: [
        { name: "REST API", img: "/images/restapi.png" },
        { name: "GraphQL", img: "/images/graphql.png" },
        { name: "Zapier", img: "/images/zapier.png" },
        { name: "Twilio", img: "/images/twilio.png" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", img: "/images/react.png" },
        { name: "Vue.js", img: "/images/vue.png" },
        { name: "Angular", img: "/images/angular.png" },
        { name: "HTML/CSS", img: "/images/htmlcss.png" },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS", img: "/images/aws.png" },
        { name: "Google Cloud", img: "/images/googlecloud.png" },
        { name: "Azure", img: "/images/azure.png" },
        { name: "Heroku", img: "/images/heroku.png" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How much does chatbot development cost?",
      answer:
        "The cost depends on complexity, AI integration, and platform support. Basic bots may start at $1,000, while advanced AI chatbots can cost significantly more.",
    },
    {
      question: "How long does it take to build a chatbot?",
      answer:
        "A simple chatbot may take 2-4 weeks, while advanced AI-driven bots could take 2-3 months.",
    },
    {
      question: "Can chatbots be integrated with existing systems?",
      answer:
        "Yes, we can integrate chatbots with CRMs, ERPs, payment gateways, and other systems.",
    },
    {
      question: "Do you provide multilingual chatbot development?",
      answer:
        "Yes, we can build chatbots that communicate in multiple languages for a global audience.",
    },
  ];

  return (
    <div id="chatbotdevelopment">
      {/* FIRST SECTION */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Custom{" "}
                <span className="relative text-red-500">
                  Chatbot Development
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                </span>{" "}
                Company
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Build smart, interactive, and AI-driven chatbots to enhance your customer experience and automate communication.
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
              From customer support automation to lead generation, our chatbot solutions drive results.
            </p>
            <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md">
              Connect With Experts Now!
            </button>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Top <span className="text-pink-500">Chatbot Development</span> Services
          </h2>
          <p className="text-gray-600 mt-3">
            Enhance customer engagement with our expert chatbot development services.
          </p>
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

      {/* FOURTH SECTION */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chatbot Development for All Industries
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our chatbots serve industries like e-commerce, healthcare, education, and more.
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

      {/* TECH STACK SECTION */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Tech Stacks for Chatbot Development
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center bg-black rounded-lg p-3">
                    <img src={item.img} alt={item.name} className="w-10 h-10 mb-2" />
                    <p className="text-white text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          FAQs on Chatbot Development
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
