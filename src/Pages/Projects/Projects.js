import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div style={{ background: '#6c5ce7' }} className="py-5">
            <Container className=" my-5">

                <h1 style={{ fontSize: '64px' }} className="my-5 text-center">My <span style={{ color: 'red' }}>Projects</span></h1>
                {projects.length === 0 ?
                    <Spinner animation="border" variant="warning" />
                    :
                    <Row xs={1} md={2} lg={3} className=" g-4">
                        {
                            projects.map(project => <Project key={project.id} project={project}></Project>)
                        }
                    </Row>

                }
            </Container>
        </div>
    );
};

export default Projects;