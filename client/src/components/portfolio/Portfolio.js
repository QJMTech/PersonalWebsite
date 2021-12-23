import React from "react";
import styles from "./Portfolio.module.css"

// COMPONENTS
import Title from "./Title";
import Projects from "./Projects";

const Portfolio = () => {
    return(
        <div className = {styles.page_background}>
            <Title />
            <Projects />
        </div>
    )
}

export default Portfolio;