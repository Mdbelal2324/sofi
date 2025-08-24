import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaBrain } from "react-icons/fa";
import { Search, ChevronRight, ArrowUpRight } from "lucide-react";
import edu from "../assets/image/Education.jpg";

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
    q: "Which industries benefit the most from AI/ML?",
    a: "AI/ML is beneficial across healthcare, finance, retail, manufacturing, education, logistics, telecom, real estate, and marketing, transforming business operations with automation and data insights."
  },
  {
    q: "How does AI improve business efficiency?",
    a: "AI automates repetitive tasks, predicts trends for better planning, optimizes processes, and enables data-driven decisions, leading to improved productivity and cost savings."
  },
  {
    q: "What is a Proof of Concept (PoC), and why is it important?",
    a: "A PoC is a small-scale project designed to test an AI solution’s feasibility and effectiveness before full-scale rollout, minimizing risks and ensuring strategic alignment."
  },
  {
    q: "Why is data quality critical in AI projects?",
    a: "Accurate, complete, and relevant data is essential to train AI models effectively and produce reliable, actionable output."
  },
  {
    q: "Can AI solutions work with my existing IT systems?",
    a: "Yes, AI systems can be customized to integrate seamlessly with your current infrastructure, ensuring smooth adoption and minimal disruption."
  },
  {
    q: "What is the typical timeline for AI implementation?",
    a: "Implementation can vary from a few weeks for initial prototypes to several months for fully developed and deployed solutions, depending on complexity."
  },
  {
    q: "Are AI/ML solutions fully customizable?",
    a: "Absolutely; each AI solution is tailored specifically to address the unique problems and objectives of your business."
  },
  {
    q: "What post-deployment support do you offer?",
    a: "Our support includes continuous monitoring, regular performance optimization, maintenance, and timely updates to keep your AI solution effective."
  },
  {
    q: "Is AI technology secure and compliant with privacy laws?",
    a: "Security and compliance are top priorities. We follow strict data protection standards and ensure adherence to all relevant privacy regulations."
  },
  {
    q: "How do I start implementing AI/ML in my business?",
    a: "Begin with a consultation to assess your needs and data readiness. We then create a customized AI adoption roadmap aligned with your business goals for successful deployment."
  }


  ];

  const services = [
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Chatbots & Conversational AI",
      description:
        "We develop intelligent chatbots and virtual assistants capable of understanding natural language, handling customer inquiries, and providing instant 24/7 support. These AI-powered systems reduce response times, improve customer satisfaction, and automate routine interactions for websites, mobile apps, and social platforms..",
      color: "bg-purple-600",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "AI Agents & Intelligent Automation",
      description:
        "Our AI agents automate repetitive and rule-based tasks across various departments like customer service, HR, and finance. By leveraging intelligent automation, businesses can save time, reduce operational errors, and shift focus towards strategic activities that enhance growth and innovation..",
      color: "bg-blue-500",
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "Predictive Analytics",
      description:
        "Using advanced machine learning models, we analyze historical and real-time data to forecast trends, customer behavior, and potential risks. These insights empower businesses to make proactive decisions, optimize resource allocation, and improve forecasting accuracy across sales, inventory, and finance.",
      color: "bg-red-500",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Natural Language Processing (NLP)",
      description:
        "Our NLP solutions enable machines to understand, interpret, and generate human language. This technology powers sentiment analysis, automated content creation, language translation, and document summarization, helping businesses gain deeper insights into customer feedback and automate language-based tasks.",
      color: "bg-green-500",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "Computer Visions",
      description:
        "We use computer vision techniques to analyze images and videos for applications such as facial recognition, object detection, and quality control. This technology is widely used in security systems, manufacturing inspection, retail analytics, and healthcare diagnostics to enhance accuracy and automate visual tasks.",
      color: "bg-yellow-500",
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "Recommendation Systems",
      description:
        "Our AI-powered recommendation engines analyze user behavior and preferences to deliver personalized product, service, or content suggestions. These systems increase user engagement, enhance customer satisfaction, and drive higher conversion rates for e-commerce, media, and entertainment platforms.",
      color: "bg-pink-500",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Speech Recognition",
      description:
        "We create voice-enabled applications using advanced speech recognition technology. These solutions convert spoken language into text and enable voice commands for virtual assistants, transcription services, call centers, and accessibility tools, improving user experience and operational efficiency.",
      color: "bg-indigo-500",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "AI-Powered Fraud Detection",
      description:
        "Our AI-driven fraud detection systems monitor transactions and user behavior to identify suspicious activity in real time. By detecting potential fraud early, organizations in finance, insurance, and e-commerce can safeguard assets, maintain compliance, and protect customer trust.",
      color: "bg-orange-500",
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "AI Strategy Consulting",
      description:
        "LOur AI strategy consulting services guide businesses through successful adoption of AI/ML technologies. We assess your current capabilities, identify opportunities, and develop tailored AI roadmaps that align with your business objectives to ensure maximum impact and sustainable growth.",
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
      img: edu,
      desc:
        "We develop AI systems that personalize learning experiences through adaptive platforms, AI tutors, automated grading, and detailed analytics on student performance. These innovations help educators tailor lessons to learner needs and improve engagement and academic success.",
    },
    {
      title: "Healthcare",
      img: edu,
      desc:
        "Our AI solutions in healthcare include advanced diagnostics, patient monitoring systems, medical imaging analysis, and personalized treatment planning. By leveraging AI, healthcare providers can improve accuracy, speed up diagnoses, and offer tailored care plans, ultimately enhancing patient outcomes while optimizing operational workflows.",
    },
    {
      title: "Finance",
      img: edu,
      desc:
        "We apply machine learning to detect fraud, assess risks accurately, automate trading algorithms, and predict customer behavior. These AI-driven capabilities help financial institutions improve security, reduce losses, increase profitability, and deliver personalized financial products and services to their clients..",
    },
    {
      title: "Retail & E-commerce",
      img: edu,
      desc:
        "AI boosts retail and e-commerce by enabling personalized product recommendations, accurate inventory forecasting, targeted customer segmentation, and automated support systems like chatbots. These technologies improve customer experiences, streamline operations, reduce overstock, and increase sales conversions..",
    },
    {
      title: "Manufacturing",
      img: edu,
      desc:
        "Our AI-powered manufacturing solutions include predictive maintenance to foresee equipment failures, computer vision for quality assurance, supply chain optimization, and automating routine tasks. This reduces downtime, enhances product quality, lowers costs, and improves overall factory efficiency.",
    },
    {
      title: "Logistics & Transportation",
      img: edu,
      desc:
        "AI streamlines logistics and transportation by optimizing routing, forecasting demand, managing fleets, and scheduling deliveries automatically. These solutions reduce operational costs, improve delivery speeds, maximize vehicle utilization, and enhance customer satisfaction.",
    },
     {
      title: "Telecommunications",
      img: edu,
      desc:
        "In telecom, AI enhances network performance, predicts customer churn, powers AI-driven customer support bots, and analyzes data for smarter business decisions. These applications increase service reliability and improve subscriber retention.",
     },
     {
      title:"Real Estate",
      img: edu,
      desc:
      "Our AI tools provide property valuation predictions, interactive virtual tours, lead scoring systems, and market forecasting. These solutions accelerate the sales process, improve client targeting, and provide data-driven insights to both agents and buyers.",
     },
     {
      title: "Marketing & Advertising",
      img: edu,
      desc:
      "We help optimize marketing efforts through customer segmentation, personalized campaign delivery, sentiment analysis, and AI-powered chatbots. These services increase ROI by ensuring marketing messages effectively reach and engage the right audience."
     }
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
    { step: "Understanding Your Needs", text: "We begin by carefully studying your business challenges and identifying where AI can make the biggest impact.." },
    { step: "Data Assessment", text: " we review your existing data and determine what’s needed to create effective AI models.." },
    { step: "Proof of Concept (PoC) Development", text: "We create a small-scale prototype to quickly test and validate the AI solution’s feasibility." },
    { step: "Full-scale Development", text: "Once proven, we build and integrate the AI system fully into your business processes." },
    { step: "Monitoring & Optimization", text: "After deployment, we continuously monitor performance and make improvements to keep your solution running at its best.." },
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
      
            </span>
            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              AI/ML Solutions <span className="text-indigo-600">by SofiLoft Technologies</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries by enabling smarter, faster, and more efficient business processes. Our AI/ML solutions empower organizations to harness the power of data, automate complex tasks, and deliver personalized experiences that drive growth. By integrating advanced algorithms and intelligent systems, we help businesses unlock valuable insights, improve operational efficiency, and make predictive decisions with confidence. 
            </p>
               <p className="mt-4 text-gray-600 max-w-xl">
            Transform your business with our tailored AI/ML solutions. From chatbots and fraud detection to supply chain optimization and customer insights, we design scalable, transparent, and ethical AI systems that drive real impact. Our expert team ensures customized automation that aligns with your goals—empowering your digital transformation with measurable results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-semibold shadow">
                Get a Free Consultation <ChevronRight className="w-4 h-4"/>
              </a>
           
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Key AI/ML Services</h2>
          <p className="text-gray-600 max-w-5xl mx-auto">
                Explore our range of powerful AI and Machine Learning solutions designed to automate processes, extract valuable insights, and enhance customer experiences. Each service is tailored to help your business innovate and stay ahead in a competitive landscape.
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


      {/* Industries */}
      <section id="industries" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Industry-Specific AI/ML Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We tailor intelligent AI solutions to fit any industry’s unique challenges, helping businesses automate processes, gain data-driven insights, and innovate for lasting competitive advantage.
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
