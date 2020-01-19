import React from "react";
import {render} from "react-dom"; //we use { render } to extract exactly render method from react-dom package
import Pet from "./Pet";


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sharik",
      animal: "Dog",
      breed: "German shepherd"
    }),
    React.createElement(Pet, {
      name: "Mauritius",
      animal: "Cat",
      breed: "Angora"
    })
  ]);
};

render(React.createElement(App), document.querySelector("#root"));
