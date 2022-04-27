import "./styles/index.css";

import { test } from "./test1";
import { render } from "react-dom";

import App from "./components/App";

console.log("Hello");
console.log(test);

let name = {
  a: "ajay",
};

let team = {
  ...name,
  b: "rahul",
};


console.log(team);

render(<App />, document.getElementById('root'));