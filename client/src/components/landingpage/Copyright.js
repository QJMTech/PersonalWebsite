import React from "react";
import styles from "./Copyright.module.css";
import { Link } from "react-router-dom"

const Copyright = () => {
    return (<p className = {styles.copyright}><Link to = "/momspage"> copyright @2021 Quinn Melssen</Link></p>)
}

export default Copyright;