import "./App.css";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
// import About from "./componets/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("white");

  const togglemode = () => {
    if (mode === "white") {
      setMode("black");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* < NewComponent /> */}
      {/* <Profile /> */}
      {/* <Button /> */}
      {/* <Nestedcomponent /> */}

      <Navbar titel="Text Utils" mode={mode} togglemode={togglemode} />
      <div className="container">
        <Textform heading="Enter the text to analyze blow" mode={mode} />
      </div>
      <img src="" alt="" />

      {/* <About /> */}
    </>
  );
}

export default App;
