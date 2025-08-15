// src/components/PortfolioHero.jsx
import React, { useState } from "react";
import development from "../assets/image/development.png";

const projects = [
  // Existing
  {
    id: 1,
    title: "Defiswap",
    category: "WEB",
    description:
      "DeFi Swap is a decentralized exchange by Crypto.com for token swapping, staking, and farming with secure, non-custodial access....",
    link: "#",
    image: development,
  },
  {
    id: 2,
    title: "RV Camping",
    category: "APP",
    description:
      "With Harvest Hosts and Boondockers Welcome, enjoy free overnight RV stays at 8,000+ unique spots like wineries, farms, breweries, golf courses, and private properties....",
    link: "#",
    image: "/images/rv-camping.jpg",
  },
  {
    id: 3,
    title: "Fantasy Sports",
    category: "WEB",
    description:
      "Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "#",
    image: "/images/fantasy-sports.jpg",
  },
  {
    id: 4,
    title: "Fantasy Sports",
    category: "WEB",
    description:
      "Unleash the ultimate fantasy experience—built for champions, by champions, and completely FREE! Ditch ESPN & Yahoo—switch to Fantrax today!...",
    link: "#",
    image: "/images/fantasy-sports.jpg",
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
          {["ALL", "WEB", "Ai", "APP", "Salesforce", "WordPress", "Shopify"].map(
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
                  className="text-blue-600 font-medium mt-6 hover:underline inline-flex items-center gap-1"
                >
                  View Project <span>↗</span>
                </a>
              </div>

              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
