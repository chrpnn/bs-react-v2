import React from "react";

import styles from "./GameCard.module.scss";

export default function GameCard({ id, date, gameName, status, count, gameStats, imageUrl }) {

    return (
        <div className={styles.root} key={id}>
            <img src={imageUrl ? imageUrl : "https://page-images.websim.ai/Carcassonne_1024x1024xHDQ9l7SLW9TYfKZJgxb004f20d958db.jpg"} alt="" />
            <div className={styles.description}>
                <h3>{gameName ? gameName : "Untitled"}</h3>
                <p>Игр всего: {count}</p>
                <p>Побед: {gameStats.find(game => game.gameName === gameName).wins} </p>
                <p>Поражений: {count - gameStats.find(game => game.gameName === gameName).wins} </p>
                <p>WR: {100 * (gameStats.find(game => game.gameName === gameName).wins / count).toFixed(2)} %</p>
            </div>
        </div>
    );
}