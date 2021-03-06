import React from "react";
import "../App.css";

const Display = ({ changeColor, color }) => {
  document.body.style.backgroundColor = color;
  return (
    <main>
      <div class="container">
        <p
          style={{
            backgroundColor: "black",
            padding: "15px",
            border: "black solid 2px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          Background Color : <span>{color}</span>
        </p>
        <button onClick={changeColor}>CLICK ME</button>
      </div>
    </main>
  );
};

export default Display;
