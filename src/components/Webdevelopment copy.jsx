import React, { useState } from "react";
import { FaLaptopCode, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png"
import porto1 from "../assets/image/E-commerce.png"


// (Optional) Agar aap FAQAccordion alag se use karna chahte ho
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return null; // Placeholder
}

const WebDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode size={28} />,
      title: "Custom Website Design and Development",
      description:
        "Unlock a distinctive online identity with tailored website design and development from SofiLoft Technologies. We craft every site to reflect your brand, focusing on mobile responsiveness, intuitive navigation, fast load times, and robust SEO. Our expert team combines creative vision and technical skill to deliver websites that captivate visitors and convert them into loyal customers—driving measurable growth for your business",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaUserTie size={28} />,
      title: "Custom Web Development Consulting",
      description:
        "If you have an idea to develop a custom website and need professional assistance to execute it, we can help you make it happen.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      title: "Custom Frontend Development",
      description:
        "Our customized frontend web development solutions are tailor-made and exceptionally easy to maintain.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCode size={28} />,
      title: "Custom Frontend Development",
      description:
        "Our customized frontend web development solutions are tailor-made and exceptionally easy to maintain.",
      color: "bg-red-500",
    },
    {
      id: 5,
      icon: <FaCode size={28} />,
      title: "Custom Frontend Development",
      description:
        "Our customized frontend web development solutions are tailor-made and exceptionally easy to maintain.",
      color: "bg-red-500",
    },
    {
      id: 6,
      icon: <FaCode size={28} />,
      title: "Custom Frontend Development",
      description:
        "Our customized frontend web development solutions are tailor-made and exceptionally easy to maintain.",
      color: "bg-red-500",
    },
  ];

  const industryServices = [
    {
      title: "Education",
      img: web4,
      desc: "With custom web development, education institutes can get a seamless experience. Enhance students’ learning experience by offering tailored solutions, including student management systems, interactive learning platforms, and virtual classrooms."
    },
    {
      title: "Food an Restaurant",
      img: web4,
      desc: "Create a custom website for ordering, menu management, and reservation. Strengthen your business operations, increase sales, and streamline operations."
    },
    {
      title: "Travel and Tours",
      img:  web4,
      desc: "Embrace customer web development services to create a strong online presence with interactive maps, personalized itineraries, and booking systems."
    },
    {
      title: "Healthcare",
      img:  web4,
      desc: "Tailored healthcare solutions for hospitals and clinics, including patient portals, appointment scheduling, and telemedicine platforms."
    },
    {
      title: "E-commerce",
      img:  web4,
      desc: "Custom online stores with secure payments, product management, and advanced analytics."
    },
    {
      title: "Fintech",
      img:  web4,
      desc: "Secure and scalable financial technology platforms with payment gateways and transaction monitoring."
    }
  ];

  const techStacks = [
    {
      category: "Frontend",
      items: [
        { name: "React", img: "/images/react.png" },
        { name: "Angular", img: "/images/angular.png" },
        { name: "Vue.js", img: "/images/vue.png" },
        { name: "Knockout", img: "/images/knockout.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: ".NET Core", img: "/images/dotnetcore.png" },
        { name: "ASP.NET MVC", img: "/images/aspnetmvc.png" },
        { name: "Python", img: "/images/python.png" },
        { name: "Node.js", img: "/images/nodejs.png" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", img: "/images/mysql.png" },
        { name: "PostgreSQL", img: "/images/postgresql.png" },
        { name: "Oracle", img: "/images/oracle.png" },
        { name: "MongoDB", img: "/images/mongodb.png" },
      ],
    },
    {
      category: "Integration",
      items: [
        { name: "WCF", img: "/images/wcf.png" },
        { name: "Web API", img: "/images/webapi.png" },
        { name: "REST API", img: "/images/restapi.png" },
        { name: "SOAP", img: "/images/soap.png" },
      ],
    },
    {
      category: "User Interface",
      items: [
        { name: "Android Native", img: "/images/android.png" },
        { name: "Flutter", img: "/images/flutter.png" },
        { name: "XML", img: "/images/xml.png" },
        { name: "Material Design", img: "/images/material.png" },
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
      question: "How Much Does Custom Web Development Cost?",
      answer:
        "The average cost for custom web development lies between $25,000 to $50,000 and more. The cost varies depending on your requirements to develop a customized business website or application.",
    },
    {
      question: "How Long Does It Take to Develop A Customized Website?",
      answer:
        "The time depends on your requirements, features, and complexity of the project. On average, it can take anywhere from a few weeks to several months.",
    },
    {
      question:
        "Can You Integrate Third-Party Services In Custom Web Development?",
      answer:
        "Yes, we can integrate various third-party services including payment gateways, APIs, and analytics tools as per your needs.",
    },
    {
      question:
        "Do You Offer Responsive Design In Custom Web Development?",
      answer:
        "Yes, all our custom web development projects include responsive design, ensuring your site looks great on all devices.",
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
    Web Development
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
  </span>{" "}
  Company
</h1>
<p className="text-lg text-gray-600 leading-8 mb-6 font-outfit">
Are you searching for a top-rated custom web development company to elevate your business 
online? SofiLoft Technologies specializes in building unique, tailor-made websites that fit
 your exact business needs and industry requirements. Our skilled team of web developers is committed to
  delivering high-performance, fully responsive websites that ensure exceptional user
   experience and drive measurable results.
</p>

            <p className="text-lg text-gray-600 leading-8 mb-8 font-outfit">
              Hire web developer from the leading custom web development company
              while choosing us. Share your requirements now!
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
                alt="Progressive Web App Development Company"
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
            <img src={web3} 
            alt="Custom Web Development" 
            className="max-w-sm w-full" />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-black">Proven </span>
              <span className="text-pink-500 underline decoration-pink-500">Custom Web Development</span>
              <span className="text-black"> Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Are you searching for the best custom web development solutions? We got your back!
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Get the rich web experience you deserve, offered by the trusted software and website development company you have been looking for.
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
            Top{" "}
            <span className="text-pink-500">Custom Web Development</span>{" "}
            Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Transform your business with the assistance of a leading custom website development company.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 h-[320px] flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4 shadow-lg`}>
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
            Custom Web Development Services for All Industries!
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
          cked customized software in today's market. From healthcare to education and fintech, we offer the top custom web development services for various industries.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryServices.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
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
            Need Assistance with Custom Web Development?
          </h1>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Get In Touch
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={web5}
            alt="Person working on laptop"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* ========= PORTFOLIO HERO APPENDED ========= */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-gray-600 mt-2">
            Take a look at some of our best work and successful projects.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={porto1}
            alt="Portfolio 1"
             className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">E-commerce Platform</h3>
              <p className="text-gray-600 text-sm mt-2">A complete online shopping solution with secure payment integration.</p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={porto1} alt="Portfolio 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Healthcare Portal</h3>
              <p className="text-gray-600 text-sm mt-2">A patient-friendly healthcare management system with telemedicine features.</p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={porto1} alt="Portfolio 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Education Platform</h3>
              <p className="text-gray-600 text-sm mt-2">An engaging learning management system with virtual classrooms.</p>
            </div>
          </div>
        </div>
      </section>
        <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Latest Tech Stacks for Custom Web Development
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStacks.map((stack, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
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
        FAQs on Custom Web Development
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
              <div className="px-6 pb-4 text-base font-normal">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default WebDevelopment;
