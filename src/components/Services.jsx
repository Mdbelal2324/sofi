import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Services1 from "../assets/image/Services1.png";
import Services2 from "../assets/image/Services2.png";
import Services3 from "../assets/image/Services3.png";

const Services = () => {
  const servicesData = [
    {
      id: "Website Development",
      title: "Website Development",
      description:
        "Elevate your brand with customized, responsive websites designed for seamless performance and user engagement..",
      image: Services1,
    },
    {
      id: "Mobile App Development",
      title: "Mobile App Development",
      description:
        "Build intuitive mobile applications that deliver top-tier experiences and functionality across iOS and Android platforms..",
      image: Services2,
    },
    {
      id: "E-commerce Development",
      title: "E-commerce Development",
      description:
        "Launch scalable online stores with secure payment integration and conversion-focused interfaces to drive sales.",
      image: Services3,
    },
      {
      id: "CRM Solutions",
      title: "CRM Solutions",
      description:
        "Streamline your customer management with tailored CRM platforms that automate workflows and enhance client relationships.",
      image: Services3,
    },
      {
      id: "Digital Marketing",
      title: "Digital Marketing",
      description:
        "Boost your online visibility with data-driven digital marketing strategies that attract, engage, and convert your target audience.",
      image: Services3,
    },
      {
      id: "AI/ML Development",
      title: "AI/ML Development",
      description:
        "Transform operations using artificial intelligence and machine learning models built to automate tasks and uncover actionable insights..",
      image: Services3,
    },
     {
      id: "Chatbot Development",
      title: "Chatbot Development",
      description:
        "Enhance customer service with intelligent chatbots designed for real-time engagement, lead generation, and 24/7 support.",
      image: Services3,
    },
      {
      id: "AR/VR Development",
      title: "AR/VR Development",
      description:
        "Deliver immersive user experiences with augmented and virtual reality solutions crafted for training, marketing, and entertainment.",
      image: Services3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-16 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-3xl font-bold text-gray-800 mb-2">Our Services</p>
          <h2 className="text-gray-600 text-lg font-bold">
            We Provide Exclusive Services
          </h2>
        </div>

        {/* FIX: Wrap slider in div with bottom margin */}
        <div className="mb-20">
          <Slider {...settings}>
            {servicesData.map((service) => (
              <div key={service.id} className="px-4">
                <div className="bg-white rounded-lg mb-4 shadow-md p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-center mt-auto">
                    <Link
                      to={`/service-details/${service.id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                      READ MORE →
                    </Link>
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

export default Services;
