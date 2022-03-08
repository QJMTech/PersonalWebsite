import React from "react";
import styles from "./FormCard.module.css";
import Zoom from "@mui/material/Zoom";
import Button from "@mui/material/Button";

const FormCard = (information) => {
    return (
        <div className={styles.page_background}>
            <Zoom in={true}>
                <div className={styles.page_content}>
                    <div className={styles.profile_column}>
                        <div className={styles.profile}>
                            <div className={styles.profile_content}>
                                <h1 className={styles.main_text}>
                                    Reserve Your Teetime
                                </h1>
                                {/* Element to display typing strings */}
                                <form action="/submit" method="POST">
                                    <label>Pick your course</label>
                                    <select
                                        className={styles.dropdown}
                                        name="course"
                                        required
                                    >
                                        <option value="Victory">Victory</option>
                                        <option value="Verrado">Verrado</option>
                                    </select>
                                    <label>Pick your time</label>
                                    <select
                                        className={styles.dropdown}
                                        name="time"
                                        required
                                    >
                                        <option value="06:21">6:21</option>
                                        <option value="06:30">6:30</option>
                                        <option value="06:39">6:39</option>
                                        <option value="06:48">6:48</option>
                                        <option value="06:57">6:57</option>
                                        <option value="07:06">7:06</option>
                                        <option value="07:15">7:15</option>
                                        <option value="07:24">7:24</option>
                                        <option value="07:33">7:33</option>
                                        <option value="07:42">7:42</option>
                                        <option value="07:51">7:51</option>
                                        <option value="08:00">8:00</option>
                                        <option value="08:09">8:09</option>
                                        <option value="08:18">8:18</option>
                                        <option value="08:27">8:27</option>
                                        <option value="08:36">8:36</option>
                                        <option value="08:45">8:45</option>
                                        <option value="08:54">8:54</option>
                                        <option value="09:03">9:03</option>
                                        <option value="09:12">9:12</option>
                                        <option value="09:21">9:21</option>
                                        <option value="09:30">9:30</option>
                                        <option value="09:39">9:39</option>
                                        <option value="09:48">9:48</option>
                                        <option value="09:57">9:57</option>
                                        <option value="10:06">10:06</option>
                                        <option value="10:15">10:15</option>
                                        <option value="10:24">10:24</option>
                                        <option value="10:33">10:33</option>
                                        <option value="10:42">10:42</option>
                                        <option value="10:51">10:51</option>
                                        <option value="11:00">11:00</option>
                                        <option value="11:09">11:09</option>
                                        <option value="11:18">11:18</option>
                                        <option value="11:27">11:27</option>
                                        <option value="11:36">11:36</option>
                                        <option value="11:45">11:45</option>
                                        <option value="11:54">11:54</option>
                                        <option value="12:03">12:03</option>
                                    </select>
                                    <label>Number of Teetimes</label>
                                    <select
                                        className={styles.dropdown}
                                        name="numoftimes"
                                        required
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <br />
                                    <Button
                                        className={styles.portfolio_button}
                                        type="submit"
                                        value="Submit"
                                    >
                                        {" "}
                                        Submit{" "}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default FormCard;
