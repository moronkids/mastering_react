import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import Tes from './components/UserInput/Tes'
import UserOutput from './components/UserOutput/UserOutput'
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    teks: [
      { teks: 'Risma ihik kuy!' },
      { teks: 'Risma ihik kuy!' },
    ]
  }

  theme = createMuiTheme({
    typography: {
      fontFamily: [
        // '-apple-system',
        'SVNGilroy',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // '"Helvetica Neue"',
        // 'Arial',
        // 'sans-serif',
        // '"Apple Color Emoji"',
        // '"Comic Sans"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  gantiTeks = (event) => {
    console.log(event.target.value)
    this.setState({
      teks: [
        { teks: event.target.value },
        { teks: this.state.teks[1].teks }
      ]
    })
  }

  switchTeks = (datas = null, data) => {
    console.log(datas, data);
    this.setState({
      teks: [
        { teks: this.state.teks[0].teks },
        { teks: datas != 'blank' ? datas + data : '' }
      ]
    })
  }
  render() {
    return (

     <div className="App">
        <ThemeProvider theme={this.theme}>
        <Box className="" display="flex" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            Welcome to React
          </Typography>
          {/* <h2 className="">Assignment Section 3</h2> */}
        </Box>
        <UserInput reset={this.switchTeks.bind(this, 'blank')} switch={this.switchTeks.bind(this, 'numpaki dek Risma', ' neng kamare mba Upi wkkw')} replaceTeks={this.gantiTeks} />
        <UserOutput teks={this.state.teks[0].teks} />
        <UserOutput teks={this.state.teks[1].teks} />
      </ThemeProvider>
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
