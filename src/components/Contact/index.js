import React, { Component } from 'react';
import { Form, FormGroup, Button, Row, Col } from 'react-bootstrap';
import './style.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
      contactInfo: {
        name: '',
        email: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Have a project in mind that I could help with?
              <br></br>See something wrong on this page?
              <br></br>Loosely-related anecdote?
              <br></br>No problem:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm='6'>
            <Form id='contact-form'>
              <FormGroup>
                <Form.Label for='name'>Name:</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  placeholder='Uzumaki Naruto'
                  onChange={this.handleChange}></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label for='email'>Email:</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='ichirakulover@konohamail.gov'
                  onChange={this.handleChange}></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label for='message'>Message:</Form.Label>
                <Form.Control
                  style={{ minHeight: 200 }}
                  type='textarea'
                  name='message'
                  placeholder='I will be the next hokage!'
                  rows='3'
                  onChange={this.handleChange}></Form.Control>
              </FormGroup>

              <Button>Submit</Button>
            </Form>
          </Col>
          <Col>
            <Row>
              <Col>Location: Washington, D.C.</Col>
            </Row>
            <Row>
              <Col>Email: shaw.branford@gmail.com</Col>
            </Row>
            <Row>
              <Col>Phone: +1 (615) 715-5862</Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
