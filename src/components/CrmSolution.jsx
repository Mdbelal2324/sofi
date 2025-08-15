import React, { useState } from "react";
import { FaLaptopCode, FaUserTie, FaCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png";
import porto1 from "../assets/image/E-commerce.png";

// (Optional) Agar aap FAQAccordion alag se use karna chahte ho
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return null; // Placeholder
}

const CrmSolution = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode size={28} />,
      title: "Custom Website Application Development",
      description:
        "From creating simple web pages to complex solutions, our custom web development company has experience developing the perfect solution for your business from as a developer and the text and telegram website wnd the lorem yh yjyu mmnnjhjjhjhjdgjgfj .",
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
    <div id="crmsolution">
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
                    Break the ordinary with a unique and tailor-made business website specially
                    developed to suit all your business needs and requirements. Team of this
                    custom website development company strives to deliver the best custom web
                    development solutions. Every website we develop is unique and adheres to all
                    the users’ needs.
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
      {/* ---- SAME as WebDevelopment.jsx ---- */}
      {/* Rest of your original JSX here */}
    </div>
  );
};

export default CrmSolution;
