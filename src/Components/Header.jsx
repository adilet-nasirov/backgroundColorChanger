import React from "react";
import "../App.css";

const Header = ({ changeSimple, changeHex, changeRgb }) => {
  return (
    <header>
      <p style={{ color: "#48a6e8" }}>COLOR FLIPPER</p>
      <div>
        <a onClick={changeSimple} id="simple">
          Simple
        </a>
        <a onClick={changeHex} id="hex">
          Hex
        </a>
        <a onClick={changeRgb} id="rgb">
          RGB
        </a>
      </div>
    </header>
  );
};

export default Header;
