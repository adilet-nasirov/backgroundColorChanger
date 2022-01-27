import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <p style={{ color: "#48a6e8" }}>COLOR FLIPPER</p>
      <div>
        <a id="simple">Simple</a>
        <a id="hex">Hex</a>
        <a id="rgb">RGB</a>
      </div>
    </header>
  );
};

export default Header;
