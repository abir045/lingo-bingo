import React from "react";
import star from "../assets/stars.svg";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="mt-28 ">
      <h2 className="text-center text-4xl font-bold">
        What our learners are saying
      </h2>

      <div className="md:flex  justify-center items-center gap-10 px-5">
        <div className="flex flex-col items-start ">
          <div className="flex text-yellow-500 mt-10">
            <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>

          <p className=" mt-10 font-semibold">
            “Lingo Bingo has been a foundational tool for me, especially the
            clips of native speakers. These help me mimic accents and embrace
            the language more fully. The quick, bite-sized lessons are perfect
            for my busy schedule. I've tried many apps, but Lingo Bingo is one
            of the few that makes me genuinely happy with my progress.”
          </p>
          <p className="mt-5">Voloúre</p>
        </div>
        {/* 2nd */}
        <div className="flex flex-col items-start ">
          <div className="flex text-yellow-500 mt-10">
            <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>

          <p className=" mt-10 font-semibold">
            “Best app for getting experience listening and interacting with
            native speakers. Listening to conversations by native speakers is so
            much better for actually being able to understand people.”
          </p>
          <p className="mt-5">Beth Williams</p>
        </div>
        {/* 3rd */}
        <div className="flex flex-col items-start ">
          <div className="flex text-yellow-500 mt-10">
            <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>

          <p className=" mt-10 font-semibold">
            “My Fiancé is Spanish so I wanted to learn their language to
            communicate easily. Over the year I can now string small sentences
            together. I don't think I could of done it without the help of Lingo
            Bingo.”
          </p>
          <p className="mt-5">Lewis Williams</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
