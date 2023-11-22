import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error404NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold m-12 text-center">Oops!</h1>
          <p className="text-5xl mb-8 text-center">404 - Page Not Found</p>
          <Link to="/" className="btn btn-primary btn-lg mt-12">
            <FaHome className="mr-2"></FaHome>Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404NotFound;
