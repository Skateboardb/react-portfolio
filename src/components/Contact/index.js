import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import './style.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
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
    );
  }
}
