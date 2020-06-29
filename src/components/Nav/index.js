import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav class='navbar-bg navbar-dark row'>
          <div class='navbar col-8 '>
            <a class='nav-link nav-item' href='#about'>
              ABOUT
            </a>
            <a class='nav-link nav-item' href='#projects'>
              PROJECTS
            </a>
            <a class='nav-link nav-item' href='#blog'>
              BLOG
            </a>
            <a class='nav-link nav-item' href='#connect'>
              CONNECT
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
