import React, { Component } from "react";
import styles from "./App.css";
import Person from "./Person/Person";

//import UserInput from "./UserInput/UserInput";
//import UserOutput from "./UserOutput/UserOutput";
//--------------------Before render ---------------------
class App extends Component {
  state = {
    persons: [
      { id: "asde1", name: "Igor", age: "29" },
      { id: "fdfrgd2", name: "Tim", age: "30" },
      { id: "fhgjmg23", name: "Rem", age: "20" }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedhandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePerson = index => {
    //Always use immutability approach.
    //or you can do it with slice(): const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  //---------Inside render() method--------------------

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePerson(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedhandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = styles.Red;
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi I''am a React App!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
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
