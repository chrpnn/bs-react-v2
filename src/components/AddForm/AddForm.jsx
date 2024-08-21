import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient"; // Импорт Supabase
import { useUser } from "../../UserContext";
import styles from "./AddForm.module.scss";

export default function AddForm({ onClose }) {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { user } = useUser();
    const playerId = user?.id;

    // Функция для отправки запроса на дружбу
    const sendFriendRequest = async () => {
        try {
            // Поиск пользователя по имени или email
            const { data: friend, error: searchError } = await supabase
                .from("player")
                .select("*")
                .or(`name.eq.${nameValue},email.eq.${emailValue}`)
                .single();

            console.log(friend);

            if (searchError) {
                setErrorMessage("Пользователь не найден.");
                return;
            }

            // Отправка запроса на дружбу
            const { data, error: requestError } = await supabase
                .from("friends")
                .insert([
                    {
                        player_id1: playerId,
                        player_id2: friend.id,
                        status: "pending",
                    },
                ]);

            if (requestError) {
                setErrorMessage("Ошибка при отправке запроса.");
                return;
            }

            setSuccessMessage("Запрос на дружбу отправлен!");
            setNameValue("");
            setEmailValue("");
        } catch (error) {
            setErrorMessage("Произошла ошибка.");
            console.error(error);
        }
    };

    return (
        <div className={styles.root}>
            <input
                type="text"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="Введите имя..."
                className={styles.input}
            />
            <input
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Введите email..."
                className={styles.input}
            />
            <button className={styles.button} onClick={sendFriendRequest}>
                Отправить запрос
            </button>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {successMessage && <p className={styles.success}>{successMessage}</p>}
        </div>
    );
}
