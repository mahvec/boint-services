import React, { useState } from "react";

const products = [
  {
    image: "/ryder.png",
    number: "1",
    title: "Ryder mobile app",
    objective:
      "To revolutionize local deliveries by connecting users with a network of reliable riders, ensuring fast,  convenient, and trackable service.",
    audience:
      "Busy individuals, organizations corporate and businesses seeking a seamless solution for on demand deliveries.",
    features: [
      " Efficient dispatch system for rapid order fulfillment.",
      "Real-time GPS tracking for enhanced transparency.",
      "User-friendly interface for effortless ordering.",
      "Trusted network of riders for dependable service.",
    ],
  },
  {
    image: "/cpacs.png",
    number: "2",
    title: "Centralized Payroll-based Credit System (CPACS)",
    objective:
      "CPACS aims to simplify and centralize staff loan management for faster processing, guaranteed repayments, and improved transparency.",
    audience:
      "All Eligible Staff enrolled in the payroll system. This can be provided if does not exist before.",
    features: [
      "Centralized Application portal",
      "Automated Approvals",
      "Integrated Payroll deductions",
      "Real-time Tracking",
      "Secure Data Management",
      "Reporting and Analytic",
    ],
  },
  {
    image: "/ibras.png",
    number: "3",
    title: "Integrated Billing and Revenue Assurance System (IBRAS)",
    objective:
      "To simplify the billing process while maximizing revenue collection, management & reporting for agencies and states by ensuring accuracy and blocking revenue leakages. In essence, it streamlines billing for efficiency and strengthens financial controls to safeguard your bottom line.",
    audience:
      "State Government, Ministries, Department and Agencies for revenue generation powered by a smart billing and invoicing engine through predetermined and preconfigured revenue head categorization.",
    features: [
      "Central Billing System",
      "Central Revenue Administration System",
      "Central Payment Aggregation & Settlement System",
      "Central Revenue Reporting & Big Data Analytics System",
      "Central dashboard that ensures transparency across the revenue points",
      "Experts systems to expand the revenue base",
    ],
  },
  // Add more product objects here for additional slides if needed
];

export default function ProductList() {
  const [current, setCurrent] = useState(0);
  const total = products.length;

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const product = products[current];

  return (
    <div
      className="w-full flex flex-col items-center h-full
     justify-center py-8 px-2 md:px-0 mt-20"
    >
      <div className=" w-screen h-full">
        <div className=" w-full mx-auto xl:h-screen flex flex-col lg:flex-row items-center overflow-hidden z-20">
          {/* Image Section */}
          <div className="flex items-center justify-center w-full h-full lg:w-1/2 p-6 md:p-0 relative gap-8">
            <div className="hidden lg:flex absolute w-[70%] h-full bg-[#FFF9F0]/70 left-0 top-0 rounded-r-2xl -z-20"></div>

            <img
              src={product.image}
              alt={product.title}
              className=" h-[70%]"
              style={{ background: "#FFF9F0" }}
            />
          </div>
          {/* Content Section */}
          <div className="flex-1 flex flex-col px-6 md:px-12 py-8 md:py-0 w-full lg:w-1/2 text-center lg:text-start">
            <div className="lg:w-[90%] xl:w-[70%] 2xl:w-[60%]">
              <div className="flex flex-col lg:flex-row items-center justify-between space-x-4">
                <div className="w-10 h-10 border-[#0A305C] border-2 p-5   rounded-full flex items-center justify-center">
                  <span className="text-lg md:text-xl font-semibold text-[#1A237E] bg-white px-">
                    {product.number}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#232323] leading-snug">
                    {product.title}
                  </h2>
                </div>
              </div>
              <div className="mb-2">
                <h3 className="font-bold text-base md:text-lg mb-1 text-[#232323]">
                  Objective
                </h3>
                <p className="text-[#4B5563] text-base leading-relaxed">
                  {product.objective}
                </p>
              </div>
              <div className="mb-2">
                <h3 className="font-bold text-base md:text-lg mb-1 text-[#232323]">
                  Target audience
                </h3>
                <p className="text-[#4B5563] text-base leading-relaxed">
                  {product.audience}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1 text-[#232323]">
                  Key features
                </h3>
                <ul className="list-disc pl-6 text-[#4B5563] text-base space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="list-none lg:list-decimal">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex items-center gap-6 mt-12">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#23395D] to-[#1A237E] text-white shadow-lg hover:scale-105 transition border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#23395D]"
          aria-label="Previous"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#F5E3C0] to-[#FFF9F0] text-[#1A237E] shadow-lg hover:scale-105 transition border-2 border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#F5E3C0]"
          aria-label="Next"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
