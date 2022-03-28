import styles from "./PortfolioButton.module.css";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {

    return (
        <div>
            
            <Link to = "/portfolio"><Button className = {styles.portfolio_button}>See Portfolio</Button></Link>
            
        </div>
    );
}
