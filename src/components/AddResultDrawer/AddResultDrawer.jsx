import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { fetchGames, addGameResult } from "../../utils/gameService";
import styles from "./AddResultDrawer.module.scss";

export default function AddResultDrawer({ active, setActive }) {
    const [gameName, setGameName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [status, setStatus] = React.useState("win");
    const [boardgames, setBoardgames] = React.useState([]);
    const [selectedGame, setSelectedGame] = React.useState("");
    const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);

    const user = useAuth();

    React.useEffect(() => {
        const loadGames = async () => {
            const gamesList = await fetchGames();
            console.log("список игр:", gamesList);
            setBoardgames(gamesList);
        };

        loadGames();
    }, []);

    const handleAddGame = async () => {
        if (!selectedGame) {
            alert("Please select a game.");
            return;
        }

        const newGameResult = {
            playerId: user.id,
            gameName: selectedGame.name,
            gameId: selectedGame.id,
            date: date,
            result: status,
            createdAt: new Date(),
        };

        console.log(newGameResult);

        const success = await addGameResult(newGameResult.playerId, newGameResult.gameId, newGameResult);

        if (success) {
            setActive(false);
            setGameName("");
            setDate("");
            setStatus("win");
        }
    };

    const handleGameChange = (e) => {
        const name = e.target.value;
        const game = boardgames.find((g) => g.name === name);
        setSelectedGame(game);
    };

    return (
        <div
            className={active ? `${styles.overlay} ${styles.active}` : styles.overlay}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${styles.drawer} ${styles.active}` : styles.drawer}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.formGroup}>
                    <h2>Добавить результат</h2>
                    <div className={styles.form}>
                        <label className={styles.label}>
                            <select
                                className={styles.input}
                                value={selectedGame ? selectedGame.name : ""}
                                onChange={handleGameChange}
                            >
                                <option value="">Выбери игру</option>
                                {boardgames.map((game) => (
                                    <option key={game.id} value={game.name}>
                                        {game.name.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                            <span className={styles.borderText}>Игра</span>
                        </label>

                        <label className={styles.label}>
                            <input
                                className={styles.input}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <span className={styles.borderText}>Дата игры</span>
                        </label>

                        <label className={styles.label}>
                            <select
                                className={styles.input}
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="win">Win</option>
                                <option value="lose">Lose</option>
                            </select>
                            <span className={styles.borderText}>Результат</span>
                        </label>

                        <button
                            className={styles.button}
                            onClick={() => {
                                handleAddGame();
                            }}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
