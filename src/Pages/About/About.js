import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        //style={{ background: '#2d3436' }}
        <div style={{ background: '#1e272e', height: '600px' }}>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col className="" sm={12} md={6} lg={6} >
                        <img className="w-100" src="https://i.ibb.co/KLDkFXk/Man-reading-rafiki.png" alt="" />
                    </Col>
                    <Col className="" sm={12} md={6} lg={6} >
                        <h1 style={{ color: 'white', fontSize: '64px' }}><span style={{ color: 'red' }}>About</span> Me</h1>

                        <p style={{ color: 'white', fontSize: '21px' }}>Hello, I am Fawzan Bin Mokhtar. I am a learning Mern Stack Developer. I am working with React, Node.js and MongoDB.I always like to learn new things and have experience with new stuff.</p>
                        <h4 className="text-white">Front End:</h4>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;