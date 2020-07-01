import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
        <Row id='skillset'>
          <Col sm={true}>
            <h1 className='skill-col'>Front-End</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec posuere ligula. Maecenas elementum eros eu dapibus lobortis.
              Morbi dictum sed nunc quis tempus. Donec tempus egestas turpis,
              eget tempus nunc maximus porttitor. Maecenas viverra tincidunt
              purus, non accumsan lacus malesuada at. Maecenas finibus ipsum
              nunc, eu viverra est interdum ut.
              <br></br>
              <br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Maecenas elementum, augue nec blandit
              congue, enim diam eleifend nisi, viverra tristique elit tellus non
              est. In eleifend nunc id ipsum pulvinar, ac semper sapien gravida.
              Fusce sed posuere erat. Quisque congue ac turpis vestibulum
              facilisis.
            </p>
          </Col>
          <Col sm={true} id='middle-col'>
            <h1 className='skill-col'>Back-End</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec posuere ligula. Maecenas elementum eros eu dapibus lobortis.
              Morbi dictum sed nunc quis tempus. Donec tempus egestas turpis,
              eget tempus nunc maximus porttitor. Maecenas viverra tincidunt
              purus, non accumsan lacus malesuada at. Maecenas finibus ipsum
              nunc, eu viverra est interdum ut.
              <br></br>
              <br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Maecenas elementum, augue nec blandit
              congue, enim diam eleifend nisi, viverra tristique elit tellus non
              est. In eleifend nunc id ipsum pulvinar, ac semper sapien gravida.
              Fusce sed posuere erat. Quisque congue ac turpis vestibulum
              facilisis.
            </p>
          </Col>
          <Col sm={true}>
            <h1 className='skill-col'>DevOps</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec posuere ligula. Maecenas elementum eros eu dapibus lobortis.
              Morbi dictum sed nunc quis tempus. Donec tempus egestas turpis,
              eget tempus nunc maximus porttitor. Maecenas viverra tincidunt
              purus, non accumsan lacus malesuada at. Maecenas finibus ipsum
              nunc, eu viverra est interdum ut.
              <br></br>
              <br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Maecenas elementum, augue nec blandit
              congue, enim diam eleifend nisi, viverra tristique elit tellus non
              est. In eleifend nunc id ipsum pulvinar, ac semper sapien gravida.
              Fusce sed posuere erat. Quisque congue ac turpis vestibulum
              facilisis.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
