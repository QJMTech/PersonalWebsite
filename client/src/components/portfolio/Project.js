import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
    const whichBanner = () => {
        if (props.tag === "github") {
            return styles.githubbanner;
        }

        if (props.tag === "fresh") {
            return styles.freshbanner;
        }

    }

    return (
        <div className={styles.screen}>
            <div className={styles.bar}>
                <div className = {styles.greenbubble}></div>
                <div className = {styles.yellowbubble}></div>
                <div className = {styles.redbubble}></div>
                
                <h4>{props.projectname}</h4>
            </div>
            <div className={styles.content}>
                <picture className = {styles.imgs}>
                    <img src={props.projectimg} alt = "Project Thumbnail"></img>
                </picture>
            </div>
            <em className = {whichBanner()}></em>
        </div>
    );
};

export default Project;
