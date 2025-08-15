import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaBrain } from "react-icons/fa";
import { Search, ChevronRight, ArrowUpRight } from "lucide-react";
import web4 from "../assets/image/web3.png";

export default function AIDevelopmentPage() {
  const tech = [
    "OpenAI",
    "LangChain",
    "Pinecone",
    "Weaviate",
    "TensorFlow",
    "PyTorch",
    "Docker",
    "Kubernetes",
  ];

  const faqs = [
    {
      q: "How do you handle data privacy?",
      a: "We implement RBAC, encryption, redaction and audit trails per project needs.",
    },
    {
      q: "Can you integrate with our product?",
      a: "Yes — we build microservices/APIs and connectors for CRM, web and mobile apps.",
    },
    {
      q: "Typical PoC timeline?",
      a: "2–4 weeks for a lightweight PoC depending on data readiness.",
    },
  ];

  const services = [
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "AI/ML Strategy Consulting",
      description:
        "You can count on the top experts to help you through the difficulties of utilizing AI consulting services by using efficient methods, giving strategic advice, and doing research.",
      color: "bg-purple-600",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "PoC and MVP Development",
      description:
        "Our specialists create Proof of Concepts to showcase potential AI apps with smaller versions, ensuring the idea works before moving to a complete MVP.",
      color: "bg-blue-500",
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "Custom AI App Development",
      description:
        "We create AI-powered apps tailored to your business needs, from algorithm to interface, ensuring top performance and security.",
      color: "bg-red-500",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "AI Model Optimization",
      description:
        "Enhance AI models for better accuracy, speed, and efficiency, ensuring they meet your project goals.",
      color: "bg-green-500",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI into your existing systems for automation, analytics, and improved decision-making.",
      color: "bg-yellow-500",
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "AI Data Analysis",
      description:
        "Unlock insights from your data with advanced AI analytics and reporting tools.",
      color: "bg-pink-500",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Natural Language Processing",
      description:
        "Build AI solutions that understand, interpret, and generate human language naturally.",
      color: "bg-indigo-500",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "AI Chatbot Development",
      description:
        "Create intelligent chatbots to enhance customer engagement and automate responses.",
      color: "bg-orange-500",
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "AI Security Solutions",
      description:
        "Leverage AI to detect threats, prevent fraud, and secure your business systems.",
      color: "bg-teal-500",
    },
  ];

  const portfolioData = [
    {
      title: "AI driven business analytics",
      description:
        "Cuddle is an AI-Based business analysis platform that liberates business users from static reports and point solutions by making data easily accessible...",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "AI caller ID",
      description:
        "Everybody is your personal assistant that helps you identify calls and messages from unknown numbers...",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "Chronic Disease Prevention Platform",
      description:
        "Lark Health is the leading chronic disease prevention and management platform using A.I. health coaching...",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
  ];

  const industryServices = [
    {
      title: "Education",
      img: web4,
      desc:
        "AI tutors, automated grading, learning analytics, and personalized content to improve student outcomes.",
    },
    {
      title: "Food and Restaurant",
      img: web4,
      desc:
        "Demand forecasting, dynamic pricing, smart recommendations, and automated review sentiment tracking.",
    },
    {
      title: "Travel and Tours",
      img: web4,
      desc:
        "Smart itinerary suggestions, price prediction, personalization, and customer service chatbots.",
    },
    {
      title: "Healthcare",
      img: web4,
      desc:
        "Clinical NLP, triage assistants, imaging diagnostics support, and patient risk prediction with compliance focus.",
    },
    {
      title: "E-commerce",
      img: web4,
      desc:
        "Recommendation engines, search relevance, fraud detection, and customer support automation.",
    },
    {
      title: "Fintech",
      img: web4,
      desc:
        "Credit scoring, anomaly detection, KYC automation, and real-time risk monitoring with explainable AI.",
    },
  ];
  
const techStack = [
  {
    category: "Frameworks",
    items: [
      { name: "PyTorch", img: "/images/pytorch.png" },
      { name: "MXNet", img: "/images/mxnet.png" },
      { name: "NvidiaCaffe", img: "/images/nvidiacaffe.png" },
      { name: "Chainer", img: "/images/chainer.png" },
    ],
  },
  {
    category: "Modules",
    items: [
      { name: "VGG-16", img: "/images/vgg16.png" },
      { name: "ResNet50", img: "/images/resnet50.png" },
      { name: "Inceptionv3", img: "/images/inceptionv3.png" },
      { name: "EfficientNet", img: "/images/efficientnet.png" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", img: "/images/mysql.png" },
      { name: "PostgreSQL", img: "/images/postgresql.png" },
      { name: "ORACLE", img: "/images/oracle.png" },
      { name: "MongoDB", img: "/images/mongodb.png" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "OpenNN", img: "/images/opennn.png" },
      { name: "Neuroph", img: "/images/neuroph.png" },
      { name: "Sonnet", img: "/images/sonnet.png" },
      { name: "TensorFlow", img: "/images/tensorflow.png" },
    ],
  },
  {
    category: "User Interface",
    items: [
      { name: "Android Native", img: "/images/android.png" },
      { name: "Flutter", img: "/images/flutter.png" },
      { name: "XML", img: "/images/xml.png" },
      { name: "Material Design", img: "/images/materialdesign.png" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Swift", img: "/images/swift.png" },
      { name: "AWS", img: "/images/aws.png" },
      { name: "Kotlin", img: "/images/kotlin.png" },
      { name: "Java", img: "/images/java.png" },
    ],
  },
];


  const process = [
    { step: "Understanding Your Needs", text: "We start by analyzing your business challenges and AI opportunities." },
    { step: "Data Assessment", text: "We evaluate your existing data sources and requirements." },
    { step: "PoC Development", text: "We build a Proof of Concept to validate the idea quickly." },
    { step: "Full-scale Development", text: "We develop and integrate AI solutions into your systems." },
    { step: "Monitoring & Optimization", text: "We ensure continuous performance improvement and maintenance." },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 grid place-items-center text-white font-bold">AI</div>
            <div>
              <div className="font-semibold">YourCompany</div>
              <div className="text-xs text-gray-500">AI Development</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#process" className="hover:text-indigo-600">Approach</a>
            <a href="#industries" className="hover:text-indigo-600">Industries</a>
            <a href="#case-studies" className="hover:text-indigo-600">Portfolio</a>
            <a href="#contact" className="text-white bg-indigo-600 px-4 py-2 rounded-full shadow hover:bg-indigo-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"> 
              <Search className="w-4 h-4"/> AI Solutions
            </span>
            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              AI Development & Consulting — <span className="text-indigo-600">From PoC to Production</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              We build custom AI products — chatbots, LLM apps, vision systems and analytics — with enterprise-grade security, MLOps and measurable KPIs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-semibold shadow">
                Get a Free Consultation <ChevronRight className="w-4 h-4"/>
              </a>
              <a href="#case-studies" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-gray-200">
                See Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Future-Proof AI Development Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To help your business fully utilize artificial intelligence, we provide a full range of AI development services.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`${service.color} w-14 h-14 flex items-center justify-center rounded-full mb-4`}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-6">Our Approach</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} className="p-4 rounded-2xl bg-white border border-gray-100 shadow text-center">
                <div className="text-indigo-600 font-bold mb-2">Step {i + 1}</div>
                <h4 className="font-semibold mb-1">{p.step}</h4>
                <p className="text-gray-600 text-sm">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-extrabold mb-4">Tech & Tools</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {tech.map((t, i) => (
            <div key={i} className="bg-white px-4 py-2 rounded-full shadow-sm text-sm">{t}</div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We provide AI solutions tailored for various industries to improve efficiency, productivity, and customer experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryServices.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technology Stack We Use for AI Development
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Choosing the right tools for AI development solutions is crucial to
          ensure that the software works well and gives accurate outcomes. For
          each project, we carefully choose the AI models, algorithms, and
          datasets that will help us give our clients' solutions.
        </p>

        {/* Tech Stack Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {techStack.map((category, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-black rounded-lg p-3 text-white"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 object-contain mb-2"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Portfolio */}
      <section id="case-studies" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Check out our broad selection of effective AI Projects that have helped companies grow.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{item.description}</p>
                  <a href={item.link} className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:underline">
                    Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-extrabold mb-6">FAQ</h2>
        <div className="bg-white rounded-2xl border border-gray-100 shadow divide-y">
          {faqs.map((f, i) => (
            <details key={i} className="p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <div className="mt-3 text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to start your AI journey?</h2>
          <p className="mb-6 text-indigo-100">Tell us about your project and we’ll propose a PoC-first roadmap focused on impact.</p>
          <div className="inline-flex gap-3">
            <a href="#" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow">Request Proposal</a>
            <a href="#" className="border border-white/30 px-6 py-3 rounded-full">Book Call</a>
          </div>
        </div>
      </section>
    </div>
  );
}
