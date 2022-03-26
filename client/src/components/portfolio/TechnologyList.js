import React from "react";
import Title from "./Title";
import styles from "./TechnologyList.module.css";

const TechnologyList = (techname) => {
    const techarray = [
        "java",
        "c",
        "python",
        "aws",
        "ec2",
        "sql",
        "postgresql",
        "react",
        "javascript",
        "html5",
        "css",
        "mysql",
        "expressjs",
        "nodejs",
        "flask",
        "gunicorn",
        "twilio",
        "git",
        "github",
        "cli",
        "mui",
        "jwt",
        "gml",
        "gms2"
    ];

    const listItems = techarray.map((tech) =>
    <li key = {tech} className = {styles.tech}>{tech}</li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default TechnologyList;
