import React from "react";
import { supabase } from "../../utils/supabaseClient";
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
        if (!user) return; // Ждем, пока будет доступен пользователь

        const fetchGames = async () => {
            setIsLoading(true);
            try {
                // Запрашиваем данные из Supabase
                const { data, error } = await supabase
                    .from(`users/${user.id}/games`)
                    .select("*")
                    .ilike("gameName", `%${searchValue}%`); // Пример поиска

                if (error) throw error;

                setGames(data);
                setGameCount(data.length);
                setPercentWinsCount(
                    (data.filter((item) => item.status === "win").length / data.length) * 100
                );
                setIsLoading(false);

                // Подписываемся на обновления
                const subscription = supabase
                    .from(`users/${user.id}/games`)
                    .on('*', (payload) => {
                        console.log('Change received!', payload);
                        fetchGames(); // Обновляем данные при изменении
                    })
                    .subscribe();

                // Отписка при размонтировании компонента
                return () => {
                    supabase.removeSubscription(subscription);
                };
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
                    <Skeleton
                        height={72}
                        borderRadius={12}
                        marginBottom={12}
                        baseColor="#cccccc07"
                        highlightColor="#cccccc10"
                    />
                    <Skeleton
                        height={72}
                        borderRadius={12}
                        marginBottom={12}
                        baseColor="#cccccc07"
                        highlightColor="#cccccc10"
                    />
                    <Skeleton
                        height={72}
                        borderRadius={12}
                        marginBottom={12}
                        baseColor="#cccccc07"
                        highlightColor="#cccccc10"
                    />
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
