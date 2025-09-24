
const products = [
  {
    link: "/our-products",
    image: "/ryderhome.png",
    number: "1.",
    title: "Ryder mobile app",
    desc: "To revolutionize local deliveries by connecting users with a network of reliable riders, ensuring fast, convenient, and trackable service.",
  },
  {
    link: "/our-products",
    image: "/cpacshome.png",
    number: "2.",
    title: "Centralized Payroll-based Credit System (CPACS)",
    desc: "CPACS aims to simplify and centralize staff loan management for faster processing, guaranteed repayments, and improved transparency.",
  },
  {
    link: "/our-products",
    image: "/ibrashome.png",
    number: "3.",
    title: "Integrated Billing and Revenue Assurance System (IBRAS)",
    desc: "To simplify the billing process while maximizing revenue collection, management & reporting for agencies and states by ensuring accuracy and blocking revenue leakages.",
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#C18932] font-semibold text-lg mb-2 block tracking-widest">
            TAKE A LOOK AT
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            Some of Our Product
          </h2>
        </div>
        <div className="flex flex-col space-y-16">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
              {/* Text */}
              <div className="flex-1 w-full">
                <div className="flex flex-col items-start mb-2 space-y-10">
                  <p className="border border-[#C18932] text-[#C18932] rounded-full w-10 h-10 flex items-center justify-center font-semibold text-lg mr-4">
                    {product.number}
                  </p>
                  <h3 className="font-bold text-2xl md:text-2xl mb-0">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{product.desc}</p>
                  <div className="">
                    <a
                      href={product.link}
                      className="inline-block bg-[#F5E3C0] text-[#C18932] font-medium px-6 py-2 rounded-md shadow hover:bg-[#e6d1a7] transition-colors"
                    >
                      Learn More <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
