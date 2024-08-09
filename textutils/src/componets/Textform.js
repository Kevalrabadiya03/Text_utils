import React, { useState } from "react";

export default function Textform(props) {
  const [textColor, setTextColor] = useState("black");
  const [text, settext] = useState("");
  const [showColor, setShowColor] = useState(false);
  let str = "Click the button to convert to camelCase";

  // textchange
  function handleChange(e) {
    settext(e.target.value);
  }

  //uppercase text
  function handleupclick() {
    let newtext = text.toUpperCase();
    settext(newtext);
  }

  //lowercase text
  function handlelcclick() {
    let textlc = text.toLowerCase();
    settext(textlc);
  }

  //changecolor text
  const handleColorChange = () => {
    if (!!showColor) {
      setTextColor("red");
    } else {
      setTextColor(props.mode === "black" ? "white" : "black");
    }
  };

  //camelcase text
  function camelCase() {
    str = text
      .replace(/\s(.)/g, function (a) {
        return a.toUpperCase();
      })
      .replace(/\s/g, "")
      .replace(/^(.)/, function (b) {
        return b.toLowerCase();
      });
    settext(str);
  }
  function gfg_Run() {
    console.log(camelCase(str));
  }

  //clear text
  const handleclearclick = () => {
    const textclear = " ";
    settext(textclear);
  };

  //copy text
  const handlecopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //space text
  const handlespace = () => {
    let textspace = text.split(/\s+/);
    settext(textspace.join(" "));
  };

  //clear text
  const handleClear = () => {
    let textclear = " ";
    settext(textclear);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "black" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "black" ? "black" : "white",
              color: textColor,
            }}
            id="mybox"
            rows="8"
          ></textarea>
          {/* uppercase text buttom */}

          <div className="button">
            <button
              type="button"
              onClick={handleupclick}
              className="btn btn-primary mt-3"
            >
              Convert to Uppercase
            </button>

            {/* lower case text button  */}
            <button
              type="button"
              onClick={handlelcclick}
              className="btn btn-primary mx-3 mt-3"
            >
              Convert to lowercase
            </button>
            {/* change color text buttom */}

            <button
              type="button"
              onClick={() => {
                handleColorChange();
                setShowColor(!showColor);
              }}
              className="btn btn-primary mt-3 mx-4"
            >
              Change color
            </button>

            {/* camelcase text button */}
            <button
              type="button"
              onClick={camelCase}
              className="btn btn-primary mx-3 mt-3"
            >
              Convert to camelCase
            </button>

            {/*copy text button  */}
            <button onClick={handlecopy} className="btn btn-primary mx-3 mt-3">
              Copy text
            </button>

            {/* space text button */}
            <button onClick={handlespace} className="btn btn-primary mx-3 mt-3">
              Space text
            </button>

            {/* clear text button */}
            <button onClick={handleClear} className="btn btn-primary mx-3 mt-3">
              Clear text
            </button>
            <div
              className="container my-4"
              style={{ color: props.mode === "black" ? "white" : "black" }}
            >
              <h1>text Summary</h1>
              <p>{text.split(" ").length}characters</p>
              <p>{0.008 * text.split(" ").length}minites read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
