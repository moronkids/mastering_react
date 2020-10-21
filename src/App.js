import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

class App extends Component {
  state = {
    teks : [
      {teks : 'Risma ihik kuy!'}
    ]
  }

  gantiTeks = (event) => {
    console.log(event.target.value)
    this.setState({
      teks: [
        { teks: event.target.value }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h2 className="">Assignment Section 3</h2>
        <UserInput  replaceTeks={this.gantiTeks}/>
        <UserOutput teks={this.state.teks[0].teks} />
      </div>
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
    );
  }
}

export default App;
