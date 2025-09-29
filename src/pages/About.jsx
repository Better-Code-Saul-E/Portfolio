import { Container, Row, Col, Image, Accordion, Card, Button } from 'react-bootstrap';
import styles from './AboutPage.module.scss';

import { languages, frameworks, libraries, preprocessor, runtime, devTools, versionControl, designTools } from '../data/SkillsData';

import bauhaus from '../assets/images/bauhaus.png';
import StanfordLogo from '../assets/logo/Stanford.png';
import CiscoLogo from '../assets/logo/Cisco.jpg';
import GoogleLogo from '../assets/logo/Google.png';
import MetaLogo from '../assets/logo/meta.png';

const certifications = [
    {
        title: 'Meta React Specialization',
        logoSrc: MetaLogo,
        link: 'https://coursera.org/share/ee3c2f7f5bb70aa23167e05c59fefbc6'
    },
    {
        title: 'Google IT Support ',
        logoSrc: GoogleLogo,
        link: 'https://coursera.org/share/479ef80491b44a71e7e42be17331dcfe'
    },
    {
        title: 'Cisco Linux Essentials',
        logoSrc: CiscoLogo,
        link: 'https://www.credly.com/badges/14ed900e-f9ae-49b8-be8f-ad64d37d734a/public_url'
    },
    {
        title: 'Stanford Code in Place',
        logoSrc: StanfordLogo,
        link: 'https://codeinplace.stanford.edu/cip5/certificate/u9wesp'
    }
];

const SkillAccordionItem = ({ eventKey, title, skills, styles }) => {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <div className="d-flex flex-wrap">
                    {skills.map((skill) => (
                        <div className={styles.skillBadge} key={skill.name}>
                            <img
                                src={skill.iconSrc}
                                alt={`${skill.name} logo`}
                                className={styles.skillIcon}
                            />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
};

function AboutPage() {
    return (
        <Container>
            <Row className='my-4 align-items-center'>
                <Col lg={3}>
                    <Image
                        src={bauhaus}
                        rounded
                        fluid
                        className={styles.brand}
                    />
                </Col>
                <Col lg={9}>

                    <h2>About Me</h2>
                    <p>Hi, I'm Saul Enriquez a computer science student at Columbia College Chicago
                        with a passion for building functional and user-friendly applications.
                        I specialize in web and mobile development, with experience in JavaScript,
                        Python, C#, and Swift. Along with programming, I'm also experienced in IT hardware
                        troubleshooting and have a strong foundation in UI/UX design principles.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        To develop software and digital solutions that combine technical performance with excellent user
                        experience, while leveraging IT knowledge to ensure system efficiency.
                    </p>
                </Col>
            </Row>
            <Row className='my-4 align-items-center'>
                <Col lg={8}>
                    <h3>What I Do</h3>
                    <ul className='list-unstyled'>
                        <li><strong>Front-End Development:</strong> Creating responsive and interactive web interfaces with
                            a focus on user experience.</li>
                        <li><strong>Back-End Systems:</strong> Developing efficient and scalable solutions for real-world
                            applications.</li>
                        <li><strong>Mobile Applications:</strong> Building iOS apps with Swift and Xcode.</li>
                        <li><strong>IT Support & Hardware:</strong> Hands-on experience with hardware refurbishment,
                            troubleshooting, and inventory management.</li>
                        <li><strong>UI/UX Design:</strong> Applying design principles to create intuitive and engaging
                            digital experiences.</li>
                    </ul>


                    <h4>Recent Highlights</h4>
                    <ul className='list-unstyled'>
                        <li><strong>IT Intern at PCs for People:</strong> Refurbished and managed hardware, supported IT
                            asset recycling, and improved tech accessibility.</li>
                        <li><strong>iOS Developer Intern:</strong> Built <em>Mune</em>, a mindfulness app, during an
                            intensive program with Everyone Can Code Chicago.</li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <Accordion defaultActiveKey={0} className={styles.customAccordion}>
                        <SkillAccordionItem eventKey="0" title="Languages" skills={languages} styles={styles} />
                        <SkillAccordionItem eventKey="1" title="Frameworks" skills={frameworks} styles={styles} />
                        <SkillAccordionItem eventKey="2" title="Libraries" skills={libraries} styles={styles} />
                        <SkillAccordionItem eventKey="3" title="Preprocessor" skills={preprocessor} styles={styles} />
                        <SkillAccordionItem eventKey="4" title="Runtime/Server" skills={runtime} styles={styles} />
                        <SkillAccordionItem eventKey="5" title="Developer Tools" skills={devTools} styles={styles} />
                        <SkillAccordionItem eventKey="6" title="Version Control" skills={versionControl} styles={styles} />
                        <SkillAccordionItem eventKey="7" title="Design Tools" skills={designTools} styles={styles} />
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <h4>Certifications</h4>
                {certifications.map((cert, index) => (
                    <Col lg={4} key={index} className={`mb-4 d-flex ${styles.themedCard}`}>
                        <Card className="w-100">
                            <Card.Img
                                variant="top"
                                src={cert.logoSrc}
                                style={{ height: '150px', objectFit: 'contain', padding: '1rem' }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{cert.title}</Card.Title>
                                <Button
                                    variant="dark"
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto"
                                >
                                    View Credential
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AboutPage;


