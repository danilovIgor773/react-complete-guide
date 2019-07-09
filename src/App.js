import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Igor", age: "29" },
      { name: "Tim", age: "30" },
      { name: "Rem", age: "20" }
    ],
    otherState: "some other value"
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Danny", age: "40" },
        { name: "Fatma", age: "32" },
        { name: "Feruza", age: "23" }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi I''am a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies is: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Igor", age: "29" },
//       { name: "Tim", age: "30" },
//       { name: "Rem", age: "20" }
//     ],
//    otherState: 'some other value'
//   };
//
//   switchNameHandler = () => {
//     //console.log("Was clicked!");
//     //IT IS NOT ALLOWED!!! this.state.persons[0].name = "Danny";
//     this.setState({
//       persons: [
//         { name: "Danny", age: "40" },
//         { name: "Fatma", age: "32" },
//         { name: "Feruza", age: "23" }
//       ],
//       otherState: "some other value"
//     });
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <h1>Hi I''am a React App!</h1>
//         <p>This is really working!</p>
//         <button onClick={this.switchNameHandler}>Switch name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           My hobbies is: Racing
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

export default App;
