import React from "react";

import styles from "./AddGameButton.module.scss";
import AddLogo from "../../assets/plus.svg"

export default function AddGameButton({ setModalActive }) {

    return (
    <div className={styles.root} onClick={() => setModalActive(true)}>
        <img src={AddLogo} alt="add button" />
        <p>Add result</p>
    </div>
    )
}
