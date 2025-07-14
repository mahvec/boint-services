import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full p-4 bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between capitalize">
        <Link to="/">
          <img
            src="/bointlogo.png"
            alt="boint-services-logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center ml-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Links and button */}
        <div
          className={`flex-col text-xs md:text-sm md:flex-row md:flex items-center w-full md:w-2/3 capitalize justify-center md:justify-between gap-4 font-medium fixed md:static left-0 right-0 bg-white md:bg-transparent shadow md:shadow-none transition ease-in-out duration-500 ${
            menuOpen
              ? "flex z-50 top-0 h-screen md:h-auto overflow-y-auto transition-all ease-in-out duration-500" // Full screen height and scrollable on mobile when open
              : " md:flex flex z-0 -top-[200%] h-screen md:h-auto transition-all ease-in-out duration-700"
          }`}
        >
          <div className="flex-col md:flex-row gap-4 flex text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 md:py-0 cursor-pointer ${
                  isActive ? "font-semibold" : "font-normal"
                }`
              }
              end
            >
              home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `py-2 md:py-0 cursor-pointer ${
                  isActive ? "font-semibold" : "font-normal"
                }`
              }
            >
              about
            </NavLink>
            <NavLink
              to="/what-we-do"
              className={({ isActive }) =>
                `py-2 md:py-0 cursor-pointer ${
                  isActive ? "font-semibold" : "font-normal"
                }`
              }
            >
              what we do
            </NavLink>
            <NavLink
              to="/our-products"
              className={({ isActive }) =>
                `py-2 md:py-0 cursor-pointer ${
                  isActive ? "font-semibold" : "font-normal"
                }`
              }
            >
              our products
            </NavLink>
          </div>

          <div className="md:ml-4 py-2 md:py-0 cursor-pointer">
            <Link
              to={"/contact-us"}
              className="capitalize px-10 py-4 bg-[#C18932] w-full md:w-auto rounded-lg text-white"
            >
              contact us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
