// AIMLDevelopment.jsx
import React, { useState } from "react";
import { FaLaptopCode, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png";
import porto1 from "../assets/image/E-commerce.png";
import restu from "../assets/image/Resturant.jpg";
import fine from "../assets/image/fine.jpg";
import helt from "../assets/image/Healthcare.jpg";


import edu from "../assets/image/Education.jpg";
import ecom from "../assets/image/Retail1.jpg";

import treval from "../assets/image/Travel.jpg";


const AIMLDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    
  ];

  const industryServices = [
    {
      title: "Education",
      img: edu,
      desc:
        "AI tutors, automated grading, learning analytics, and personalized content to improve student outcomes.",
    },
    {
      title: "Food and Restaurant",
      img: restu,
      desc:
        "Demand forecasting, dynamic pricing, smart recommendations, and automated review sentiment tracking.",
    },
    {
      title: "Travel and Tours",
      img: treval,
      desc:
        "Smart itinerary suggestions, price prediction, personalization, and customer service chatbots.",
    },
    {
      title: "Healthcare",
      img: helt,
      desc:
        "Clinical NLP, triage assistants, imaging diagnostics support, and patient risk prediction with compliance focus.",
    },
    {
      title: "E-commerce",
      img: ecom,
      desc:
        "Recommendation engines, search relevance, fraud detection, and customer support automation.",
    },
    {
      title: "Fintech",
      img: fine,
      desc:
        "Credit scoring, anomaly detection, KYC automation, and real-time risk monitoring with explainable AI.",
    },
  ];

  const techStacks = [
    {
      category: "Core AI/ML",
      items: [
        { name: "TensorFlow", img: "/images/tensorflow.png" },
        { name: "PyTorch", img: "/images/pytorch.png" },
        { name: "scikit-learn", img: "/images/sklearn.png" },
        { name: "XGBoost", img: "/images/xgboost.png" },
      ],
    },
    {
      category: "LLMs & NLP",
      items: [
        { name: "Transformers", img: "/images/transformers.png" },
        { name: "LangChain", img: "/images/langchain.png" },
        { name: "spaCy", img: "/images/spacy.png" },
        { name: "RAG Pipelines", img: "/images/rag.png" },
      ],
    },
    {
      category: "Data & Pipelines",
      items: [
        { name: "Python", img: "/images/python.png" },
        { name: "Node.js", img: "/images/nodejs.png" },
        { name: "Airflow", img: "/images/airflow.png" },
        { name: "Kafka", img: "/images/kafka.png" },
      ],
    },
    {
      category: "Serving & MLOps",
      items: [
        { name: "Docker", img: "/images/docker.png" },
        { name: "Kubernetes", img: "/images/kubernetes.png" },
        { name: "MLflow", img: "/images/mlflow.png" },
        { name: "FastAPI", img: "/images/fastapi.png" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", img: "/images/react.png" },
        { name: "Next.js", img: "/images/nextjs.png" },
        { name: "Vue.js", img: "/images/vue.png" },
        { name: "Tailwind", img: "/images/tailwind.png" },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "Google Cloud", img: "/images/googlecloud.png" },
        { name: "Azure", img: "/images/azure.png" },
        { name: "AWS", img: "/images/aws.png" },
        { name: "DevOps", img: "/images/devops.png" },
      ],
    },
  ];

  const faqs = [
    {
      question: "AI/ML solution ki cost kitni hoti hai?",
      answer:
        "Scope, data cleaning, model complexity, aur deployment needs par depend karta hai. Typical POC ₹2–6 lakh; production projects features ke hisaab se upar ja sakte hain.",
    },
    {
      question: "Project ka time kitna lagta hai?",
      answer:
        "Simple POC 2–6 weeks; end-to-end production 2–4 months (data pipelines, training, evaluation, MLOps, monitoring).",
    },
    {
      question: "Kya aap mere existing systems ke saath integrate karenge?",
      answer:
        "Haan, REST/GraphQL APIs, webhooks, or message queues (Kafka/RabbitMQ) ke through seamless integration karte hain.",
    },
    {
      question: "Data security aur compliance kaise handle hota hai?",
      answer:
        "PII minimization, encryption at rest/in transit, access controls, audit logs, aur region-specific compliance best practices follow karte hain.",
    },
  ];

  return (
    <div id="webdevelopment">
      {/* ========= FIRST SECTION ========= */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            {/* Left Content */}
            <div className="md:w-1/2">
              <div className="nft-banner-head-info">
                <div className="nft-banner-text-in">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
                    Custom{" "}
                    <span className="relative text-red-500">
                      AI & ML Development
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                    </span>{" "}
                    Company
                  </h1>
                  <p className="text-lg text-gray-600 leading-8 mb-6 font-outfit">
                    Build intelligent, data-driven products—recommendation
                    engines, copilots, forecasting, and computer vision—crafted
                    around your business KPIs. We design, train, and deploy
                    reliable AI/ML systems that scale securely.
                  </p>

                  <p className="text-lg text-gray-600 leading-8 mb-8 font-outfit">
                    Hire AI/ML developers from a team that ships production-ready
                    models with measurable impact. Share your requirements now!
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="javascript:;"
                    className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="https://devtechnosys.com/request-a-quote.php"
                    className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition"
                  >
                    Book A Consultation
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-5/12 flex justify-center pt-20">
              <div className="banner-inner-1">
                <img
                  width="444"
                  height="532"
                  alt="AI & ML Development Company"
                  className="rounded-lg object-contain"
                  src={web2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= SECOND SECTION ========= */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={web3}
              alt="AI & ML Solutions"
              className="max-w-sm w-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-black">Proven </span>
              <span className="text-pink-500 underline decoration-pink-500">
                AI & ML Development
              </span>
              <span className="text-black"> Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Looking for production-grade AI? We’ve got your back—from use-case
              discovery to measurable deployments.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Get the intelligent experiences you deserve, delivered by a team
              that blends data engineering, modeling, and MLOps.
            </p>
            <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:opacity-90 transition">
              Connect With Experts Now!
            </button>
          </div>
        </div>
      </section>

      {/* ========= THIRD SECTION ========= */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Top <span className="text-pink-500">AI & ML Development</span>{" "}
            Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Transform your business with cutting-edge, secure, and scalable AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 h-[320px] flex flex-col"
            >
              <div
                className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4 shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========= FOURTH SECTION ========= */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI & ML Services for All Industries!
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e0a85d] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-white font-bold text-3xl md:text-4xl leading-snug">
            Need Assistance with AI & ML Development?
          </h1>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Get In Touch
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img src={web5} alt="Person working on laptop" className="max-w-full h-auto" />
        </div>
      </section>

      {/* ========= PORTFOLIO HERO APPENDED ========= */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-gray-600 mt-2">
            A peek into AI-powered products and successful deployments.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={porto1} alt="Portfolio 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Recommendation Engine</h3>
              <p className="text-gray-600 text-sm mt-2">
                Personalized product discovery with uplifted conversions.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={porto1} alt="Portfolio 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Healthcare NLP</h3>
              <p className="text-gray-600 text-sm mt-2">
                Clinical text extraction, triage assistance, and summarization.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={porto1} alt="Portfolio 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Vision Quality Control</h3>
              <p className="text-gray-600 text-sm mt-2">
                Real-time defect detection on manufacturing lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Tech Stacks for AI & ML Development
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-black rounded-lg p-3"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 object-contain mb-2"
                    />
                    <p className="text-white text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          FAQs on AI & ML Development
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border ${
                openIndex === index ? "bg-blue-700 text-white" : "bg-white"
              } transition-all duration-300`}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-base font-normal">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIMLDevelopment;
