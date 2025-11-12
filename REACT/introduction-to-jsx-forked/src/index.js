import React from "react";
import ReactDom from "react-dom";

const fname = "Zannatul";
const lname = "Maria";
const numb = 10;

ReactDom.render(
  <div>
    <h1>Hello {`${fname} ${lname}!`}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
