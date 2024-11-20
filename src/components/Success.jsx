import React from "react";
import CountUp from "react-countup";

import { MdOutlinePlayLesson } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { TbVocabulary } from "react-icons/tb";
import { GrChapterAdd } from "react-icons/gr";

const Success = () => {
  return (
    <div className="bg-yellow-300 p-8 mt-10">
      <h1 className="text-5xl font-bold text-center">
        The Proven Lingo Bingo Method
      </h1>
      <p className="text-center mt-3 w-1/2 mx-auto">
        Have real conversations faster. Whether you’re learning with the
        award-winning app or accessing live online classes taught by world-class
        teachers, the Lingo Bingo Method is designed to get you speaking within
        just three weeks.
      </p>

      {/* Show User Count, Lesson Count, vocabulary count, Tutorial Count. */}
      <div className="flex justify-center gap-8 mt-20 pb-10">
        <div className="flex flex-col items-center">
          <FaUserPlus className="text-5xl" />
          <span className="font-semibold text-2xl mt-3">
            <CountUp delay={2} end={15000} />
          </span>
          <p className="mt-4">Users</p>
        </div>
        {/* lessons */}
        <div className="flex flex-col items-center">
          <MdOutlinePlayLesson className="text-5xl" />
          <span className="font-semibold text-2xl mt-3">
            <CountUp delay={2} end={50} />
          </span>
          <p className="mt-4">Lessons</p>
        </div>
        {/* vocabs */}
        <div className="flex flex-col items-center">
          <TbVocabulary className="text-5xl" />
          <span className="font-semibold text-2xl mt-3">
            <CountUp delay={2} end={10000} />
          </span>
          <p className="mt-4">Vocabularies</p>
        </div>
        {/* tutorials */}
        <div className="flex flex-col items-center">
          <GrChapterAdd className="text-5xl" />
          <span className="font-semibold text-2xl mt-3">
            <CountUp delay={2} end={100} />
          </span>
          <p className="mt-4">Tutorials</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
