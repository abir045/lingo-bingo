import React from "react";
import { Link, Navigate, useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LessonDetails = () => {
  const lessons = useLoaderData();
  const params = useParams();

  console.log(params.id);

  const singleLesson = lessons.filter((data) => data.id === params.id);

  console.log(singleLesson);

  return (
    <div>
      <Header />
      <h2 className="text-center text-2xl font-bold">
        Lesson No: {singleLesson[0].id}{" "}
      </h2>

      <div className="flex flex-col items-center gap-5">
        {singleLesson[0].words.map((item, index) => (
          <DetailsCard key={index} item={item} />
        ))}
      </div>

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
