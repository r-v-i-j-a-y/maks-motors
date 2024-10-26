import Expertin from "./expertIn";
import Faqdata from "./faqData";
import Footer from "./footer";
import Hero from "./hero";
import Whatwedo from "./whatWeDo";
import Whymaks from "./whyMaks";
import Whymakscarcare from "./whyMaksCarCare";

export default function HomeContainer() {
  return (
    <>
      <Hero />
      <Whatwedo />
      <Whymaks />
      <Whymakscarcare />
      <Expertin />
      <Faqdata />
      <Footer />
    </>
  );
}
