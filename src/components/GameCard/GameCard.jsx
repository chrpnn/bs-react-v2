import React from "react";
import styles from "./GameCard.module.scss";

export default function GameCard({ id, game_name, count, wins, imageUrl }) {
    // Определение количества поражений и процентов побед
    const losses = count - wins;
    const winRate = count > 0 ? ((wins / count) * 100).toFixed(2) : 0;

    return (
        <div className={styles.root} key={id}>
            <img 
                src={imageUrl || "https://page-images.websim.ai/Carcassonne_1024x1024xHDQ9l7SLW9TYfKZJgxb004f20d958db.jpg"} 
                alt={game_name} 
                loading="lazy"
            />
            <div className={styles.description}>
                <h3>{game_name ? game_name.toUpperCase() : "UNTITLED"}</h3>
                <p>Игр всего: {count}</p>
                <p>Побед: {wins}</p>
                <p>Поражений: {losses}</p>
                <p>WR: {winRate} %</p>
            </div>
        </div>
    );
}
