

const values = [
  {
    title: "Our Mission",
    description:
      "Our mission is to empower corporate and government clients with advanced tools for data-driven decisions and improved efficiency, leveraging innovation and technology.",
    image: '/mission.png',
    bgColor: "bg-blue-50",
  },
  {
    title: "Our Vision",
    description:
      "To be a world-class proactive and innovative based organization. information technology and communication agro-based organization.",
    image: '/scope.png',
    bgColor: "bg-orange-50",
  },
  {
    title: "Core Values",
    description:
      "Our core values shape our daily operations and foster a motivated, inclusive environment where every employee performs at their best.",
    image: '/values.png',
    bgColor: "bg-green-50",
  },
];

export default function Mission() {
  return (
    <section className="bg-gray-50 py-16 xl:h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 mb-16">
          <div className="flex-shrink-0 w-full flex flex-col lg:w-1/2 sm:flex-row items-center  justify-between gap-16">
            <img
              src={'/mission1.png'}
              loading="lazy"
              alt="Our Mission and Vision illustration"
              className="w-[240px] h-[194px]"
            />
            <h2 className="text-[30px] md:text-5xl font-bold text-center sm:text-start text-gray-800 mb-4 sm:w-[50%] lg:leading-16">
              Our Mission and Vision
            </h2>
          </div>
          <div className="flex justify-end lg:w-1/2">
            <p className="text-gray-600 lg:w-[40vh] text-center lg:text-justify">
              Our mission and vision has been our driving force as we deliver
              high end quality services to many organizations and business.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className={`p-8 py-16 rounded-2xl flex flex-col items-start ${item.bgColor}`}
            >
              <img
                src={item.image}
                alt={`${item.title} icon`}
                loading="lazy"
                className="h-24 w-24 mb-8 object-contain"
              />
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
