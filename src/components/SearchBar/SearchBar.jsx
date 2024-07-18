import React from "react";

import searchLogo from "../../assets/magnifer.svg";
import addLogo from "../../assets/user-plus.svg";

import styles from "./SearchBar.module.scss";

export default function SearchBar({ onAddClick }) {
    return (
        <div className={styles.root}>
            <img src={searchLogo} alt="поиск" />
            <img src={addLogo} alt="добавить друга" onClick={onAddClick }/>
        </div>
    );
}
