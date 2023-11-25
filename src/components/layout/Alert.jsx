import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const {alertState} = useContext(AlertContext);
  console.log(alertState);
  return alertState!==null && <div>{alertState.msg}</div>;
};

export default Alert;
