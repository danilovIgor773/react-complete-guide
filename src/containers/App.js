import React, { Component } from "react";
import styles from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
//import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangedhandler}
          />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
