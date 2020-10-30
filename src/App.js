import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    hobbies: [
      {
        id: 0,
        hobi: "ngeplaki tanggane",
      },
      {
        id : 1,
        hobi: "ngentu bojone uwong",
      },
    ],
    otherState: "duarr",
    personStat: true,
  };

  gantiHobiHandler = (duar) => {
    console.log("This Clicked", duar);
    // this.state.hobbies[0].hobi = 'Ihik dong'
    if (duar == "Mancikk i bojomu") {
      this.setState({
        hobbies: [
          {
            id : 0,
            hobi: "gelut ayo",
          },
          {
            id: 1,
            hobi: duar,
          },
        ],
      });
    } else {
      this.setState({
        personStat: !this.state.personStat,
      });
    }
  };

  iniKey = () => {

  }
  gantiHobiInput = (event, id) => {
    // const personIndex = this.state.hobbies.findIndex(p => { return p.id == id});
    // console.log(personIndex, 'sd')
    const person = {
      ...this.state.hobbies[id]

    }
    person.hobi = event.target.value;
    console.log(person)  
    
    const persons = [...this.state.hobbies]

    persons[id] = person;
    console.log(persons)
    this.setState({hobbies: persons})
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.personStat) {
      persons = (
        <div>
          {this.state.hobbies.map((hobi, key) => {
            // console.log(hobi, 'show me', key)
            return (
              <Person
                key={hobi.id}
                hobi={(event) => this.gantiHobiInput(event, hobi.id)}
                hobbies={hobi.hobi}
                click={this.gantiHobiHandler.bind(this, "Mancing")}
              />
            );
          })}
          {/* <Person
            hobi={this.gantiHobiInput}
            hobbies={this.state.hobbies[0].hobi}
          />
          <Person
            click={this.gantiHobiHandler.bind(this, "Mancing")}
            hobbies="kentu">
            jancuk
          </Person>
          <Person hobbies={this.state.hobbies[1].hobi} /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>tes</h1>
        {/* //using bind */}
        {/* <button onClick={this.gantiHobiHandler.bind(this, 'Mancik')}>Ganti Hobi</button> */}
        {/* using arrow function */}

        <button
          style={style}
          onClick={() => this.gantiHobiHandler("Mancikk i bojom")}>
          Ganti Hobi
        </button>
        {/* hobbies is a props */}
        {persons}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
