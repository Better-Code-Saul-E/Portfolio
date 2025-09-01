import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react'

import styles from './ContactPage.module.scss'

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xwpovzpv");

    if (state.succeeded) {
        return (
            <Container className="my-5 text-center">
                <h1>Thank You!</h1>
                <p className="lead">Your message has been sent successfully.</p>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                    <h1>Contact Me</h1>
                    {/* text-muted is a nice Bootstrap class for secondary text */}
                    <h2 className="h4 fw-light text-muted">
                        saul.enriquez2005@gmail.com
                    </h2>
                    {/* The "lead" class makes paragraph text stand out a bit */}
                    <p className="lead mt-3">
                        Feel free to contact me with any inquiries or questions.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col lg={8}>
                    {/* 3. Connect the form to the handleSubmit function */}
                    <Form onSubmit={handleSubmit} className={styles.contactForm}>
                        <Row>
                            {/* --- Name Field --- */}
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" required />
                                </Form.Group>
                            </Col>

                            {/* --- Email Field --- */}
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" required />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* --- Message Field --- */}
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" required />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </Form.Group>

                        {/* --- Submit Button --- */}
                        <div className="text-center">
                            <Button variant="dark" type="submit" disabled={state.submitting}>
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}