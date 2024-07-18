import React, { useState } from "react";
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import styles from "./AddForm.module.scss";

export default function AddForm({ onClose }) {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const db = getFirestore();
    const user = useAuth();

    const handleAddFriend = async () => {
        if (!user) {
            setErrorMessage("User is not defined");
            return;
        }

        try {
            const q = query(
                collection(db, "users"),
                where("name", "==", nameValue),
                where("email", "==", emailValue)
            );

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setErrorMessage("User with this name and email not found");
                return;
            }

            const friendDoc = querySnapshot.docs[0];
            const friendData = friendDoc.data();

            const friend = {
                uid: friendDoc.id,
                name: friendData.name,
                avatar: friendData.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iqy7AzrG-dXXWp76jDB7n7Bsz98MlkOqDg&s'
            };

            await setDoc(doc(collection(db, `users/${user.uid}/friends`), friend.uid), friend);

            setNameValue('');
            setEmailValue('');
            setErrorMessage('');
            onClose();
        } catch (error) {
            console.error("Error adding friend:", error);
            setErrorMessage("Error adding friend");
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
            <button onClick={handleAddFriend} className={styles.button}>
                Добавить друга
            </button>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
    );
}
