import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ✅ Case-sensitive correct imports
import ukimage from "../assets/image/uk.png";
import uae from "../assets/image/Uae.png";
import usa from "../assets/image/usa.png";
import aus from "../assets/image/aus.png";

const testimonials = [
  {
    text: "We had a fantastic experience working with SofiLoft. Their professionalism and technical expertise in website development helped us launch a responsive, SEO-friendly site that perfectly captured our brand. The results have exceeded expectations.",
    name: "James Thompson Uk",
    role: "CEO",
    img: ukimage,
  },
  {
    text: "SofiLoft Technologies developed a CRM solution integrated with inventory management that streamlined our stock tracking and sales processes efficiently. Our team productivity increased by 50%.",
    name: "Abdullah Hassan",
    role: "UAE, Owner",
    img: uae,
  },
  {
    text: "SofiLoft's AI agents provide intelligent social media monitoring and engagement, keeping our brand responsive and top-of-mind with our audience..",
    name: "Andrew Chen,",
    role: "Social Media Head USA",
    img: usa,
  },
  {
    text: "Sofiloft Technologies delivered a Mobile Application that is not only feature-rich but also offers a user-friendly experience to our customers across both iOS and Android platforms. Their team was proactive and communicative throughout the development cycle",
    name: "Lisa Rodriguez.",
    role: "Founder",
    img: usa,
  },
  {
    text: "Their custom chatbot automation has freed up our support team to focus on complex issues, while providing customers with 24/7 assistance and immediate resolutions. Thanks to SofiLoft Technologies.",
    name: "Nathan Cooper,",
    role: "CTO Australia",
    img: aus,
  },
  {
    text: "Thanks to Sofiloft's e-commerce expertise, our luxury watch collection now shines online with smooth navigation and seamless checkout.",
    name: "Michelle Davis",
    role: "USA, Founder",
    img: usa,
  },
  {
    text: "Sofiloft developed a stylish and intuitive fashion mobile app that offers seamless browsing, personalized recommendations, and an effortless checkout process, significantly enhancing our customers' shopping experience and engagement.",
    name: "Yasin Al-Balushi",
    role: "Kuwait, Director",
    img: aus,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#fff6f4] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-500 uppercase font-medium tracking-wide">
          Testimonial
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Why do people praise{" "}
          <span className="text-orange-500">Web Info Software?</span>
        </h2>

        {/* Swiper Slider with Cards */}
        <div className="mt-12 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // custom container
            }}
            loop={true}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between text-left w-full h-[350px]">
                  <p className="text-gray-600 leading-relaxed overflow-hidden line-clamp-5">
                    {item.text}
                  </p>

                  <div className="flex items-center mt-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 rounded-full border-2 border-gray-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots - card ke bilkul neeche */}
          <div className="custom-pagination mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
