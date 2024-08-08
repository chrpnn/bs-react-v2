import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { fetchGames, addGameResult } from "../../utils/gameService";

import styles from "./AddResultModal.module.scss";
import { connectStorageEmulator } from "firebase/storage";

export default function AddResultModal({ active, setActive }) {
    const [gameName, setGameName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [status, setStatus] = React.useState("win");
    const [boardgames, setBoardgames] = React.useState([]);
    const [selectedGame, setSelectedGame] = React.useState(""); // Выбранная игра

    const user = useAuth();
    

    // Используем useEffect для загрузки списка игр с сервера при монтировании компонента
    React.useEffect(() => {
        const loadGames = async () => {
            
            const gamesList = await fetchGames(); // Получаем список игр
            console.log('список игр:', gamesList);
            setBoardgames(gamesList); // Устанавливаем их в состояние
            
        };

        loadGames();
    }, []);
    
    // Функция для добавления результата игры
    const handleAddGame = async () => {
        if (!selectedGame || !selectedGame.boardgameName) {
            alert("Please select a game."); // Проверка на выбор игры
            return;
        }

        const newGameResult = {
            gameName: selectedGame.boardgameName, // Имя выбранной игры
            date, // Дата
            status, // Статус (победа или поражение)
            createdAt: new Date(), // Время создания
        };


        console.log(user.id);
        console.log(newGameResult);
        const success = await addGameResult(user.id, newGameResult); // Добавляем результат игры

        if (success) {
            setActive(false); // Закрытие модального окна
            setGameName(""); // Сброс полей формы
            setDate("");
            setStatus("win");
        }
    };

    // Обработчик изменения выбора игры
    const handleGameChange = (e) => {
        const name = e.target.value;
        const game = boardgames.find((g) => g.boardgameName === name);
        setSelectedGame(game); // Установка объекта выбранной игры
    };

    
    return (
        <div
            className={active ? `${styles.root} ${styles.active}` : styles.root}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${styles.modal} ${styles.active}` : styles.modal}
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
                                    <option key={game.id} value={game.boardgameName}>
                                        {game.boardgameName.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                            <span className={styles.borderText}>Название игры</span>
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
                            Add Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
