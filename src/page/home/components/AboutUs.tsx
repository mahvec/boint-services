import { Link } from "react-router-dom";
import ncs from "@/assets/ncs.png";
import agf from "@/assets/agf.png";
import mf from "@/assets/mf.png";
import obetek from "@/assets/obetek.png";
import abouthome from "@/assets/abouthomepage.png";

export default function AboutUs() {
  return (
    <main className="w-full">
      <section className="w-full bg-[#FAFAFA]">
        <div className="max-w-7xl p-4 grid grid-cols-2 md:grid-cols-4 mx-auto py-10">
          <div>
            <img src={ncs} alt="Nigerian Custom Service" />
          </div>
          <div>
            <img
              src={agf}
              alt="Office of The Accountant General of The Federation"
            />
          </div>
          <div>
            <img src={mf} alt="Federal Ministry of Finance" />
          </div>
          <div>
            <img src={obetek} alt="Obetek" />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 py-16 px-4 container mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 w-full lg:w-1/2">
          <span className="text-[#C18932] font-semibold text-lg mb-2 block tracking-widest">
            A BIT
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Us</h2>
          <div className="border-l-4 border-blue-700 pl-4 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              Biont Services is a Strategy, Advisory and IT Consultancy Firm
              driven by best-in-class Technology to deliver bespoke industry
              solutions to our clients within both Public and Private Sectors.
            </p>
            <p className="text-lg text-gray-700">
              We provide innovative next-generation technology solutions and
              services for Customs and Process Management, Advisory, and
              Government relations tailored to meet the needs of public and
              private sector clients in various industries.
            </p>
          </div>
          <Link
            to={"/about-us"}
            className="bg-[#C18932] hover:bg-[#a97a2a]  text-white px-10 py-4 text-lg rounded-md shadow transition-colors mt-4"
          >
            Learn More <span className="ml-2">→</span>
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-1/2">
          <img
            src={abouthome}
            alt="Biont Services Team Meeting"
            loading="lazy"
            className="rounded-3xl w-auto h-[70%] object-cover shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
