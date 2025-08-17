// ArVrDevelopment.jsx
import React, { useState } from "react";
import { FaVrCardboard, FaGlasses, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";

const ArVrDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaVrCardboard size={28} />,
      title: "Custom AR/VR Application Development",
      description:
        "We create immersive AR/VR applications that enhance user experience, from training simulations to interactive product demos.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaGlasses size={28} />,
      title: "AR/VR Strategy & Consulting",
      description:
        "Get expert advice on choosing the right AR/VR technology and platforms to maximize engagement and ROI.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      title: "3D Modeling & Animation",
      description:
        "Our experts design realistic 3D assets, environments, and animations for AR/VR experiences.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCode size={28} />,
      title: "Cross-Platform AR/VR Solutions",
      description:
        "Deploy immersive applications on VR headsets, AR mobile apps, and mixed reality platforms.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaCode size={28} />,
      title: "AR/VR Maintenance & Optimization",
      description:
        "We keep your AR/VR apps updated, optimized, and bug-free for the best performance.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCode size={28} />,
      title: "Training & Simulation Solutions",
      description:
        "Build VR training modules and AR-based simulations for industries like healthcare, aviation, and education.",
      color: "bg-pink-500",
    },
  ];

  const industryServices = [
    {
      title: "Retail & E-commerce",
      img: web4,
      desc: "Allow customers to try products virtually with AR-based shopping experiences.",
    },
    {
      title: "Healthcare",
      img: web4,
      desc: "Enable medical simulations, VR surgeries, and AR-based patient care solutions.",
    },
    {
      title: "Education",
      img: web4,
      desc: "Provide immersive learning experiences, 3D classrooms, and virtual labs.",
    },
    {
      title: "Real Estate",
      img: web4,
      desc: "Offer virtual property tours and AR-based interior visualization.",
    },
    {
      title: "Gaming & Entertainment",
      img: web4,
      desc: "Deliver next-level immersive VR games and interactive AR entertainment apps.",
    },
    {
      title: "Manufacturing",
      img: web4,
      desc: "Train employees with VR-based safety simulations and AR-based machine assistance.",
    },
  ];

  const techStacks = [
    {
      category: "AR/VR SDKs",
      items: [
        { name: "ARKit", img: "/images/arkit.png" },
        { name: "ARCore", img: "/images/arcore.png" },
        { name: "Vuforia", img: "/images/vuforia.png" },
        { name: "Wikitude", img: "/images/wikitude.png" },
      ],
    },
    {
      category: "Game Engines",
      items: [
        { name: "Unity 3D", img: "/images/unity.png" },
        { name: "Unreal Engine", img: "/images/unreal.png" },
        { name: "CryEngine", img: "/images/cryengine.png" },
        { name: "Godot", img: "/images/godot.png" },
      ],
    },
    {
      category: "Devices",
      items: [
        { name: "Oculus Rift", img: "/images/oculus.png" },
        { name: "HTC Vive", img: "/images/htcvive.png" },
        { name: "HoloLens", img: "/images/hololens.png" },
        { name: "Magic Leap", img: "/images/magicleap.png" },
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

  const faqs = [
    {
      question: "What is the cost of AR/VR development?",
      answer:
        "Cost depends on the complexity, platform, and features. Basic AR apps may start around $2,000, while complex VR simulations can go much higher.",
    },
    {
      question: "How long does it take to develop an AR/VR application?",
      answer:
        "A simple AR app may take 4-6 weeks, while advanced VR simulations could take 3-6 months.",
    },
    {
      question: "Do AR/VR apps work on all devices?",
      answer:
        "Yes, we build cross-platform AR/VR apps that run on mobile, desktops, and VR headsets.",
    },
    {
      question: "Can AR/VR be integrated with existing business systems?",
      answer:
        "Absolutely! We can integrate AR/VR solutions with your CRM, ERP, or e-commerce platforms.",
    },
  ];

  return (
    <div id="arvrdevelopment">
      {/* FIRST SECTION */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Innovative{" "}
                <span className="relative text-red-500">
                  AR/VR Development
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                </span>{" "}
                Company
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We design immersive AR and VR solutions to enhance business operations, training, education, and customer engagement.
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
              <img src={web2} alt="AR/VR Development" className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img src={web3} alt="AR/VR Solutions" className="max-w-sm w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proven <span className="text-pink-500 underline">AR/VR Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600">
              From product visualization to training simulations, our AR/VR solutions drive innovation and results.
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
            Top <span className="text-pink-500">AR/VR Development</span> Services
          </h2>
          <p className="text-gray-600 mt-3">
            Delivering immersive experiences through cutting-edge AR/VR development services.
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

      {/* INDUSTRIES SECTION */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AR/VR Development for All Industries
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our AR/VR solutions serve industries like retail, healthcare, education, and more.
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
          Latest Tech Stacks for AR/VR Development
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
          FAQs on AR/VR Development
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

export default ArVrDevelopment;
