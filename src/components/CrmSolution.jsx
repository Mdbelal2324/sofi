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
import micro from "../assets/image/micro.png";
import sales from "../assets/image/sales.png";
import hub from "../assets/image/hub.png";
import zoho from "../assets/image/zoho.png";
import mule from "../assets/image/mule.png";
import zap from "../assets/image/zap.png";
import rest from "../assets/image/rest2.png";
import gap from "../assets/image/grap.png";
import node from "../assets/image/node2.png";
import python from "../assets/image/python2.png";
import flask  from "../assets/image/flask.png";
import fast from "../assets/image/fast.png";
import  react from "../assets/image/React.png";






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
        "We build bespoke CRM systems tailored to your specific business processes, enabling personalized customer management, efficient sales tracking, and enhanced data analysis. Our custom CRMs adapt as your business grows, providing flexibility and competitive advantage.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaCogs size={28} />,
      title: "CRM Implementation",
      description:
        "Seamlessly deploy your CRM solution with expert implementation services. We ensure smooth adoption by integrating your CRM with existing tools, configuring workflows, and training your team for maximum productivity from day one.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaChartLine size={28} />,
      title: "CRM System Integration",
      description:
        "Connect your CRM with third-party applications such as ERP, marketing automation, and communication tools. Our integration services enable unified data flow and streamlined business processes across platforms, boosting operational efficiency.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCogs size={28} />,
      title: "CRM Consulting",
      description:
        "Leverage our CRM consulting expertise to strategize and plan the best customer relationship management approach for your business. We assess your current systems, identify gaps, and recommend solutions that align with your goals and industry best practices.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaUsers size={28} />,
      title: "CRM Customization",
      description:
        "Enhance your CRM’s functionality with tailored features, workflows, and user interfaces. We customize standard CRM platforms like Salesforce, Microsoft Dynamics, and HubSpot to meet your unique requirements and improve user adoption.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCogs size={28} />,
      title: "CRM Migration & Upgrade",
      description:
        "Transition effortlessly to a new CRM or upgrade your existing system with minimal disruption. Our migration services ensure secure data transfer, system optimization, and feature-enhanced upgrades that keep your business connected and competitive.",
      color: "bg-pink-500",
    },
    {
      id: 7,
      icon: <FaCogs size={28} />,
      title: "CRM Maintenance & Support",
      description:
        "Keep your CRM system secure, efficient, and up-to-date with ongoing maintenance and support. We provide regular updates, troubleshooting, performance monitoring, and user support to ensure your CRM delivers consistent value.",
      color: "bg-indigo-500",
    },
    {
      id: 8,
      icon: <FaChartLine size={28} />,
      title: "CRM Module Development",
      description:
        "Add specific functionalities to your CRM by developing custom modules tailored to unique business needs. Our modular approach allows scalable enhancements that improve process automation, reporting, and user experience.",
      color: "bg-orange-500",
    },
    {
      id: 9,
      icon: <FaUsers size={28} />,
      title: "Standard CRM Software Customization",
      description:
        "We tailor popular CRM solutions like Salesforce, Microsoft Dynamics, and Zoho CRM to fit your business processes perfectly, enhancing usability and aligning features with your strategic objectives for better customer management.",
      color: "bg-teal-500",
    },
  ];

  // ✅ Updated Industry-Specific Solutions
  const industryServices = [
    {
      title: "Retail",
      img: retail,
      desc: "Enhance customer loyalty and personalize marketing efforts with CRM tailored for retail businesses. Our solutions help manage customer data, track purchase histories, and automate promotions, enabling you to deliver targeted campaigns and improve sales performance.",
    },
    {
      title: "Healthcare",
      img: web5,
      desc: "Streamline patient management and communication using specialized CRM systems for healthcare providers. These solutions support appointment scheduling, patient records, and follow-up reminders while ensuring compliance with healthcare regulations and data security standards.",
    },
    {
      title: "Financial Services",
      img: finance2,
      desc: "Manage client relationships and regulatory compliance with CRM solutions customized for banking, insurance, and finance sectors. Our CRMs enable secure data handling, automated workflows, and detailed reporting to improve customer service and operational efficiency.",
    },
    {
      title: "Manufacturing",
      img: manfactur1,
      desc: "Optimize supply chain and customer interactions with CRM systems designed for manufacturing businesses. Track orders, manage client accounts, and coordinate sales and support teams efficiently for better business continuity and growth.",
    },
    {
      title: "Education",
      img: edu,
      desc: "Improve student recruitment, engagement, and alumni relations with education-focused CRM solutions. Our systems help educational institutions track inquiries, manage communications, and streamline administrative tasks for enhanced operational effectiveness.",
    },
    {
      title: "Hospitality & Travel",
      img: travel3,
      desc: "Enhance guest experience and streamline bookings with CRM tailored for the hospitality and travel industry. Manage customer profiles, preferences, and loyalty programs to deliver personalized services and increase repeat business."
    },
    {
      title: "Real Estate",
      img: state,
      desc: "Boost property sales and client relationships with CRM designed for real estate professionals. Track leads, manage listings, and automate marketing efforts to close deals faster and nurture lasting client connections.",
    },
    {
      title: "E-commerce",
      img: ecom,
      desc: "Create seamless customer experiences using CRM systems designed for online retailers. Manage customer data, automate marketing campaigns, and provide personalized service that drives engagement and increases sales..",
    },
    {
      title: "Telecommunications",
      img: tele,
      desc: "Manage large customer bases with telecom-specific CRM solutions focused on service personalization, issue tracking, and subscription management. Improve customer satisfaction and reduce churn with streamlined communication and support.",
    },
  ];

  // ✅ Tech Stacks (same rakha but heading/content aligned)
  const techStacks = [
    {
      category: "CRM Platforms",
      items: [
        { name: "Salesforce", img:sales},
        { name: "Zoho CRM", img:zoho},
        { name: "HubSpot", img:hub},
        { name: "Microsoft Dynamics", img: micro},
      ],
    },
    {
      category: "Integration Tools",
      items: [
        { name: "Zapier", img:zap},
        { name: "MuleSoft", img:mule },
        { name: "REST API", img:rest  },
        { name: "GraphQL", img:gap },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", img:node },
        { name: "Python", img:python},
        { name: "Flask", img:flask },
        { name: "FastAPI", img:fast},
      ],
    },
    // {
    //   category: "Frontend",
    //   items: [
    //     { name: "React", img: react},
    //     { name: "Vue.js", img: "/images/vue.png" },
    //     { name: "Angular", img: "/images/angular.png" },
    //     { name: "HTML/CSS", img: "/images/htmlcss.png" },
    //   ],
    // },
    // {
    //   category: "Cloud",
    //   items: [
    //     { name: "AWS", img: "/images/aws.png" },
    //     { name: "Google Cloud", img: "/images/googlecloud.png" },
    //     { name: "Azure", img: "/images/azure.png" },
    //     { name: "Heroku", img: "/images/heroku.png" },
    //   ],
    // },
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
      <section className="nft-main-banner-sec pt-24 pb-12">
  <div className="container mx-auto px-6 md:px-28">
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Customized{" "}
          <span className="relative text-red-500">
            CRM Development
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
          </span>{" "}
          Services
        </h1>
        <p className="text-lg text-gray-600 leading-8 mb-6 font-outfit">
          At SofiLoft Technologies, we specialize in customized CRM development and implementation services that transform how businesses manage relationships and streamline operations. Our tailored CRM solutions help you enhance customer engagement, improve sales workflows, and boost overall efficiency. Whether you need a fully custom platform or want to optimize an existing system, we deliver scalable, secure, and user-friendly CRM software designed to meet your unique business goals.
        </p>
        <div className="flex gap-4">
          <a
            href="/ContactForm"
            className="px-6 py-3 rounded-md text-white font-medium bg-orange-500 hover:to-pink-700 transition"
          >
            Book A Consultation
          </a>
        </div>
      </div>

      {/* Right Image (hidden on mobile) */}
      <div className="hidden md:flex md:w-5/12 justify-center pt-20">
        <img
          src={web2}
          alt="CRM Solutions"
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  </div>
</section>


    
     

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">CRM Development</span> Services
          </h2>
          <p className="text-gray-600 mt-3">
            Transform your business operations with custom CRM development solutions that drive growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-[#fbfbfb] shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="leading-[28px] text-[#616b80]">{service.description}</p>
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
                    <img src={item.img} alt={item.name} className="w-14 h-14 mb-2" />
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
