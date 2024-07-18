import React, { useState, useEffect } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import FriendBlock from '../../components/FriendBlock/FriendBlock';
import SearchBar from '../../components/SearchBar/SearchBar';
import AddForm from '../../components/AddForm/AddForm';
import styles from './Friends.module.scss';

export default function Friends() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [friends, setFriends] = useState([]);
    const user = useAuth();

    useEffect(() => {
        if (!user) return;

        const db = getFirestore();
        const friendsRef = collection(db, `users/${user.uid}/friends`);

        const unsubscribe = onSnapshot(friendsRef, (snapshot) => {
            const friendsList = snapshot.docs.map(doc => ({ ...doc.data(), uid: doc.id }));
            setFriends(friendsList);
        });

        return () => unsubscribe();
    }, [user]);

    const handleAddClick = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <div className={styles.root}>
            <SearchBar onAddClick={handleAddClick} />
            {showAddForm && <AddForm onClose={() => setShowAddForm(false)} />}
            {friends.map((friend) => (
                <FriendBlock key={friend.uid} friend={friend} />
            ))}
            <Footer />
        </div>
    );
}
