import React, { useState } from "react";
import { Link } from "react-router-dom";
import Portfolio from '../components/Portfoio';
import { FaLaptopCode,FaServer,FaCode,FaGlobe,FaPlug, FaReact,FaCogs} from "react-icons/fa";
import {  MdSupportAgent, MdSystemUpdateAlt  } from "react-icons/md"
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/Healthcare.jpg";
import web5 from "../assets/image/web4.png"
import porto1 from "../assets/image/E-commerce.png";
import edu from "../assets/image/Education.jpg";
import restu from "../assets/image/Resturant.jpg";
import treval from "../assets/image/Travel.jpg";
import ecom from "../assets/image/Retail1.jpg";
import retail from "../assets/image/Retail.jpg";
import banking from "../assets/image/Banking.jpg";
import State from "../assets/image/State.jpg";
import event  from "../assets/image/event.jpg";
// tecch image 
import  react from "../assets/image/React.png";
import angularImg from "../assets/image/angular.png";
import vueImg from "../assets/image/view.png";
import knockoutImg from "../assets/image/knockout.png";
import  net from "../assets/image/net.png";
import asp from "../assets/image/asp.png";
import python from "../assets/image/python.png";
import node from"../assets/image/node.png";
import  mysql  from "../assets/image/mysql.png";
import postsql from "../assets/image/postsql.png";
import oracle from "../assets/image/oracle.png";
import mongodb from"../assets/image/mongo.png";
import  wicf  from "../assets/image/mysql.png";
import webapi from "../assets/image/postsql.png";
import rest from "../assets/image/oracle.png";
import soap from"../assets/image/mongo.png";
import  and  from "../assets/image/and.png";
import flut from "../assets/image/flut.png";
import xml from "../assets/image/xml.png";
import md from"../assets/image/md.png";
import  mac  from "../assets/image/mac.png";
import google from "../assets/image/google.png";
import aws from "../assets/image/aws.png";
import  devops from"../assets/image/devops.png";

 


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
   
      "Unlock a distinctive online identity with tailored website design and development from SofiLoft Technologies. We craft every site to reflect your brand, focusing on mobile responsiveness, intuitive navigation, fast load times, and robust SEO. Our expert team combines creative vision and technical skill to deliver websites that captivate visitors and convert them into loyal customers—driving measurable growth for your business.",
         color: "bg-blue-600",
    },

    {
      id: 2,
      icon: <FaServer size={28} />,
      title: "CMS Development",
      description:
        "Easily manage your website content with our custom CMS development solutions. SofiLoft leverages secure, scalable platforms including WordPress, Shopify, Drupal, and custom-built frameworks. You enjoy full control over publishing and updates, while we ensure smooth performance, strong security, and easy user management—empowering your business to keep content fresh and relevant.",
      color: "bg-green-600",
    },
    {
      id: 3,
      icon: <FaGlobe size={28} />,
      title: "Web Applications",
      description:
        "Empower your business with interactive web applications tailored to your operational needs. SofiLoft develops custom tools, business dashboards, and client portals using modern, scalable frameworks. These apps boost productivity, automate key workflows, and deliver seamless user experiences, positioning your business for sustainable digital growth and innovation..",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaCode size={28} />,
      title: "Custom Backend Development",
      description:
        "Drive reliable functionality behind the scenes with SofiLoft’s custom backend development. Utilizing top technologies like Node.js, Python, and .NET, we build secure, efficient, and scalable server-side systems. Our backends support complex business logic, ensure robust data management, and effortlessly integrate with your frontend and third-party services for optimal performance.",
      color: "bg-red-500",
    },
    {
      id: 5,
      icon: <FaPlug size={28} />,
      title: "API Development & Integrationt",
      description:
        "Enhance your site’s capabilities through seamless API development and integration. Our experts create and implement secure REST and SOAP APIs to connect your website to mobile apps, third-party services, and business tools. This streamlines workflows, automates business processes, and ensures data flows smoothly between platforms, delivering a more powerful and efficient online ecosystem..",
      color: "bg-blue-500",
    },
    {
      id: 6,
      icon: < MdSystemUpdateAlt  size={28} />,
      title: "Upgrade & Migration",
      description:
        "Transition to the latest technology with zero hassle through our upgrade and migration services. SofiLoft securely moves your website or data to modern platforms, cloud servers, or new hosting environments. We preserve SEO rankings, guarantee data integrity, and implement enhanced features—ensuring a smooth, reliable migration so your business stays ahead.",
      color: "bg--500",
    },
       {
      id: 6,
      icon: <MdSupportAgent size={28} />,
      title: "Maintenance & Support",
      description:
        "Keep your website performing at its best with ongoing maintenance and support from SofiLoft Technologies. Our team handles regular updates, bug fixes, backups, security monitoring, and speed optimization. You benefit from peace of mind knowing your site is always secure, up-to-date, and delivering an exceptional experience for users—all year long.",
    color: "bg-blue-500",
      },
       {
      id: 6,
      icon: <FaReact size={28} />,
      title: "UI/UX Design Services",
      description:
        "Increase user satisfaction and engagement with expert UI/UX design from SofiLoft. We create visually stunning and intuitive interfaces focused on accessibility and conversion. Our user-centered design approach ensures your website is easy to navigate, looks professional across all devices, and encourages customers to take positive action—transforming visitors into brand advocates. ",
      color: "bg-green-500",
    },
       {
      id: 6,
      icon: <FaCogs size={28} />,
      title: " Low-Code Development",
      description:
        "Accelerate project delivery and reduce development costs using low-code web solutions. SofiLoft leverages leading low-code platforms for rapid deployment of scalable, flexible websites and apps. This approach enables faster updates, easy integrations, and customizable features, making it ideal for businesses seeking speed and adaptability without compromising quality.",
      color: "bg-yellow-500",
    },
  ];

  const industryServices = [
    {
      title: "Healthcare",
      img: web4,
      desc: "SofiLoft Technologies specializes in custom web development solutions that cater to the healthcare industry’s specific needs. We build secure telemedicine platforms, patient portals, electronic health record (EHR) integrations, and appointment scheduling systems. Our solutions streamline operations while ensuring full compliance with healthcare regulations, enhancing patient engagement and improving overall care management for hospitals, clinics, and wellness providers.",
    
    },
    {
      title: "Education",
      img: edu,
      desc: "Our tailored web development services help educational institutions deliver seamless digital learning experiences. We create interactive learning management systems, virtual classrooms, and student administration platforms customized to support hybrid and remote education. By integrating engaging course content, assessment tools, and communication modules, we empower educators and students alike while simplifying administrative workflows for schools and universities."
    },
    {
      title: "Food and Restaurant",
      img:  restu,
      desc: " Boost your food and restaurant business with custom websites designed for online ordering, menu management, and reservation handling. SofiLoft develops responsive, user-friendly platforms that improve customer experience through easy navigation and mobile compatibility. We also integrate loyalty programs, promotional offers, and payment gateways to streamline operations, increase orders, and foster repeat business in a competitive market."
    },
    {
      title: "Travel and Tours",
      img:  treval,
      desc: "Capture travelers’ attention with personalized web solutions tailored for the travel and tourism industry. SofiLoft designs interactive booking systems, dynamic itineraries, and location-based services like interactive maps. Our robust platforms offer seamless user experiences that encourage exploration and bookings, while back-end tools support your business with customer management and real-time availability updates to enhance operational efficiency."
    },
    {
      title: "E-commerce",
      img:  ecom,
      desc: "SofiLoft Technologies delivers secure, scalable custom e-commerce development tailored to your business needs. Our solutions include intuitive product catalogs, integrated payment gateways, user-friendly checkout processes, and advanced analytics to drive sales and optimize customer experience. Whether launching a new online store or upgrading an existing platform, our web development services help you stand out, attract more buyers, and grow your digital revenue."
    },
    {
      title: "Retail",
      img:  retail,
      desc: "Enhance your retail brand’s online presence with SofiLoft’s custom web development. We build efficient inventory management systems, personalized shopping experiences, and streamlined checkout workflows. Our platforms support promotions, customer engagement, and easy integration with backend logistics to help you scale your retail operations, improve customer satisfaction, and outperform competitors in today’s fast-paced e-commerce landscape."
    },
      {
      title: "Banking & Finance",
      img:  banking,
      desc: "Meet industry security and compliance standards with SofiLoft’s custom web development services for banking and financial institutions. Our platforms provide secure online transaction processing, real-time financial analytics, and customer account management portals. We help banks and fintech companies deliver reliable, user-friendly digital services while protecting sensitive information and adapting quickly to regulatory changes."
    },
     {
      title: "Real Estate",
      img:  State,
      desc: "Showcase properties effectively with custom web solutions tailored for the real estate sector. SofiLoft creates interactive listing platforms featuring virtual tours, advanced search filters, dynamic maps, and secure payment processing. Our websites facilitate client engagement and simplify property management, empowering real estate professionals to reach more buyers and streamline their sales and rental operations.",
    },
     {
      title: "Event Management",
      img:  event,
      desc: "Streamline your event business with custom web applications for event management and ticketing. SofiLoft’s solutions offer user-friendly booking systems, real-time updates, attendee management tools, and promotional integrations. Designed to enhance both the organizer’s workflow and the attendee’s experience, our platforms help you increase attendance, manage logistics efficiently, and deliver successful events every time."
    },
    
  ];

  const techStacks = [
    {
      category: "Frontend",
      items: [
        { name: "React", img: react },
        { name: "Angular", img: angularImg  },
        { name: "Vue.js", img:  vueImg },
        { name: "Knockout", img:knockoutImg 
},
      ],
    },
    {
      category: "Backend",
      items: [
        { name: ".NET Core", img: net },
        { name: "ASP.NET MVC", img: asp },
        { name: "Python", img: python },
        { name: "Node.js", img: node},
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", img: mysql},
        { name: "PostgreSQL", img: postsql },
        { name: "Oracle", img: oracle },
        { name: "MongoDB", img: mongodb },
      ],
    },
    {
      category: "Integration",
      items: [
        { name: "WCF", img: wicf },
        { name: "Web API", img: webapi  },
        { name: "REST API", img: rest },
        { name: "SOAP", img: soap },
      ],
    },
    {
      category: "User Interface",
      items: [
        { name: "Android Native", img: and },
        { name: "Flutter", img: flut },
        { name: "XML", img: xml },
        { name: "Material Design", img: md },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "Google Cloud", img: google },
        { name: "Azure", img: mac },
        { name: "AWS", img: aws },
        { name: "DevOps", img: devops },
      ],
    },
  ];

  const faqs = [
    {
      question: "What types of custom web development services do you offer?",
      answer:
        "We offer end-to-end custom web development, including website design, web application development, CMS integration, API development, backend solutions, and ongoing maintenance tailored to your business needs.",
    },
    {
      question: "How much does custom web development typically cost",

      answer:
        "Costs vary based on project complexity, features, and design requirements. On average, A basic website start from $1000–$4000, custom websites range from $5,000 to $20,000 and up. Contact us for a detailed quote tailored to your needs.",
    },
    {
      question:
        "Do you create fully custom designs or use pre-made templates??",
      answer:
        "We specialize in fully custom designs tailored to your brand and business goals, ensuring a unique online presence. Templates are used only when appropriate to save costs and time.",
    },
    {
      question:
        "How long does it take to develop a custom website?",
      answer:
        "Development timelines vary by project scope. Typical custom websites are completed within 2 to 8 weeks, while complex applications may take longer. We provide clear time estimates during project planning.",
    },
     {
      question:
        "Do you provide ongoing maintenance and support after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support, including updates, security monitoring, bug fixes, and performance optimization to keep your website running smoothly.",
    },
     {
      question:
        "Can you redesign and upgrade my existing website?",
      answer:
        "Absolutely. We specialize in website redesigns that improve aesthetics, user experience, and functionality while preserving SEO and existing brand elements.",
    },
     {
      question:
        "Will my website be mobile-friendly and SEO-optimized?",
      answer:
        "Yes, all our websites are built responsive for seamless use on all devices and optimized with SEO best practices to improve search engine rankings and visibility.",
    },
     {
      question:
        "Can you integrate third-party services in custom web development?",
      answer:
        "Yes, we can integrate a wide variety of third-party services such as payment gateways, CRM systems, marketing tools, and APIs to enhance your website's functionality.",
    },
     {
      question:
        "What technologies do you use for web development?",
      answer:
        "Our tech stack includes frontend frameworks like React, Angular, and Vue.js; backend technologies such as Node.js, Python, and .NET; and databases including MySQL, PostgreSQL, and MongoDB. We choose the best tools for your project goals.",
    }, 
    {
      question:
        "How will you ensure the confidentiality of my project?",
      answer:
        "We prioritize client confidentiality with secure data handling practices, non-disclosure agreements (NDAs), and strict internal protocols to protect your intellectual property and private information.",
    },
  ];


  return (
    <div id="webdevelopment">

      {/* ========= FIRST SECTION ========= */}
    <section className="nft-main-banner-sec pt-24 pb-12">
  <div className="container mx-auto px-6 md:px-28">
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
      {/* Left Content */}
      <div className="md:w-1/2">
        <div className="nft-banner-head-info">
          <div className="nft-banner-text-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
              Custom{" "}
              <span className="relative text-orange-500">
                Web Development
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500"></span>
              </span>{" "}
              Company
            </h1>
            <p className="text-lg text-gray-600 leading-8 mb-6 font-outfit ">
              Are you looking for a top custom web development company to boost
              your online presence? SofiLoft Technologies creates tailor-made,
              high-performance websites designed to meet your unique business
              needs. Our responsive sites are optimized for speed, security, and
              scalability to deliver an outstanding user experience and improve
              search engine rankings.
            </p>

            <p className="text-lg text-gray-600 leading-8 mb-8 font-outfit">
              Partner with SofiLoft Technologies to build a website that
              attracts and converts visitors into loyal customers. Share your
              project requirements today and discover how our expert developers
              can help grow your business and enhance your digital visibility.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/ContactForm"
              className="px-6 py-3 rounded-md text-white font-medium bg-orange-500 hover:to-pink-700 transition"
            >
              Book A Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Right Image (Hidden on mobile) */}
      <div className="hidden md:flex md:w-5/12 justify-center pt-20">
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



  

      {/* ========= THIRD SECTION ========= */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Top{" "}
            <span className="text-orange-500">Web Development</span>{" "}
            Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            
Transform your business with SofiLoft Technologies’ comprehensive website development solutions. We offer expert services designed to deliver powerful performance, seamless user experiences, and measurable results for every industry.

          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-[#fbfbfb] shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4 shadow-lg`}>
                {service.icon}
              </div>
             <h3 className="text-[24px] font-bold mb-2 text-[#000]">{service.title}</h3>
              <p className=" leading-[28px] text-[#616b80]">
  {service.description}
</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========= FOURTH SECTION ========= */}
      <section className="bg-gray-600 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">

Custom Web Development Tailored to Your Industry Needs

          </h2>
          <p className="text-gray-300 max-w-6xl mx-auto">
Gain a competitive edge with customized web development designed specifically for your business sector. From healthcare and education to finance and more, SofiLoft Technologies crafts innovative, feature-rich web solutions that drive efficiency, enhance user experience, and support sustainable growth in today’s fast-evolving digital marketplace.
           </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryServices.map((service, index) => (
            <div key={index} className=" rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              style={{ backgroundColor: "#2d2d2d" }}>
              <img src={service.img} alt={service.title} className="w-full h-48 " />
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-[18px] leading-text-sm [28px] font-[Outfit,sans-serif] text-[rgb(255_255_255/59%)]">
  {service.desc}
</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e0a85d] flex flex-col md:flex-row items-center justify-between px-2 md:px-16 py-4 md:py-2">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-white font-bold text-3xl md:text-4xl leading-snug">
           Need Help with Custom Website Development?

          </h1>
        
         <Link to="/contactform">
  <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
    Get In Touch
  </button>
</Link>
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
       <Portfolio /> 

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
