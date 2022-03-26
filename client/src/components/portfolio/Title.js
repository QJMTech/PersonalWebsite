import React from "react";
import styles from "./Title.module.css";
import TechnologyList from "./TechnologyList"

const Portfolio = () => {
    return (
        <div className = {styles.head}>
            <h1 className={styles.title}>My Projects</h1>;
            <h2 className={styles.description}>Below are some of my programming projects that I have 
            worked on over the last four years. They range from personal projects to
            school projects developed by a group of other engineers. Some, but not all, of the technologies I 
            used across these projects are listed below.</h2>
            <TechnologyList />
        </div>
    );
};

export default Portfolio;
