import React from "react";
import { supabase } from "../../utils/supabaseClient";
import { useAuth } from "../../hooks/useAuth";
import GameResult from "../GameResult/GameResult";
import Search from "../Search/Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./History.module.scss";

export default function History() {
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
                    .from("playerMatch")
                    .select("*")
                    .eq("id_player", user.id) // Фильтр по id текущего пользователя
                    .ilike("game_name", `%${searchValue}%`); // Поиск по имени игры

                console.log(data);
                if (error) throw error;

                setGames(data);
                setIsLoading(false);

                // Подписываемся на обновления
                const subscription = supabase
                    .from(`playerMatch:id_player=eq.${user.id}`)
                    .on("*", (payload) => {
                        console.log("Change received!", payload);
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
    }, [user, searchValue]);

    const displayedGames = showAll ? sortedGames : sortedGames.slice(0, 3);
    console.log(displayedGames);

    return (
        <div className={styles.root}>
            <div className={styles.sticky}>
                <div className={styles.titleGroup}>
                    <h2>История</h2>
                    <button
                        className={styles.toggleShowAll}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Скрыть" : "Показать >"}
                    </button>
                </div>

                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            {isLoading ? (
                <div className={styles.sceletonContainer}>
                    {[...Array(3)].map((_, index) => (
                        <Skeleton
                            height={72}
                            borderRadius={12}
                            marginBottom={12}
                            baseColor="#cccccc07"
                            highlightColor="#cccccc10"
                        />
                    ))}
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
