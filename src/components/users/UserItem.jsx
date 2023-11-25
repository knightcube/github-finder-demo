import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return <div className="card bg-base-100 shadow-xl">
        <img src={user.avatar_url} alt="avatar" />
        <div className="card-body">
            <h2 className="card-title">{user.login}</h2>
            <Link className="text-base-content text-opacity-40" to={`https://github.com/${user.login}`}>
                Visit Profile
            </Link>
        </div>
    </div>;
};

export default UserItem;
