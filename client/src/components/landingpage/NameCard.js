import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import styles from "./NameCard.module.css";
import PortfolioButton from "./PortfolioButton";
import BodyDescription from "./BodyDescription";
import Skills from "./Skills"
import Icons from "./Icons"
import Copyright from "./Copyright"

const NameCard = () => {
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
            <div className={styles.page_content}>
                <div className={styles.profile_column}>
                    <div className={styles.profile}>
                        <div className={styles.profile_content}>
                            <h1 className={styles.main_text}>Quinn Melssen</h1>
                            {/* Element to display typing strings */}
                            <span className={styles.secondary_text} ref={el} />
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
        </div>
    );
};

export default NameCard;
