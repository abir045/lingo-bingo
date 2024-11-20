import React, { useState } from "react";
import { Link, Navigate, useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LessonDetails = () => {
  const lessons = useLoaderData();
  const params = useParams();
  const [modalData, setModalData] = useState(null);

  console.log(params.id);

  const singleLesson = lessons.filter((data) => data.id === params.id);

  console.log(singleLesson);

  const openModal = (item) => {
    setModalData(item);
    document.getElementById("global-modal").showModal();
  };

  return (
    <div>
      <Header />
      <h2 className="text-center text-2xl font-bold">
        Lesson No: {singleLesson[0].id}{" "}
      </h2>

      <div className="flex flex-col items-center gap-5">
        {singleLesson[0].words.map((item) => (
          <DetailsCard
            key={item.lesson_no}
            item={item}
            onOpenModal={() => openModal(item)}
          />
        ))}
      </div>

      {/* global modal */}

      <dialog id="global-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {modalData && (
            <>
              <h3 className="font-bold text-lg">{modalData.word}</h3>
              <p className="font-semibold">
                <span className="text-indigo-500">meaning:</span>{" "}
                {modalData.meaning}
              </p>
              <p className="font-semibold">
                <span className="text-indigo-500">when_to_say:</span>{" "}
                {modalData.when_to_say}
              </p>
              <p className="font-semibold">
                <span className="text-indigo-500">example:</span>{" "}
                {modalData.example}
              </p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="mt-10 flex justify-center">
        <Link to="/start-learning" className="btn btn-neutral btn-wide">
          Back to Lesson
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LessonDetails;
