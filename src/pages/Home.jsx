import React, { useContext } from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import Alert from "../components/layout/Alert";

const Home = () => {
  return (
    <>
      <UserSearch />
      <Alert />
      <UserResults />
    </>
  );
};

export default Home;
