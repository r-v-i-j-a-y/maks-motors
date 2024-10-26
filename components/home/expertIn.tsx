import Image from "next/image";

const expert_in_array = [
  { image: "/images/audi.webp", alt: "audi-logo" },
  { image: "/images/volkswagen.webp", alt: "volkswagen-logo" },
  { image: "/images/honda.webp", alt: "honda-logo" },
  { image: "/images/scoda.webp", alt: "scoda-logo" },
  { image: "/images/tata.webp", alt: "tata-logo" },
];

export default function Expertin() {
  return (
    <>
      <section className=" bg-logo_bg p-5 sm:p-10 bg-[#262626]">
        <div className="container mx-auto ">
          <h2 className="text-center  text-white ">
            We are expert in
          </h2>
          <div className="flex justify-around items-center mx-auto pb-10">
            {expert_in_array.map((item, index) => (
              <div  className="w-32 p-2 sm:p-5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  height={100}
                  width={100}
                  className="  object-cover mx-auto "
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
