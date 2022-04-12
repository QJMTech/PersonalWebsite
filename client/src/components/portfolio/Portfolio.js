import React from "react";
import styles from "./Portfolio.module.css";
import Project from "./Project";
import Title from "./Title";
import SociAllImage from "./imgs/sociall.png";
import TeamBanditImage from "./imgs/teambandit.png";
import AkiraImage from "./imgs/akira.png";
import MixNMagicImage from "./imgs/mixandmagic.PNG";
import OSSimImage from "./imgs/operatingsystemsim.png"

const Portfolio = () => {
    return (
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
                <li className={styles.item}>
                    <a href="#">
                        <Project
                            projectname="OS Sim"
                            projectimg={OSSimImage}
                            tag="none"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Portfolio;
