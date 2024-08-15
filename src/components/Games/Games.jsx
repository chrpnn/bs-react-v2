import React from "react";
import { supabase } from "../../utils/supabaseClient";
import { useAuth } from "../../hooks/useAuth";
import GameCard from "../GameCard/GameCard";
import FastInfo from "../FastInfo/FastInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Games.module.scss";

export default function Games() {
    const [games, setGames] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showAll, setShowAll] = React.useState(false);

    const user = useAuth();

    React.useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            if (!user) return;

            try {
                const { data, error } = await supabase
                    .from("playerMatch")
                    .select(`
                        id_game, 
                        game_name, 
                        result, 
                        createdat, 
                        game(image)
                    `)
                    .eq("id_player", user.id);

                if (error) throw error;

                const gameCounts = {};
                data.forEach((game) => {
                    if (!gameCounts[game.id_game]) {
                        gameCounts[game.id_game] = { 
                            id_game: game.id_game, 
                            game_name: game.game_name, 
                            count: 0, 
                            wins: 0, 
                            image: game.game.image // Получаем URL изображения прямо здесь
                        };
                    }
                    gameCounts[game.id_game].count += 1;
                    if (game.result === "win") {
                        gameCounts[game.id_game].wins += 1;
                    }
                });

                const uniqueGames = Object.values(gameCounts).map(game => ({
                    ...game,
                    winPercentage: (game.wins / game.count) * 100
                }));

                setGames(uniqueGames);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching games data:", error);
                setIsLoading(false);
            }
        };

        fetchGames();
    }, [user]);

    const displayedGames = showAll ? games : games.slice(0, 4);

    return (
        <div className={styles.root}>
        
            <div className={styles.sticky}>

                <div className={styles.titleGroup}>
                    <h2>Коллекция игр</h2>
                    <button
                        className={styles.toggleShowAll}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Скрыть" : "Показать >"}
                    </button>
                </div>

                <FastInfo uniqueGames={games} gameStats={games} />
            </div>

            



            {isLoading ? (
                <div className={styles.cards}>
                    <Skeleton count={4} height={200} width={165} borderRadius={12} />
                </div>
            ) : (
                <div className={styles.cards}>
                    {displayedGames.map((game) => (
                        <GameCard
                            key={game.id_game}
                            id={game.id_game}
                            game_name={game.game_name}
                            count={game.count}
                            wins={game.wins}
                            imageUrl={game.image || "https://page-images.websim.ai/Carcassonne_1024x1024xHDQ9l7SLW9TYfKZJgxb004f20d958db.jpg"}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}