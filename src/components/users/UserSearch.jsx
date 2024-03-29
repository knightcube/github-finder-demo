import React, { lazy, useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

// const GithubContext = lazy(()=> import("../../context/github/GithubContext"));
// const AlertContext = lazy(()=> import("../../context/alert/AlertContext"));

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, searchUsers } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Search for users on GitHub</span>
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-3/4 rounded-l-sm rounded-r-none bg-gray-200 text-black"
            value={text}
            onChange={handleChange}
          />
          <button className="btn rounded-l-none w-36 bg-black text-white">
            Go
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserSearch;
