import React from "react";
import styles from "./AddResultModal.module.scss";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export default function AddResultModal({ active, setActive }) {
    const [gameName, setGameName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [status, setStatus] = React.useState("win");
    const [boardgames, setBoardgames] = React.useState([]);
    const [selectedGame, setSelectedGame] = React.useState(''); // Выбранная игра// Список игр, загружаемый с сервера

    const db = getFirestore(); // Инициализация Firestore

    // Используем useEffect для загрузки списка игр с сервера при монтировании компонента
    React.useEffect(() => {
        const fetchGames = async () => {
            try {
                // Получение документов из коллекции "boardgames"
                const querySnapshot = await getDocs(collection(db, "boardgames"));
                // Маппинг документов в массив объектов
                const gamesList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBoardgames(gamesList); // Установка списка игр в локальное состояние
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };

        fetchGames();
    }, [db]); // Зависимость - db, чтобы эффект выполнялся только при изменении db

    // Функция для добавления результата игры
    const handleAddGame = async () => {
        console.log("Selected game:", selectedGame);
        if (!selectedGame || !selectedGame.name) {
            alert("Please select a game."); // Проверка на выбор игры
            return;
        }

        const newGameResult = {
            gameName: selectedGame.name, // Имя выбранной игры
            date, // Дата
            status, // Статус (победа или поражение)
            createdAt: new Date(), // Время создания
        };

        try {
            await addDoc(collection(db, "games"), newGameResult);
            setActive(false); // Закрытие модального окна
            console.log("Document written");
            setGameName(""); // Сброс полей формы
            setDate("");
            setStatus("win");
        } catch (error) {
            console.error("Error adding game result:", error);
        }
    };

    // Обработчик изменения выбора игры
    const handleGameChange = (e) => {
        const name = e.target.value;
        console.log(name);
        const game = boardgames.find((g) => g.name === name);
        console.log(game);
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
                    <h2>Add New Result</h2>
                    <div className={styles.form}>
                        <label className={styles.label}>
                            Game:
                            <select
                                className={styles.input}
                                value={selectedGame ? selectedGame.name : ""}
                                onChange={handleGameChange}
                            >
                                <option value="">Select a game</option>
                                {boardgames.map((game) => (
                                    <option key={game.id} value={game.name}>
                                        {game.name}
                                    </option>
                                ))}
                            </select>                            
                        </label>
                        
                        <label className={styles.label}>
                            Date:
                            <input
                                className={styles.input}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                        <label className={styles.label}>
                            Status:
                            <select
                                className={styles.input}
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="win">Win</option>
                                <option value="lose">Lose</option>
                            </select>
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
