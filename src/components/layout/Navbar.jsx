import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-black text-neutral-content ">
      <div className="container mx-auto">
        <div className="flex-none px-2"></div>
        <FaGithub className="inline mr-2 text-3xl" />
        <Link to="/" className="text-lg font-bold align-middle">
          {title}
        </Link>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn uppercase">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn uppercase"
            >
              About
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
