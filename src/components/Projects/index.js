import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './assets/style.css';

import books from './assets/img/books.png';
import burger from './assets/img/burger.png';
import news from './assets/img/news.png';

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
          desc:
            'This application allows users to search Google Books for popular (and unpopular) titles with ease. Results are shown on a single page, providing the options to view the Google Books page or to save the title to a public collection.',
        },
        {
          title: 'King Burger',
          link: 'https://rocky-dusk-58529.herokuapp.com/',
          repo: 'https://github.com/Skateboardb/burger',
          img: burger,
        },
        {
          title: 'The Best News',
          link: 'https://the-best-news.herokuapp.com/',
          repo: 'https://github.com/Skateboardb/the-best-news',
          img: news,
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

        <Row className='projects-container'>
          <Row className='projects-row'>
            {proj.map((project) => (
              <Col lg='6' md='6' sm='6' xs='10'>
                <Card className='project-card' style={{ width: '18rem' }}>
                  <Card.Img
                    className='card-img'
                    variant='top'
                    src={project.img}
                  />
                  <Row>
                    <Col xs='12'>
                      <Card.Title>{project.title}</Card.Title>
                    </Col>
                    <Col xs='6'>
                      <a href={project.link}>Live Version</a>
                    </Col>
                    <Col xs='6'>
                      <a href={project.repo}>Project Repo</a>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
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
