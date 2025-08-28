// CrmSolutions.jsx
import React, { useState } from "react";
import { FaUsers, FaCogs, FaChartLine } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";

import web5 from "../assets/image/Healthcare.jpg";
import retail from "../assets/image/Retail.jpg";
import edu from "../assets/image/Education.jpg";
import ecom from "../assets/image/Retail1.jpg";
import state from "../assets/image/State.jpg";
import tele from "../assets/image/Tele.jpg";
import travel3 from "../assets/image/Travel3.jpg"
import manfactur1 from "../assets/image/manufactur1.jpg";
import finance2 from "../assets/image/finance2.jpg";





const CrmSolutions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Updated CRM Services
  const services = [
    {
      id: 1,
      icon: <FaUsers size={28} />,
      title: "Custom CRM Development",
      description:
        "We build bespoke CRM systems tailored to your specific business processes, enabling personalized customer management, efficient sales tracking, and enhanced data analysis.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaCogs size={28} />,
      title: "CRM Implementation",
      description:
        "Seamlessly deploy your CRM solution with expert implementation services, integration, workflow configuration, and team training.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaChartLine size={28} />,
      title: "CRM System Integration",
      description:
        "Connect your CRM with ERP, marketing automation, and communication tools for unified data flow and streamlined processes.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCogs size={28} />,
      title: "CRM Consulting",
      description:
        "Leverage our CRM consulting expertise to strategize, assess current systems, identify gaps, and plan solutions aligned with industry best practices.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaUsers size={28} />,
      title: "CRM Customization",
      description:
        "Enhance your CRM with tailored features, workflows, and UI. We customize Salesforce, Microsoft Dynamics, and HubSpot for your needs.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCogs size={28} />,
      title: "CRM Migration & Upgrade",
      description:
        "Transition seamlessly to a new CRM or upgrade your existing system with secure migration and optimized features.",
      color: "bg-pink-500",
    },
    {
      id: 7,
      icon: <FaCogs size={28} />,
      title: "CRM Maintenance & Support",
      description:
        "Keep your CRM system secure and efficient with updates, troubleshooting, monitoring, and long-term support.",
      color: "bg-indigo-500",
    },
    {
      id: 8,
      icon: <FaChartLine size={28} />,
      title: "CRM Module Development",
      description:
        "Add specific functionalities to your CRM with custom modules for automation, reporting, and better user experience.",
      color: "bg-orange-500",
    },
    {
      id: 9,
      icon: <FaUsers size={28} />,
      title: "Standard CRM Software Customization",
      description:
        "We tailor Salesforce, Dynamics, and Zoho CRM to perfectly fit your business processes and strategic objectives.",
      color: "bg-teal-500",
    },
  ];

  // ✅ Updated Industry-Specific Solutions
  const industryServices = [
    {
      title: "Retail",
      img: retail,
      desc: "Enhance customer loyalty and personalize marketing efforts with CRM tailored for retail businesses.",
    },
    {
      title: "Healthcare",
      img: web5,
      desc: "Streamline patient management, appointment scheduling, and communication with secure CRM systems.",
    },
    {
      title: "Financial Services",
      img: finance2,
      desc: "Secure CRM solutions for banking, insurance, and finance with automated workflows and compliance support.",
    },
    {
      title: "Manufacturing",
      img: manfactur1,
      desc: "Optimize supply chain, order tracking, and client interactions with CRM designed for manufacturing.",
    },
    {
      title: "Education",
      img: edu,
      desc: "Improve student recruitment, engagement, and alumni relations with CRM for educational institutions.",
    },
    {
      title: "Hospitality & Travel",
      img: travel3,
      desc: "Streamline bookings and enhance guest experiences with CRM for hotels, travel, and tourism.",
    },
    {
      title: "Real Estate",
      img: state,
      desc: "Boost property sales, manage leads, and automate marketing with CRM tailored for real estate.",
    },
    {
      title: "E-commerce",
      img: ecom,
      desc: "Create seamless online shopping experiences with CRM for customer data, campaigns, and personalization.",
    },
    {
      title: "Telecommunications",
      img: tele,
      desc: "Manage large customer bases with telecom-specific CRM for subscriptions, support, and issue tracking.",
    },
  ];

  // ✅ Tech Stacks (same rakha but heading/content aligned)
  const techStacks = [
    {
      category: "CRM Platforms",
      items: [
        { name: "Salesforce", img: "/images/salesforce.png" },
        { name: "Zoho CRM", img: "/images/zoho.png" },
        { name: "HubSpot", img: "/images/hubspot.png" },
        { name: "Microsoft Dynamics", img: "/images/dynamics.png" },
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

  // ✅ Updated FAQs
  const faqs = [
    {
      question: "What is CRM development and why is it important for my business?",
      answer:
        "CRM development involves creating customized systems to manage customer relationships efficiently. It improves sales, customer service, and workflows.",
    },
    {
      question: "How much does custom CRM development cost?",
      answer:
        "Costs vary between $5,000 and $40,000 depending on complexity, features, and integrations. We provide tailored quotes.",
    },
    {
      question: "How long does it take to develop a custom CRM system?",
      answer:
        "Typically, 8 to 20 weeks depending on customization, integrations, and testing requirements.",
    },
    {
      question: "Can you integrate CRM with existing business tools?",
      answer:
        "Yes, we integrate CRMs with ERP, marketing automation, customer support, and third-party tools.",
    },
    {
      question: "Do you customize existing CRM platforms like Salesforce or HubSpot?",
      answer:
        "Absolutely. We tailor Salesforce, Microsoft Dynamics, Zoho, and HubSpot to your workflows.",
    },
    {
      question: "What support do you provide after deployment?",
      answer:
        "We offer maintenance, monitoring, troubleshooting, updates, and user training for smooth operations.",
    },
    {
      question: "Can CRM help improve sales and marketing efficiency?",
      answer:
        "Yes, CRM automates lead tracking, segmentation, and campaign management to boost conversions.",
    },
    {
      question: "Is my data safe with custom CRM solutions?",
      answer:
        "We ensure encryption, access controls, compliance, and regular audits for complete data security.",
    },
    {
      question: "Can I migrate data from my old CRM to a new system?",
      answer:
        "Yes, we provide secure CRM migration services with no data loss and minimal disruption.",
    },
    {
      question: "How do I choose the right CRM solution for my business?",
      answer:
        "Our experts analyze your processes, goals, and budget to recommend or build the ideal CRM solution.",
    },
  ];

  return (
    <div id="crmsolutions">
      {/* HERO SECTION */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Customized{" "}
                <span className="relative text-red-500">
                  CRM Development
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                </span>{" "}
                Services
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                At SofiLoft Technologies, we specialize in customized CRM development and implementation services that transform how businesses manage relationships and streamline operations.
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
              <img src={web2} alt="CRM Solutions" className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img src={web3} alt="CRM Services" className="max-w-sm w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proven <span className="text-pink-500 underline">CRM Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600">
              Our tailored CRM solutions help you enhance customer engagement, improve sales workflows, and boost overall efficiency.
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
            Our <span className="text-pink-500">CRM Development</span> Services
          </h2>
          <p className="text-gray-600 mt-3">
            Transform your business operations with custom CRM development solutions that drive growth.
          </p>
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
            Industry-Specific CRM Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We provide CRM systems designed for retail, healthcare, finance, manufacturing, education, hospitality, real estate, e-commerce, and telecommunications.
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
          Latest Tech Stacks for CRM Development
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
          Frequently Asked Questions
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

export default CrmSolutions;
