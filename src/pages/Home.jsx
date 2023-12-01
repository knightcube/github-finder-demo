import React, { Suspense, lazy, useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = lazy(()=>import("../components/ErrorFallback"));
const UserResults = lazy(() => import("../components/users/UserResults"));
const UserSearch = lazy(() => import("../components/users/UserSearch"));
const Alert = lazy(() => import("../components/layout/Alert"));

const Home = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorFallback/>} onReset={() => {return console.log("reset")}}>
        <Suspense fallback={<div>Loading...</div>}>
          <UserSearch />
          <Alert />
          <UserResults />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Home;
