import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
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
                    <img src={props.projectimg}></img>
                </picture>
            </div>
            <em className = {props.tag == "github" ? styles.githubbanner : styles.freshbanner}></em>
        </div>
    );
};

export default Project;
