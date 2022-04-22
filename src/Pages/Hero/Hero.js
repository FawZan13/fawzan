import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';



const Hero = () => {

    return (
        <Container >
            <Row className="justify-content-center align-items-center">
                <Col sm={12} md={6} lg={6} className="" >
                    <h5 style={{ color: '#636e72' }}>Welcome to my world</h5>
                    <h1 style={{ color: 'white' }}>Hi, I’m <span style={{ color: 'red' }}>Fawzan</span>!</h1>
                    {/*  */}

                    <p style={{ color: 'white', fontSize: '21px', marginTop: '20px' }}>Determined to be a programmer and web developer. A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies.</p>
                </Col>
                <Col sm={12} md={6} lg={6} ><img className="w-100" src="https://i.ibb.co/yWGMkCh/Programmer-cuate.png" alt="" /></Col>
            </Row>
        </Container >
    );
};

export default Hero;