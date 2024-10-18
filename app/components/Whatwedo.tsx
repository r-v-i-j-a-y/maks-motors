import Image from "next/image";

// Services Images
import PaintingImage from "../images/Painting.webp";
import car_detailing from "../images/Car_detailing.webp";
import car_modification from "../images/Car_modification.webp";
import car_insurance from "../images/Car_Insurance.webp";
import car_ac_repair from "../images/Car_ac_repair.webp";
import car_maitanance from "../images/Car_maintanance.webp";
import car_accessories from "../images/Car_Accessories.webp";

export default function Whatwedo() {
  const serviceArray = [
    { image: PaintingImage, title: "Car denting & Painting" },
    { image: car_detailing, title: "Car detailing, Ceramic & PPF coating" },
    { image: car_modification, title: "Car modification & Performing kits" },
    { image: car_insurance, title: "Car Insurance Claims" },
    { image: car_ac_repair, title: "Car AC repair & Wiring work" },
    { image: car_maitanance, title: "Car general maintanance" },
    { image: car_accessories, title: "Car Accessories & stereo system" },
  ];
  return (
    <>
      <section className=" bg-[#fafafa] p-10 pb-32  ">
        <div className="servives">
          <div className="p-10">
            <h1 className="text-center text-5xl text-black font-semibold">
              What we do
            </h1>
            <p className="text-sm text-center p-5 text-black">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className=" flex flex-wrap justify-center gap-5 ">
            {serviceArray.map((item) => (
              <div className="w-80 h-80 bg-white border border-1 rounded-xl  p-5 flex flex-col">
                <div className="h-60 items-center flex justify-center">
                  <Image
                    src={item.image}
                    className="object-cover"
                    width={200}
                  ></Image>
                </div>
                <div className="h-20">
                  <h5 className="text-xl  tracking-tight text-black text-center font-semibold">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
