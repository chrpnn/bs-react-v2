import React from "react";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase"; // Импорт Firestore
import { doc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";

import styles from "./EditProfileModal.module.scss";

export default function EditProfileModal({ active, setActive, user }) {
    const [newDisplayName, setNewDisplayName] = React.useState(
        user?.displayName || ""
    );
    const [newAvatar, setNewAvatar] = React.useState(null);
    const [error, setError] = React.useState("");

    const handleNameChange = (e) => {
        setNewDisplayName(e.target.value);
    };

    const handleAvatarChange = (e) => {
        setNewAvatar(e.target.files[0]);
    };

    const isDisplayNameUnique = async (displayName) => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("name", "==", displayName));
        const querySnapshot = await getDocs(q);
        return querySnapshot.empty;
    };

    const handleSaveChanges = async () => {
        if (!user) {
            console.error("User is not defined");
            return;
        }

        try {
            // Проверка уникальности имени пользователя
            if (newDisplayName) {
                const isUnique = await isDisplayNameUnique(newDisplayName);
                if (!isUnique) {
                    setError("Имя пользователя уже занято");
                    return;
                }
            }

            const updates = {};
            if (newDisplayName) {
                updates.displayName = newDisplayName;
            }
            if (newAvatar) {
                const storage = getStorage();
                const avatarRef = ref(storage, `avatars/${user.uid}`);
                await uploadBytes(avatarRef, newAvatar);
                const avatarURL = await getDownloadURL(avatarRef);
                updates.photoURL = avatarURL;
            }

            if (Object.keys(updates).length > 0) {
                await updateProfile(user, updates);
                // Обновление документа пользователя в Firestore
                const userDocRef = doc(db, "users", user.uid);
                await updateDoc(userDocRef, {
                    name: newDisplayName || user.displayName,
                    ...(newAvatar && { avatarURL: updates.photoURL })
                });
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
                    <div className={styles.form}>
                        <label className={styles.label}>
                            Новое имя:
                            <input
                                className={styles.input}
                                type="text"
                                value={newDisplayName}
                                onChange={handleNameChange}
                            />
                        </label>
                        <label className={styles.label}>
                            Новый аватар:
                            <input
                                className={styles.input}
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                        </label>
                        {error && <p className={styles.error}>{error}</p>}
                        <button className={styles.button} onClick={handleSaveChanges}>
                            Сохранить изменения
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
