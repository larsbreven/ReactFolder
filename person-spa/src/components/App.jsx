import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonTable from "./PersonTable";
import PersonDetails from "./PersonDetails";
import PersonCreate from "./PersonCreate";
import getPersons from "../api/PersonsApi";

import "../css/App.css";

class App extends Component {
  state = {
    detailsPerson: null,
    createPerson: false,
    personList: [],
  };

  componentDidMount() {
    const _this = this;
    getPersons().then((persons) => {
      _this.setState({ personList: persons });
    });
  }

  findPerson = (id) => {
    const persons = this.state.personList;
    let foundPerson = null;
    persons.forEach((element) => {
      if (element.id === id) {
        foundPerson = element;
      }
    });
    return foundPerson;
  };

  showPerson = (id) => {
    const person = this.findPerson(id);
    if (person != null) {
      this.setState({
        detailsPerson: person,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsPerson: null,
    });
  };

  deletePerson = (id) => {
    const person = this.findPerson(id);
    if (person != null) {
      const persons = this.state.personList;
      persons.splice(persons.indexOf(person), 1);
      this.setState({
        personList: persons,
        detailsPerson: null,
      });
    }
  };

  createPerson = () => {
    this.setState({
      createPerson: true,
    });
  };

  addPerson = (person) => {
    const personList = this.state.personList;
    if (personList === null || personList.length < 1) {
      person.id = 1;
    } else {
      const newId =
        personList.reduce((rowPerson, highest) => {
          if (rowPerson.id > highest.id) {
            return rowPerson.id;
          }
          return highest;
        }).id + 1; //plus 1 to make new id higher then any id currently in carList.
      //console.log("new Id: ", newId);
      person.id = newId;
    }

    personList.push(person);

    this.setState({
      personList: personList,
      createPerson: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createPerson: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsPerson != null ? (
        <PersonDetails
          person={this.state.detailsPerson}
          closeDetails={this.closeDetails}
          deletePerson={this.deletePerson}
        />
      ) : this.state.createPerson ? (
        <PersonCreate addPerson={this.addPerson} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createPerson} className="btn btn-success">
            Add Person
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Person SPA</h3>
          <hr />
          <div className="row">
            <PersonTable persons={this.state.personList} showPerson={this.showPerson} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;