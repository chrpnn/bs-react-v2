import React from "react";
import styles from "./BackButton.module.scss";

import arrow from "../../assets/arrow-left.svg";

export default function BackButton() {
    return (
        <div className={styles.root}>
            <img src={arrow} alt="back" onClick={() => window.history.back()}/>
        </div>
    );
}
