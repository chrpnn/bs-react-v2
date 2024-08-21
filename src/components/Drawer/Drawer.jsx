import React from "react";
import styles from "./Drawer.module.scss";

export default function Drawer({ isVisible, onClose, imageSrc }) {
    return (
        <div className={`${styles.root} ${isVisible ? styles.show : ""}`}>
            <button className={styles.closeButton} onClick={onClose}>
                &times;
            </button>
            <div className={styles.image}>
                <img src={imageSrc} alt="" />
            </div>
            <div className={styles.content}>
                <p>Brass: Birmingham</p>
                <p>
                    Brass: Birmingham is an economic strategy game sequel to Martin
                    Wallace' 2007 masterpiece, Brass. Brass: Birmingham tells the story of
                    competing entrepreneurs in Birmingham during the industrial
                    revolution, between the years of 1770-1870. It offers a very different
                    story arc and experience from its predecessor. As in its predecessor,
                    you must develop, build, and establish your industries and network, in
                    an effort to exploit low or high market demands. The game is played
                    over two halves: the canal era (years 1770-1830) and the rail era
                    (years 1830-1870). To win the game, score the most VPs. VPs are
                    counted at the end of each half for the canals, rails and established
                    (flipped) industry tiles.
                </p>
            </div>
        </div>
    );
}
