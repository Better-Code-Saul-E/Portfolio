import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from "../components/Card/ProjectCard";

export default function ProjectPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
            })
            .catch(error => {
                console.error('There was a problem fetching the projects:', error);
            });
    }, []);

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                    <h1>My Work</h1>
                    <p className="lead">
                        Here's a selection of projects I've built.
                    </p>
                </Col>
            </Row>

            {/* We will map over the 'projects' array and render cards here */}
            <Row>
                {projects.map(project => (
                    // Wrap each card in a column to create the grid
                    <Col lg={4} md={6} key={project.title} className="mb-4">
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}