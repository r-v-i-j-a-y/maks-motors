"use client";
import Image from "next/image";

const nav_links = [{ name: "Services" }, { name: "About" }, { name: "Blog" }];

export default function Hero() {
  return (
    <>
      <section className=" overflow-hidden sm:p-5">
        <div className="hero bg-[url('/images/maks-hero-banner.webp')]">
          <nav>
            <div className=" flex items-center justify-between p-5 sm:px-10">
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src={"/images/maks-car-care-logo.webp"}
                  width={100}
                  height={100}
                  className="w-75 h-75 "
                  alt="mark-motors-logo"
                />
              </a>
              <div className="bg-white rounded-md flex">
                <button className="bg-yellow-400 py-2 px-5 rounded-md m-1 block md:hidden">
                  <a
                    href="#"
                    className="block  rounded md:bg-transparent md:p-0 text-xs "
                    aria-current="page"
                  >
                    Get a Qoute
                  </a>
                </button>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2    "
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden w-full md:block md:w-auto bg-white rounded-md"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                  {nav_links.map((item, index) => (
                    <li className="p-3" key={index}>
                      <a
                        href="#"
                        className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-xs"
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center ">
                    <div className="bg-yellow-400 py-2 px-5 rounded-md me-1">
                      <a
                        href="#"
                        className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-xs "
                        aria-current="page"
                      >
                        Get a Qoute
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* <div className="sm:flex items-start justify-between w-full p-5 ">
          
            <ul className="flex bg-white p-1 rounded-lg justify-between text-xs text-black mt-3 sm:mt-0">
              <li className="navbar-list">Services</li>
              <li className="navbar-list">About</li>
              <li className="navbar-list">Blog</li>
              <li className="bg-yellow-400 navbar-list">Get a Qoute</li>
            </ul>
          </div> */}
          <div className="p-7 sm:p-20 mt-60 sm:m-0">
            <h1 className="sm:flex items-center text-white font-bold text-center ">
              Total Car Care
              <Image
                src={"/images/twinkle-star.webp"}
                width={100}
                height={100}
                className="w-10 md:w-16 md:ms-5 hidden sm:block"
                alt="mark-motors-banner"
              ></Image>
            </h1>
            <div className="grid sm:grid-cols-2 text-sm">
              <p className="mb-10 md:text-lg text-white">
                Maks Motor Is A Versatile Comapany That Provides A Comprehensive
                Range Of Car-Related Services
              </p>
            </div>
            <button className="hidden sm:block mb-10 bg-yellow-400 px-10 py-3 text-black rounded-lg">
              Call Now
            </button>
            <div className="flex mb-10">
              <div className="bg-white w-full sm:w-80 p-5 rounded-lg">
                <div className="border-b-2 flex items-center ">
                  <div className="p-3 pl-0">
                    <Image
                      src={"/images/location-icon.webp"}
                      width={25}
                      height={25}
                      className="text-gray-500"
                      alt="mark-motors-locationIcon"
                    />
                  </div>
                  <div className="flex-col relative">
                    <label
                      htmlFor="location"
                      className="text-xs text-black absolute"
                    >
                      Location
                    </label>
                    <input
                      className="text-xs outline-none text-black pt-4"
                      type="text"
                      placeholder="Search your location"
                      id="location"
                    />
                  </div>
                </div>
                <div className="border-b-2 flex items-center pt-3">
                  <div className="p-3 pl-0">
                    <Image
                      src={"/images/service-icon.webp"}
                      width={25}
                      height={25}
                      className="text-gray-500"
                      alt="mark-motors-serviceIcon"
                    />
                  </div>
                  <div className="flex-col relative">
                    <label
                      htmlFor="serivices"
                      className="text-xs text-black absolute"
                    >
                      Service type
                    </label>
                    <input
                      className="text-xs outline-none text-black pt-4"
                      type="text"
                      placeholder="Car wash"
                      id="serivices"
                    />
                  </div>
                </div>
                <div className="border-b-2 flex items-center pt-3">
                  <div className="p-3 pl-0">
                    <Image
                      src={"/images/car-icon.webp"}
                      width={25}
                      height={25}
                      className="text-gray-500"
                      alt="mark-motors-carIcon"
                    />
                  </div>
                  <div className="flex-col relative">
                    <label
                      htmlFor="model"
                      className="text-xs text-black absolute"
                    >
                      Car model
                    </label>
                    <input
                      className="text-xs outline-none text-black pt-4"
                      type="text"
                      placeholder="Honda"
                      id="model"
                    />
                  </div>
                </div>
                <button className="bg-black btn-container mt-10 text-white">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
