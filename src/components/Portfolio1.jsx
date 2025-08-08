import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="relative bg-red-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold">Portfolio</h1>
        <div className="w-16 h-1 bg-white mx-auto mt-2"></div>

        {/* Breadcrumbs */}
        <div className="mt-4 text-lg">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-green-400">Portfolio</span>
        </div>
      </div>
      

      {/* Portfolio Slider */}
    
      <div className="w-full max-w-4xl mt-10 z-10">
        <Slider {...settings}>
          <div><button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full">All</button></div>
          <div><button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full">WordPress</button></div>
          <div><button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full">Shopify</button></div>
          <div><button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full">WooCommerce</button></div>
        </Slider>
      </div>

    </div>

    
     
   
  );
}

export default Portfolio1;

