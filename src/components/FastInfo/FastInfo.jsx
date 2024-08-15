import React from "react";

import styles from "./FastInfo.module.scss";

import PopLogo from "../../assets/clipboard-heart-svgrepo-com.svg";
import SmileLogo from "../../assets/smile-circle-svgrepo-com.svg";
import SadLogo from "../../assets/sad-circle-svgrepo-com.svg";

export default function FastInfo({ uniqueGames, gameStats }) {

    const findMaxObject = (arr) => {
        let maxObject = null;
        let maxCount = 0;
        arr.forEach((obj) => {
            if (obj.count > maxCount) {
                maxCount = obj.count;
                maxObject = obj;
            }
        });
        return { maxCount, maxObject };
    };

    const findMaxMinWinPercentage = (arr) => {
        if (arr.length === 0) return { maxWinGame: null, minWinGame: null }; 

        let maxWinGame = arr[0];
        let minWinGame = arr[0];

        arr.forEach((game) => {
            if (game.winPercentage > maxWinGame.winPercentage) {
                maxWinGame = game;
            }
            if (game.winPercentage < minWinGame.winPercentage) {
                minWinGame = game;
            }
        });

        return { maxWinGame, minWinGame };
    };
    
    const { maxCount, maxObject } = findMaxObject(uniqueGames);
    const { maxWinGame, minWinGame } = findMaxMinWinPercentage(gameStats);

    console.log(uniqueGames);

    return (
        <div className={styles.root}>
            <div className={styles.infoBlock}>
                <img src={PopLogo} alt="Popular" />
                <p className={styles.title}>{maxObject && maxObject.game_name ? maxObject.game_name.toUpperCase() : "Untitled"}</p>
                <p>Партий всего: {maxCount}</p>

            </div>
            <div className={styles.infoBlock}>
                <img src={SmileLogo} alt="Smile" />
                <p className={styles.title}>{maxWinGame && maxWinGame.game_name ? maxWinGame.game_name.toUpperCase() : "Untitled"}</p>
                <p>Побед: {maxWinGame ? maxWinGame.winPercentage.toFixed(1) : 0} %</p>
            </div>
            <div className={styles.infoBlock}>
                <img src={SadLogo} alt="Sad" />
                <p className={styles.title}>{minWinGame && minWinGame.game_name ? minWinGame.game_name.toUpperCase() : "Untitled"}</p>
                <p>Побед: {minWinGame ? minWinGame.winPercentage.toFixed(1) : 0} %</p>
            </div>
        </div>
    );


}
