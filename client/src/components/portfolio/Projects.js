import React from "react";
import styles from "./Projects.module.css";

// COMPONENTS
import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
    // JS
    const sociallInfo = [
        "SociAll",
        "SociAll is a social media keychain application designed to ",
        "../portfolio/sociallgif.gif"
    ];

    // JSX
    return (
        <Container
            fluid
            style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 100 }}
        >
            <Row className="justify-content-center">
                <Col md={3}>
                    <ProjectCard
                        title={sociallInfo[0]}
                        description={sociallInfo[1]}
                        img_link={sociallInfo[2]}
                    />
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
