import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import About from "../components/About";
import Success from "../components/Success";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="w-11/12 mx-auto">
        <Slider />
        <About />
      </section>
      <section>
        <Success />
      </section>

      <main></main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
