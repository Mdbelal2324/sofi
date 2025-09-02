import React from "react";
import { Check, Globe } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Lightbulb, Smartphone, ShoppingCart, Users, Megaphone, Brain, Bot, Cpu } from "lucide-react";

const services = [
  {
    id: 1,
    tag: "Web",
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    title: "Website Development",
    desc: "Professional websites designed to engage visitors and support business goals.",
    points: ["Responsive Design", "CMS Integration", "Performance Optimization", "Maintenance & Support"],
    btnColor: "from-green-500 to-teal-500",
  },
  {
    id: 2,
    tag: "Mobile",
    icon: <Smartphone className="w-10 h-10 text-white" />,
    title: "Mobile App Development",
    desc: "Custom mobile apps built to deliver smooth user experiences and functionality.",
    points: ["Android & iOS Apps", "UI/UX Design", "Cross-Platform Solutions", "App Maintenance"],
    btnColor: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    tag: "E-com",
    icon: <ShoppingCart className="w-10 h-10 text-white" />,
    title: "E-Commerce Development",
    desc: "E-commerce platforms developed to increase sales and streamline operations.",
    points: ["Online Store Setup", "Payment Integration", "Shopping Cart", "Product Management"],
    btnColor: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    tag: "CRM",
    icon: <Users className="w-10 h-10 text-white" />,
    title: "CRM Solutions",
    desc: "CRM systems that help manage leads, clients, and business workflows efficiently.",
    points: ["Lead Tracking", "Sales Automation", "Custom Dashboard", "Reporting Tools"],
    btnColor: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    tag: "DM",
    icon: <Megaphone className="w-10 h-10 text-white" />,
    title: "Digital Marketing",
    desc: "Digital strategies crafted to grow your online presence and maximize reach.",
    points: ["SEO Optimization", "Content Strategy", "Paid Ads", "Social Media Marketing"],
    btnColor: "from-green-400 to-teal-500",
  },
  {
    id: 6,
    tag: "AI/ML",
    icon: <Brain className="w-10 h-10 text-white" />,
    title: "AI/ML Solutions",
    desc: "AI-powered tools for automation, analytics, and smarter decision-making.",
    points: ["Predictive Analytics", "Data Modeling", "AI Integration", "Process Automation"],
    btnColor: "from-green-500 to-teal-500",
  },
  {
    id: 7,
    tag: "ChatBot",
    icon: <Bot className="w-10 h-10 text-white" />,
    title: "Chatbot Development",
    desc: "Chatbots that automate support, boost engagement, and handle inquiries effectively.",
    points: ["Customer Support", "Lead Generation", "Multi-Platform Bots", "Custom Conversation Flows"],
    btnColor: "from-green-500 to-teal-500",
  },
  {
    id: 8,
    tag: "AI Agents",
    icon: <Cpu className="w-10 h-10 text-white" />,
    title: "AI Agents Development",
    desc: "Intelligent agents that perform complex tasks and automate workflows.",
    points: ["Virtual Assistants", "Autonomous Bots", "Workflow Automation", "Data Analysis"],
    btnColor: "from-green-500 to-teal-500",
  },
];



export default function ServicesCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ek row me 3 card
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      {/* ======= Heading Section ======= */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-gray-800 font-medium shadow-sm">
          <Globe className="w-5 h-5 text-green-600" />
          Our Expertise
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-6">Services We Excel</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Comprehensive digital solutions engineered to transform your vision into reality
        </p>
      </div>

      {/* ======= Card Slider Section ======= */}
      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-4">
              <div
                className="relative bg-white rounded-2xl p-8 border border-gray-200 
                           transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
              >
                {/* Tag */}
                <span className="px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-600 mb-4 inline-block">
                  {service.tag}
                </span>

                {/* Title & Desc */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-5">{service.desc}</p>

                {/* Points */}
                <ul className="space-y-2 mb-6">
                  {service.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`bg-gradient-to-r ${service.btnColor} text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition`}
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
