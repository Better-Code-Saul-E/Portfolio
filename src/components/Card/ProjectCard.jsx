import { Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import styles from './ProjectCard.module.scss';
import { allSkills } from '../../data/SkillsData';

function ProjectCard({ project }) {
    return (
        <Card className={`${styles.projectCard} h-100`}>
            {/* The Carousel now sits directly in the Card, so it will be on top */}
            <Carousel indicators={false} interval={null}>
                {project.images.map((imageName, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className={`d-block w-100 ${styles.carouselImage}`}
                            src={`/images/${imageName}`}
                            alt={`${project.title} screenshot ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* All the text content is now wrapped in a single Card.Body */}
            <Card.Body className="d-flex flex-column">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="mt-2">
                    <strong>Built With:</strong>
                    <div className="mt-2 d-flex flex-wrap">
                        {project.tech.map((techName) => {
                            const skill = allSkills.find(s => s.name.toLowerCase() === techName.toLowerCase());
                            return skill ? (
                                <div className={styles.skillBadge} key={techName}>
                                    <img src={skill.iconSrc} alt={skill.name} className={styles.skillIcon} />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
                <div className="mt-auto pt-3 text-end">
                    {project.liveSite && (
                        <Button
                            variant="dark"
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-2"
                        >
                            Live Site
                        </Button>
                    )}
                    <Button
                        variant="outline-dark"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Repo
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;