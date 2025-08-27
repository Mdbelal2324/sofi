// AppDevelopment.jsx
import React, { useState } from "react";
import { FaMobileAlt, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web4 from "../assets/image/Healthcare.jpg";
import edu from "../assets/image/Education.jpg";
import restu from "../assets/image/Resturant.jpg"
import ecom from "../assets/image/Retail1.jpg";
import retail from "../assets/image/Retail.jpg";
import banking from "../assets/image/Banking.jpg";
import state from "../assets/image/State.jpg";
import treval from "../assets/image/Travel.jpg";


import native from "../assets/image/native.png"

import flutter from "../assets/image/flutter.png";
import swift from  "../assets/image/swift.png";
import kotlin from "../assets/image/kotlin.png";
import java from "../assets/image/java.png";
import php from "../assets/image/php3.png";
import node from "../assets/image/node2.png";
import python from "../assets/image/python2.png";
import post from "../assets/image/post.png";
import fire from "../assets/image/fire.png";
import db from "../assets/image/db.png";
import my from "../assets/image/my.png";







const AppDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SERVICES SECTION
  const services = [
    {
      id: 1,
      icon: <FaCode size={28} />,
      title: "Cross-Platform App Development",
      description:
        "We build powerful and efficient cross-platform mobile applications using frameworks like React Native and Flutter. This approach enables faster deployment and cost savings while ensuring a consistent and seamless user experience acroWe build powerful and efficient cross-platform mobile applications using frameworks like React Native and Flutter. This approach enables faster deployment and cost savings while ensuring a consistent and seamless user experience across both iOS and Android devices. Our solutions deliver near-native performance and high functionality, helping your business reach a wider audience through a single, unified app.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaMobileAlt size={28} />,
      title: "App Maintenance and Support",
      description:
        "Our dedicated app maintenance and support services ensure your mobile application remains secure, updated, and operates flawlessly over time. We continuously monitor performance, promptly fix bugs, provide feature upgrades, and maintain compatibility with the latest OS versionsOur dedicated app maintenance and support services ensure your mobile application remains secure, updated, and operates flawlessly over time. We continuously monitor performance, promptly fix bugs, provide feature upgrades, and maintain compatibility with the latest OS versions. This comprehensive care guarantees your app delivers a superior user experience, encouraging customer retention and long-term success..",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaUserTie size={28} />,
      title: "Prototyping and MVP Development",
      description:
        "Quickly validate your app idea with our prototyping and minimum viable product (MVP) development services. This iterative process reduces risks, saves time, and enables you to refine features before full-scale productionQuickly validate your app idea with our prototyping and minimum viable product (MVP) development services. We help you develop functional prototypes that allow early testing and user feedback collection. This iterative process reduces development risks, saves time and resources, and enables you to refine features before full-scale production, ultimately ensuring your app perfectly aligns with user needs and business goals..",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaMobileAlt size={28} />,
      title: "UI/UX Design for Mobile Apps",
      description:
        "Our expert designers craft visually appealing and user-friendly interfaces optimized specifically for mobile devices. We create apps that maximize user satisfaction and engagemenOur expert designers craft visually appealing and user-friendly interfaces optimized specifically for mobile devices. Focusing on intuitive navigation, responsive layouts, and engaging visuals, we create apps that maximize user satisfaction and engagement. By delivering outstanding UI/UX design, we help your app stand out in the crowded marketplace, promoting longer user sessions and higher retention rates.t.",
      color: "bg-green-600",
    },
    {
      id: 5,
      icon: <FaCode size={28} />,
      title: "E-commerce Mobile App Development",
      description:
        "Expand your retail business with tailor-made e-commerce mobile apps featuring secure payment gateways, easy product browsing, simplified checkout, and personalized recommendationsExpand your retail business with tailor-made e-commerce mobile apps featuring secure payment gateways, easy product browsing, simplified checkout, and personalized recommendations. Our custom apps provide seamless shopping experiences, helping you increase sales and build customer loyalty. We integrate targeted features like push notifications and discounts to engage users and boost repeat purchases effectively..",
      color: "bg-pink-600",
    },
    {
      id: 6,
      icon: <FaUserTie size={28} />,
      title: "Enterprise Mobile App Development",
      description:
        "SofiLoft creates scalable and secure enterprise mobile applications designed to improve business efficiency and productivity through dashboards, workflow automation, and analyticsSofiLoft creates scalable and secure enterprise mobile applications designed to improve business efficiency and productivity. Our apps include custom dashboards, workflow automation systems, real-time data analytics, and secure access controls. These tailored solutions empower organizations to streamline processes, enhance communication, and make informed decisions anytime and anywhere through mobile devices..",
      color: "bg-yellow-600",
    },
    {
      id: 7,
      icon: <FaMobileAlt size={28} />,
      title: "On-Demand App Development",
      description:
        "We develop comprehensive on-demand mobile applications for transportation, food delivery, and service industries with real-time tracking and secure payment integrationWe develop comprehensive on-demand mobile applications for transportation, food delivery, and service industries. Our apps feature real-time tracking, flexible and secure payment systems, and seamless communication between customers and providers. These user-friendly apps elevate customer convenience and satisfaction while offering service providers reliable tools for efficient management and growth..",
      color: "bg-indigo-600",
    },
    {
      id: 8,
      icon: <FaCode size={28} />,
      title: "IoT Mobile App Development",
      description:
        "Connect, monitor, and control IoT devices through custom-built mobile apps designed for smart homes, healthcare, and manufacturing industriesConnect, monitor, and control IoT devices through custom-built mobile applications designed for industries such as smart homes, healthcare, and manufacturing. We develop secure, intuitive apps that provide real-time device status, alerts, and remote control features—helping users interact effortlessly with their Internet of Things ecosystems and enhancing operational efficiency.",
      color: "bg-teal-600",
    },
    {
      id: 9,
      icon: <FaUserTie size={28} />,
      title: "Mobile App Testing and QA",
      description:
        "Our rigorous testing and quality assurance services ensure your mobile app operates flawlessly across devices with maximum security and performancConnect, monitor, and control IoT devices through custom-built mobile applications designed for industries such as smart homes, healthcare, and manufacturing. We develop secure, intuitive apps that provide real-time device status, alerts, and remote control features—helping users interact effortlessly with their Internet of Things ecosystems and enhancing operational efficiency.e.",
      color: "bg-gray-700",
    },
  ];

  // INDUSTRY SECTION
  const industryServices = [
    {
      title: "Healthcare",
      img: web4,
      desc: "Enhance patient care with telemedicine, appointment scheduling, and electronic health record apps. Secure, compliant, and efficient for hospitals and wellness centersEnhance patient care and efficiency with custom healthcare mobile apps that securely integrate telemedicine, appointment scheduling, and electronic health records. Our apps meet strict healthcare regulations while improving communication between patients and providers. This strengthens patient engagement, streamlines medical workflows, and elevates overall healthcare service delivery in clinics, hospitals, and wellness centers..",
    },
    {
      title: "Education",
      img: edu,
      desc: "Empower students and educators with interactive mobile learning platforms supporting virtual classrooms, course management, and progress trackingEmpower students and educators with interactive mobile learning platforms supporting virtual classrooms, course management, and progress tracking. Our custom apps facilitate engaging remote learning experiences that simplify collaboration, access to educational content, and administrative tasks. They are designed to meet the needs of modern education environments, enhancing both teaching effectiveness and learner outcomes..",
    },
    {
      title: "Food & Restaurant",
      img: restu,
      desc: "Transform your food business with apps featuring online ordering, real-time delivery tracking, table reservations, and loyalty program Transform your restaurant or food delivery business with mobile apps featuring online ordering, real-time delivery tracking, and table reservation systems. Our tailored solutions include menu management, loyalty program integration, and push notifications to enhance customer satisfaction, optimize order accuracy, and increase repeat business through seamless user experiences on mobile devices..",
    },
    {
      title: "Travel & Tours",
      img: treval,
      desc: "Captivate travelers with mobile apps offering booking, personalized itineraries, offline content access, and location-based recommendationsCaptivate travelers with mobile apps offering easy booking, personalized itineraries, offline content access, and location-based recommendations. Our apps improve customer engagement and brand loyalty by simplifying trip planning and fostering smooth communication. Designed for the travel industry, they provide practical tools for users and efficient management features for businesses..",
    },
    {
      title: "E-commerce",
      img: ecom,
      desc: "Boost your online retail presence with custom e-commerce mobile apps that feature secure payment gateways, intuitive navigation, wish lists, and targeted promotions. Our apps increase shopping convenience and customer retention through personalized push notifications. Analytics capabilities provide insights to optimize your marketing and sales strategies—helping you grow revenue in the competitive e-commerce space.",
    },
    {
      title: "Retail",
      img: retail,
      desc: "Strengthen retail customer engagement with mobile apps that include inventory management, real-time promotional offers, personalized product recommendations, and streamlined checkout processes. Our solutions integrate online and physical store experiences, enabling retailers to improve operational efficiency, increase sales conversions, and deliver superior shopping convenience to customers across platforms.",
    },
    {
      title: "Banking & Finance",
      img: banking,
      desc: "Build customer trust with secure mobile banking apps offering fund transfers, alerts, biometric authentication, and compliance with industry regulationsBuild customer trust and convenience with secure mobile banking apps offering fund transfers, account monitoring, alerts, and biometric authentication. Our apps comply with financial industry regulations while providing easy access to services anytime, anywhere. These secure, user-friendly platforms enhance client satisfaction, promote digital adoption, and foster long-term loyalty.",
    },
    {
      title: "Real Estate",
      img: state,
      desc: "Showcase properties effectively with interactive listings, virtual tours, search filters, and secure communication tools for agencies and Showcase properties effectively with mobile apps featuring interactive listings, virtual property tours, search filters, and secure contact forms. Our real estate solutions enhance user engagement, simplify client communication, and streamline lead generation. Designed for realtors and agencies, these apps speed up sales cycles and improve customer experience..",
    },
    {
      title: "Fantasy Apps",
      img: web4,
      desc: "Develop immersive fantasy sports apps with live scoring, player stats, community features, and real-time updates for an engaging experienceDevelop immersive fantasy sports and gaming apps with live scoring, comprehensive player statistics, social sharing features, and real-time updates. Our engaging designs combine interactive gameplay with community connectivity and personalized content, attracting and retaining users by delivering a dynamic and enjoyable fantasy sports experience on mobile devices..",
    },
  ];

  // TECH STACK (same structure, unchanged)
  const techStacks = [
    {
      category: "Mobile Frameworks",
      items: [
        { name: "React Native", img: native },
        { name: "Flutter", img: flutter},
        { name: "Swift", img: swift},
        { name: "Kotlin", img: kotlin },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", img: node },
        { name: "Python", img: python },
        { name: "Java", img: java },
        { name: "PHP", img: php},
      ],
  
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", img : my},
        { name: "MongoDB", img: db },
        { name: "Firebase", img: fire},
        { name: "PostgreSQL", img: post},
      ],
    },
  ];

  // FAQ SECTION
  const faqs = [
    {
      question: "What mobile app development services do you offer?",
      answer:
        "We provide native and cross-platform app development, UI/UX design, prototyping, MVP creation, enterprise apps, IoT integration, on-demand apps, e-commerce app development, and app maintenance.",
    },
    {
      question: "How much does mobile app development cost?",
      answer:
        "Cost depends on app complexity, platforms, and features, typically ranging from $3000 to $25,000+. We offer customized quotes based on your project requirements.",
    },
    {
      question: "How long does mobile app development take?",
      answer:
        "Development timelines vary from 8 to 20 weeks depending on complexity, including design, development, testing, and deployment phases.",
    },
    {
      question: "Can you develop apps for both iOS and Android?",
      answer:
        "Yes, we develop native iOS and Android apps as well as cross-platform solutions for broader reach and cost efficiency.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer full lifecycle support including updates, bug fixes, performance monitoring, and feature enhancements.",
    },
    {
      question: "Will my app be compatible with all device sizes?",
      answer:
        "Absolutely. We use responsive design and extensive testing to ensure compatibility across all devices and screen sizes.",
    },
    {
      question: "How do you ensure app security?",
      answer:
        "We implement encryption, secure authentication, regular audits, and follow best practices to protect data and user privacy.",
    },
    {
      question: "Can you integrate third-party APIs?",
      answer:
        "Yes, we integrate APIs including payment gateways, social media, analytics, and CRM tools to enhance app functionality.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "We use Swift, Objective-C for iOS; Kotlin, Java for Android; and React Native, Flutter for cross-platform development.",
    },
    {
      question: "How do you conduct testing and quality assurance?",
      answer:
        "Our QA team performs rigorous functional, usability, security, and performance testing to ensure a smooth, bug-free user experience before launch.",
    },
  ];

  return (
    <div id="appdevelopment">
      {/* HERO SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-28 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Leading{" "}
              <span className="text-red-500 relative">
                Mobile Application Development
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></span>
              </span>{" "}
              Company
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              At SofiLoft Technologies, we craft innovative mobile applications that empower businesses to engage users and enhance customer experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need a native iOS app, Android app, or a versatile cross-platform solution, our expert team delivers high-quality, scalable, and user-friendly mobile applications tailored to your specific goals and industry requirements.
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
          <div className="md:w-5/12 flex justify-center">
            <img src={web2} alt="App Development" className="rounded-lg object-contain" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="text-pink-500">App Development</span> Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            We deliver mobile solutions that match your business goals and user needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mobile Apps for Every Industry
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From startups to enterprises, we create apps for every business domain.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryServices.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={service.img} alt={service.title} className="w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-[18px] leading-text-sm [28px] font-[Outfit,sans-serif] text-[rgb(255_255_255/59%)]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Tech Stacks for App Development
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

      {/* FAQ */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          FAQs on App Development
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

export default AppDevelopment;
