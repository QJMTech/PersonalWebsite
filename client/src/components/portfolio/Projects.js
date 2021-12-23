import React from "react";
import styles from "./Projects.module.css";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className = {styles.project_list}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
};

export default Projects;
