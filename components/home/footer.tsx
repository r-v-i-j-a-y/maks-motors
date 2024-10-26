import Image from "next/image";

// Social Icon
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { FacebookTwoTone } from "@mui/icons-material";

let services_liks = [
  { name: "Car mechanic works", title: "maks-mechanic-works" },
  { name: "Car wash", title: "maks-car-war" },
  { name: "Car detailing", title: "maks-car-detailing" },
  { name: "Car denting & painting", title: "maks-denting-&-painting" },
  { name: "Car stereo system", title: "maks-stereo-system" },
  { name: "Car modification", title: "maks-modification" },
  { name: "Car windshield", title: "maks-windshield" },
];

let company_links = [
  { name: "Blog", title: "maks-blog" },
  { name: "About", title: "maks-about" },
];

export default function Footer() {
  return (
    <>
      <footer className="sm:m-5 bg-black sm:rounded-3xl p-5 sm:p-10  text-white">
        <div className="lg:flex">
          <div className="w-12/12 lg:w-5/12">
            <Image
              src={"/images/maks-car-care-logo.webp"}
              className="w-36"
              alt="maks-car-care-logo"
              width={100}
              height={100}
            ></Image>
            <h3 className="">
              <span className="text-yellow-400 ">Maks Car Care</span> experience
              the best car service
            </h3>
            <button className="btn-container bg-yellow-400 w-32 text-black">
              Get a Qoute
            </button>
          </div>
          <div className="w-12/12 lg:w-7/12 flex justify-between lg:justify-end pt-10 lg:p-0 flex-wrap">
            {/* <div  className="w-4/12"></div> */}
            <div className="sm:w-4/12">
              <h6 className="font-semibold">Services</h6>
              <ul className="pb-5">
                {services_liks.map((item, index) => (
                  <li key={index}>
                    <a href="" title={item.title}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-3/12">
              <h6 className="font-semibold">Company</h6>
              <ul>
                {company_links.map((item, index) => (
                  <li key={index}>
                    <a href="" title={item.title}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:w-3/12">
              <h6 className="font-semibold">Rotopolymers and Chemicals</h6>
              <p className="text-[#808080] pt-2">
                48A, Thermal Nagar, East Main Road, Ambathur, Thirumullaivoyal,
                Chennai, Tamil Nadu 600062
              </p>
              <div className="flex justify-around sm:justify-between pt-5 opacity-50">
                <Facebook  sx={{ color: "#C3E1FF",fontSize: 40 }} />
                <LinkedIn sx={{ color: "#C3E1FF",fontSize: 40 }} />
                <YouTubeIcon sx={{ color: "#C3E1FF",fontSize: 40 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-between  text-xs text-gray-400 mt-10 flex-wrap ">
          <p>Privacy terms & conditions </p>
          <p>@ 2024 Rotopolymers and Chemicals All Rights Reserved </p>
        </div>
      </footer>
    </>
  );
}
