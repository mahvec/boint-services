import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <span className="">
        {/* Example icon: database */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
          <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
        </svg>
      </span>
    ),
    title: "Customs Process Managements",
    desc: "Biont Services has extensive experience in all matters involving customs and supply chain management.",
  },
  {
    icon: (
      <span className="">
        {/* Example icon: cpu */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v2" />
          <path d="M15 1v2" />
          <path d="M9 21v2" />
          <path d="M15 21v2" />
          <path d="M1 9h2" />
          <path d="M1 15h2" />
          <path d="M21 9h2" />
          <path d="M21 15h2" />
        </svg>
      </span>
    ),
    title: "Next-Generation Technology Solution",
    desc: "We go beyond simply providing technology; we identify the best tools and platforms for your specific needs.",
  },
  {
    icon: (
      <span className="">
        {/* Example icon: scales */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <path d="M12 3v18" />
          <path d="M19 6l-7 2-7-2" />
          <path d="M5 6v2a7 7 0 0 0 14 0V6" />
          <path d="M7 18a2 2 0 1 1-4 0" />
          <path d="M21 18a2 2 0 1 1-4 0" />
        </svg>
      </span>
    ),
    title: "Advisory",
    desc: "Biont Services employs its consummate experience obtained over the years to guarantee optimized services for our clients in providing",
  },
  {
    icon: (
      <span className="">
        {/* Example icon: bar chart */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <rect x="3" y="12" width="4" height="8" />
          <rect x="9" y="8" width="4" height="12" />
          <rect x="15" y="4" width="4" height="16" />
        </svg>
      </span>
    ),
    title: "Data-Driven Decision Making",
    desc: "In today's data-driven world, information is power. We equip your teams with the tools and expertise needed to leverage data effectively.",
  },
  {
    icon: (
      <span className="">
        {/* Example icon: graduation cap */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <path d="M22 10.5V6l-10-4-10 4v4.5" />
          <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
          <path d="M12 18v4" />
        </svg>
      </span>
    ),
    title: "Comprehensive Training Programs",
    desc: "To ensure your team gets the most out of the implemented solutions, we offer comprehensive training programs.",
  },
  {
    icon: (
      <span className="">
        {/* Example icon: support */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      </span>
    ),
    title: "Unwavering Technical Support",
    desc: "Our commitment to your success goes beyond implementation. We provide ongoing technical support to ensure your systems function smoothly.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#f7f7f7] py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#C18932] font-semibold text-lg mb-2 block tracking-widest">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            What We Do
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white group rounded-2xl shadow-sm p-8 flex flex-col h-full "
            >
              <p className="bg-[#FEEBCD] w-fit p-3 rounded group-hover:bg-[#034695] group-hover:text-white transition-colors ease-in-out duration-500">
                <span className="">{service.icon}</span>
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-1">{service.desc}</p>
              <Link
                to={"/what-we-do"}
                className="text-[#C18932] font-medium flex items-center mt-auto group-hover:underline group-hover:bg-gradient-to-r from-[#034695] to-[#C18932] bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-500"
              >
                Learn More <span className="">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
