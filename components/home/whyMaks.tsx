import Image from "next/image";

export default function Whymaks() {
  return (
    <>
      <section className="flex text-white flex-wrap text-center bg-[#404040]">
        <div className="w-12/12 sm:w-3/12   m-auto py-10 sm:p-5">
          <h2 className="font-semibold m-0">
            2000<span className="text-4xl">+</span>
          </h2>
          <h5 className="font-semibold ">Trusted Customers</h5>
          <p className="text-xs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className=" w-12/12 sm:w-6/12  py-20 px-10 sm:scale-y-105 rounded-3xl bg-[#525252]">
          <h2 className="font-semibold ">Why Maks?</h2>
          <Image
            src={"/images/car-side-profile.webp"}
            width={5000}
            height={5000}
            className="py-10 "
            alt="car-side-profile"
          ></Image>
          <p className="">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className="btn-container bg-yellow-400 text-black mt-10 w-32">
            Call Now
          </button>
        </div>
        <div className="w-12/12 sm:w-3/12  m-auto  py-10 sm:p-5">
          <h2 className="font-semibold m-0">
            5<span className="text-4xl">+</span>
          </h2>
          <h5 className="font-semibold ">Years Experience</h5>
          <p className="text-xs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </section>
    </>
  );
}
