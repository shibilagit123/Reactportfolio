// src/components/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={6}>
            <Image src="./img/me.jpeg" thumbnail fluid />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hello! I'm a passionate web developer with experience in creating dynamic and responsive web applications using modern technologies like React, Bootstrap, and Node.js.
          As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p> </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
