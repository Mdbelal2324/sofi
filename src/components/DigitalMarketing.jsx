import React, { useState } from "react";
import { FaBullhorn, FaSearchDollar, FaChartLine } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";
import web5 from "../assets/image/web4.png";
import porto1 from "../assets/image/E-commerce.png";

const DigitalMarketing = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      icon: <FaBullhorn size={28} />,
      title: "Social Media Marketing",
      description:
        "Boost your brand presence across platforms like Facebook, Instagram, and LinkedIn with our targeted social media marketing strategies.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: <FaSearchDollar size={28} />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your search engine rankings, increase website traffic, and improve online visibility through our advanced SEO techniques.",
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaChartLine size={28} />,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Run effective Google Ads and social media ad campaigns to get instant traffic and higher conversions.",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaBullhorn size={28} />,
      title: "Content Marketing",
      description:
        "Engage your audience with high-quality blogs, videos, and infographics designed to build trust and authority.",
      color: "bg-green-500",
    },
    {
      id: 5,
      icon: <FaSearchDollar size={28} />,
      title: "Email Marketing",
      description:
        "Reach your customers directly with personalized and automated email campaigns that drive results.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaChartLine size={28} />,
      title: "Analytics & Reporting",
      description:
        "Track your campaign performance and ROI with detailed analytics and custom reporting dashboards.",
      color: "bg-pink-500",
    },
  ];

  const industryServices = [
    {
      title: "E-commerce",
      img: web4,
      desc: "Increase your store's sales with targeted ads, SEO, and social media promotions for your products.",
    },
    {
      title: "Real Estate",
      img: web4,
      desc: "Generate high-quality leads through location-based targeting and property-focused campaigns.",
    },
    {
      title: "Healthcare",
      img: web4,
      desc: "Promote your clinic or hospital services through digital ads, informative content, and SEO.",
    },
    {
      title: "Education",
      img: web4,
      desc: "Attract students with engaging social media content and search-optimized landing pages.",
    },
    {
      title: "Travel & Tourism",
      img: web4,
      desc: "Inspire travelers with visually appealing campaigns and targeted promotional offers.",
    },
    {
      title: "Food & Restaurant",
      img: web4,
      desc: "Drive more customers to your restaurant through online reviews, social ads, and influencer marketing.",
    },
  ];

  const techStacks = [
    {
      category: "Advertising Platforms",
      items: [
        { name: "Google Ads", img: "/images/react.png" },
        { name: "Facebook Ads", img: "/images/angular.png" },
        { name: "Instagram Ads", img: "/images/vue.png" },
        { name: "LinkedIn Ads", img: "/images/knockout.png" },
      ],
    },
    {
      category: "SEO Tools",
      items: [
        { name: "Ahrefs", img: "/images/dotnetcore.png" },
        { name: "SEMRush", img: "/images/aspnetmvc.png" },
        { name: "Moz", img: "/images/python.png" },
        { name: "Google Search Console", img: "/images/nodejs.png" },
      ],
    },
    {
      category: "Email Marketing",
      items: [
        { name: "Mailchimp", img: "/images/mysql.png" },
        { name: "Sendinblue", img: "/images/postgresql.png" },
        { name: "ConvertKit", img: "/images/oracle.png" },
        { name: "HubSpot", img: "/images/mongodb.png" },
      ],
    },
    {
      category: "Analytics",
      items: [
        { name: "Google Analytics", img: "/images/wcf.png" },
        { name: "Hotjar", img: "/images/webapi.png" },
        { name: "Mixpanel", img: "/images/restapi.png" },
        { name: "Tableau", img: "/images/soap.png" },
      ],
    },
    {
      category: "Content Tools",
      items: [
        { name: "Canva", img: "/images/android.png" },
        { name: "Figma", img: "/images/flutter.png" },
        { name: "Adobe Photoshop", img: "/images/xml.png" },
        { name: "InDesign", img: "/images/material.png" },
      ],
    },
    {
      category: "Automation",
      items: [
        { name: "Zapier", img: "/images/googlecloud.png" },
        { name: "ActiveCampaign", img: "/images/azure.png" },
        { name: "Hootsuite", img: "/images/aws.png" },
        { name: "Buffer", img: "/images/devops.png" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see digital marketing results?",
      answer:
        "Typically, SEO results can take 3-6 months, while PPC and social media ads can generate results within days.",
    },
    {
      question: "Do you provide a complete digital marketing package?",
      answer:
        "Yes, we offer a 360° digital marketing package including SEO, social media, PPC, email marketing, and content creation.",
    },
    {
      question: "Can you help with local business promotions?",
      answer:
        "Absolutely! We specialize in local SEO and targeted campaigns to increase your presence in your city or region.",
    },
    {
      question: "Do you offer monthly reporting?",
      answer:
        "Yes, we provide detailed monthly reports to track campaign performance and ROI.",
    },
  ];

  return (
    <div id="digitalmarketing">
      {/* First Section */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
                Custom{" "}
                <span className="relative text-red-500">
                  Digital Marketing
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                </span>{" "}
                Company
              </h1>
              <p className="text-lg text-gray-600 leading-8 mb-6 font-outfit">
                Elevate your brand with a fully customized digital marketing
                strategy tailored to your business goals. Our team ensures your
                campaigns reach the right audience at the right time.
              </p>
              <p className="text-lg text-gray-600 leading-8 mb-8 font-outfit">
                Partner with the leading digital marketing experts and start
                growing your business today!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="javascript:;"
                  className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700"
                >
                  Get In Touch
                </a>
                <a
                  href="https://devtechnosys.com/request-a-quote.php"
                  className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-pink-500 to-pink-600"
                >
                  Book A Consultation
                </a>
              </div>
            </div>
            <div className="md:w-5/12 flex justify-center pt-20">
              <img src={web2} alt="Digital Marketing" className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain same but with updated text */}
      {/* ... copy your original JSX structure here and replace only text */}
    </div>
  );
};

export default DigitalMarketing;
