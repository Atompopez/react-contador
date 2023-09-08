import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/secondCounter.jsx";

// Contador de segundos
let contador = 0;

function contadorSegundos() {
  contador += 1;
  console.log(contador);
  ReactDOM.render(<SecondsCounter seg={contador} />, document.querySelector("#app"));
}

setInterval(contadorSegundos, 1000);
