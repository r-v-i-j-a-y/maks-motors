import Image from "next/image";

//Why makes Image
import side_car from "../images/side_car.webp";

export default function Whymaks() {
  return (
    <>
      <section className="flex bg-why_maks_color_1 ">
        <div className="w-3/12 text-center p-10 xl:p-20 m-auto">
          <h1 className="text-7xl font-semibold flex-nowrap">
            2000<span className="text-5xl">+</span>
          </h1>
          <h1 className="font-semibold py-3 text-lg">Trusted Customers</h1>
          <p className="text-xs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="bg-why_maks_color_2 w-6/12 text-center py-20 px-10 scale-y-105 rounded-3xl">
          <h3 className="text-7xl font-semibold p-10">Why Maks?</h3>
          <Image src={side_car} className="py-10 "></Image>
          <p className="">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className="btn-container bg-primary_color text-black mt-10 w-32">
            Call Now
          </button>
        </div>
        <div className="w-3/12 text-center  p-10 xl:p-20 m-auto">
          <h1 className="text-7xl font-semibold flex-nowrap">
            5<span className="text-5xl">+</span>
          </h1>
          <h3 className="font-semibold py-3 text-lg">Years Experience</h3>
          <p className="text-xs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </section>
    </>
  );
}
