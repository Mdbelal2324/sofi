// AiAgentsDevelopment.jsx
import React, { useState } from "react";
import { FaRobot, FaCogs, FaChartLine } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";

const AiAgentsDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ AI Agents Services
  const services = [
    {
      id: 1,
      icon: <FaRobot size={28} />,
      title: "Virtual Customer Assistants",
      description:
        "We create AI agents that act as virtual customer service representatives, capable of handling inquiries, resolving issues, and providing personalized assistance 24/7 across web, mobile, and messaging platforms.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaCogs size={28} />,
      title: "Autonomous Workflow Automation",
      description:
        "Our AI agents automate complex business workflows, managing tasks such as appointment scheduling, document processing, and multi-step approvals, reducing manual effort and increasing operational efficiency.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaChartLine size={28} />,
      title: "Intelligent Data Analysis Agents",
      description:
        "AI agents analyze vast datasets to uncover insights, detect patterns, and generate actionable reports. These agents support decision-making by delivering real-time analytics tailored to your business goals.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCogs size={28} />,
      title: "Personalized Recommendation Agents",
      description:
        "Building on user data and behavior, these AI agents provide personalized product, content, or service recommendations, enhancing customer engagement and boosting sales conversions.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaRobot size={28} />,
      title: "Monitoring and Alerting Agents",
      description:
        "We develop AI agents that continuously monitor systems, processes, or market conditions, sending alerts and triggering automated responses to mitigate risks and maintain business continuity.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCogs size={28} />,
      title: "Conversational AI Agents",
      description:
        "Our conversational agents conduct natural, multi-turn dialogues with users, enabling tasks like support, information retrieval, and transactional interactions with human-like understanding.",
      color: "bg-pink-500",
    },
    {
      id: 7,
      icon: <FaCogs size={28} />,
      title: "Predictive Maintenance Agents",
      description:
        "AI agents forecast equipment failures and maintenance needs before issues occur, allowing proactive intervention that minimizes downtime and extends asset life in manufacturing and other sectors.",
      color: "bg-indigo-500",
    },
    {
      id: 8,
      icon: <FaChartLine size={28} />,
      title: "Compliance and Risk Management Agents",
      description:
        "These AI agents monitor compliance requirements, audit data, and flag potential risks or irregularities automatically, helping businesses adhere to regulations and avoid costly penalties.",
      color: "bg-orange-500",
    },
    {
      id: 9,
      icon: <FaRobot size={28} />,
      title: "Decision Support Agents",
      description:
        "We develop AI agents that assist executives and managers by providing scenario analysis, forecasting, and evidence-based recommendations, improving the quality and speed of key business decisions.",
      color: "bg-teal-500",
    },
  ];

  // ✅ Industry-Specific AI Solutions
  const industryServices = [
    {
      title: "Healthcare",
      img: web4,
      desc: "AI agents assist with patient data analysis, appointment scheduling, treatment recommendations, and real-time monitoring, improving clinical decision-making and operational workflows.",
    },
    {
      title: "Finance",
      img: web4,
      desc: "Our AI agents automate fraud detection, portfolio management, compliance monitoring, and customer engagement, enhancing security and client service in financial institutions.",
    },
    {
      title: "Retail & E-commerce",
      img: web4,
      desc: "We develop agents that personalize shopping experiences, predict inventory demands, manage promotions, and automate customer service to increase satisfaction and sales.",
    },
    {
      title: "Manufacturing",
      img: web4,
      desc: "AI agents monitor production lines, predict maintenance needs, optimize supply chains, and automate quality control, boosting efficiency and reducing operational costs.",
    },
    {
      title: "Education",
      img: web4,
      desc: "Agents support personalized learning by tracking student progress, managing assignments, and providing tutoring assistance, enriching educational outcomes.",
    },
    {
      title: "Logistics & Transportation",
      img: web4,
      desc: "Our AI agents optimize route planning, monitor fleet status, automate scheduling, and predict delivery delays, improving supply chain reliability and reducing costs.",
    },
    {
      title: "Telecommunications",
      img: web4,
      desc: "AI agents enhance network management, predict outages, automate customer interactions, and analyze user data to improve service quality and customer retention.",
    },
    {
      title: "Real Estate",
      img: web4,
      desc: "Agents assist with property valuation analysis, lead qualification, market trend monitoring, and customer interactions, accelerating sales and service quality.",
    },
    {
      title: "Marketing & Advertising",
      img: web4,
      desc: "We deploy agents that segment audiences, personalize campaigns, monitor brand sentiment, and automate customer engagement through dynamic, AI-driven strategies.",
    },
  ];

  // ✅ Tech Stacks (placeholder, no new content provided)
  const techStacks = [
    {
      category: "AI Platforms",
      items: [
        { name: "OpenAI", img: "/images/openai.png" },
        { name: "Google AI", img: "/images/googleai.png" },
        { name: "IBM Watson", img: "/images/watson.png" },
        { name: "Azure AI", img: "/images/azure.png" },
      ],
    },
    {
      category: "Integration Tools",
      items: [
        { name: "Zapier", img: "/images/zapier.png" },
        { name: "MuleSoft", img: "/images/mulesoft.png" },
        { name: "REST API", img: "/images/restapi.png" },
        { name: "GraphQL", img: "/images/graphql.png" },
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

  // ✅ FAQs
  const faqs = [
    {
      question: "What are AI agents?",
      answer:
        "AI agents are intelligent software programs that autonomously perform tasks, learn from data, and interact naturally with users or systems.",
    },
    {
      question: "How can AI agents benefit my business?",
      answer:
        "They automate repetitive tasks, provide real-time insights, enhance customer interactions, and improve decision-making, increasing productivity and competitiveness.",
    },
    {
      question: "Are AI agents different from chatbots?",
      answer:
        "Yes, AI agents are more autonomous and capable of complex workflows and decision-making, whereas chatbots primarily handle conversational interactions.",
    },
    {
      question: "What industries can use AI agents?",
      answer:
        "AI agents are applicable across healthcare, finance, retail, manufacturing, education, logistics, telecom, real estate, and marketing sectors.",
    },
    {
      question: "Can AI agents integrate with existing systems?",
      answer:
        "Absolutely, we design AI agents to connect seamlessly with your current IT infrastructure and business applications.",
    },
    {
      question: "How long does it take to develop an AI agent?",
      answer:
        "Development timelines vary based on complexity but typically range from weeks to several months.",
    },
    {
      question: "Are AI agents customizable?",
      answer:
        "Yes, each AI agent is tailored to meet specific business needs and operational goals.",
    },
    {
      question: "Do you provide ongoing support after AI agent deployment?",
      answer:
        "We offer continuous monitoring, maintenance, and performance optimization to ensure your AI agents operate effectively.",
    },
    {
      question: "How secure are AI agent solutions?",
      answer:
        "Security is integral; we follow best practices for data protection, privacy compliance, and secure system integrations.",
    },
    {
      question: "How do I get started with AI agents for my business?",
      answer:
        "Start with a consultation to explore your needs. We then conduct feasibility studies, design strategies, and develop customized AI agent solutions aligned with your goals.",
    },
  ];

  return (
    <div id="aiagentsdevelopment">
      {/* HERO SECTION */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                AI Agents Solutions by <span className="text-red-500">SofiLoft Technologies</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                AI agents are intelligent software programs designed to perform tasks autonomously, making business operations smarter and more efficient. At SofiLoft Technologies, we develop AI agents that understand, learn, and interact with complex environments to enhance decision-making, automate workflows, and improve customer experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Powered by advanced machine learning and cognitive technologies, our AI agents adapt to evolving data and user behavior, helping businesses unlock new levels of productivity and innovation. Whether you need virtual assistants for customer engagement, automated process managers, or intelligent data analysts, we deliver robust AI agent solutions tailored specifically to your industry and requirements.
              </p>
            </div>
            <div className="md:w-5/12 flex justify-center pt-20">
              <img src={web2} alt="AI Agents Development" className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img src={web3} alt="AI Agents Solutions" className="max-w-sm w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proven <span className="text-pink-500 underline">AI Agents Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600">
              Our AI agents solutions help automate workflows, enhance decision-making, and boost business efficiency.
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
            Our <span className="text-pink-500">AI Agents</span> Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
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
          Latest Tech Stacks for AI Agents
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
          Frequently Asked Questions About AI Agents
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

export default AiAgentsDevelopment;
