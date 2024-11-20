import React from "react";
import { Link } from "react-router-dom";

const LessonCard = ({ item }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title font-bold">Lesson {item.lessonNo}</h2>
          <p className="">{item.type}</p>
          <div className="card-actions justify-start mt-5">
            <Link to={`/lessons/${item.id}`} className="btn btn-neutral">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
