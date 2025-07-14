import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Customs Process Management",
    description: (
      <>
        <p>
          Biont Services has extensive experience in all matters involving
          customs and supply chain management.
        </p>
        <br />
        <p>
          Biont Service has developed expertise over this practice area, over
          the years which has position us as the leading industry partner for
          businesses seeking Import Duty Exemption Certificate ("IDEC"), duty
          waivers, and general Custom and port clearing advisory amongst others.
          Our partners rely on us to ensure that their imports undergo a
          hassle-free clearing at the ports.
        </p>
      </>
    ),
    image: "/public/Photo.svg",
  },
  {
    title: "Next-Generation  Technology  Solutions",
    description: (
      <>
        <p>
          We go beyond simply providing technology; we identify the best tools
          and platforms for your specific needs.
        </p>
        <br />
        <p>
          From cloud computing and automation to artificial intelligence and
          data analytics, we help you leverage cutting-edge solutions to
          streamline processes, boost innovation, and gain a competitive edge.
        </p>
      </>
    ),
    image: "/public/Photo1.svg",
  },
  {
    title: "Advisory",
    description: (
      <>
        <p>
          Biont Services employs its consummate experience obtained over the
          years to guarantee optimized services for our clients in providing
          legal advisory to clients in all matters involving tax, energy, and
          corporate advisory. Our team is well prepared to assist our clients at
          every stage of these areas and processes, and help structure suitable
          strategies as well as approaches in handling them. Our services under
          our advisory practice areas include: Tax Compliance, Transaction Tax,
          and Structuring Incentives (VAT, Pioneer Status).
        </p>
      </>
    ),
    image: "/public/Photo2.svg",
  },
  {
    title: "Data-Driven Decision  Making",
    description: (
      <>
        <p>
          In today's data-driven world, information is power. We equip your
          teams with the tools and expertise needed to leverage data effectively
        </p>
        <br />
        <p>
          This includes implementing business intelligence(BI) solutions,
          providing data visualization training, and fostering a data-driven
          culture within your organization
        </p>
      </>
    ),
    image: "/public/Photo3.svg",
  },
  {
    title: "Comprehensive  Training Programs",
    description: (
      <>
        <p>
          To ensure your team gets the most out of the implemented solutions, we
          offer comprehensive training programs.
        </p>
        <br />
        <p>
          We tailor these programs to your specific needs, whether it's training
          on a new software platform, data analysis techniques, or best
          practices for utilizing new technologies.
        </p>
      </>
    ),
    image: "/public/Photo4.svg",
  },
  {
    title: "Unwavering  Technical Support",
    description: (
      <>
        <p>
          Our commitment to your success goes beyond implementation. We provide
          ongoing technical support to ensure your systems function smoothly.
        </p>
        <br />
        <p>
          Our team of experts is readily available to address any issues and
          answer your questions, downtime and minimizing maximizing
          productivity.
        </p>
      </>
    ),
    image: "/public/Photo5.svg",
  },
];

export default function FeaturedServices() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const total = services.length;

  const prev = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  };
  const next = () => {
    if (current < total - 1) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  };

  const service = services[current];

  // Animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.5 },
    }),
  };

  return (
    <main className="w-full h-full">
      <div className="flex flex-col lg:flex-row w-full container mx-auto bg-white overflow-hidden relative min-h-[400px] my-8 lg:my-20">
        {/* Left: Text */}
        <div className="p-8 flex flex-col gap-10 lg:w-1/2 relative min-h-[350px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="gap-10 flex flex-col"
            >
              <div className="flex flex-col gap-10 items-start mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-400 text-blue-400 text-2xl font-bold mr-4">
                  {current + 1}.
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-black/90">
                  {service.title}
                </h2>
              </div>
              <div className="text-gray-700 border-l-3 border-blue-400">
                <p className="pl-4">{service.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Arrows */}
          <div className="flex gap-4 items-end h-full">
            {/* Gradient Border Button - Left */}
            <div
              className={
                current === 0
                  ? "p-[2px] rounded-full"
                  : "bg-gradient-to-r from-[#0A305C] to-[#C18932] p-[2px] rounded-full"
              }
            >
              <button
                onClick={prev}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  current === 0
                    ? "bg-transparent text-gray-300 cursor-not-allowed"
                    : "bg-white text-blue-700 hover:bg-gradient-to-r hover:from-[#0A305C] hover:to-[#C18932] hover:text-white transition"
                }`}
                aria-label="Previous Service"
                disabled={current === 0}
              >
                <span className="text-2xl">&#8592;</span>
              </button>
            </div>
            {/* Gradient Border Button - Right */}
            <div
              className={
                current === total - 1
                  ? "p-[2px] rounded-full bg-gradient-to-r from-[#0A305C] to-[#C18932]"
                  : " border rounded-full border-[#0A305C] p-[2px]"
              }
            >
              <button
                onClick={next}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  current === total - 1
                    ? "bg-transparent text-gray-300 cursor-not-allowed"
                    : "bg-white  bg-gradient-to-r from-[#0A305C] to-[#C18932] text-white transition"
                }`}
                aria-label="Next Service"
                disabled={current === total - 1}
              >
                <span className="text-2xl">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex items-center justify-center lg:justify-end p-4 md:p-10 lg:w-1/2 relative min-h-[350px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={service.image}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              src={service.image.replace("/public", "")}
              alt={service.title}
              className="lg:w-[70%] h-auto object-cover rounded-xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
