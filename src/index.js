import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Bmi from "./pages/bmi";
import Bank from "./pages/bank";
import Binary from "./pages/binary";
import Final from "./pages/final";
import Octal from "./pages/octal";
import Decimal from "./pages/decimal";
import Hexadecimal from "./pages/hexadecimal";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Decimal/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
