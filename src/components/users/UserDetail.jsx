import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";

const UserDetail = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  let { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={user.avatar_url} alt="avatar" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <div className="badge badge-accent mt-1">
            <span className="">Followers: {user.followers}+</span>
          </div>

          {user.hireable && (
            <div className="badge badge-success mt-1">
              <p className="font-bold">✅ Available for hire</p>{" "}
            </div>
          )}
        </div>

        <h2 className="card-title mt-4">{user.name}</h2>

        <p>{user.bio}</p>

        <div className="card-actions justify-end">
          <Link to={user.html_url} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary rounded-md">View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
