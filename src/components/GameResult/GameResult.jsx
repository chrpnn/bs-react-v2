import React from "react";
import styles from "./GameResult.module.scss";

// Функция для форматирования даты
function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

export default function GameResult({ id, date, gameName, status }) {
    return (
        <div className={styles.root}>
            <div className={styles.gameContainer} key={id}>
                <div>
                    <p className={styles.gameDate}>{formatDate(date)}</p>
                    <p className={styles.gameName}>{gameName}</p>
                </div>
                <p
                    className={styles.gameStatus}
                    style={{ color: status === "win" ? "#43C465cc" : "#F14985cc" }}
                >
                    {status}
                </p>
            </div>
        </div>
    );
}
