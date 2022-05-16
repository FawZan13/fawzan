import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const MySkills = () => {
    return (
        <div id="projects" style={{}} className="py-5">
            <Container className=" my-5">

                <h1 data-aos="zoom-out" style={{ fontSize: '64px' }} className="my-5 text-center text-white">My <span style={{ color: 'red' }}>Skills</span></h1>

                <Row xs={1} md={2} lg={3} className=" g-4">
                    <Col className=" my-3 px-2">
                        <Card bg="dark" border="" className="h-100 shadow-lg p-3" style={{ width: '23rem' }} data-aos="zoom-in">
                            <Card.Body className="text-center">
                                <Card.Title className="text-white"><h4>Frontend</h4></Card.Title>
                                <div className="text-white d-flex">

                                    <p className="mx-2">HTML</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">CSS</p>
                                </div>
                                <div className="text-white d-flex">
                                    <i class="fa-brands fa-html5"></i>
                                    <p className="mx-2">Bootstrap</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">JavaScript</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">React.js</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className=" my-3 px-2">
                        <Card bg="dark" border="" className="h-100 shadow-lg p-3" style={{ width: '23rem' }} data-aos="zoom-in">
                            <Card.Body className="text-center">
                                <Card.Title className="text-white"><h4>Backend</h4></Card.Title>
                                <div className="text-white d-flex">

                                    <p className="mx-2">Node.js</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">Express.js</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">MongoDB</p>
                                </div>
                                {/* <div className="text-white d-flex">

                                    <p className="mx-2">JavaScript</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">React.js</p>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className=" my-3 px-2">
                        <Card bg="dark" border="" className="h-100 shadow-lg p-3" style={{ width: '23rem' }} data-aos="zoom-in">
                            <Card.Body className="text-center">
                                <Card.Title className="text-white"><h4>Tools</h4></Card.Title>
                                <div className="text-white d-flex">

                                    <p className="mx-2">Firebase</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">Git</p>
                                </div>
                                <div className="text-white d-flex">
                                    <i class="fa-brands fa-html5"></i>
                                    <p className="mx-2">Netlify</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">Chrome Dev Tool</p>
                                </div>
                                <div className="text-white d-flex">

                                    <p className="mx-2">Heroku</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MySkills;