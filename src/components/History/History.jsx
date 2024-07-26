import React from "react";
import {
    getFirestore,
    collection,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import GameResult from "../GameResult/GameResult";
import Search from "../Search/Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./History.module.scss";

export default function History({ setGameCount, setPercentWinsCount }) {
    const [games, setGames] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const user = useAuth();

    const sortedGames = React.useMemo(() => {
        return games.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [games]);

    React.useEffect(() => {
        const db = getFirestore();

        const fetchGames = async () => {
            if (!user) return; // Ждем, пока будет доступен пользователь

            try {
                const userGamesRef = collection(db, `users/${user.uid}/games`);
                const q = searchValue.toLowerCase()
                    ? query(
                        userGamesRef,
                        where("gameName", ">=", searchValue.toLowerCase()),
                        where("gameName", "<=", searchValue.toLowerCase() + "\uf8ff")
                    )
                    : userGamesRef;
                console.log("ищем", q);

                // Используем onSnapshot для получения данных в реальном времени
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const arr = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    setGames(arr);
                    setGameCount(arr.length);
                    setPercentWinsCount(
                        (arr.filter((item) => item.status === "win").length / arr.length) *
                        100
                    );
                    setIsLoading(false);
                });

                // Возвращаем функцию отписки, чтобы отписаться от потока данных при размонтировании компонента
                return () => unsubscribe();
            } catch (error) {
                console.error("Error fetching the games data:", error);
                setIsLoading(false);
            }
        };

        fetchGames();
    }, [user, searchValue, setGameCount, setPercentWinsCount]);

    const displayedGames = showAll ? sortedGames : sortedGames.slice(0, 3);

    return (
        <div className={styles.root}>
            <div className={styles.titleGroup}>
                <h2>History</h2>
                <button
                    className={styles.toggleShowAll}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Hide" : "Show all"}
                </button>
            </div>

            <Search searchValue={searchValue} setSearchValue={setSearchValue} />


            {isLoading ? (
                <div className={styles.container}>
                    <Skeleton height={72} borderRadius={12} marginBottom={12} baseColor="#cccccc07" highlightColor="#cccccc10" />
                    <Skeleton height={72} borderRadius={12} marginBottom={12} baseColor="#cccccc07" highlightColor="#cccccc10"/>
                    <Skeleton height={72} borderRadius={12} marginBottom={12} baseColor="#cccccc07" highlightColor="#cccccc10"/>
                </div>
            ) : (
                <div className={styles.container}>
                    {displayedGames.map((obj, i) => (
                        <GameResult key={obj.id} {...obj} />
                    ))}
                </div>
            )}

        </div>
    );
}
