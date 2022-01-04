import React from "react";
import styles from "./ProjectCard.module.css";

// COMPONENTS
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = (props) => {
    // JS

    // JSX
    return (
        <Card style={{ width: "18rem", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={require("../portfolio/sociallgif.gif")} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
