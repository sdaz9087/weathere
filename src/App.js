import React from "react";
import Weather from "./Weather App";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather </h1>
        <Weather defaultCity="search your city....." />
        <footer>
          This project was coded by{"Sadaf H"}
          <a
            href="https://github.com/sdaz9087"
            target="_blank"
            rel="noreferrer"
          >
            Nelly Obi{" "}
          </a>{" "}
          and is
          <a
            href="https://github.com/sdaz9087/weathere"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
