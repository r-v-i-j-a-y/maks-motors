import Image from "next/image";

export default function Whatwedo() {
  const serviceArray = [
    {
      image: "/images/car-painting.webp",
      title: "Car denting & Painting",
      alt: "maks-car-painting",
    },
    {
      image: "/images/car-detailing.webp",
      title: "Car detailing, Ceramic & PPF coating",
      alt: "maks-car-detailing",
    },
    {
      image: "/images/car-modification.webp",
      title: "Car modification & Performing kits",
      alt: "maks-car-modification-&-performing-kit",
    },
    {
      image: "/images/car-insurance.webp",
      title: "Car Insurance Claims",
      alt: "maks-car-Insurance-clims",
    },
    {
      image: "/images/car-ac-repair.webp",
      title: "Car AC repair & Wiring work",
      alt: "maks-car-ac-repair-&-wiring-work",
    },
    {
      image: "/images/car-maintanance.webp",
      title: "Car general maintanance",
      alt: "maks-car-general-maintanance",
    },
    {
      image: "/images/car-accessories.webp",
      title: "Car Accessories & stereo system",
      alt: "maks-car-accessories-&-stereo-system",
    },
  ];
  return (
    <>
      <section className=" bg-[#fafafa] p-10 pb-32  ">
        <div className="servives">
          <div className="p-5 sm:p-10">
            <h2 className="text-center font-semibold">
              What we do
            </h2>
            <p className="text-sm text-center text-black">
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
                    height={200}
                    alt={item.alt}
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
