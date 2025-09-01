import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';
import { allSkills } from '../../data/SkillsData';
import LinkedInIcon from '../../assets/logo/LinkedIn.svg'; 

function Footer() {
    const githubSkill = allSkills.find(s => s.name === 'GitHub');
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="align-items-center">
                    {/* Copyright Notice */}
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0">
                            &copy; {currentYear} Saul Enriquez. All rights reserved.
                        </p>
                    </Col>

                    {/* Social Media Icons */}
                    <Col md={6} className={`text-center text-md-end ${styles.socialIcons}`}>
                        {githubSkill && (
                            <a href="https://github.com/Better-Code-Saul-E" target="_blank" rel="noopener noreferrer">
                                <img src={githubSkill.iconSrc} alt="GitHub" />
                            </a>
                        )}
                        
                        {/* Add your LinkedIn profile link here */}
                        <a href="https://www.linkedin.com/in/saul-enriquez-chicago" target="_blank" rel="noopener noreferrer">
                           <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;