import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import AddGameButton from "../../components/AddGameButton/AddGameButton";
// import AddResultModal from "../../components/AddResultModal/AddResultModal";
import Games from "../../components/Games/Games";
import Friends from "../Friends/Friends";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

// Импортируем функцию для получения статистики игрока
import { fetchPlayerTotalStats } from "../../utils/gameService";
import { useUser } from "../../UserContext"; // Импорт контекста пользователя для получения информации о текущем пользователе

import styles from "./Home.module.scss";
import AddResultDrawer from "../../components/AddResultDrawer/AddResultDrawer";


export default function Home({ }) {
    const [modalActive, setModalActive] = React.useState(false);

    const [gameCount, setGameCount] = React.useState(0);
    const [percentWinsCount, setPercentWinsCount] = React.useState(0);

    const { user } = useUser(); // Получаем текущего пользователя
    const navigate = useNavigate();


    React.useEffect(() => {
        if (!user) {
            navigate("/start"); // Перенаправляем на /start
            return;
        }
        // Функция для загрузки статистики игрока
        const fetchGameStats = async () => {
            try {
                // Передаем user.id в функцию fetchPlayerTotalStats
                const stats = await fetchPlayerTotalStats(user.id);
                if (stats) {
                    setGameCount(stats.total_games_played);
                    setPercentWinsCount(stats.total_win_rate);
                }
            } catch (error) {
                console.error("Error fetching game stats:", error);
            }
        };

        fetchGameStats();
    }, [user, navigate]);

    

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
                        <p className={styles.counter}>{percentWinsCount.toFixed(0)} %</p>
                        <p className={styles.describe}>
                            Процент
                            <br />
                            побед
                        </p>
                    </div>
                    <AddGameButton setModalActive={setModalActive} />
                </div>
            </div>

            <AddResultDrawer active={modalActive} setActive={setModalActive} />

            <div className={styles.main}>
                <History />

                {/* темп ниже, не удалять*/}
                {/* <div style={{ display: "flex", gap: "20px", padding: "0 15px" }}>
                    <ProductCard />
                    <ProductCard />
                </div> */}

                <Games />
                <Friends />
            </div>
            {/* <Footer /> */}
        </div>
    );
}
