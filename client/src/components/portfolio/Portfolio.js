import { React, useState } from "react";
import styles from "./Portfolio.module.css";
import Project from "./Project";
import Title from "./Title";
import SociAllImage from "./imgs/sociall.png";
import TeamBanditImage from "./imgs/teambandit.png";
import AkiraImage from "./imgs/akira.png";
import MixNMagicImage from "./imgs/mixandmagic.PNG";
import OSSimImage from "./imgs/ossim.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#2a2a2a",
    border: "2px solid #000",
    color: "white",
    boxShadow: 24,
    p: 4,
};

const Portfolio = () => {
    // MODAL
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // JSX
    return (
        <div>
            <div className={styles.portfolio_page}>
                <Title />
                <ul className={styles.grid_list}>
                    <li className={styles.item}>
                        <a href="https://github.com/cartertaylor/SociAll">
                            <Project
                                projectname="SociAll"
                                projectimg={SociAllImage}
                                tag="github"
                            />
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="https://ceias.nau.edu/capstone/projects/CS/2022/Outlaws/">
                            <Project
                                projectname="TeamBandit"
                                projectimg={TeamBanditImage}
                                tag="fresh"
                            />
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="https://github.com/QJMTech/Akira_II">
                            <Project
                                projectname="Akira"
                                projectimg={AkiraImage}
                                tag="github"
                            />
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="https://github.com/QJMTech/MixAndMagic">
                            <Project
                                projectname="Mix'N'Magic"
                                projectimg={MixNMagicImage}
                                tag="github"
                            />
                        </a>
                    </li>
                    <li className={styles.item} onClick={handleOpen}>
                        <Project
                            projectname="OS Sim"
                            projectimg={OSSimImage}
                            tag="none"
                        />
                    </li>
                </ul>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        variant="h6"
                        component="h2"
                        className = {styles.modal_title}
                    >
                        More Details Available Upon Request
                    </Typography>
                    <Typography sx={{ mt: 2 }} className = {styles.modal_title}>
                        Hey, I am glad you're interested in my Operating System Simulator! This project
                        was created during my time in CS480 Operating Systems, and consisted of several thousands
                        of lines of C code. This simulator was created from scratch using threading, custom data
                        types, and handmade string operations, among other things. Unfortunately, I am unable
                        to post the source code to GitHub as it would be a violation of the Academic Integrity Policy
                        at NAU, but would love to show it to you upon request!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default Portfolio;
