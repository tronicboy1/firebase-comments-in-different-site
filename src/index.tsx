import ReactDOM from "react-dom"
import React from "react";
import App from "./App";

const domContainer = document.getElementById("react-root") as HTMLDivElement;

if (domContainer) {
  ReactDOM.render(<App />,domContainer)
}
