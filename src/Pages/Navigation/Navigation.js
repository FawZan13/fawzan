import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar className="py-2" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Fawzan</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse style={{ color: 'white' }} className="justify-content-end">
                        <Nav.Link style={{ color: 'white' }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="#about">About</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="#projects">Projects</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="#contact">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Navigation;