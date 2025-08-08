import React from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import Project1 from '../assets/image/Project1.jpg';
import Project2 from '../assets/image/Project2.jpg';
import Project3 from '../assets/image/Project3.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Web Development',
      category: 'Technology',
      image: Project1,
      date: 'May 26th 2025',
      description: 'Web development services to build robust, scalable digital platforms.',
      link: '/web-development'
    },
    {
      title: 'Website Design',
      category: 'Technology',
      image: Project2,
      date: 'May 25th 2025',
      description: 'Creative UI/UX and responsive design to engage your audience.',
      link: '/website-design'
    },
    {
      title: 'SEO Optimization',
      category: 'Marketing',
      image: Project3,
      date: 'May 24th 2025',
      description: 'Rank higher on search engines and increase traffic organically.',
      link: '/seo-optimization'
    },
  ];

  const CustomPrevArrow = (props) => (
    <button {...props} className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
      <FaArrowLeft size={16} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
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
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* ✅ Full Width Container */}
      <div className="w-full px-4 sm:px-6 lg:px-16">

        {/* ✅ Heading and Button Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Portfolio / Works
          </h2>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded transition duration-300 text-sm"
          >
            View Projects →
          </a>
        </div>

        {/* ✅ Card Slider */}
        <div className="relative">
          <Slider {...settings}>
            {portfolioItems.map((item, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 max-w-[420px] mx-auto relative group">
                  
                  {/* Image with Hover */}
                  <a href={item.link}>
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>

                  {/* Date Badge */}
                  <div className="absolute top-[170px] left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md rounded-md text-gray-700 text-sm font-medium z-10">
                    {item.date}
                  </div>

                  {/* Content */}
                  <div className="p-6 mt-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                    <a href={item.link} className="text-orange-600 font-medium hover:underline inline-flex items-center gap-2">
                      Read More <FaArrowRightLong />
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
