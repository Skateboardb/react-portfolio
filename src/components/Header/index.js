import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonText: 'Come on in'
		};
	}
	render() {
		return (
			<Container fluid className="header-section">
				<Row className="  header-text">
					<h1>
						Hello, I'm <span id="highlight">Branford Shaw</span>;
						<br />
						I'm a full-stack web developer.
					</h1>
				</Row>
				<Row className="">
					<a id="reveal" href="#about">
						{' '}
						Come on in
					</a>
				</Row>
			</Container>
		);
	}
}

export default Header;
