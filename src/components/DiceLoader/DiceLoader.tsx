import React from 'react';
import styles from './DiceLoader.module.scss';

interface DiceLoaderProps {
    style?: React.CSSProperties; 
}

const DiceLoader: React.FC<DiceLoaderProps> = ({ style }) => {
    return (
        <div className={styles.dice} style={style}>
            <div className={`${styles.face} ${styles.front}`}>B</div>
            <div className={`${styles.face} ${styles.back}`}>G</div>
            <div className={`${styles.face} ${styles.right}`}>S</div>
            <div className={`${styles.face} ${styles.left}`}>A</div>
            <div className={`${styles.face} ${styles.top}`}>A</div>
            <div className={`${styles.face} ${styles.bottom}`}>⚅</div>
        </div>
    );
};

export default DiceLoader;

