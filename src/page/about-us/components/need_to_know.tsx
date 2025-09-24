export default function NeedToKnow() {
  return (
    <section className="w-full lg:h-screen flex items-center justify-center  container mx-auto p-4">
      {/* Left: Text Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 space-x-4">
        <div className=" flex flex-col gap-4">
          <span className="text-[#C18932] font-semibold text-lg mb-2 block tracking-widest">
            ALL YOU NEED TO KNOW
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Us</h2>
          <div className="border-l-4 border-[#034695] pl-4 mb-6 space-y-8">
            <p className="text-gray-700">
              Biont Services is a Strategy, Advisory and IT Consultancy Firm
              driven by best-in-class Technology to deliver bespoke industry
              solutions to our clients within both Public and Private Sectors.
            </p>
            <p className="text-gray-700">
              We provide innovative next-generation technology solutions and
              services for Customs and Process Management, Advisory, and
              Government relations tailored to meet the needs of public and
              private sector clients in various industries.
            </p>
            <p className="text-gray-700">
              Our core competence is creating revenue-generating business
              solutions innovatively conceptualized towards actualizing
              government policies and programmes; and meeting peculiar
              organizational needs.
            </p>
          </div>
        </div>

        <div className="w-full mb-8 md:mb-0 flex items-center lg:justify-end">
          <img
            src={"/about-us.svg"}
            alt="Biont Services Team Meeting"
            loading="lazy"
            className="rounded-3xl xl:w-[70%] h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
