
import Image from "next/image";


// Why Maks Car Care Images

import Your_car from "../images/Your_car_our_priority.webp";
import Top_quality from "../images/Top_quality_at_low_price.webp";
import Transforming from "../images/Transforming_vehicles.webp";


const car_care = [
  {
    image: Your_car,
    title: "Your Car, Our Priority",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: Top_quality,
    title: "Top quality at low Price",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: Transforming,
    title: "Transforming Vehicles, Transforming Lives",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Whymakscarcare() {
  return (
    <>
      <section className="pt-40 container mx-auto">
        <h1 className="text-center text-5xl text-black font-semibold pb-20">
          Why Maks Car Care?
        </h1>
        {car_care.map((item, index) => (
          <div key={index} className="flex gap-20 items-center car-care p-10">
            <div className="w-6/12 flex-col text-black">
              <h1 className="text-5xl font-semibold text-start mb-8">
                {item.title}
              </h1>
              <p>{item.content}</p>
            </div>
            <div className="w-6/12 ">
              <Image src={item.image} alt="sdfsdf"></Image>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
