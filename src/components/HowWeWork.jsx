// HowWeWork.jsx
import React from "react";
import { Lightbulb, Code2, CheckCircle, Shield } from "lucide-react";
import dis from "../assets/image/Discover.webp";
import code from "../assets/image/code.webp";
import test from "../assets/image/Test.webp";
import support from "../assets/image/Support.jpg";

const steps = [
  {
    id: 1,
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and create a detailed project roadmap",
    image:dis,
      
  },
  {
    id: 2,
    icon: <Code2 className="w-10 h-10 text-white" />,
    title: "Design & Development",
    description:
      "Our team creates stunning designs and implements robust solutions",
    image:code,
  },
  {
    id: 3,
    icon: <CheckCircle className="w-10 h-10 text-white" />,
    title: "Testing & Deployment",
    description:
      "Rigorous testing ensures quality before seamless deployment",
    image:test,
  },
  {
    id: 4,
    icon: <Shield className="w-10 h-10 text-white" />,
    title: "Support & Maintenance",
    description:
      "Ongoing support keeps your solution running smoothly",
    image:support,
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-gradient-to-b from-[#0a1f44] to-[#112d5c] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-white">How We Work</h2>
        <p className="mt-3 text-lg text-gray-300">
          A structured approach to delivering exceptional results
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-[#1d3557]/90 rounded-xl p-6 text-center text-white shadow-lg hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-xl">
                  {step.icon}
                </div>
              </div>

              {/* Step Number */}
              <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm">
                {step.id}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-semibold">Step {step.id}</h3>
              <h4 className="text-xl font-bold mt-1">{step.title}</h4>
              <p className="text-gray-300 mt-2">{step.description}</p>

              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg mt-4 w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
