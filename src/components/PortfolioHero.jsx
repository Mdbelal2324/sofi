// src/components/PortfolioHero.jsx
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Project1 from "../assets/image/Project1.png";
import Project2 from '../assets/image/Project2.png';
import Project3 from '../assets/image/Project3.png';
import Project4 from '../assets/image/Project4.png';
import Project5 from '../assets/image/Project5.png';
import Project6 from '../assets/image/Project6.png';
import Task from "../assets/image/Task.png";
import Ship from "../assets/image/Ship.png";
import Yoga from "../assets/image/Yoga.png";
import Praved from "../assets/image/Praved.png";
import Pizza  from "../assets/image/Pizza.png";
import  Mag from "../assets/image/Mag.png";
import Rental from "../assets/image/Rental.png";
import Anti from "../assets/image/Anti.png"
import Beauty from "../assets/image/Beauty.png";
import Jawel from "../assets/image/jawel.png";
import This from "../assets/image/This.png"; 
import Lead  from "../assets/image/Lead.png";
import Money from "../assets/image/Money.png";
import Pick from "../assets/image/Pick.png";
import Brain from "../assets/image/Brain.Png";
import Ejad from "../assets/image/Ejad.png";
import Host from   "../assets/image/Host.png";
import Nutra from "../assets/image/Nutra.png";
import Exxo from "../assets/image/Exxo.png";
import Adflex from "../assets/image/Adflex.png";
import Esc from "../assets/image/Esc.png";



const projects = [
  {
    id: 1,
    title: "Fn76",
    category: "WEB",
    image: Project1,
    description:
      "Agent-powered social listening that surfaces live buying-intent conversations across Reddit, LinkedIn, and X, with drafted replies and GTM agents like Muse to turn discussions into qualified traffic and signups",
    link: "https://www.fn7.io/",
  },
  {
    id: 2,
    title: "Task Drive",
    category: "WEB",
    description:
      "Global talent recruiting powered by the Love Not Fear framework. Structured sourcing, screening, and selection with six-month replacement guarantee.",
    link: "https://taskdrive.com/",
    image: Task,
  },
  {
    id: 3,
    title: "Audience Plan",
    category: "WEB",
    description:
      "Growth platform for creators and brands. Connects YouTube, TikTok, and Spotify content with real audiences, not bots—campaigns optimize visibility, engagement, credibility, and transparent analytics for sustainable growth.",
    link: "https://www.audienceplan.com/",
    image: Project2,
  },
  {
    id: 4,
    title: "Fleetx",
    category: "WEB",
    description:
      "AI-powered fleet and logistics OS. Connects assets, workflows, and IoT for real-time visibility, predictive maintenance, transport ERP, TMS, and analytics that reduce costs and improve safety and uptime.",
    link: "https://www.fleetx.io/",
    image:Project3,
  },
  {
    id: 5,
    title: "Hira Fragrances",
    category: "WEB",
    description:
      "Modern fragrance storefront with editorial storytelling. Curated collections, bold visuals, and social proof deliver premium D2C shopping experience.",
    link: "https://hirafragrances.com/",
    image: Project4,
  },
  {
    id: 6,
    title: "Yuminu Trition",
    category: "WEB",
    description:
      "Trusted wellness brand storefront offering vitamin gummies and supplements. Optimized PDPs, subscriptions, and reviews drive conversions.",
    link: "https://www.yuminutrition.com/",
    image: Project5,
  },
  {
    id: 7,
    title: "Ship Clues",
    category: "WEB",
    description:
      "Shipping intelligence and logistics platform. Enables consignment management, dispatch planning, and ERP features with tracking and analytics.",
    link: "https://www.shipclues.com/",
    image: Ship,
  },
  {
    id: 8,
    title: "Rentn Drive",
    category: "WEB",
    description:
      "Self-drive car rental platform for India. Simple search, pricing transparency, and booking flow with location filters and mobile-first design.",
    link: "https://rentndrive.co.in/",
    image: Rental,
  },
  {
    id: 9,
    title: "Crust Pizzaco",
    category: "WEB",
    description:
      "Restaurant website showcasing menus, locations, and online ordering. Location finder, mouth-watering imagery, and promotions increase bookings and delivery conversions.",
    link: "https://www.crustpizzaco.com/home",
    image: Pizza,
  },
  {
    id: 10,
    title: "Retik",
    category: "WEB",
    description:
      "Web3 ecosystem brand presence. Token, roadmap, and utility sections highlight vision and community with clear CTAs for whitepaper, staking and listings.",
    link: "https://retik.com/",
    image: Project6,
  },
  {
    id: 11,
    title: "Paved",
    category: "WEB",
    description:
      "Premium newsletter sponsorship marketplace. Brands book placements with verified publishers; creators monetize inventory with transparent pricing, audience data, and streamlined campaign management.",
    link: "https://www.paved.com/",
    image: Praved,
  },
  {
    id: 12,
    title: "Ekam Yoga Academy",
    category: "WEB",
    description:
      "Education site for yoga teacher training and workshops. Program outlines, schedules, and application forms with testimonials and resources to support enrollment.",
    link: "https://ekamyogaacademy.com/",
    image: Yoga,
  },
  {
    id: 13,
    title: "Magnolia Jewellery",
    category: "WEB",
    description:
      "Elegant online boutique for fine jewellery. High-resolution product imagery, collection storytelling, secure checkout, and size guides deliver a refined, trust-centric shopping experience.",
    link: "https://www.magnolia-jewellery.com/",
    image: Mag,
  },
    
  {
    id: 14,
    title: "Task Derive",
    category: "PHP",
    description:
      "Custom PHP components powering forms, candidate pipelines, and content modules for fast performance and flexibility.ustom Salesforce CRM setup and automation for streamlined business workflows.",
    link: "https://taskdrive.com/",
    image: Task,
  },
  {
    id: 15,
    title: ".Shipclues",
    category: "PHP",
    description:
      "PHP-based logistics workflows: consignment ops, dispatch planner, freight audit, and role-based dashboards with secure authentication.",
    link: " https://www.shipclues.com/",
    image: Ship,
  },
  {
    id: 16,
    title: "Nutrahara",
    category: "PHP",
    description:
      "Custom PHP integrations for catalog, reviews, and marketing automations to improve conversion and manage content efficiently.",
    link: "https://nutrahara.com/",
    image: Nutra,
  },
  {
    id: 17,
    title: "Ejadah Medical LLC",
    category: "PHP",
    description:
      "B2B product management with PHP-driven inquiry handling, spec sheets, and distributor workflows..",
    link: "https://www.ejadah-med.com/",
    image: Ejad,
  },
   {
    id: 18,
    title: "Adflex",
    category: "PHP",
    description:
      "Affiliate performance platform built with PHP—offer management, tracking, and analytics for advertisers and partners.",
    link: "https://adflex.io/",
    image: Adflex,
  },
   {
    id: 19,
    title: "Escenders",
    category: "PHP",
    description:
      "Corporate site with PHP backend modules for services, careers, and contact flows, optimized for speed and maintainability..",
    link: "https://escenders.com/",
    image: Esc,
  },
  
   {
    id: 20,
    title: "Task Drive",
    category: "WordPress",
    description:
      " WordPress site highlighting recruitingContent‑rich WordPress site highlighting recruiting methodology, case studies, FAQs, and pricing transparency to streamline lead capture.",
    link: "https://taskdrive.com/",
    image: Task,
  },
  {
    id: 21,
    title: "Lead Examine",
    category: "WordPress",
    description:
      " Lead generation analytics site on WordPress with solutions pages, benefits messaging, and conversion‑focused CTAs for demos.",
    link: "https://www.leadexamine.com/",
    image: Lead,
  },
  {
    id: 22,
    title: "Edu Moneymastery",
    category: "WordPress",
    description:
      " Education portal landing pages for financial literacy programs. Curricula, outcomes, and enrollment CTAs support Education portal landing pages for financial literacy programs. Curricula, outcomes, and enrollment CTAs support signups...",
    link: "https://edu.moneymasteryprograms.com/",
    image: Money,
  },
  {
    id: 23,
    title: "Pickn Treat",
    category: "WordPress",
    description: " Food and snack brand site with product showcases, store locator, and promotions to drive retail and D2C interest.",
    link: "https://www.pickntreat.in/",
    image: Pick,
  },
    {
    id: 24,
    title: "Brainiact",
    category: "WordPress",
    description: "Growth consulting site on WordPress. Services, success stories, and booking forms enable streamlined discovery and consultation requests",
    link: "https://www.brainiact.com.au/",
    image: Brain, 
  },
      {
    id: 25,
    title: "Ejadah Medical LLC",
    category: "WordPress",
    description: "Healthcare products catalog with compliance info, product specs, and inquiry forms for B2B procurement",
    link: " https://www.ejadah-med.com/",
    image: Ejad,
  },
     {
    id: 26,
    title: "Rainy Host",
    category: "WordPress",
    description: "Hosting provider site built for clarity—plans, features, SLA highlights, and checkout links drive trial and purchase.",
    link: "https://rainyhost.com/",
    image: Host,
  },
     {
    id: 27,
    title: "Nutrahara",
    category: "WordPress",
    description: "Wellness WordPress presence with blog, resources, and SEO structure supporting e‑commerce funnel.",
    link: "https://nutrahara.com/",
    image: Nutra,
  },
     {
    id: 28,
    title: "Exxaro Tiles",
    category: "WordPress",
    description: "B2B/B2C tile showcase with galleries, specs, and dealer contact flows optimized for inquiries..",
    link: "https://www.exxarotiles.com/",
    image: Exxo,
  },
   {
    id: 29,
    title: "Yuminu Trition",
    category: "Shopify",
    description:
      "Trusted wellness brand storefront offer Conversion‑focused Shopify build with subscriptions, bundles, and reviews. Optimized navigation, PDP storytelling, and checkout enhancements drive repeat purchases and AOV growth.ing vitamin gummies and supplements. Optimized PDPs, subscriptions, and reviews drive conversions.",
    link: "https://www.yuminutrition.com/",
    image: Project5,
  },
   {
    id: 30,
    title: "Hira Fragrances",
    category: "Shopify",
    description:
      "Modern fragrance stoShopify storefront blending lifestyle storytelling and streamlined shopping. Variant selectors, gifting options, and mobile performance elevate discovery-to-checkout experiencerefront with editorial storytelling. Curated collections, bold visuals, and social proof deliver premium D2C shopping experience.",
    link: "https://hirafragrances.com/",
    image: Project4,
  },
  {
    id: 31,
    title: "Anthony Skincare For Men",
    category: "Shopify",
    description:
      " Men’s skincare Shopify store with clean PDPs, skincare routines, and education. Subscription options and merchandising increase retention and average order value",
    link: "https://anthony.com/",
    image: Anti,
  },
  {
    id: 32,
    title: "French Beauty",
    category: "Shopify",
    description:
      " Beauty marketplace on Shopify. Faceted search, routine builders, and rich PDPs improve findability and conversions across cosmetics, haircare, and skincare brands",
    link: " https://frenchbeautyco.com.au/",
    image: Beauty,
  },
   {
    id: 33,
    title: "Thradn Button",
    category: "Shopify",
    description:
      " Fashion Shopify store with filters, size charts, lookbooks, and COD‑friendly checkout tailored to regional buyer preferences and mobile browsing habits.",
    link: "  https://threadnbutton.com/",
    image: This,
  },
   {
    id: 34,
    title: "Addessi Jewelry Store",
    category: "Shopify",
    description:
      " Luxury jeweler on Shopify with appointment booking, certification details, financing and HD galleries to support trust and high‑consideration purchases",
    link: "https://addessijewelers.com/",
    image: Jawel,
  },
];

export default function PortfolioHero() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0a1f44] to-[#112d5c] pt-40 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="italic underline font-serif text-white">Transforming</span>
            <span className="ml-2 text-white">Crafting</span>
            <span className="ml-2 text-white">Opportunities</span>
            <br />
            <span></span>{" "}
            <span className="italic underline text-white font-serif">From Your Business Vision</span>
          </h1>
          <p className="mt-6 text-lg text-white text-gray-700">
           At Sofiloft, we craft world-class mobile & web solutions for SMEs and global enterprises. Check out our portfolio and see the difference we create
          </p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <div className="px-4 py-14 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["ALL", "WEB","Shopify", "WordPress", "PHP"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded font-medium transition ${
                  activeFilter === cat
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Cards (same as slider design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative group"
            >
              {/* Image */}
              <a href={project.link}>
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>

              {/* Content */}
              <div className="p-6 mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-medium hover:underline inline-flex items-center gap-2"
                >
                  View Project <FaArrowRightLong />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
