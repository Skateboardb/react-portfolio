import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' expand='lg'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <div className='navbar col-8 '>
              <Nav.Link className='nav-link nav-item' href='#about'>
                ABOUT
              </Nav.Link>
              <Nav.Link className='nav-link nav-item' href='#projects'>
                PROJECTS
              </Nav.Link>
              <Nav.Link className='nav-link nav-item' href='#blog'>
                BLOG
              </Nav.Link>
              <Nav.Link className='nav-link nav-item' href='#connect'>
                CONNECT
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
