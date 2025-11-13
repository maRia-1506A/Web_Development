import React from "react";
import ReactDOM from "react-dom";

const inlineStyle = {
  color: "red",
  fontSize: "30px",
  border: "1px solid black",
};

//if you want to update the style =>
inlineStyle.color = "blue";

ReactDOM.render(
  <h1 style={inlineStyle}>Hello World!</h1>,
  document.getElementById("root")
);
