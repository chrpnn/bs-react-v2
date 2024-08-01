import React from "react";
import MainButton from "../../components/MainButton/MainButton";
import styles from "./Start.module.scss";

import startPageImage from "../../assets/start_page.png";

export default function Start() {
    return (
        <div className={styles.root}>
            <img src={startPageImage} alt="Start Page" />
            <h1 className={styles.title}>Boardgame Stats</h1>
            <p className={styles.description}>
                Track your progress and compete with friends
            </p>
            <MainButton to="/login">Get Started</MainButton>
        </div>
    );
}
