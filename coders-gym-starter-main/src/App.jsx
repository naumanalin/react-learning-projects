import React from "react";
import BgImage from "./assets/bg.png";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Equipments from "./sections/Equipments"
import Banner from "./sections/Banner";
import TabComp from "./sections/TabComp";
import Testimonials from "./sections/Testimonials";
import Banner2 from "./sections/Banner2";
import Footer from "./sections/Footer";

const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};
const Banner2Data = {
  image: Img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <div className="container">
        <Equipments />
        <Banner {...BannerData} />
        <TabComp />
        <Banner {...Banner2Data} />
        <Testimonials />
        <Banner2 />
      </div>
        <Footer />
    </div>
  );
};

export default App;
