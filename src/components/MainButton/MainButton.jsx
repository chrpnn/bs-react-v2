import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainButton.module.scss";

export default function MainButton({ to, children, onClick }) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        if (to && !e.defaultPrevented) {
            navigate(to);
        }
    };

    return (
        <button className={styles.root} onClick={handleClick}>
            {children}
        </button>
    );
}


//todo: убрать to
//todo: поправить signup как в login, используя useNavigate