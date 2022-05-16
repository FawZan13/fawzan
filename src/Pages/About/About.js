import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="my-5" id="about" style={{ background: '#1e272e' }}>
            <Container className="mt-5">
                <Row className="justify-content-center align-items-center">
                    <Col className="" sm={12} md={6} lg={6} data-aos="zoom-in-right">
                        <img className="w-100" src="https://i.ibb.co/KLDkFXk/Man-reading-rafiki.png" alt="" />
                    </Col>
                    <Col className="" sm={12} md={6} lg={6} data-aos="zoom-in-left">
                        <h1 style={{ color: 'white', fontSize: '64px' }}><span style={{ color: 'red' }}>About</span> Me</h1>

                        <p style={{ color: 'white', fontSize: '20px' }}>Hello, I am Fawzan Bin Mokhtar. I am a High School student. Though I am young, I am very passionate about coding. I always like to learn new things and have experience with new stuff. It is my strong belief that I will become a potential web developer in this tech era.</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;