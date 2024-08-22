// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projectData = [
    {
      title: 'UI/UX DESIGN',
      description: 'Im a UX/UI designer,Iam passionate about creating simple yet innovative experiences for users, that uses my background in business to create meaningful digital',
      image: 'project1.jpg',
      link: '#'
    },
    {
      title: 'WEB DESIGN',
      description: 'Designing creative websites that are easy to manage and impress users.that uses my background in business to create meaningful digital',
      image: 'project2.jpg',
      link: '#'
    },
    {
      title: 'MOBILE APPS',
      description: 'Designing and developing the best user friendly easy to use mobile apps it bring your bussiness to high level',
      image: 'project2.jpg',
      link: '#'
    },
    {
      title: 'Ecommerce Application',
      description: 'For Better shopping experience for good applications are Delevering to customer.To ensure the quality of bussiness',
      image: 'project2.jpg',
      link: '#'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src="./img/bg.jpg" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
