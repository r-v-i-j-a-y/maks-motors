import Image from "next/image";

// Social Icon
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

import logo from "../images/maks-car-care-logo.webp";


export default function Footer() {
  return (
    <>
      <footer className="m-5 bg-black rounded-3xl py-10 px-20">
        <div className="flex ">
          <div className="w-5/12">
            <Image src={logo} className="w-36"></Image>
            <h1 className="text-4xl py-10">
              <span className="text-yellow-400 ">Maks Car Care</span> experience
              the best car service
            </h1>
            <button className="btn-container bg-yellow-400 text-black w-32">
              Get a Qoute
            </button>
          </div>
          <div className="w-7/12 flex justify-end">
            {/* <div  className="w-4/12"></div> */}
            <div className="w-4/12">
              <h1 className="font-semibold">Services</h1>
              <ul>
                <li>Car mechanic works</li>
                <li>Car wash</li>
                <li>Car detailing</li>
                <li>Car denting & painting</li>
                <li>Car stereo system</li>
                <li>Car modification</li>
                <li>Car windshield</li>
              </ul>
            </div>
            <div className="w-3/12">
              <h1 className="font-semibold">Company</h1>
              <ul>
                <li>Blog</li>
                <li>About</li>
              </ul>
            </div>
            <div className="w-3/12">
              <h1 className="font-semibold">Rotopolymers and Chemicals</h1>
              <p className="text-[#808080] pt-2">
                48A, Thermal Nagar, East Main Road, Ambathur, Thirumullaivoyal,
                Chennai, Tamil Nadu 600062
              </p>
              <ul className="flex justify-between pt-5 opacity-50">
                <li>
                  <FaFacebook size={40} color="C3E1FF" />
                </li>
                <li>
                  <FaLinkedin size={40} color="C3E1FF" />
                </li>
                <li>
                  <ImYoutube size={40} color="C3E1FF" />
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-10">
          <p>Privacy terms & conditions </p>
          <p>@ 2024 Rotopolymers and Chemicals All Rights Reserved </p>
        </div>
      </footer>
    </>
  );
}
