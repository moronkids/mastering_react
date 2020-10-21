import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [hobiState, setHobiState] = useState(
    {
      hobbies: [
        {
          hobi: 'ngeplaki tanggane'
        },
        {
          hobi: 'ngentu bojone uwong'
        }
      ],
      otherState: 'duarr'
    }
  )
  console.log(props, hobiState);
  const gantiHobiHandler = () => {
    console.log('This Clicked');
    // this.state.hobbies[0].hobi = 'Ihik dong'
    setHobiState({
      hobbies: [
        {
          hobi: 'gelut ayo'
        },
        {
          hobi: 'ampun den'
        }
      ]
    });
  }
    return (
      <div className="App">
        <h1>tes</h1>
        <button onClick={gantiHobiHandler}>Ganti Hobi</button>
        {/* hobbies is a props */}
        <Person hobbies={hobiState.hobbies[0].hobi}/>
        <Person hobbies="kentu">jancuk</Person>
        <Person hobbies={hobiState.hobbies[1].hobi}/>


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

export default app;


