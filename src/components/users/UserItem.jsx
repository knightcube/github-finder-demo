import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const ErrorFallback = lazy(()=>import("../../components/ErrorFallback"));

const UserItem = ({ user }) => {

    const navigate = useNavigate();

  const openProfilePage = () => {
    navigate(`/user/${user.login}`);
    console.log("Profile clicked");
  };

  return (
    <ErrorBoundary
      fallback={<ErrorFallback />}
      onReset={() => {
        return console.log("reset");
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <div className="card bg-base-300 shadow-xl">
          <img src={user.avatar_url} alt="avatar" />
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4 text-center">{user.login}</h2>
            <button className="btn btn-primary" onClick={openProfilePage}>Visit Profile</button>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default UserItem;
