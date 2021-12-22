import React from "react";
import styles from "./Icons.module.css";
import { FaLinkedin, FaEnvelope, FaGithub, FaFileAlt } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import PDF from "./resume.pdf";

const Icons = () => {
    // JSX
    return (
        <div className={styles.content_center}>
            <Tooltip title="GitHub" arrow>
                <a href="https://github.com/QJMTech">
                    <FaGithub />
                </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
                <a
                    href="https://www.linkedin.com/in/quinn-melssen-a1351621b/"
                >
                    <FaLinkedin />
                </a>
            </Tooltip>
            <Tooltip title="Email Me!" arrow>
                <a href="mailto:qjm7@nau.edu">
                    <FaEnvelope />
                </a>
            </Tooltip>
            <Tooltip title="Resume" arrow>
                <a href = "">
                    <FaFileAlt
                        onClick={() => window.open(PDF)}
                    />
                </a>
            </Tooltip>
        </div>
    );
};

export default Icons;
