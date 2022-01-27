import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOn: false,
    };
  }

  render() {
    const { isOn } = this.state;
    return (
      <div>
        <header>
          <p style="color: #48a6e8">COLOR FLIPPER</p>
          <div>
            <a id="simple">Simple</a>
            <a id="hex">Hex</a>
            <a id="rgb">RGB</a>
          </div>
        </header>
        <main>
          <div class="container">
            <p style="background-color: black; padding: 15px; border: black solid 2px; border-radius: 10px; margin-bottom: 20px;">
              Background Color : <span>#F1f5f8</span>
            </p>
            <button>CLICK ME</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
