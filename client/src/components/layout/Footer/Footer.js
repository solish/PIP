import React from "react";
import "./styles.css";

export default () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <span className="footerCopyrightText">
          copyrights &copy; {new Date().getFullYear()} HomeDepot.
        </span>
      </div>
    </div>
  );
};
