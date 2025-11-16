import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.map((x) => x * x);

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map((x) => x * 2);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter((numb) => numb < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, current) => accumulator + current)

//Find - find the first item that matches from an array.
// const newNumber = numbers.find((y) => y > 10);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((index) => index > 10)
// console.log(newNumber);

// import emojipedia from "./emojipedia";
// const newEmojipedia = emojipedia.map((newEmoji) => newEmoji.meaning.substring(0, 100))
// console.log(newEmojipedia);