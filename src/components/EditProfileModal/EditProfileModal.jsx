import React from "react";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import styles from "./EditProfileModal.module.scss";

export default function EditProfileModal({ active, setActive, user }) {
    const [newDisplayName, setNewDisplayName] = React.useState(
        user?.displayName || ""
    );
    const [newAvatar, setNewAvatar] = React.useState(null);

    const handleNameChange = (e) => {
        setNewDisplayName(e.target.value);
    };

    const handleAvatarChange = (e) => {
        setNewAvatar(e.target.files[0]);
    };

    const handleSaveChanges = async () => {
        if (!user) {
            console.error("User is not defined");
            return;
        }

        try {
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
            }
            setActive(false);
        } catch (error) {
            console.error("Ошибка при обновлении профиля:", error);
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
                        <button className={styles.button} onClick={handleSaveChanges}>
                            Сохранить изменения
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
