import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Amina Yusuf",
    title: "Director of IT, Federal Ministry of Finance",
    color: "bg-green-400",
    quote:
      "Biont Services helped us streamline our payroll and revenue tracking systems seamlessly. Their expertise in government-aligned tech solutions is unmatched.",
    stars: 5,
  },
  {
    name: "Chinedu Okafor",
    title: "CEO, Nedu Logistics Ltd",
    color: "bg-blue-500",
    quote:
      "Working with Biont was transformative. They delivered a fully automated delivery management platform that improved our efficiency by over 60%.",
    stars: 5,
  },
  {
    name: "Fatima Abdullahi",
    title: "CEO, Program Social Welfare Scheme",
    color: "bg-[#C18932]",
    quote:
      "Biont played a key role in digitizing our social investment program. Their team was knowledgeable, responsive, and results-driven.",
    stars: 5,
  },
  {
    name: "Ibrahim Musa",
    title: "Head of Operations, SecurePay",
    color: "bg-purple-500",
    quote:
      "Their data-driven approach and technical support ensured our systems functioned smoothly and efficiently.",
    stars: 5,
  },
  {
    name: "Ngozi Eze",
    title: "CTO, FinTech Innovations",
    color: "bg-pink-500",
    quote:
      "Biont's training programs empowered our team to maximize the value of our technology investments.",
    stars: 5,
  },
  {
    name: "Samuel Johnson",
    title: "Project Manager, GovConnect",
    color: "bg-yellow-500",
    quote:
      "Their advisory services were instrumental in the success of our government relations projects.",
    stars: 5,
  },
];

const getVisible = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Responsive visible count
  const visible = getVisible(windowWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Carousel navigation
  const maxIndex = testimonials.length - visible;
  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  // Dots
  const dotCount = maxIndex + 1;

  return (
    <section className="bg-[#f7f7f7] py-16 h-full overflow-x-hidden">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="text-[#C18932] font-semibold text-lg mb-2 block tracking-widest">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
              What our clients say
              <br className="hidden md:block" /> about our services
            </h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={goLeft}
              disabled={current === 0}
              className="w-12 h-12 rounded-full border border-[#C18932] flex items-center justify-center text-2xl bg-white hover:bg-[#C18932]/10 transition disabled:opacity-50"
              aria-label="Previous"
            >
              <span className="inline-block rotate-180">→</span>
            </button>
            <button
              onClick={goRight}
              disabled={current === maxIndex}
              className="w-12 h-12 rounded-full border border-[#C18932] flex items-center justify-center text-2xl bg-white hover:bg-[#C18932]/10 transition disabled:opacity-50"
              aria-label="Next"
            >
              <span>→</span>
            </button>
          </div>
        </div>
        <div className="overflow-hidden p-8">
          <div
            className="flex gap-10 sm:gap-8 lg:gap-14 p-2 sm:p-6 lg:p-10 transition-transform duration-500"
            style={{ transform: `translateX(-${(100 / visible) * current}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow p-4 sm:p-8 h-80 flex flex-col items-center min-w-0 w-full relative"
                style={{
                  flex: `0 0 ${90 / visible}%`,
                }}
              >
                <span
                  className={`absolute -left-8 top-8 w-14 h-14 rounded-full flex items-center justify-center text-5xl text-white ${t.color}`}
                >
                  <Quote />
                </span>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">{t.name}</h3>
                  <div className="text-gray-500 text-sm mb-2">{t.title}</div>
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#FFC107]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{t.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-6 h-2 rounded-full transition-all ${
                i === current ? "bg-[#C18932]" : "bg-[#C18932]/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
