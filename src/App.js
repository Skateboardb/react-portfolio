import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
