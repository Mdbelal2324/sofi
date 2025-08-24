// DigitalMarketing.jsx
import React, { useState } from "react";
import { FaBullhorn, FaSearchDollar, FaChartPie, FaUsers, FaCogs, FaLaptopCode } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import web2 from "../assets/image/web1.webp";
import web3 from "../assets/image/web2.webp";
import web4 from "../assets/image/web3.png";

const DigitalMarketing = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Digital Marketing Services (Updated)
  const services = [
    {
      id: 1,
      icon: <FaBullhorn size={28} />,
      title: "Search Engine Optimization (SEO)",
      description:
        "IOur SEO services improve your website’s visibility on major search engines by optimizing on-page content, technical SEO, and building quality backlinks. We focus on increasing organic traffic, enhancing user experience, and boosting search rankings, helping your business attract relevant and high-converting visitors.",
      color: "bg-green-500",
    },
    {
      id: 2,
      icon: <FaSearchDollar size={28} />,
      title: " Social Media Optimization (SMO)",
      description:
        "We enhance your social media profiles by optimizing content, hashtags, and engagement strategies on platforms such as Facebook, Instagram, and LinkedIn. Our SMO efforts increase your brand’s reach, influence, and interaction with target audiences to build a loyal online community.",
      color: "bg-red-500",
    },
    {
      id: 3,
      icon: <FaChartPie size={28} />,
      title: "Social Media Marketing",
      description:
        "Leverage targeted social media advertising campaigns across channels like Facebook, Instagram, Twitter, and LinkedIn. Our SMM strategies focus on creating engaging content, managing paid ads, and analyzing performance to increase brand awareness, generate leads, and boost conversions.",
      color: "bg-blue-500",
    },
    {
      id: 4,
      icon: <FaUsers size={28} />,
      title: "Lead Generation",
      description:
        "We design and execute lead generation campaigns tailored to your niche, using a mix of content marketing, PPC, email marketing, and social media initiatives. Our approach drives qualified leads, nurtures prospects, and supports your sales funnel for stronger business growth..",
      color: "bg-purple-500",
    },
    {
      id: 5,
      icon: <FaLaptopCode size={28} />,
      title: "Paid Ads Management (Google & Meta Ads)",
      description:
        "Our comprehensive paid ads management covers Google Ads and Meta (Facebook & Instagram) ads. We create data-driven advertising campaigns designed to maximize your budget, drive targeted traffic, and increase conversions through precise audience targeting and continuous optimization.",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      icon: <FaCogs size={28} />,
      title: "Branding",
      description:
        "We craft consistent, impactful branding strategies that define your business identity across all digital channels. Our services include logo design, brand messaging, visual elements, and brand positioning to help you build trust and recognition with your target market..",
      color: "bg-pink-500",
    },
    {
      id: 7,
      icon: <FaChartPie size={28} />,
      title: "Public Relations (PR)",
      description:
        "Our PR services build and maintain a positive public image through press releases, media outreach, influencer collaborations, and reputation management. We help you communicate your brand story effectively, increase credibility, and manage your online presence.",
      color: "bg-indigo-500",
    },
    {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "LinkedIn Marketing",
      description:
        "Enhance your B2B presence with tailored LinkedIn marketing strategies. We optimize your LinkedIn page, create compelling content, run sponsored campaigns, and foster network growth to generate valuable leads and professional connections.",
      color: "bg-orange-500",
    },
      {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Instagram Page Optimization",
      description:
        "We optimize your Instagram business profile by crafting engaging posts, hashtags, stories, and growth tactics. Our approach improves follower engagement, brand visibility, and leverages Instagram shopping features to increase conversions.",
      color: "bg-orange-500",
    },
      {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Video Editing",
      description:
        "Our professional video editing services create dynamic, engaging promotional videos, tutorials, and social media clips. We combine creative visuals, sound design, and motion graphics to help you tell your brand’s story and capture audience attention effectively..",
      color: "bg-orange-500",
    },
      {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Graphic Designing",
      description:
        "From social media graphics to website visuals and marketing collateral, our graphic design team creates eye-catching and brand-consistent graphics. We help you communicate your message clearly while enhancing the overall aesthetics of your digital presence..",
      color: "bg-orange-500",
    },
      {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Email Marketing",
      description:
        "We develop targeted email marketing campaigns that nurture leads, engage customers, and drive repeat sales. Our services include designing responsive templates, personalized content, and automation workflows to maximize your email marketing ROI.",
      color: "bg-orange-500",
    },
     {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Influencer Marketing",
      description:
        "Collaborate with industry influencers to authentically promote your brand and products. Our influencer marketing strategies identify key personalities to boost your reach, credibility, and engagement, helping you tap into trusted networks for more impactful campaign results.",
      color: "bg-orange-500",
    },
     {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Email Marketing",
      description:
        "Our content marketing services focus on creating valuable, relevant content that attracts and retains your target audience. We develop blogs, articles, infographics, and more to establish your brand authority, improve SEO, and support lead generation.",
      color: "bg-orange-500",
    },
     {
      id: 8,
      icon: <FaSearchDollar size={28} />,
      title: "Meta and Google Ads",
      description:
        "In addition to paid ads management, we specialize in creating and optimizing high-impact advertising campaigns specifically on Google and Meta platforms. These include search ads, display ads, shopping campaigns, and social media ads designed to increase traffic, conversions, and sales efficiently.",
      color: "bg-orange-500",
    },
  ];

  // ✅ Industry-Specific Solutions (Updated)
  const industryServices = [
    { title: "Retail", img: web4, desc: "Our digital marketing strategies for retail businesses focus on driving online and in-store traffic through targeted ad campaigns, personalized email marketing, and social media engagement. We help retailers build brand loyalty, promote seasonal offers, and increase conversions by reaching the right customers with compelling messaging." },
    { title: "Healthcare", img: web4, desc: "We provide healthcare providers with compliant digital marketing solutions that enhance patient engagement and improve service visibility. Our strategies include content marketing, SEO for medical services, social media education campaigns, and reputation management to help build trust and grow patient bases.." },
    { title: "Real Estate", img: web4, desc: "Our real estate digital marketing solutions focus on lead generation, listing promotion, and brand building. We optimize websites for local SEO, run targeted paid ads, and engage prospective buyers and renters via social media and email marketing to speed up sales cycles." },
    { title: "Education", img: web4, desc: "Our education marketing services help institutions attract and retain students through targeted digital campaigns. We develop content-rich websites, optimize SEO for local and niche searches, manage social media outreach, and create lead generation funnels that simplify the enrollment process." },
    { title: "Travel & Tourism", img: web4, desc: "We help travel companies reach global audiences by promoting destinations, packages, and experiences through search engine marketing, immersive social media content, and personalized email marketing. Our campaigns are designed to inspire travelers and encourage bookings year-round." },
    { title: "Finance & Banking", img: web4, desc: "We assist finance firms in building trust and visibility through content marketing, social media campaigns focused on financial literacy, and targeted ads. Our comprehensive approach supports lead generation, client engagement, and reputation management in highly regulated industries." },
    { title: "Food & Restaurant", img: web4, desc: "We create appetizing digital marketing campaigns for food and restaurant businesses that drive reservations, online orders, and customer loyalty. Our tactics include localized SEO, social media promotions, influencer marketing, and email marketing to keep customers coming back." },
    { title: "Technology & Startups", img: web4, desc: "For tech companies and startups, we deliver agile digital marketing strategies that build brand awareness, attract investors, and shorten sales cycles. Our services range from product launches and viral campaigns to content marketing and targeted paid ads that fuel growth"},
    { title: "E-commerce", img: web4, desc: "For e-commerce businesses, we focus on driving sales and increasing customer retention through strategies including paid advertising, social media marketing, email campaigns, and influencer collaborations. Our goal is to boost traffic, enhance user experience, and convert visitors into loyal customers." },
  ];

  // ✅ Tech Stacks (Unchanged)
  const techStacks = [
    {
      category: "Marketing Platforms",
      items: [
        { name: "Google Ads", img: "/images/googleads.png" },
        { name: "Facebook Ads", img: "/images/facebookads.png" },
        { name: "HubSpot", img: "/images/hubspot.png" },
        { name: "Mailchimp", img: "/images/mailchimp.png" },
      ],
    },
    {
      category: "Analytics & SEO Tools",
      items: [
        { name: "Google Analytics", img: "/images/ga.png" },
        { name: "SEMrush", img: "/images/semrush.png" },
        { name: "Ahrefs", img: "/images/ahrefs.png" },
        { name: "Moz", img: "/images/moz.png" },
      ],
    },
    {
      category: "Social Media Tools",
      items: [
        { name: "Hootsuite", img: "/images/hootsuite.png" },
        { name: "Buffer", img: "/images/buffer.png" },
        { name: "Canva", img: "/images/canva.png" },
        { name: "Later", img: "/images/later.png" },
      ],
    },
    {
      category: "Automation Tools",
      items: [
        { name: "Zapier", img: "/images/zapier.png" },
        { name: "ActiveCampaign", img: "/images/activecampaign.png" },
        { name: "HubSpot Automation", img: "/images/hubspot.png" },
        { name: "Marketo", img: "/images/marketo.png" },
      ],
    },
  ];

  // ✅ FAQs (Updated)
  const faqs = [
   {
  question: "What digital marketing services do you offer?",
  answer:
    "We offer SEO, SMO, SMM, lead generation, paid ads, branding, PR, LinkedIn and Instagram optimization, video editing, graphic designing, influencer marketing, content marketing, and Google & Meta ads.",
},
{
  question: "How can digital marketing improve my business?",
  answer:
    "Digital marketing increases your online visibility, drives targeted traffic, engages customers, enhances brand reputation, and ultimately increases sales and ROI.",
},
{
  question: "How long does it take to see results from digital marketing?",
  answer:
    "SEO and organic social media efforts typically show results in 3-6 months, while paid advertising and lead generation campaigns can deliver quicker outcomes.",
},
{
  question: "Do you provide customized digital marketing plans?",
  answer:
    "Yes, we tailor strategies to fit your industry, business goals, audience, and budget to maximize effectiveness.",
},
{
  question: "Can you manage social media accounts for my business?",
  answer:
    "Absolutely. We offer social media management, content creation, community engagement, and paid advertising across major platforms.",
},
{
  question: "What platforms do you specialize in for paid advertising?",
  answer:
    "We specialize in Google Ads, Meta (Facebook and Instagram) ads, LinkedIn Ads, YouTube Ads, and programmatic advertising.",
},
{
  question: "How do you measure digital marketing success?",
  answer:
    "We use analytics tools to track KPIs such as website traffic, conversion rates, click-through rates, engagement, lead quality, and ROI.",
},
{
  question: "Is influencer marketing effective for all industries?",
  answer:
    "When aligned with your target audience, influencer marketing is highly effective across many industries to build trust and increase sales.",
},
{
  question: "Do you provide content marketing services?",
  answer:
    "Yes, we create blogs, articles, infographics, and video content that educate and engage your audience while supporting SEO and lead generation.",
},
{
  question: "How do you ensure my digital marketing budget is used efficiently?",
  answer:
    "Our experts continuously monitor and optimize campaigns using data-driven insights to maximize performance and minimize wasted spend.",
},

  ];

  return (
    <div id="digitalmarketing">
      {/* HERO SECTION (Updated) */}
      <section className="nft-main-banner-sec py-12">
        <div className="container mx-auto px-6 md:px-28">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                SofiLoft Technologies – Expert {" "}
                <span className="relative text-red-500">
                  Digital Marketing
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                </span>{" "}
                Services
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                At SofiLoft Technologies, we understand that in today’s digital world, a strong online presence is crucial for business success. Our comprehensive digital marketing solutions are crafted to help brands of all sizes connect with their target audiences, increase visibility, and drive meaningful engagement. Leveraging the latest tools and strategies, we deliver customized campaigns that optimize your marketing budget to maximize return on investment. 
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-700">
                  Get Started
                </a>
                <a href="#" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-pink-500 to-pink-600">
                  Free Consultation
                </a>
              </div>
            </div>
            <div className="md:w-5/12 flex justify-center pt-20">
              <img src={web2} alt="Digital Marketing" className="rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION (Unchanged) */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img src={web3} alt="Digital Marketing Services" className="max-w-sm w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Data-Driven <span className="text-pink-500 underline">Marketing Solutions</span>
            </h2>
            <p className="mt-6 text-gray-600">
              Our digital strategies are designed to deliver measurable results and long-term growth for your business.
            </p>
            <button className="mt-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-md">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (Updated) */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-pink-500">Digital Marketing</span> Services
          </h2>
          <p className="text-gray-600 mt-3">
            Take your business to new heights with our comprehensive marketing services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
              <div className={`w-14 h-14 ${service.color} text-white flex items-center justify-center rounded-full mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION (Updated) */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
Industry-Specific Digital Marketing Solutions
</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
           Our expertise extends across a wide range of sectors. We tailor digital marketing strategies to fit any industry’s unique needs, ensuring effective campaigns that deliver measurable results and help your business thrive.
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

      {/* TECH STACK SECTION (Unchanged) */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tools & Tech We Use
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

      {/* FAQ SECTION (Updated) */}
      <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
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

export default DigitalMarketing;
