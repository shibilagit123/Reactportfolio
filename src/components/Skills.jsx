import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills = () => {
const skill = [
    {
        title: 'Html',
        val: '60',
        
      },
      {
        title: 'Css',
        val: '87',
        
      },
      {
        title: 'laravel',
        val: '75',
        
      },
      {
        title: 'Php',
        val: '71',
        
      },
      {
        title: 'React',
        val: '80',
        
      },
      {
        title: 'Node.js',
        val: '72',
        
      },
      {
        title: 'Express',
        val: '83',
        
      },
      {
        title: 'Git',
        val: '70',
        
      },
]

    return (

        <section id="" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          {skill.map((skl, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                
                <Card.Body>
                  <Card.Title>{skl.title}</Card.Title>
                  <ProgressBar now={skl.val} label={`${skl.val}%`} animated now={45} / >
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
        
        

    );
};

export default Skills;