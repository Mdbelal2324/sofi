// src/components/PortfolioHero.jsx
import React, { useState } from "react";
import development from "../assets/image/Fn7.png";

const projects = [
  // Existing
  {
    id: 1,
    title: "Fn7",
    category: "WEB",
    description:
      "Agent-powered social listening that surfaces live buying-intent conversations across Reddit, LinkedIn, and X, with drafted replies and GTM agents like Muse to turn discussions into qualified traffic and signups.",
    link: "https://www.fn7.io/",
    image: development,
  },

  {
    id: 2,
    title: "Task Drive",
    category: "WEB",
    description:
      " Global talent recruiting powered by the Love Not Fear framework. Structured sourcing, screening, and selection with six‑month replacement guarantee; places mission‑aligned hires across support, sales, PM, and technical roles.",
    link: "https://taskdrive.com/",
    image: "/images/fantasy-sports.jpg",
  },
  {
    id: 3,
    title: "Audience Plan",
    category: "WEB",
    description:
      " Growth platform for creators and brands. Connects YouTube, TikTok, and Spotify content with real audiences, not bots—campaigns optimize visibility, engagement, credibility, and transparent analytics for sustainable channel growth.",
    link: " https://www.audienceplan.com/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 4,
    title: "Fleetx",
    category: "WEB",
    description:
      " AI-powered fleet and logistics OS. Connects assets, workflows, and IoT for real-time visibility, predictive maintenance, transport ERP, TMS, and analytics that reduce costs and improve safety and uptime.e—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://www.fleetx.io/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 5,
    title: "Hira Fragrances",
    category: "WEB",
    description:
      "Modern fragrance storefront with editorial storytelling. Curated collections, bold visuals, and social proof deliver premium D2C shopping experience with secure checkout and streamlined product discovery across devices.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: " https://hirafragrances.com/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 6,
    title: "Yuminu Trition",
    category: "WEB",
    description:
      "Trusted wellness brand storefront offering vitamin gummies and supplements. Optimized PDPs, subscriptions, and reviews drive conversions, with fast mobile experience and clear benefits messaging across categories.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://www.yuminutrition.com/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 7,
    title: "Ship Clues",
    category: "WEB",
    description:
      "Shipping intelligence and logistics platform. Enables consignment management, dispatch planning, and ERP features with tracking and analytics for transporters and 3PLs to digitize daily operations end‑to‑end.nleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://www.shipclues.com/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 8,
    title: "Rentn Drive",
    category: "WEB",
    description:
      "Self‑drive car rental platform for India. Simple search, pricing transparency, and booking flow with location filters and mobile-first design to improve discovery, availability, and checkout speed.ltimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://rentndrive.co.in/",
    image: "/images/fantasy-sports.jpg",
  },  {
    id: 9,
    title: "Crust Pizzaco",
    category: "WEB",
    description:
      "Restaurant website showcasing menus, locations, and online ordering. Location finder, mouth‑watering imagery, and promotions increase table bookings and delivery conversions seamlessly across devices.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://www.crustpizzaco.com/home",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 10,
    title: "Retik",
    category: "WEB",
    description:
      "Web3 ecosystem brand presence. Token, roadmap, and utility sections highlight vision and community with clear calls to action for whitepaper, staking, and exchange listings.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://retik.com/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 11,
    title: "Paved",
    category: "WEB",
    description:
      " Premium newsletter sponsorship marketplace. Brands book placements with verified publishers; creators monetize inventory with transparent pricing, audience data, and streamlined campaign management.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: " https://www.paved.com/",
    image: "/images/fantasy-sports.jpg",
  },
    {
    id: 12,
    title: "Ekam Yoga Academy",
    category: "WEB",
    description:
      "Education site for yoga teacher training and workshops. Program outlines, schedules, and application forms with testimonials and resources to support enrollment decisions and student onboarding.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: " https://ekamyogaacademy.com/",
    image: "/images/fantasy-sports.jpg",
  },
   {
    id: 13,
    title: "Magnolia jewellery",
    category: "WEB",
    description:
      " Elegant online boutique for fine jewellery. High‑resolution product imagery, collection storytelling, secure checkout, and size guides deliver a refined, trust‑centric shopping experience.Education site for yoga teacher training and workshops. Program outlines, schedules, and application forms with testimonials and resources to support enrollment decisions and student onboarding.Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "https://www.magnolia-jewellery.com/",
    image: "/images/fantasy-sports.jpg",
  },

    {
    id: 14,
    title: "Task Drive",
    category: "APP",
    description:
      " Global talent recruiting powered by the Love Not Fear framework. Structured sourcing, screening, and selection with six‑month replacement guarantee; places mission‑aligned hires across support, sales, PM, and technical roles.",
    link: " https://taskdrive.com/",
    image: "/images/rv-camping.jpg",
  },

  
  


  // Salesforce category
  {
    id: 5,
    title: "Salesforce CRM Setup",
    category: "Salesforce",
    description:
      "Custom Salesforce CRM setup and automation for streamlined business workflows.",
    link: "#",
    image: "/images/salesforce1.jpg",
  },
  {
    id: 6,
    title: "Salesforce Analytics Dashboard",
    category: "Salesforce",
    description:
      "Advanced analytics and reporting dashboard for Salesforce users.",
    link: "#",
    image: "/images/salesforce2.jpg",
  },
  {
    id: 7,
    title: "Salesforce API Integration",
    category: "Salesforce",
    description:
      "Integrating Salesforce with third-party apps for data synchronization.",
    link: "#",
    image: "/images/salesforce3.jpg",
  },
  {
    id: 8,
    title: "Salesforce Mobile App",
    category: "Salesforce",
    description:
      "Custom mobile app powered by Salesforce data for field teams.",
    link: "#",
    image: "/images/salesforce4.jpg",
  },

  // WordPress category
  {
    id: 9,
    title: "WordPress Blog Website",
    category: "WordPress",
    description:
      "A clean, SEO-friendly WordPress blog with fast loading speed.",
    link: "#",
    image: "/images/wordpress1.jpg",
  },
  {
    id: 10,
    title: "E-Commerce Store",
    category: "WordPress",
    description:
      "Custom WooCommerce store built on WordPress for a retail brand.",
    link: "#",
    image: "/images/wordpress2.jpg",
  },
  {
    id: 11,
    title: "Portfolio Showcase",
    category: "WordPress",
    description:
      "A creative portfolio website for a photographer, built on WordPress.",
    link: "#",
    image: "/images/wordpress3.jpg",
  },
  {
    id: 12,
    title: "Business Landing Page",
    category: "WordPress",
    description:
      "A high-converting landing page design on WordPress.",
    link: "#",
    image: "/images/wordpress4.jpg",
  },

  // Shopify category
  {
    id: 13,
    title: "Shopify Clothing Store",
    category: "Shopify",
    description:
      "Custom Shopify store for a fashion brand with advanced filters.",
    link: "#",
    image: "/images/shopify1.jpg",
  },
  {
    id: 14,
    title: "Shopify Electronics Store",
    category: "Shopify",
    description:
      "Fully functional electronics store with payment gateway integration.",
    link: "#",
    image: "/images/shopify2.jpg",
  },
  {
    id: 15,
    title: "Shopify Dropshipping Store",
    category: "Shopify",
    description:
      "Automated dropshipping store powered by Shopify.",
    link: "#",
    image: "/images/shopify3.jpg",
  },
  {
    id: 16,
    title: "Shopify Jewelry Store",
    category: "Shopify",
    description:
      "Elegant Shopify store for luxury jewelry products.",
    link: "#",
    image: "/images/shopify4.jpg",
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
      <section className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-white pt-40 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="italic underline font-serif">Transforming</span>
            <span className="ml-2">Goals into</span>
            <span className="ml-2">Thriving</span>
            <br />
            <span>Business</span>{" "}
            <span className="italic underline font-serif">Opportunities</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Dev Technosys, a leading mobile & web development company offers
            the best solutions to SMEs and global brands. Explore our work
            portfolio to see our excellence!
          </p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <div className="px-4 py-14 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["ALL", "WEB", "Ai", "APP",  "WordPress", "Shopify"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded font-medium transition ${
                  activeFilter === cat
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base flex-grow">
                  {project.description}
                </p>
                 <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
             View project
            </a>
              </div>

              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
