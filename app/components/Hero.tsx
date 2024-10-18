"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../images/maks-car-care-logo.webp";
import star from "../images/Group 206.webp";
import locationIcon from "../images/locationIcon.webp";
import carIcon from "../images/carIcon.webp";
import serviceIcon from "../images/ServiceIcon.webp";

//icon
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

export default function Hero() {
  return (
    <>
      <section className="hero-container overflow-hidden p-5">
        <div className="hero">
          <div className="sm:flex items-start justify-between w-full py-5 px-5 sm:px-10 ">
            <Image src={logo} className="w-28 " alt="mark-motors-logo"></Image>
            <ul className="flex bg-white p-1 rounded-lg justify-between  text-xs text-black mt-3 sm:mt-0">
              <li className="navbar-list">Services</li>
              <li className="navbar-list">About</li>
              <li className="navbar-list">Blog</li>
              <li className="bg-yellow-400 navbar-list">Get a Qoute</li>
            </ul>
          </div>
          <div className="p-5 sm:p-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold flex items-center sm:text-nowrap text-wrap ">
              Total Car Care
              <Image
                src={star}
                className="w-10 md:w-16 md:ms-5 "
                alt="mark-motors-banner"
              ></Image>
            </h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3">
              <p className="mt-4 md:mt-10 text-sm md:text-lg">
                Maks Motor Is A Versatile Comapany That Provides A Comprehensive
                Range Of Car-Related Services
              </p>
            </div>
            <button className="mt-10 bg-yellow-400 px-10 py-3 text-black rounded-lg">
              Call Now
            </button>
            <div className="flex mt-10">
              <div className="bg-white w-80 p-5 rounded-lg">
                <div className="border-b-2 flex items-center ">
                  <div className="p-3 pl-0">
                    <Image
                      src={locationIcon}
                      width={25}
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
                      src={serviceIcon}
                      width={25}
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
                      src={carIcon}
                      width={25}
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
                <button className="bg-black btn-container mt-12">
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
