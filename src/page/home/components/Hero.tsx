import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="w-full overflow-x-hidden h-full">
      <section className="relative flex flex-col items-center justify-center h-screen px-3 lg:px-0 lg:h-[80vh] w-full bg-black/70 text-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src={'/background.gif'}
            alt="Skyscraper background"
            loading="lazy"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Welcome badge */}
        <span className="mb-6 mt-8 text-xs inline-block rounded-md bg-[#F5E3C0] px-6 py-2 md:text-sm font-semibold text-[#3A2C0F] tracking-widest shadow">
          WELCOME TO BIONT SERVICES
        </span>
        {/* Main heading */}
        <h1 className="text-2xl md:text-6xl font-extrabold text-white mb-4 max-w-4xl leading-tight">
          Innovative Advisory and Technology Solutions for Public and Private
          Sector Growth
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Empowering your mission through strategy, advisory, and tech-driven
          solutions.
        </p>
        {/* CTA Button */}
        <Link
          to={"/what-we-do"}
          className="bg-[#C18932]  hover:bg-[#a97a2a] text-white text-lg rounded-md shadow transition-colors p-3"
        >
          Explore Services
          <span className="ml-2">→</span>
        </Link>
      </section>
    </main>
  );
}
