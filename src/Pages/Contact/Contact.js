import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h1 className="text-center" style={{ color: "blue" }}>Contact</h1>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img className="w-100" src="https://i.ibb.co/zXLQ5nZ/Get-in-touch-amico.png" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Container className="text-white mt-5 text-center">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                <input type="email" class="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <Button className="text-center" variant="outline-primary" type="Submit">Submit</Button>
                        </Container>
                        {/* <Form className="text-white">
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Large text" />
                            </Form.Group>
                        </Form> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;