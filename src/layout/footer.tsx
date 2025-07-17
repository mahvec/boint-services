import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main className="w-full bg-[#031830] pt-10 pb-6 h-screen md:h-full md:py-20">
      <div className="">
        <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-start text-white justify-between gap-10 md:gap-0 px-4">
          {/* Address/Logo */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start">
            <img src="/footer-logo.svg" alt="" className="mb-4 h-10 w-auto" />
            <p className="w-full md:w-[70%] text-sm mb-2">
              488, Sulu Gambari Close, 2nd Avenue, Gwarinpa, Abuja, Nigeria
            </p>
            <a href="mailto:" className="text-sm break-all">
              Email: projects@biontservices.com
            </a>
          </div>
          {/* Links */}
          <div className="flex  w-full md:w-1/3 flex-row gap-8 md:gap-14 justify-between md:justify-start mb-8 md:mb-0">
            <div className="capitalize flex flex-col gap-2">
              <p className="font-bold">Company</p>
              <Link to="/about-us">about us</Link>
              <Link to="/our-products">Products</Link>
              <Link to="/what-we-do">our services</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Our Products</p>
              <Link to={'/our-products'}>Ryder Mobile App</Link>
              <Link to={'/our-products'}>CPACS</Link>
              <Link to={'/our-products'}>IBRAS</Link>
            </div>
          </div>
          {/* Newsletter */}
          <form className="w-full md:w-1/3">
            <div className="space-y-4">
              <label
                htmlFor="newsletter"
                className="font-bold text-sm mb-2 block"
              >
                Subscribe to Our Newsletter
              </label>
              <div className="flex flex-col sm:flex-row w-full max-w-sm items-center gap-2">
                <Input
                  id="newsletter"
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="bg-[#C18932] w-full sm:w-auto"
                >
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center justify-start">
                <Link to={""}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="27.8906"
                      cy="27.8906"
                      r="27.4479"
                      stroke="url(#paint0_linear_2645_2456)"
                      strokeWidth="0.885417"
                    />
                    <path
                      d="M19 37L26.5484 29.4516M26.5484 29.4516L19 19H24L29.4516 26.5484M26.5484 29.4516L32 37H37L29.4516 26.5484M37 19L29.4516 26.5484"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2645_2456"
                        x1="28.56"
                        y1="55.7812"
                        x2="-4.40664"
                        y2="52.4569"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#C18932" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
                <Link to={""}>
                  <svg
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28.6719"
                      cy="27.8906"
                      r="27.4479"
                      stroke="url(#paint0_linear_2645_2460)"
                      strokeWidth="0.885417"
                    />
                    <path
                      d="M33 24C34.5913 24 36.1174 24.6321 37.2426 25.7574C38.3679 26.8826 39 28.4087 39 30V37H35V30C35 29.4696 34.7893 28.9609 34.4142 28.5858C34.0391 28.2107 33.5304 28 33 28C32.4696 28 31.9609 28.2107 31.5858 28.5858C31.2107 28.9609 31 29.4696 31 30V37H27V30C27 28.4087 27.6321 26.8826 28.7574 25.7574C29.8826 24.6321 31.4087 24 33 24Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 25H19V37H23V25Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 22C22.1046 22 23 21.1046 23 20C23 18.8954 22.1046 18 21 18C19.8954 18 19 18.8954 19 20C19 21.1046 19.8954 22 21 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2645_2460"
                        x1="29.3413"
                        y1="55.7812"
                        x2="-3.62539"
                        y2="52.4569"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#C18932" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
                <Link to={""}>
                  <svg
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28.4531"
                      cy="27.8906"
                      r="27.4479"
                      stroke="url(#paint0_linear_2645_2466)"
                      strokeWidth="0.885417"
                    />
                    <g clip-path="url(#clip0_2645_2466)">
                      <path
                        d="M39.9766 23.0561C39.9203 21.7809 39.7141 20.9042 39.4187 20.1445C39.114 19.3381 38.6451 18.6162 38.0309 18.016C37.4307 17.4065 36.704 16.9329 35.907 16.6329C35.1429 16.3375 34.2708 16.1313 32.9956 16.0751C31.7109 16.0141 31.303 16 28.0446 16C24.7861 16 24.3783 16.0141 23.0983 16.0703C21.8231 16.1266 20.9464 16.333 20.1869 16.6282C19.3803 16.9329 18.6584 17.4018 18.0583 18.016C17.4488 18.6162 16.9753 19.3429 16.6752 20.1399C16.3798 20.9042 16.1735 21.7761 16.1173 23.0513C16.0563 24.336 16.0422 24.7439 16.0422 28.0023C16.0422 31.2608 16.0563 31.6686 16.1126 32.9486C16.1688 34.2238 16.3752 35.1005 16.6706 35.8602C16.9753 36.6666 17.4488 37.3885 18.0583 37.9887C18.6584 38.5982 19.3851 39.0718 20.1821 39.3718C20.9464 39.6672 21.8183 39.8734 23.0937 39.9296C24.3735 39.986 24.7815 39.9999 28.04 39.9999C31.2984 39.9999 31.7063 39.986 32.9863 39.9296C34.2615 39.8734 35.1382 39.6672 35.8976 39.3718C37.5106 38.7482 38.7858 37.4729 39.4094 35.8602C39.7046 35.096 39.911 34.2238 39.9672 32.9486C40.0234 31.6686 40.0375 31.2608 40.0375 28.0023C40.0375 24.7439 40.0328 24.336 39.9766 23.0561ZM37.8153 32.8549C37.7637 34.027 37.5668 34.6599 37.4027 35.0819C36.9994 36.1274 36.1696 36.9572 35.1241 37.3605C34.7021 37.5246 34.0646 37.7215 32.8971 37.7729C31.6312 37.8293 31.2515 37.8433 28.0493 37.8433C24.8471 37.8433 24.4627 37.8293 23.2014 37.7729C22.0293 37.7215 21.3964 37.5246 20.9744 37.3605C20.4541 37.1682 19.9805 36.8634 19.5961 36.4649C19.1976 36.0758 18.8928 35.6069 18.7005 35.0866C18.5364 34.6647 18.3396 34.027 18.2881 32.8596C18.2317 31.5937 18.2178 31.2139 18.2178 28.0117C18.2178 24.8095 18.2317 24.425 18.2881 23.1639C18.3396 21.9918 18.5364 21.3589 18.7005 20.9369C18.8928 20.4165 19.1976 19.943 19.6008 19.5584C19.9898 19.1599 20.4587 18.8552 20.9792 18.6631C21.4011 18.499 22.0388 18.3021 23.2062 18.2504C24.472 18.1942 24.8519 18.1801 28.0539 18.1801C31.2609 18.1801 31.6405 18.1942 32.9018 18.2504C34.0739 18.3021 34.7069 18.499 35.1288 18.6631C35.6491 18.8552 36.1227 19.1599 36.5071 19.5584C36.9057 19.9476 37.2104 20.4165 37.4027 20.9369C37.5668 21.3589 37.7637 21.9964 37.8153 23.1639C37.8715 24.4298 37.8856 24.8095 37.8856 28.0117C37.8856 31.2139 37.8715 31.589 37.8153 32.8549Z"
                        fill="white"
                      />
                      <path
                        d="M28.0445 21.8369C24.6409 21.8369 21.8793 24.5983 21.8793 28.0022C21.8793 31.406 24.6409 34.1674 28.0445 34.1674C31.4484 34.1674 34.2098 31.406 34.2098 28.0022C34.2098 24.5983 31.4484 21.8369 28.0445 21.8369ZM28.0445 32.0014C25.8364 32.0014 24.0453 30.2105 24.0453 28.0022C24.0453 25.7939 25.8364 24.0029 28.0445 24.0029C30.2529 24.0029 32.0438 25.7939 32.0438 28.0022C32.0438 30.2105 30.2529 32.0014 28.0445 32.0014Z"
                        fill="white"
                      />
                      <path
                        d="M35.8931 21.5931C35.8931 22.388 35.2486 23.0324 34.4536 23.0324C33.6588 23.0324 33.0143 22.388 33.0143 21.5931C33.0143 20.7981 33.6588 20.1538 34.4536 20.1538C35.2486 20.1538 35.8931 20.7981 35.8931 21.5931Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2645_2466"
                        x1="29.1225"
                        y1="55.7812"
                        x2="-3.84414"
                        y2="52.4569"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#C18932" />
                      </linearGradient>
                      <clipPath id="clip0_2645_2466">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(16 16)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link to={""}>
                  <svg
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28.2344"
                      cy="27.8906"
                      r="27.4479"
                      stroke="url(#paint0_linear_2645_2469)"
                      strokeWidth="0.885417"
                    />
                    <path
                      d="M31 38V34C31.1392 32.7473 30.78 31.4901 30 30.5C33 30.5 36 28.5 36 25C36.08 23.75 35.73 22.52 35 21.5C35.28 20.35 35.28 19.15 35 18C35 18 34 18 32 19.5C29.36 19 26.64 19 24 19.5C22 18 21 18 21 18C20.7 19.15 20.7 20.35 21 21.5C20.2719 22.5159 19.9185 23.7528 20 25C20 28.5 23 30.5 26 30.5C25.61 30.99 25.32 31.55 25.15 32.15C24.98 32.75 24.93 33.38 25 34V38"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25 34C20.49 36 20 32 18 32"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2645_2469"
                        x1="28.9038"
                        y1="55.7812"
                        x2="-4.06289"
                        y2="52.4569"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#C18932" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full h-full items-end justify-center flex mt-10">
          <div className="text-center border-t border-gray-100 container mx-auto h-full">
            <p className="text-white mt-6">
              © 2025 - BIONT Integrated Nigeria Ltd.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
