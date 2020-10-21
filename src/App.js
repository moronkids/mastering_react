import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    hobbies : [
      {
        hobi : 'ngeplaki tanggane'
      },
      {
        hobi : 'ngentu bojone uwong'
      }
    ],
    otherState : 'duarr'
  }

  gantiHobiHandler = (duar) => {
    console.log('This Clicked');
    // this.state.hobbies[0].hobi = 'Ihik dong'
    this.setState({
      hobbies: [
        {
          hobi: 'gelut ayo'
        },
        {
          hobi: duar
        }
      ]
    });
  }

  gantiHobiInput = (event) => {
    // console.log();
    this.setState({
      hobbies: [
        {
          hobi: event.target.value
        },
        {
          hobi: 'manciki risma'
        }
      ]
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>tes</h1>
        {/* //using bind */}
        {/* <button onClick={this.gantiHobiHandler.bind(this, 'Mancik')}>Ganti Hobi</button> */}
        {/* using arrow function */}

        <button style={style} onClick={() => this.gantiHobiHandler('Mancikk i bojomu')}>Ganti Hobi</button>
        {/* hobbies is a props */}
        <Person hobi={this.gantiHobiInput} hobbies={this.state.hobbies[0].hobi}/>
        <Person click={this.gantiHobiHandler.bind(this, 'Mancing')} hobbies="kentu">jancuk</Person>
        <Person hobbies={this.state.hobbies[1].hobi}/>


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