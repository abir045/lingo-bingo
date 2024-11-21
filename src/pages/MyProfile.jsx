import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="">
      <Header />
      <div className="mb-28 flex flex-col justify-center items-center pt-24">
        <h2 className="font-bold text-2xl">
          Welcome {user ? user.displayName : ""}
        </h2>
        <div className="card bg-base-100 w-96 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img
              src={user ? user.photoURL : ""}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user ? user.displayName : ""}</h2>
            <p>{user ? user.email : ""}</p>
            <div className="card-actions mt-5">
              <Link to="/auth/updateprofile" className="btn btn-neutral">
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyProfile;
