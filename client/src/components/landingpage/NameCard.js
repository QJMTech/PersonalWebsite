import React, { useState } from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import styles from "./NameCard.module.css";
import PortfolioButton from "./PortfolioButton";
import BodyDescription from "./BodyDescription";
import Skills from "./Skills";
import Icons from "./Icons";
import Copyright from "./Copyright";
import Zoom from "@mui/material/Zoom";

const NameCard = () => {
    // JS
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    }

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Developer",
                "Software Engineer",
                "Computer Expert",
                "Programmer",
            ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className={styles.page_background}>
            <Zoom in={true}>
                <div className={styles.page_content}>
                    <div className={styles.profile_column}>
                        <div className={styles.profile}>
                            <div className={styles.profile_content}>
                                <div className={ hovered ? `${styles.image_real}` : `${styles.image_drawn}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div>
                                <h1 className={styles.main_text}>
                                    Quinn Melssen
                                </h1>
                                {/* Element to display typing strings */}
                                <span
                                    className={styles.secondary_text}
                                    ref={el}
                                />
                                <br></br>
                                <PortfolioButton />
                                <BodyDescription />
                                <Skills />
                                <Icons />
                                <br></br>
                                <Copyright />
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default NameCard;
