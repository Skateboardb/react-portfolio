import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <About />
      </>
    );
  }
}

export default App;
