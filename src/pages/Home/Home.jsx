import React from "react";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import AddGameButton from "../../components/AddGameButton/AddGameButton";
// import AddResultModal from "../../components/AddResultModal/AddResultModal";
import Games from "../../components/Games/Games";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

import { getPlayerMatchCount } from "../../utils/gameService";

import styles from "./Home.module.scss";
import AddResultDrawer from "../../components/AddResultDrawer/AddResultDrawer";

export default function Home({ }) {
    const [modalActive, setModalActive] = React.useState(false);

    const [gameCount, setGameCount] = React.useState(0);
    const [percentWinsCount, setPercentWinsCount] = React.useState(0);

    React.useEffect(() => {
        const fetchGameStats = async () => {
            try {
                const { totalCount, winCount } = await getPlayerMatchCount();
                setGameCount(totalCount);

                if (totalCount > 0) {
                    const percentage = (winCount / totalCount) * 100;
                    setPercentWinsCount(percentage.toFixed(0)); // Округляем до двух знаков после запятой
                }
            } catch (error) {
                console.error("Error fetching game stats:", error);
            }
        };

        fetchGameStats();
    }, []);

    console.log("percentWinsCount", percentWinsCount);

    return (
        <div className={styles.root}>
            <div className={styles.topInfo}>
                <Header />

                <div className={styles.topInfoResult}>
                    <div className={styles.total}>
                        <p className={styles.counter}>{gameCount}</p>
                        <p className={styles.describe}>
                            Сыграно
                            <br />
                            партий
                        </p>
                    </div>
                    <div className={styles.total}>
                        <p className={styles.counter}>{percentWinsCount} %</p>
                        <p className={styles.describe}>
                            Процент
                            <br />
                            побед
                        </p>
                    </div>
                    <AddGameButton setModalActive={setModalActive} />
                </div>
            </div>

            {/* <AddResultModal active={modalActive} setActive={setModalActive} /> */}
            <AddResultDrawer active={modalActive} setActive={setModalActive} />

            <div className={styles.main}>
                <History />

                {/* темп ниже, не удалять*/}
                {/* <div style={{ display: "flex", gap: "20px", padding: "0 15px" }}>
                    <ProductCard />
                    <ProductCard />
                </div> */}

                <Games />
            </div>
            {/* <Footer /> */}
        </div>
    );
}
