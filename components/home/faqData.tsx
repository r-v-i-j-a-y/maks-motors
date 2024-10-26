const faq_array = [
  {
    title: "What makes Air Brill different from other HVAC companies?",
    content:
      "We prioritize responsible practices by offering energy-efficient systems and sustainable solutions. Our unwavering commitment to quality ensures long-lasting performance and customer satisfaction.",
  },
  {
    title: "What types of commercial HVAC systems does Air Brill offer?",
    content:
      "We prioritize responsible practices by offering energy-efficient systems and sustainable solutions. Our unwavering commitment to quality ensures long-lasting performance and customer satisfaction.",
  },
  {
    title: "What areas does Air Brill service?",
    content:
      "We prioritize responsible practices by offering energy-efficient systems and sustainable solutions. Our unwavering commitment to quality ensures long-lasting performance and customer satisfaction.",
  },
  {
    title: "What areas does Air Brill service?",
    content:
      "We prioritize responsible practices by offering energy-efficient systems and sustainable solutions. Our unwavering commitment to quality ensures long-lasting performance and customer satisfaction.",
  },
];

// Components
import Faq from "./faq";

export default function Faqdata() {
  return (
    <>
      <section className=" p-10 ">
        <div className="sm:px-20 sm:container mx-auto">
          <h2 className="text-center p-5 font-semibold">FAQ</h2>
          <ul>
            {faq_array.map((item, index) => {
              return (
                <Faq key={index} title={item.title} content={item.content} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
