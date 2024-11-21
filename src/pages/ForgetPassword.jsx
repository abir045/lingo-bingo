import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useRef, useState } from "react";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
  const { resetEmail } = useContext(AuthContext);
  const [email, setEmail] = useState(resetEmail);
  //   const emailRef = useRef();
  const auth = getAuth(app);

  const handleForgetPassword = (e) => {
    e.preventDefault();
    // const email = emailRef.current.value;
    if (!email) {
      toast.error("please provide a valid email address");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("password reset email sent, please check your inbox");
          window.location.href = "https://mail.google.com/";
        })
        .catch((err) => {
          toast.error(err.message || "Failed to reset, Please try again");
        });
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="pt-20 font-bold text-2xl text-center">
        Reset your password
      </h2>

      <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none pt-10">
        <form onSubmit={handleForgetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              //   ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
