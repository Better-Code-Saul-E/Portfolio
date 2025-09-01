import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/Card/ProjectCard';
import StyledHr from '../components/Divider/StyledHr';

function HomePage() {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                // Here's the filter! It creates a new array containing
                // only the projects where project.hero is true.
                const filtered = data.filter(project => project.hero === true);
                setFeaturedProjects(filtered);
            })
            .catch(error => console.error("Failed to fetch projects:", error));
    }, []);

    return (
        <Container>
            {/* ===== HERO SECTION ===== */}
            <Row
                className="justify-content-center align-items-center text-center"
                style={{ minHeight: '60vh' }}
            >
                <Col md={8}>
                    <h1>Developer in the Making</h1>
                    <p className="lead mt-3">
                        Programming student passionate about design, interaction, and innovation
                    </p>
                </Col>
            </Row>

            <StyledHr alignment="right" />

            {/* --- FEATURED PROJECTS SHOWCASE --- */}
            <Row className="justify-content-center text-center my-5">
                <Col md={4}>
                    <h2>Featured Projects</h2>
                    <p className="text-muted">
                        A selection of my recent work. See all projects on the portfolio page.
                    </p>
                </Col>
            </Row>

            <Row>
                {featuredProjects.map(project => (
                    <Col md={4} key={project.title} className='mb-4'>
                        <ProjectCard project={project} />
                    </Col>))}
            </Row>

        </Container>
    )
}

export default HomePage;