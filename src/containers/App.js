import React, { Component } from "react";
import Radium, {StyleRoot} from 'radium'
// import logo from "./logo.svg";
import "./App.css";
import Person from "../components/Persons/Person/Person";

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
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover' : {
        backgroundColor: 'lightgreen',
        color : 'black'
      }
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'blue',
        color : 'black'
      }
    }


    let classes = ['red', 'bold'];
    if (persons != null) {
      classes.map((value, key) => {

        if(value == 'red'){
          console.log('delete red')
          classes.splice(key, 1)
          classes = ['red', 'bold'].join(' ');
        }
      })
    }
    else {
      console.log('dont to anything')
    }
    console.log(style,'style')
    return (
      <StyleRoot>
        {/* styleroot digunakan saat kita ingin menggunakan media queries di inline style */}
        <div className="App">
        <h1 className={classes}>tes</h1>
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
      </StyleRoot>
    );
  }
}

export default Radium(App);
// radium as a hoc / high order components