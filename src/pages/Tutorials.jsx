import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center text-3xl font-bold pt-28">
        Welcome to Tutorials
      </h2>
      <div className="flex flex-col items-center px-5">
        <h2 className="text-2xl mt-5">
          Learn Spanish in 10 Minutes - ALL the Basics You Need
        </h2>
        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/t7-nb1wlnyA"
          title="Learn Spanish in 10 Minutes - ALL the Basics You Need"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2 className="text-2xl mt-10">
          IF YOU WANT TO LEARN SPANISH WATCH THIS FIRST!!
        </h2>
        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/xglEjH0Ue8o"
          title="IF YOU WANT TO LEARN SPANISH WATCH THIS FIRST!! Must know, basic conversational vocaulary. || SAH"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2 className="text-2xl mt-10">Learn Spanish in 35 minutes</h2>

        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/6_5FnCLLYoA"
          title="Learn Spanish in 35 minutes: The 100+ everyday Spanish sentences you need to know!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2 className="text-2xl mt-10">
          50 Questions you need to learn in Spanish!
        </h2>
        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/VSuFrFPNbzA"
          title="50 Questions you need to learn in Spanish!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2 className="text-2xl mt-10">
          Using Patterns to Become Fluent in Spanish
        </h2>
        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/t3_fvtCMvYY"
          title="Using Patterns to Become Fluent in Spanish"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2 className="text-2xl mt-10">Lesson 1: Spanish Pronunciation</h2>

        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/8Ozf-mSpMFk"
          title="Lesson 1: Spanish Pronunciation &amp; Basic Translation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-10 mx-auto flex justify-center">
        <Link to="/start-learning" className="btn btn-neutral btn-wide">
          Learn Vocabularies
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Tutorials;
