// src/components/Contact.js
import React from 'react';
import { Container, Form, Button,Row,Col} from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
      <Row>
      <Col md={6} className="mb-6">
      <h2 className="text-center mb-4">GET IN TOUCH</h2>
      <p>2nd mile</p>
      <p>Nechinga Thodi (Ho)</p>
      <p>Palakkad kallekkad post</p>
      <p>+91 9747587317</p>
      <p>shibilasherin22@gmail.com</p>
      </Col>
      <Col md={6} className="mb-6">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
