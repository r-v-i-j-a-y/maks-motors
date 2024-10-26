import Image from "next/image";

const car_care = [
  {
    image: "/images/Your_car_our_priority.webp",
    alt: "your-car-our-priority",
    title: "Your Car, Our Priority",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/images/Top_quality_at_low_price.webp",
    alt: "top-quality-at-low-price",
    title: "Top quality at low Price",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/images/Transforming_vehicles.webp",
    alt: "transforming_vehicles",
    title: "Transforming Vehicles, Transforming Lives",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Whymakscarcare() {
  return (
    <>
      <section className="p-10 sm:pt-40 container mx-auto">
        <h2 className="text-center font-semibold sm:pb-20">
          Why Maks Car Care?
        </h2>
        {car_care.map((item, index) => (
          <div key={index} className="sm:flex gap-10 sm:gap-20 items-center car-care ">
            <div className="sm:w-6/12 flex-col text-black">
              <h2 className=" font-semibold  mb-8">
                {item.title}
              </h2>
              <p>{item.content}</p>
            </div>
            <div className="pt-10 sm:w-6/12 ">
              <Image src={item.image} alt={item.alt} width={5000} height={5000}></Image>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
