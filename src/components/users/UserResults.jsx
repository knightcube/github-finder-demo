import React, { Suspense, lazy, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const Spinner = lazy(() => import("../layout/Spinner"));
const UserItem = lazy(() => import("./UserItem"));

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

export default UserResults;
