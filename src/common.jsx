import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../src/Css/common.css";
const Common = (prop) => {
  return (
    <>
      <div className="list">
        <li>{prop.name}</li>
      </div>
    </>
  );
};
export default Common;
