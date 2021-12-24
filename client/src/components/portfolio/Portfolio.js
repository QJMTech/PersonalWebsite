import React from "react";
import styles from "./Portfolio.module.css"

// COMPONENTS
import Title from "./Title";
import Projects from "./Projects";
import CustomParticles from "../landingpage/CustomParticles";

const Portfolio = () => {
    return (
        <div className = {styles.page_background}>
            <CustomParticles shape="polygon" />
            <Title />
            <Projects />
        </div>
    );
};

export default Portfolio;
