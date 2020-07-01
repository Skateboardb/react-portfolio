import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

export default class About extends Component {
  render() {
    return (
      <div className='container-fluid  main-section'>
        <Row id='header-text'>
          <h1>Hey, I'm Branford - welcome to my corner of the web!</h1>
          <p>
            I love technology. Not in a weird way... but it's incredible to
            think that there are so many avenues available for making people's
            lives better. One of the best ways to do that is by creating
            impactful software, which is why I became a full-stack developer.
          </p>
          <p>
            I'm quietly confident in my ability and desire to continue to learn
            by solving problems. Here, you'll find out a little more about my
            technical side and get a look at some of the projects I've been
            working on.
          </p>
        </Row>
      </div>
    );
  }
}
