import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Project = ({ project }) => {
    const { name, img, description, live, frontend, backend } = project;
    return (
        <Col className=" my-3">
            <Card bg="dark" border="" className="h-100 shadow-lg p-3" style={{ width: '23rem' }}>
                <Card.Img height="240" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-white"><h4>{name}</h4></Card.Title>
                    <Card.Text className="text-white">
                        {description}
                    </Card.Text>
                    <Button className="mx-1 my-1" variant="outline-danger"><a target="_blank" className="text-white text-decoration-none" href={live} rel="noreferrer">Live Link</a></Button>
                    <Button className="mx-1 my-1" variant="outline-danger"><a target="_blank" className="text-white text-decoration-none" href={frontend} rel="noreferrer">Front End Code</a></Button>
                    <Button className="mx-1 my-1" variant="outline-danger"><a target="_blank" className="text-white text-decoration-none" href={backend} rel="noreferrer">Back End Code</a></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;