import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container style={{ color: 'white' }} className="py-5 text-center">
                <ul className=" list-unstyled">
                    <li className="font-weight-bold mb-2 text-center">Connect with me</li>
                    <li className="d-flex justify-content-center">
                        <a className="mx-2" target="_blank" href="" alt=""><i class="bi bi-facebook"></i></a>
                        <a className="mx-2" target="_blank" href="" alt=""><i class="bi bi-twitter"></i></a>
                        <a className="mx-2" target="_blank" href="" alt=""><i class="bi bi-github"></i></a>
                        <a className="mx-2" target="_blank" href="" alt=""><i class="bi bi-linkedin"></i></a>
                    </li>
                </ul>
                <h5>© copyright 2022 fawzan - All Rights Reserved</h5>
            </Container>
        </div>
    );
};

export default Footer;