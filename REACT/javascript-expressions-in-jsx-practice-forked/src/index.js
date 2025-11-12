//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
const fname = "Zannatul";
const lname = "Maria";
const currentYear = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created By {`${fname} ${lname}`}</p>
    <p>Created By {currentYear}</p>
  </div>,
  document.getElementById("root")
);
