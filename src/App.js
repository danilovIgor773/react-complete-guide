import React, { Component } from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I''am a React App!</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "This component created in other way!")
    );
  }
}

export default App;
