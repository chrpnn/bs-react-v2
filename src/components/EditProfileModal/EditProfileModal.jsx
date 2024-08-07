import React from "react";
import { supabase } from "../../utils/supabaseClient";

// import { updateProfile } from "firebase/auth";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db } from "../../firebase";
// import {
//     doc,
//     getDocs,
//     collection,
//     query,
//     where,
//     updateDoc,
// } from "firebase/firestore";

import styles from "./EditProfileModal.module.scss";

export default function EditProfileModal({ active, setActive, user }) {
    const [newDisplayName, setNewDisplayName] = React.useState(user?.user_metadata?.name || "");
    const [newAvatar, setNewAvatar] = React.useState(null);
    const [error, setError] = React.useState("");
    const [fileName, setFileName] = React.useState("");

    const handleNameChange = (e) => {
        setNewDisplayName(e.target.value);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewAvatar(file);
            setFileName(file.name);
        }
    };

    const isDisplayNameUnique = async (displayName) => {
        const { data, error } = await supabase
            .from('users')
            .select('id')
            .eq('name', displayName);

        return data.length === 0;
    };

    const handleSaveChanges = async () => {
        if (!user) {
            console.error("User is not defined");
            return;
        }

        // Проверка длины имени и допустимых символов
        if (newDisplayName.length < 5 || newDisplayName.length > 20) {
            setError("Имя пользователя должно содержать от 5 до 20 символов.");
            return;
        }
        
        // регулярка для проверки допустимых символов
        const nicknamePattern = /^(?![-_])[a-zA-Z0-9-_]{3,20}(?<![-_])$/;
        if (!nicknamePattern.test(newDisplayName)) {
            setError("Имя пользователя должно включать только латинские буквы, цифры, дефисы или подчеркивания. Никнейм не должен начинаться или заканчиваться дефисом или подчеркиванием.");
            return;
        }

        try {
            // Проверка уникальности имени пользователя
            const isUnique = await isDisplayNameUnique(newDisplayName);
            if (!isUnique) {
                setError("Имя пользователя уже занято");
                return;
            }

            const updates = {
                user_metadata: {
                    name: newDisplayName,
                },
            };

            // Если есть новый аватар, загружаем его в хранилище Supabase
            if (newAvatar) {

                console.log("Начало загрузки аватара для пользователя:", user.user_metadata.name);
                console.log("Имя файла аватара:", newAvatar.name);

                const { data, error: uploadError } = await supabase
                    .storage
                    .from('avatar_image') // Указание правильного названия bucket
                    .upload(`avatars/${user.id}`, newAvatar, {
                        upsert: true, // перезаписать файл, если он уже существует
                    });

                if (uploadError) {
                    console.error("Ошибка при загрузке аватара:", uploadError.message);
                    setError("Ошибка при загрузке аватара");
                    return;
                }

                const avatarURL = supabase.storage.from('avatar_image').getPublicUrl(data.path).publicURL;

                updates.user_metadata.photoURL = avatarURL;
            }

            // Обновление профиля пользователя
            const { error: updateError } = await supabase.auth.updateUser(updates);

            if (updateError) {
                console.error("Ошибка при обновлении профиля:", updateError.message);
                setError("Ошибка при обновлении профиля");
                return;
            }

            // Обновление информации о пользователе в таблице `users`
            const { error: updateTableError } = await supabase
                .from('users')
                .update({
                    name: newDisplayName,
                    ...(newAvatar && { avatarURL: updates.user_metadata.photoURL }),
                })
                .eq('id', user.id);

            if (updateTableError) {
                console.error("Ошибка при обновлении данных в таблице users:", updateTableError.message);
                setError("Ошибка при обновлении данных");
                return;
            }

            setActive(false);
        } catch (error) {
            console.error("Ошибка при обновлении профиля:", error);
            setError("Ошибка при обновлении профиля");
        }
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
                    <h2>Изменить профиль</h2>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            <input
                                className={styles.input}
                                type="text"
                                value={newDisplayName}
                                onChange={handleNameChange}
                                placeholder="Новое имя"
                            />
                            <span className={styles.borderText}>Новое имя</span>
                        </label>
                        <label className={styles.fileLabel}>
                            <input
                                className={styles.fileInput}
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                            <span className={styles.borderText}>Загрузить аватар</span>
                            {fileName && <span className={styles.fileName}>{fileName}</span>}
                        </label>
                        {error && <p className={styles.error}>{error}</p>}
                        <button
                            className={styles.button}
                            onClick={handleSaveChanges}
                            type="button"
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
