import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import Project1 from '../assets/image/Project1.png';
import Project2 from '../assets/image/Project2.png';
import Project3 from '../assets/image/Project3.png';
import Project4 from '../assets/image/Project4.png';
import Project5 from '../assets/image/Project5.png';
import Project6 from '../assets/image/Project6.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Fn7',
      category: 'Technology',
      image: Project1,
      description: 'Agent-powered social listening that surfaces live buying-intent conversations across Reddit, LinkedIn, and X, with drafted replies and GTM agents like Muse to turn discussions into qualified traffic and signups',
      link: 'https://www.fn7.io/'
    },
    {
      title: 'Audience-plan',
      category: 'Technology',
      image: Project2,
      description: 'Growth platform for creators and brands. Connects YouTube, TikTok, and Spotify content with real audiences, not bots—campaigns optimize visibility, engagement, credibility, and transparent analytics for sustainable.',
      link: 'https://www.audienceplan.com/'
    },
    {
      title: 'Fleetx',
      category: 'Marketing',
      image: Project3,
      description: 'AI-powered fleet and logistics OS. Connects assets, workflows, and IoT for real-time visibility, predictive maintenance, transport ERP, TMS, and analytics that reduce costs and improve safety and uptime.',
      link: ' https://www.fleetx.io/'
    },
     {
      title: 'Hira-fragrances',
      category: 'Marketing',
      image: Project4,
      description: 'Modern fragrance storefront with editorial storytelling. Curated collections, bold visuals, and social proof deliver premium D2C shopping experience with secure checkout and streamlined product discovery across.',

      link: 'https://hirafragrances.com/'
    },
     {
      title: 'Yuminutrition',
      category: 'Marketing',
      image: Project5,
      description: 'Trusted wellness brand storefront offering vitamin gummies and supplements. Optimized PDPs, subscriptions, and reviews drive conversions, with fast mobile experience and clear benefits messaging across.',
      link: ' https://www.yuminutrition.com/'
    },
     {
      title: 'Retik',
      category: 'Marketing',
      image: Project6,
      description: 'Web3 ecosystem brand presence. Token, roadmap, and utility sections highlight vision and community with clear calls to action for whitepaper, staking, and exchange listings.',
      link: 'https://retik.com/'
    },
  ];

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    >
      <FaArrowLeft size={16} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    >
      <FaArrowRight size={16} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading + Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Our Works
          </h2>
          <a
            href="#"
            className="bg-green-500 hover:bg-purple-700 text-white font-extrabold py-2 px-5 rounded transition duration-300 text-sm"
          >
            View Portfolio→
          </a>
        </div>

        {/* Card Slider */}
        <div className="relative -mx-2">
          <Slider {...settings}>
            {portfolioItems.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative group">
                  
                  {/* Image */}
                  <a href={item.link}>
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>

                  {/* Date */}
                

                  {/* Content */}
                  <div className="p-6 mt-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{item.description}</p>
             <a 
  href={item.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-orange-500 font-medium hover:underline inline-flex items-center gap-2"
>
  View Project <FaArrowRightLong />
</a>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
