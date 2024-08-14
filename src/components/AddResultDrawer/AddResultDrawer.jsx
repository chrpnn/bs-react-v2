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

    // Используем useEffect для загрузки списка игр с сервера при монтировании компонента
    React.useEffect(() => {
        const loadGames = async () => {
            const gamesList = await fetchGames(); // Получаем список игр
            console.log("список игр:", gamesList);
            setBoardgames(gamesList); // Устанавливаем их в состояние
        };

        loadGames();
    }, []);

    console.log(boardgames);

    // Функция для добавления результата игры
    const handleAddGame = async () => {
        if (!selectedGame) {
            alert("Please select a game.");
            return;
        }

        const newGameResult = {
            playerId: user.id,
            gameName: selectedGame.name, // Имя выбранной игры
            gameId: selectedGame.id, // ID выбранной игры
            date: date, // Дата
            result: status, // Статус (победа или поражение)
            createdAt: new Date(), // Время создания
        };
        console.log(newGameResult);

        const success = await addGameResult(newGameResult.playerId, newGameResult.gameId, newGameResult); // Добавляем результат игры
        

        if (success) {
            setActive(false); // Закрытие модального окна
            setGameName(""); // Сброс полей формы
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
                        <div className={styles.checkboxGroup}>
                            <label className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    className={styles.hiddenCheckbox}
                                    onChange={() =>
                                        setShowAdditionalFields(!showAdditionalFields)
                                    }
                                />
                                <span className={styles.customCheckbox}></span>
                                Публичная партия
                            </label>
                        </div>

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

                        {showAdditionalFields ? (
                            <>
                                <label className={styles.label}>
                                    <select
                                        className={styles.input}
                                        value={selectedGame ? selectedGame.name : ""}
                                        onChange={handleGameChange}
                                    >
                                        <option value="">Выбери группу</option>
                                        {boardgames.map((game) => (
                                            <option key={game.id} value={game.id}>
                                                {game.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className={styles.borderText}>Группа</span>
                                </label>

                                <label className={styles.label}>
                                    <select
                                        className={styles.input}
                                        value={selectedGame ? selectedGame.name : ""}
                                        onChange={handleGameChange}
                                    >
                                        <option value="">Выбери победителя</option>
                                        {boardgames.map((game) => (
                                            <option key={game.id} value={game.id}>
                                                {game.name.toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                    <span className={styles.borderText}>Победитель</span>
                                </label>
                            </>
                        ) : (
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
                        )}

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
