import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, onSnapshot, doc } from "firebase/firestore";
import styles from "./FriendBlock.module.scss";

export default function FriendBlock({ friend }) {
    const [gameCount, setGameCount] = useState(0);
    const [winRate, setWinRate] = useState(0);
    const [friendData, setFriendData] = useState(friend);

    useEffect(() => {
        const db = getFirestore();

        const fetchFriendData = () => {
            const friendDocRef = doc(db, `users/${friend.uid}`);
            const unsubscribeFriend = onSnapshot(friendDocRef, (doc) => {
                setFriendData(doc.data());
            });

            return () => unsubscribeFriend();
        };

        const fetchFriendGames = () => {
            const friendGamesRef = collection(db, `users/${friend.uid}/games`);
            const q = query(friendGamesRef);

            const unsubscribeGames = onSnapshot(q, (querySnapshot) => {
                const games = querySnapshot.docs.map((doc) => doc.data());
                setGameCount(games.length);
                const wins = games.filter((game) => game.status === "win").length;
                setWinRate((wins / games.length) * 100);
            });

            return () => unsubscribeGames();
        };

        const unsubscribeFriendData = fetchFriendData();
        const unsubscribeFriendGames = fetchFriendGames();

        return () => {
            unsubscribeFriendData();
            unsubscribeFriendGames();
        };
    }, [friend.uid]);

    return (
        <div className={styles.root}>
            <img src={friendData.avatarURL} alt="аватар" />
            <p>{friendData.name}</p>
            <div className={styles.userInfo}>
                <p>Игры: {gameCount}</p>
                <p>Процент побед: {winRate.toFixed(1)}%</p>
            </div>
        </div>
    );
}
