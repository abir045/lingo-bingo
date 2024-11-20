import React from "react";
import videos from "../assets/videos.jpg";
import podcast from "../assets/podcast.jpg";
import magazine from "../assets/magazine.jpg";

const Beyond = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-10">Lingo Bingo and beyond</h2>
      <p className="text-center mt-3">
        Want to immerse yourself in your new language? Dive into a world of
        language learning content.
      </p>

      <div className="lg:flex justify-center items-center mt-10">
        <div className="flex flex-col items-center">
          <img src={videos} className="w-[300px] rounded-xl" alt="" />
          <p className="mt-5 font-semibold">Lingo Bingo Videos</p>
          <p className="mt-5 w-1/2 ">
            Discover the weird and wonderful things that make a language so
            fascinating.
          </p>
        </div>
        {/*podcasts  */}

        <div className="flex flex-col items-center mt-5">
          <img src={podcast} className="w-[300px] rounded-xl" alt="" />
          <p className="mt-5 font-semibold">Lingo Bingo Podcasts</p>
          <p className="mt-5 w-1/2 ">
            Listen as Babbel experts reveal language secrets and give you an
            inside look at local culture.
          </p>
        </div>

        {/* magazines */}

        <div className="flex flex-col items-center mt-5">
          <img src={magazine} className="w-[300px] rounded-xl" alt="" />
          <p className="mt-5 font-semibold">Lingo Bingo Magazine</p>
          <p className="mt-5 w-1/2 ">
            Explore stories from around the world, get language learning tips
            and dive deeper into different cultures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beyond;
