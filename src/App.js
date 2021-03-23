import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Max",
      animal: "Dog",
      breed: "FrenchPoodle",
    }),
    React.createElement(Pet, { name: "Ámbar", animal: "Dog", breed: "Wolf" }),
    React.createElement(Pet, { name: "Burbuja", animal: "Fish", breed: "NPI" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
