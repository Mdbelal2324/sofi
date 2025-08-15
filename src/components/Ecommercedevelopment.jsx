// EcommerceDevelopment.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png";
import porto1 from "../assets/image/E-commerce.png";

const EcommerceDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaShoppingCart size={28} />,
      title: "Custom E-Commerce Store Development",
      description:
        "We design and develop fully customized online stores tailored to your brand, products, and customers.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "E-Commerce Consulting",
      description:
        "Our experts help you choose the right platform, features, and strategies to grow your online business.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      title: "Marketplace Development",
      description:
        "Launch a scalable marketplace platform where multiple vendors can sell products with ease.",
      color: "bg-red-500",
    },
  ];

  const industryServices = [
    {
      title: "Fashion & Apparel",
      img: web4,
      desc: "Stylish, user-friendly online fashion stores with easy browsing and checkout.",
    },
    {
      title: "Electronics",
      img: web4,
      desc: "Secure platforms for selling gadgets, accessories, and home electronics.",
    },
    {
      title: "Grocery",
      img: web4,
      desc: "Custom grocery ordering apps with delivery tracking and subscription models.",
    },
    {
      title: "Health & Wellness",
      img: web4,
      desc: "E-commerce solutions for selling health products, supplements, and wellness services.",
    },
    {
      title: "Furniture",
      img: web4,
      desc: "Feature-rich furniture store platforms with 3D previews and customization options.",
    },
    {
      title: "Books & Education",
      img: web4,
      desc: "Online bookstores and digital product delivery platforms.",
    },
  ];

  const techStacks = [
    {
      category: "E-Commerce Platforms",
      items: [
        { name: "Shopify", img: "/images/shopify.png" },
        { name: "Magento", img: "/images/magento.png" },
        { name: "WooCommerce", img: "/images/woocommerce.png" },
        { name: "BigCommerce", img: "/images/bigcommerce.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", img: "/images/nodejs.png" },
        { name: "PHP", img: "/images/php.png" },
        { name: "Python", img: "/images/python.png" },
        { name: "Java", img: "/images/java.png" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", img: "/images/mysql.png" },
        { name: "MongoDB", img: "/images/mongodb.png" },
        { name: "PostgreSQL", img: "/images/postgresql.png" },
        { name: "Firebase", img: "/images/firebase.png" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How Much Does E-Commerce Development Cost?",
      answer:
        "Costs depend on features, platform, and complexity. A basic store can start from $5,000, while advanced platforms may exceed $50,000.",
    },
    {
      question: "Which E-Commerce Platform Should I Choose?",
      answer:
        "It depends on your budget, scalability needs, and features. We work with Shopify, Magento, WooCommerce, and custom solutions.",
    },
    {
      question: "Can You Integrate Payment Gateways?",
      answer:
        "Yes, we integrate secure gateways like PayPal, Stripe, Razorpay, and more.",
    },
    {
      question: "Do You Provide Ongoing Store Maintenance?",
      answer:
        "Yes, we offer full maintenance, updates, and support for your online store.",
    },
  ];

  return (
    <div id="ecommercedevelopment">

      {/* HERO SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-28 flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Professional{" "}
              <span className="text-red-500 relative">
                E-Commerce Development
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></span>
              </span>{" "}
              Services
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We build robust and scalable online stores that help your business thrive in the digital marketplace.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From single-vendor websites to multi-vendor marketplaces, we bring your e-commerce vision to life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700">
                Get In Touch
              </a>
              <a href="#" className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-pink-500 to-pink-600">
                Book A Consultation
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-5/12 flex justify-center">
            <img src={web2} alt="E-Commerce Development" className="rounded-lg object-contain" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="text-pink-500">E-Commerce</span> Solutions
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Comprehensive services to launch and scale your online store successfully.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 h-[300px] flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY SECTION */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            E-Commerce for All Industries
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            No matter your niche, we create online stores that attract customers and drive sales.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryServices.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Tech Stacks for E-Commerce
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center bg-black rounded-lg p-3">
                    <img src={item.img} alt={item.name} className="w-10 h-10 object-contain mb-2" />
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
          FAQs on E-Commerce Development
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border ${openIndex === index ? "bg-blue-700 text-white" : "bg-white"} transition-all duration-300`}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
              </button>
              {openIndex === index && <div className="px-6 pb-4">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopment;
