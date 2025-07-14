import { Mail, MapPin, Phone } from "lucide-react";

export default function GetInTouch() {
  return (
    <section
      className="w-full h-screen flex flex-col md:flex-row items-center
     justify-center gap-12 py-16 px-4 container mx-auto"
    >
      {/* Left: Contact Info */}
      <div className="w-full flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get in touch with us
          </h2>
          <p className="text-gray-500 mb-8 text-base md:text-lg">
            Have a question or need support? Reach out to us — we’re here to
            help, answer your inquiries, and explore how we can work together to
            drive impactful solutions.
          </p>
          <div className="flex flex-col gap-8">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="border border-[#C18932] text-[#C18932] rounded-full w-12 h-12 flex items-center justify-center bg-white">
                <Phone className="w-6 h-6" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Phone no</p>
                <a
                  href="tel:+2349037874828"
                  className="font-medium text-lg cursor-pointer hover:underline underline-offset-2"
                >
                  +234-90-3787-4828
                </a>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="border border-[#C18932] text-[#C18932] rounded-full w-12 h-12 flex items-center justify-center bg-white">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:projects@biontservices.com"
                  className="font-medium text-lg cursor-pointer hover:underline underline-offset-2 break-all"
                >
                  projects@biontservices.com
                </a>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-4">
              <span className="border border-[#C18932] text-[#C18932] rounded-full w-12 h-12 flex items-center justify-center bg-white">
                <MapPin className="w-6 h-6" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-lg">
                  488, Sulu Gambari Close, 2nd Avenue, Gwarinpa
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className=" bg-white p-6 md:p-10 w-full lg:w-1/2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First name
              </label>
              <input
                className="p-3 border w-full rounded-md"
                id="firstName"
                name="firstName"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="otherNames"
                className="block text-sm font-medium mb-1"
              >
                Other names
              </label>
              <input
                className="p-3 border w-full rounded-md"
                id="otherNames"
                name="otherNames"
                placeholder="Enter your other names"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                className="p-3 border w-full rounded-md"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone number
              </label>
              <input
                className="p-3 border w-full rounded-md"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter text here..."
              className="w-full rounded-md p-3 border border-input bg-[#f7fcfd] px-3 py-2 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-colors outline-none placeholder:text-muted-foreground resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C18932] hover:bg-[#a97a2a] text-white text-lg rounded-md shadow p-3 flex items-center justify-center gap-2"
          >
            Submit <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
