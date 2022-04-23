import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div id="about" style={{ background: '#1e272e', height: '600px' }}>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col className="" sm={12} md={6} lg={6} data-aos="zoom-in-right">
                        <img className="w-100" src="https://i.ibb.co/KLDkFXk/Man-reading-rafiki.png" alt="" />
                    </Col>
                    <Col className="" sm={12} md={6} lg={6} data-aos="zoom-in-left">
                        <h1 style={{ color: 'white', fontSize: '64px' }}><span style={{ color: 'red' }}>About</span> Me</h1>

                        <p style={{ color: 'white', fontSize: '20px' }}>Hello, I am Fawzan Bin Mokhtar. I am a Mern Stack Developer. I am working with React, Node.js and MongoDB.I always like to learn new things and have experience with new stuff.</p>
                        <h5 className="text-white">Front End: <span style={{ color: 'red' }}>HTML, CSS, Bootstrap, JavaScript, React</span></h5>
                        <h5 className="text-white">Back End: <span style={{ color: 'red' }}>Node.js. Express.js, MongoDB</span></h5>
                        <h5 className="text-white">Tools: <span style={{ color: 'red' }}>Firebase, Netlify, Heroku, Git, Chrome Dev Tool</span></h5>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;