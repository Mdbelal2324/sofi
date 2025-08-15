// AppDevelopment.jsx
import React, { useState } from "react";
import { FaMobileAlt, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png";
import porto1 from "../assets/image/E-commerce.png";

const AppDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaMobileAlt size={28} />,
      title: "Custom Mobile App Development",
      description:
        "We build tailor-made mobile applications that match your unique business needs, delivering high performance and engaging user experiences.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "App Development Consulting",
      description:
        "Our expert consultants guide you through strategy, design, and execution to make your app idea a reality.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      title: "Cross-Platform App Development",
      description:
        "Reach more users with apps that work seamlessly on iOS, Android, and the web.",
      color: "bg-red-500",
    },
  ];

  const industryServices = [
    {
      title: "E-commerce",
      img: web4,
      desc: "Boost your online store with feature-rich mobile apps offering smooth browsing, secure payments, and order tracking.",
    },
    {
      title: "Healthcare",
      img: web4,
      desc: "Develop HIPAA-compliant healthcare apps with appointment booking, telemedicine, and patient record management.",
    },
    {
      title: "Education",
      img: web4,
      desc: "Create interactive learning apps with video lessons, quizzes, and progress tracking for students and educators.",
    },
    {
      title: "Travel & Tourism",
      img: web4,
      desc: "Enable easy trip planning with booking, itinerary management, and in-app maps for travelers.",
    },
    {
      title: "Food & Restaurant",
      img: web4,
      desc: "Build custom food delivery and restaurant apps with real-time tracking and menu management.",
    },
    {
      title: "Finance",
      img: web4,
      desc: "Secure and scalable fintech mobile solutions for payments, lending, and investment tracking.",
    },
  ];

  const techStacks = [
    {
      category: "Mobile Frameworks",
      items: [
        { name: "React Native", img: "/images/react.png" },
        { name: "Flutter", img: "/images/flutter.png" },
        { name: "Swift", img: "/images/swift.png" },
        { name: "Kotlin", img: "/images/kotlin.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", img: "/images/nodejs.png" },
        { name: "Python", img: "/images/python.png" },
        { name: "Java", img: "/images/java.png" },
        { name: "PHP", img: "/images/php.png" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", img: "/images/mysql.png" },
        { name: "MongoDB", img: "/images/mongodb.png" },
        { name: "Firebase", img: "/images/firebase.png" },
        { name: "PostgreSQL", img: "/images/postgresql.png" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How Much Does Mobile App Development Cost?",
      answer:
        "App development costs vary depending on complexity, features, and platform. On average, costs range from $15,000 to $100,000+.",
    },
    {
      question: "How Long Does It Take to Develop a Mobile App?",
      answer:
        "A basic app can take 2–4 months, while more complex apps with advanced features may take 6 months or longer.",
    },
    {
      question: "Do You Provide App Maintenance After Launch?",
      answer:
        "Yes, we offer ongoing maintenance, updates, and technical support to keep your app running smoothly.",
    },
    {
      question: "Can You Build Apps for Both iOS and Android?",
      answer:
        "Absolutely! We develop native and cross-platform apps that work perfectly on both platforms.",
    },
  ];

  return (
    <div id="appdevelopment">

      {/* HERO SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-28 flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Leading{" "}
              <span className="text-red-500 relative">
                App Development
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></span>
              </span>{" "}
              Company
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We create cutting-edge mobile applications that empower businesses and enhance customer experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need a native iOS app, Android app, or a cross-platform solution, our team is here to deliver.
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
            <img src={web2} alt="App Development" className="rounded-lg object-contain" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
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
            Mobile Apps for Every Industry
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From startups to enterprises, we create apps for every business domain.
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

      {/* FAQ SECTION */}
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
