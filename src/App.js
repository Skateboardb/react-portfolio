import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Nav />
      </>
    );
  }
}

export default App;
