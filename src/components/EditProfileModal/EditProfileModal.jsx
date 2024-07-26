import React from "react";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase"; // Импорт Firestore
import {
    doc,
    getDocs,
    collection,
    query,
    where,
    updateDoc,
} from "firebase/firestore";

import styles from "./EditProfileModal.module.scss";

export default function EditProfileModal({ active, setActive, user }) {
    const [newDisplayName, setNewDisplayName] = React.useState(
        user?.displayName || ""
    );
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
            setFileName(file.name); // Обновление состояния с именем файла
        }
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
                    ...(newAvatar && { avatarURL: updates.photoURL }),
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
                            <input
                                className={styles.input}
                                type="text"
                                value={newDisplayName}
                                onChange={handleNameChange}
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
                        <button className={styles.button} onClick={handleSaveChanges}>
                            Сохранить изменения
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
