import React from "react";
import "../styles/Display.css";

export const Display = ({ display }) => {
  return (
    <div id="display">
      <p>{display}</p>
    </div>
  );
};
