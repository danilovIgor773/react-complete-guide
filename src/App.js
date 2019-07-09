import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi I''am a React App!</h1>
      <Person />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       { className: "App" },
//       React.createElement("h1", null, "This component created in other way!")
//     );
//   }
// }

export default App;
