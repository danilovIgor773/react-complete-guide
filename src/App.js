import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Igor", age: "29" },
      { name: "Tim", age: "30" },
      { name: "Rem", age: "20" }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    //console.log("Was clicked!");
    //IT IS NOT ALLOWED!!! this.state.persons[0].name = "Danny";
    this.setState({
      persons: [
        { name: newName, age: "40" },
        { name: "Fatma", age: "32" },
        { name: "Feruza", age: "23" }
      ],
      otherState: "some other value"
    });
  };

  nameChangedhandler = event => {
    this.setState({
      persons: [
        { name: "Gosha", age: "40" },
        { name: event.target.value, age: "32" },
        { name: "Feruza", age: "23" }
      ],
      otherState: "some other value"
    });
  };

  // test = () => {
  //   console.log(this);
  // };

  render() {
    const styleButton = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi I''am a React App!</h1>
        <p>This is really working!</p>
        <button
          style={styleButton}
          onClick={this.switchNameHandler.bind(this, "Farruh")}
        >
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Danny_The_Mage!")}
          changed={this.nameChangedhandler}
        >
          My hobbies is: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Igor", age: "29" },
//       { name: "Tim", age: "30" },
//       { name: "Rem", age: "20" }
//     ],
//     otherState: "some other value"
//   });
//
//   console.log(personsState);
//
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Danny", age: "40" },
//         { name: "Fatma", age: "32" },
//         { name: "Feruza", age: "23" }
//       ]
//     });
//   };
//
//   return (
//     <div className="App">
//       <h1>Hi I''am a React App!</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My hobbies is: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
