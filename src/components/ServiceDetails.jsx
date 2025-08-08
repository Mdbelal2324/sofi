import React from "react";
import { useParams } from "react-router-dom";
import Services1 from "../assets/image/Services1.png";
import Services2 from "../assets/image/Services2.png";
import Services3 from "../assets/image/Services3.png";

const serviceDetailsData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Detailed information about UI/UX Design services...",
    image: Services1,
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Detailed information about Digital Marketing services...",
    image: Services2,
  },
  "business-analysis": {
    title: "Business Analysis",
    description: "Detailed information about Business Analysis services...",
    image: Services3,
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceDetailsData[id];

  if (!service) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Service Not Found</h2>;
  }

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img src={service.image} alt={service.title} className="w-48 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">{service.title}</h1>
        <p className="text-gray-600 text-center">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
