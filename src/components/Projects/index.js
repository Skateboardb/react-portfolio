import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import books from './assets/img/books.png';
import burger from './assets/img/burger.png';

export default class Projects extends Component {
  //   array of objects containing project link, picture,
  //   repo, and title
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Branford's React Books",
          link: 'https://branfords-books.herokuapp.com/',
          repo: 'https://github.com/Skateboardb/react-google-books',
          img: books,
        },
        {
          title: 'King Burger',
          link: 'https://rocky-dusk-58529.herokuapp.com/',
          repo: 'https://github.com/Skateboardb/burger',
          img: burger,
        },
      ],
    };
  }

  render() {
    const proj = this.state.projects;
    return (
      <div className='container-fluid'>
        <Row>
          <h1>Recent Work</h1>
        </Row>
        <Row>
          <h2>Here are some of the projects I've built since I started </h2>
        </Row>
        <Row>
          {proj.map((project) => (
            <Col lg='6' md='6' sm='10' xl='3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={project.img} />
                <Card.Title>{project.title}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <h1>Works in progress</h1>
        </Row>
        <Row>
          <h2>
            If I'm not building and learning, what am I doing? These projects
            are under construction.
          </h2>
        </Row>
      </div>
    );
  }
}
