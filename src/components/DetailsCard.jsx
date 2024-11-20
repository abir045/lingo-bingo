import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PronunciationButton from "./PronounceButton";

const DetailsCard = ({ item, onOpenModal }) => {
  const [color, setColor] = useState("white");
  const [meaning, setMeaning] = useState("");
  const [word, setWord] = useState("");
  const [example, setExample] = useState("");
  const [w_t_s, setWTS] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (item.difficulty === "easy") {
      setColor("#c9eb34");
    } else {
      setColor("#ebdc34");
    }
    // setWord(item.word);
    // setMeaning(item.meaning);
    // setExample(item.example);
    // setWTS(item.when_to_say);
  }, []);

  const openModal = () => {
    // Set the current item's data to be displayed in the modal
    // setModalData(selectedItem);
    // Show the modal
    const modalId = `modal-${item.lesson_no}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }

    // document.getElementById("my_modal_5").showModal();
  };

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

          <PronunciationButton word={item.word} />
          {/* <p className="font-semibold">
            <span className="text-indigo-500">when_to_say:</span>{" "}
            {item.when_to_say}
          </p> */}
          <div className="card-actions justify-start">
            <button onClick={onOpenModal} className="btn btn-neutral">
              When to say
            </button>
          </div>
        </div>
      </div>
      {/* <dialog
        id={`modal-${item.lesson_no}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">word:{item.word}</h3>

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
       
              <button className="btn btn-neutral ">Close</button>
            </form>
          </div>
        </div>
      </dialog> */}
    </div>
  );
};

export default DetailsCard;
