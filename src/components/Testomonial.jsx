import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import UK from  "../assets/image/Uk.jpg"
import UAE  from "../assets/image/UAE.png"
import USA from "../assets/image/USA.png"
import AUS from  "../assets/image/Aus.png"
const testimonials = [
  {
    text: "We had a fantastic experience working with SofiLoft. Their professionalism and technical expertise in website development helped us launch a responsive, SEO-friendly site that perfectly captured our brand. The results have exceeded expectations.",
    name: "James Thompson UK",
    role: "CEO",
    img: UK
  },
  {
    text: "SofiLoft Technologies developed a CRM solution integrated with inventory management that streamlined our stock tracking and sales processes efficiently. Our team productivity increased by 50%.",
    name: "Abdullah Hassan",
    role: "UAE, Owner",
    img: UAE
  },
  {
    text: "SofiLoft's AI agents provide intelligent social media monitoring and engagement, keeping our brand responsive and top-of-mind with our audience..",
    name: "Andrew Chen,",
    role: " Social Media Head  USA",
    img: USA
  },
  {
    text: "Sofiloft Technologies delivered a Mobile Application that is not only feature-rich but also offers a user-friendly experience to our customers across both iOS and Android platformsTheir team was proactive and communicative throughout the development cycle",
    name: "Lisa Rodriguez.",
    role: "Founder",
    img: USA
  },
    {
    text: "Their custom chatbot automation has freed up our support team to focus on complex issues, while providing customers with 24/7 assistance and immediate resolutions. Thanks to SofiLoft Technologies.",
    name: "Nathan Cooper,",
    role: "CTO Australia",
    img: AUS
  },
     {
    text: "Thanks to Sofiloft's e-commerce expertise, our luxury watch collection now shines online with smooth navigation and seamless checkout.",
    name: "Michelle Davis, ,",
    role: " USA, Founder",
    img: USA
  },
    {
    text: "Sofiloft developed a stylish and intuitive fashion mobile app that offers seamless browsing, personalized recommendations, and an effortless checkout process, significantly enhancing our customers' shopping experience and engagement.",
    name: "Yasin Al-Balushi ,",
    role: "Kuwait, Director",
    img: AUS
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
        <div className="mt-12">
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
            pagination={{ clickable: true }}
            loop={true}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between text-left relative h-full">
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>

                  {/* Quote Icon */}
                  <span className="text-orange-500 text-5xl absolute bottom-4 right-6">
                    ❞
                  </span>

                  {/* Profile */}
                  <div className="flex items-center mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
