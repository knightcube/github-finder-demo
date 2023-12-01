import React from "react";
import { useNavigate } from "react-router-dom";

const Error404NotFound = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold m-12 text-center">Oops!</h1>
          <p className="text-5xl mb-8 text-center">404 - Page Not Found</p>
          <button className="btn btn-primary rounded-md" onClick={goToHome}>
             Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404NotFound;
