import Image from "next/image";

// We are expert in Logos
import audi_logo from "../images/audi.webp";
import scoda from "../images/scoda.webp";
import volkswagen from "../images/volkswagen.webp";
import honda from "../images/honda.webp";
import tata from "../images/tata.webp";

const expert_in_array = [
  { image: audi_logo },
  { image: volkswagen },
  { image: honda },
  { image: scoda },
  { image: tata },
];

export default function Expertin() {
  return (
    <>
      <section className=" bg-logo_bg ">
        <div className="container mx-auto">
          <h1 className="text-center p-10 pt-20 text-5xl">We are expert in</h1>
          <div className="flex justify-center items-center mx-auto ">
            {expert_in_array.map((item, index) => (
              <div className="p-5 md:p-10 xl:p-20" key={index}>
                <Image
                  src={item.image}
                  alt="sdfsdf"
                  className=" object-cover"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
