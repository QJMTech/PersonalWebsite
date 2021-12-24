import React from "react";
import styles from "./Title.module.css";
import Zoom from "@mui/material/Zoom";

const Title = () => {
    return(
        <Zoom in = {true}>
            <div className={styles.title_text}>Personal Projects</div>
        </Zoom>
    )
}

export default Title;