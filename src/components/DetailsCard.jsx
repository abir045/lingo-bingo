import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PronunciationButton from "./PronounceButton";

const DetailsCard = ({ item, onOpenModal }) => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (item.difficulty === "easy") {
      setColor("#c9eb34");
    } else {
      setColor("#ebdc34");
    }
  }, []);

  return (
    <div>
      <div
        style={{ backgroundColor: color }}
        className="card  bg-base-100 lg:w-[800px] md:w-[600px] w-[350px] shadow-xl "
      >
        <div className="card-body">
          <h2 className="card-title font-bold">word: {item.word}</h2>
          <p className="font-semibold">
            {" "}
            <span className="text-indigo-500">pronunciation:</span>{" "}
            {item.pronunciation}
          </p>
          <p className="font-semibold">
            {" "}
            <span className="text-indigo-500">meaning:</span> {item.meaning}
          </p>

          <p className="font-semibold">
            <span className="text-indigo-500">part_of_speech:</span>{" "}
            {item.part_of_speech}
          </p>

          <p className="font-semibold">
            <span className="text-indigo-500">difficulty:</span>{" "}
            {item.difficulty}
          </p>

          <PronunciationButton word={item.word} />

          <div className="card-actions justify-start">
            <button onClick={onOpenModal} className="btn btn-neutral">
              When to say
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
