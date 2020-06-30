import React from 'react';
import './style.css';
import { Container, Row } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Come on in',
    };
  }
  render() {
    return (
      <Container fluid className='header-section'>
        <Row className='  header-text'>
          <h1 id='highlight'>Branford Shaw</h1>
          <h2 id='subtitle'>writer | developer | travel enthusiast</h2>
        </Row>
        <Row className=''>
          <a id='reveal' href='#about'>
            {' '}
            entrar
          </a>
        </Row>
      </Container>
    );
  }
}

export default Header;
