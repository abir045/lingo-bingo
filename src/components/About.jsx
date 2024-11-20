import React from "react";
import convo from "../assets/convo2.jpg";
import phone from "../assets/on-phone.jpg";
import flash from "../assets/flashcards.jpg";

const About = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-bold">
        Your guaranteed path towards{" "}
        <span className="text-red-300 italic">speaking</span> a new language
      </h1>

      <div className="lg:flex justify-center gap-20 items-center mt-20 w-8/12 mx-auto">
        <div className="">
          <img className="w-full rounded-xl" src={convo} alt="" />
        </div>

        <div className="flex flex-col items-start mt-8">
          <h2 className="text-4xl font-bold ">
            The key to meaningful conversations
          </h2>
          <p className="mt-3 lg:w-7/12 ">
            With Lingo Bingo, you’ll learn practical and useful skills that you
            can apply right away — so you can reach your goal of having
            real-life conversations faster.
          </p>
        </div>
      </div>

      {/* 2nd */}
      <div className="lg:flex-row flex flex-col-reverse  justify-center gap-5 items-center mt-20 w-8/12 mx-auto">
        <div className="flex flex-col items-start mt-8">
          <h2 className="text-4xl font-bold  ">
            A learning experience personalized
          </h2>
          <p className="mt-3 w-11/12 ">
            Achieve your goals with course material that’s tailored to your
            proficiency level, interests, and time commitment. Stay motivated
            with real-time feedback, progress trackers, and handy
            visualizations. It’s like having a private tutor in your pocket.
          </p>
        </div>

        <div className="mt-3">
          <img className="w-full rounded-xl" src={phone} alt="" />
        </div>
      </div>

      {/* 3rd */}

      <div className="lg:flex justify-center gap-20 items-center mt-20 w-8/12 mx-auto">
        <div className="">
          <img className="w-full rounded-xl" src={flash} alt="" />
        </div>

        <div className="flex flex-col items-start mt-8">
          <h2 className="text-4xl font-bold ">A complete approach</h2>
          <p className="mt-3  ">
            Sharpen your pronunciation using speech recognition. Build your
            conversation skills with engaging, flashcards, interactive
            dialogues. Get helpful grammar tips while reading, writing,
            listening, and exploring culture bites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
