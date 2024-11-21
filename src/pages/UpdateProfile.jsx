import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/myprofile");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to update , Please try again");
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none pt-10">
        <h2 className="text-2xl font-semibold text-center pt-10">
          {" "}
          Update your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">
              Update Information
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
