import React from "react";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import AddGameButton from "../../components/AddGameButton/AddGameButton";
import AddResultModal from "../../components/AddResultModal/AddResultModal";
import Games from "../../components/Games/Games";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";


export default function Home({ }) {
    const [modalActive, setModalActive] = React.useState(false);

    const [gameCount, setGameCount] = React.useState(0);
    const [percentWinsCount, setPercentWinsCount] = React.useState(0);

    const roundetPercentWinsCount = Math.round(percentWinsCount * 10) / 10;

    return (
        <div className={styles.root}>
            <div className={styles.topInfo}>
                <Header />
                <div className={styles.topInfoResult}>
                    <div className={styles.total}>
                        <p className={styles.counter}>{gameCount}</p>
                        <p className={styles.describe}>total games</p>
                    </div>
                    <div className={styles.total}>
                        <p className={styles.counter}>{roundetPercentWinsCount} %</p>
                        <p className={styles.describe}>percent wins</p>
                    </div>
                </div>
                <AddGameButton setModalActive={setModalActive} />
                <AddResultModal active={modalActive} setActive={setModalActive} />
            </div>
            <div className={styles.main}>
                {/* <History
                    setGameCount={setGameCount}
                    setPercentWinsCount={setPercentWinsCount}
                /> */}
                {/* <Games /> */}
            </div>
            <Footer />
        </div>
    );
}
