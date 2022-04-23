import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const publicKey = "LrCQN8M2MVRH1KOpJ";
        const serviceId = "Fawzan13";
        const templateId = "template_ysc2twk";
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                alert('Message sent successfully');
            }, (error) => {
                alert(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="contact">
            <h1 data-aos="zoom-out-down" className="text-center mt-5" style={{ color: "blue" }}>Contact</h1>
            <Container>
                <Row>
                    <Col data-aos="zoom-out-right" sm={12} md={6} lg={6}>
                        <img className="w-100" src="https://i.ibb.co/zXLQ5nZ/Get-in-touch-amico.png" alt="" />
                    </Col>
                    <Col data-aos="zoom-out-left" sm={12} md={6} lg={6}>
                        <Container className="text-white mt-5 text-center">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="name" name="user_name" placeholder="Your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <Button className="text-center" variant="outline-primary" type="Submit">Submit</Button>
                            </form>
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