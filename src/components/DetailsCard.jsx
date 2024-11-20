import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({ item }) => {
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
        className="card  bg-base-100 lg:w-[800px] shadow-xl "
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
          {/* <p className="font-semibold">
            <span className="text-indigo-500">example:</span> {item.example}
          </p> */}
          <p className="font-semibold">
            <span className="text-indigo-500">part_of_speech:</span>{" "}
            {item.part_of_speech}
          </p>

          <p className="font-semibold">
            <span className="text-indigo-500">difficulty:</span>{" "}
            {item.difficulty}
          </p>
          {/* <p className="font-semibold">
            <span className="text-indigo-500">when_to_say:</span>{" "}
            {item.when_to_say}
          </p> */}
          <div className="card-actions justify-start">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-neutral"
            >
              When to say
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{item.word}</h3>

          <p className="font-semibold">
            {" "}
            <span className="text-indigo-500">meaning:</span> {item.meaning}
          </p>
          <p className="font-semibold">
            <span className="text-indigo-500">when_to_say:</span>{" "}
            {item.when_to_say}
          </p>
          <p className="font-semibold">
            <span className="text-indigo-500">example:</span> {item.example}
          </p>
          <div className="modal-action flex justify-start">
            <form method="dialog" className="">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-neutral ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsCard;
