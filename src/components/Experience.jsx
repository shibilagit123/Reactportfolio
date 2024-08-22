// src/components/Contact.js
import React from 'react';
import { Container,Card,Row,Col} from 'react-bootstrap';

const Experience = () => {

    const Exprience = [
        {
          title: 'Junior Developer',
          sub: '2018',
          compay:'Hitech Dev solution',
          description: 'Im a UX/UI designer,Iam passionate about creating simple yet innovative experiences for users, that uses my background in business to create meaningful digital',
          
        },
        {
            title: 'php Developer',
            sub: '2020',
            compay:'Salt solution',
            description: 'Im a UX/UI designer,Iam passionate about creating simple yet innovative experiences for users, that uses my background in business to create meaningful digital',
            
          },
          {
            title: 'php codeigniter',
            sub: '2021',
            compay:'Xyz solution',
            description: 'Im a UX/UI designer,Iam passionate about creating simple yet innovative experiences for users, that uses my background in business to create meaningful digital',
            
          },
          {
            title: 'Laravel Developer',
            sub: '2022',
            compay:'Bz Tech Solution',
            description: 'Im a UX/UI designer,Iam passionate about creating simple yet innovative experiences for users, that uses my background in business to create meaningful digital',
            
          },
          
    ];
  return (

    <section id="" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">Experinces</h2>
      <Row>
        {Exprience.map((exp, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{exp.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{exp.compay}/{exp.sub}</Card.Subtitle>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>

  );
};

export default Experience;
