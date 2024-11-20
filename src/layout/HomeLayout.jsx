import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="w-11/12 mx-auto">
        <Slider />
      </section>

      <main></main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
