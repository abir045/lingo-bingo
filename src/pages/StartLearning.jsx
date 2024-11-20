import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useLoaderData } from "react-router-dom";
import LessonCard from "../components/LessonCard";
import Footer from "../components/Footer";

const StartLearning = () => {
  const data = useLoaderData();
  console.log(data);

  // useEffect(() => {
  //   setAllCards(data);
  // }, []);

  return (
    <div className="">
      <Header />
      <h2 className="font-bold text-4xl text-center mt-10">
        Let's learn WIth Lingo Bingo, Choose your lesson{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1   lg:grid-cols-3 gap-5 w-11/12 mx-auto ">
        {data.length > 0 &&
          data?.map((item) => <LessonCard key={item.id} item={item} />)}
      </div>
      <div className="mt-10">
        <h3 className="text-center font-bold text-3xl my-5">
          Watch a video on learning the Alphabet
        </h3>

        <iframe
          width="80%"
          className="mx-auto"
          height="524"
          src="https://www.youtube.com/embed/dlazjKbt40Q"
          title="1 Introdution to the Spanish Alphabet"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-10 mx-auto flex justify-center">
        <Link to="/tutorials" className="btn btn-neutral btn-wide">
          View More
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default StartLearning;
