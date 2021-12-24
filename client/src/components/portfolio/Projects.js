import React from "react";
import styles from "./Projects.module.css";

// COMPONENTS
import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 100 }}>
            <Row className="justify-content-center">
                <Col md={3}>
                    <ProjectCard />
                </Col>
                <Col md={3}>
                    <ProjectCard />
                </Col>
                <Col md={3}>
                    <ProjectCard />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <ProjectCard />
                </Col>
                <Col md={3}>
                    <ProjectCard />
                </Col>
                <Col md={3}>
                    <ProjectCard />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <ProjectCard />
                </Col>
                <Col md={3}>
                    <ProjectCard />
                </Col>
                <Col md={3}>
                    <ProjectCard />
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
