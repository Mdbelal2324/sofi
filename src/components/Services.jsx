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
      id: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client.",
      image: Services1,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client.",
      image: Services2,
    },
    {
      id: "business-analysis",
      title: "Business Analysis",
      description:
        "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client.",
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
