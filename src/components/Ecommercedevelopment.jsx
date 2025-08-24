// EcommerceDevelopment.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web4 from "../assets/image/web3.png";

import java from "../assets/image/java.png";
import php from "../assets/image/php3.png";
import node from "../assets/image/node2.png";
import python from "../assets/image/python2.png";
import post from "../assets/image/post.png";
import fire from "../assets/image/fire.png";
import db from "../assets/image/db.png";
import my from "../assets/image/my.png";

const EcommerceDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaShoppingCart size={28} />,
      title: "E-Commerce Web Design & Development",
      description:
        "We create visually stunning and user-friendly e-commerce websites that attract customers and drive sales. Our designs focus on intuitive navigation, mobile responsiveness, fast loading times, and optimized checkout processes, creating seamless shopping experiences that convert visitors into loyal buyers.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "Mobile Commerce Development",
      description:
        "Capitalize on mobile shopping trends with custom mobile commerce apps and responsive sites. We develop mobile-optimized experiences that support secure payments, easy browsing, and personalized promotions, giving your customers convenience and flexibility anytime, anywhere.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      title: "E-Commerce Migration",
      description:
        "Upgrade or switch your online store platform effortlessly with our reliable e-commerce migration services. We ensure smooth data transfer, preserve SEO rankings, and implement new features with minimal downtime, allowing your business to stay competitive without losing customers.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCode size={28} />,
      title: "E-Commerce Integrations",
      description:
        "Enhance your e-commerce ecosystem by integrating third-party services such as payment gateways, CRM systems, inventory management, marketing tools, and analytics platforms. SofiLoft ensures seamless data flow and operational efficiency through custom integrations tailored to your needs.",
      color: "bg-green-600",
    },
    {
      id: 5,
      icon: <FaCode size={28} />,
      title: "Support & Maintenance",
      description:
        "Our ongoing support and maintenance services keep your e-commerce platform secure, updated, and performing optimally. From security patches to feature enhancements and troubleshooting, we ensure your store delivers a reliable shopping experience that supports your growth.",
      color: "bg-yellow-600",
    },
    {
      id: 6,
      icon: <FaCode size={28} />,
      title: "Payment Gateways Development",
      description:
        "We build robust, secure payment gateway integrations that support multiple payment methods, currencies, and compliance standards. Our solutions provide a smooth and trustworthy checkout process that increases customer confidence and reduces cart abandonment.",
      color: "bg-pink-600",
    },
  ];

  const industryServices = [
    {
      title: "Retail & Fashion",
      img: web4,
      desc: "Drive sales with beautifully designed e-commerce platforms tailored for retail and fashion brands. We support product showcases, size guides, personalized recommendations, and flash sales, helping your store stand out in a crowded market and deliver a superior shopping experience.",
    },
    {
      title: "Food and Beverage",
      img: web4,
      desc: "Enhance your food and beverage business with customized online ordering, menu management, and delivery tracking systems. Our e-commerce solutions include loyalty programs and targeted promotions that keep customers coming back for more.",
    },
    {
      title: "Healthcare & Wellness",
      img: web4,
      desc: "Enable easy browsing and secure purchasing of healthcare and wellness products online. Our e-commerce development addresses regulatory compliance, personal data security, and smooth UX for pharmacies, wellness brands, and medical equipment suppliers.",
    },
    {
      title: "Electronics & Technology",
      img: web4,
      desc: "Power your electronics store with feature-rich e-commerce platforms that highlight product specifications, reviews, and warranty options. We help you showcase complex catalogs in an organized and customer-friendly way to drive informed purchases.",
    },
    {
      title: "Home & Furniture",
      img: web4,
      desc: "Showcase your home and furniture collection through highly visual and interactive e-commerce websites and apps. Our solutions facilitate easy browsing, customization options, and seamless checkout to enhance customer satisfaction and boost sales.",
    },
    {
      title: "Sports & Fitness",
      img: web4,
      desc: "Offer a tailored shopping experience for sports equipment, fitness gear, and apparel. We create e-commerce stores that integrate detailed product info, customer reviews, and personalized recommendations to support healthy lifestyles and active communities.",
    },
    {
      title: "Beauty & Personal Care",
      img: web4,
      desc: "Build engaging online stores for beauty and personal care brands featuring rich media content, subscription services, product bundles, and customer reviews. Our platforms focus on immersive experiences to attract and retain loyal customers.",
    },
    {
      title: "Automotive Parts & Accessories",
      img: web4,
      desc: "Simplify the purchase of automotive parts with user-friendly e-commerce platforms that include detailed catalogs, fitment guides, and secure transactions. Our solutions help automotive businesses reach enthusiasts and service providers efficiently.",
    },
    {
      title: "Books & Media",
      img: web4,
      desc: "Create interactive e-commerce solutions for books, music, and media stores, with features like digital product previews, subscription services, and user ratings. We help businesses cater to diverse audiences with rich, engaging content.",
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
        { name: "Node.js", img: node},
        { name: "PHP", img: php },
        { name: "Python", img: python },
        { name: "Java", img: java },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", img: my },
        { name: "MongoDB", img: db },
        { name: "PostgreSQL", img: post },
        { name: "Firebase", img: fire },
      ],
    },
  ];

  const faqs = [
    {
      question: "What e-commerce development services do you provide?",
      answer:
        "We offer web design and development, mobile commerce apps, platform migration, third-party integrations, ongoing support, and secure payment gateway development.",
    },
    {
      question: "How much does it cost to build a custom e-commerce website?",
      answer:
        "Cost varies by project scope but typically ranges from $20,000 to $60,000 and above depending on features, design complexity, and integrations.",
    },
    {
      question: "How long does it take to develop an e-commerce platform?",
      answer:
        "Development usually takes 8 to 16 weeks, depending on project complexity, customization needs, and integration requirements.",
    },
    {
      question: "Can you migrate my e-commerce store to a new platform?",
      answer:
        "Yes, we provide seamless, secure migration services with data integrity and SEO preservation to minimize downtime and customer impact.",
    },
    {
      question: "Do you develop mobile commerce apps?",
      answer:
        "Absolutely. We build mobile-optimized websites and native/cross-platform apps to enhance your customers’ on-the-go shopping experiences.",
    },
    {
      question: "What payment gateways do you support?",
      answer:
        "We integrate a wide range of secure payment gateways including PayPal, Stripe, Square, Authorize.Net, and many others based on your business needs.",
    },
    {
      question: "Can you integrate third-party tools into my e-commerce site?",
      answer:
        "Yes, we integrate CRM systems, marketing tools, inventory management, shipping APIs, and analytics platforms for a unified business ecosystem.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, our maintenance services include security updates, bug fixes, performance optimization, and feature enhancements to keep your store competitive.",
    },
    {
      question: "Is my e-commerce website mobile-friendly?",
      answer:
        "All our e-commerce solutions are designed to be fully responsive and optimized for seamless mobile shopping across devices.",
    },
    {
      question: "How do you ensure the security of my e-commerce platform?",
      answer:
        "We prioritize security through SSL encryption, PCI compliance, secure payment integration, regular vulnerability assessments, and safe coding practices.",
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
              Professional {" "}
              <span className="text-red-500 relative">
                E-Commerce Development
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></span>
              </span>{" "}
              Services
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              SofiLoft Technologies offers comprehensive, professional e-commerce development services designed to help your business succeed in the competitive online marketplace. Whether you’re launching a new store or enhancing an existing platform, our custom e-commerce solutions deliver seamless shopping experiences, robust performance, and scalable growth—tailored to meet your unique business needs and customer expectations.
            </p>
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
            Our {" "}
            <span className="text-pink-500">E-Commerce</span> Development Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Comprehensive, reliable services to expertly launch and scale your online store successfully with seamless growth and enduring customer engagement.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 h-[320px] flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY SECTION */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Specific E-Commerce Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            No matter your niche or industry, we create powerful online stores that attract loyal customers and consistently drive impressive sales growth.
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
          Frequently Asked Questions
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
