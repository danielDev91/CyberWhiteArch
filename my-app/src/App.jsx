import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/Pages/Login';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to relaot.
        </p>
        <Login>
          <a 
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          >
            Learning React
          </a>
        </Login>
        </Header>
    </div>
  );
};

export default App;
