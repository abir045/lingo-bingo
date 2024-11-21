import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center text-2xl pt-40">Page Not Found</h2>
      <div className="mt-10 mx-auto flex justify-center">
        <Link to="/" className="btn btn-neutral btn-wide">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
