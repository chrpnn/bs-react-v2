import React, { useState } from 'react';
import AddForm from '../AddForm/AddForm';
import styles from './AddFriendButton.module.scss';

import userPlus from '../../assets/user-plus.svg';


export default function AddFriendButton() {

    // состояния для отображения формы добавления в друзья
    const [showAddForm, setShowAddForm] = useState(false);

    const handleButtonClick = () => {
        setShowAddForm(!showAddForm); // Переключаем видимость формы
    };

    return (
        <div className={styles.root}>

            <div className={styles.container}>
                <button className={styles.button} onClick={handleButtonClick}>
                    <img className={styles.buttonIcon} src={userPlus} alt="" />
                </button>
                <div className={styles.description}>
                    <p className={styles.title}>Добавить друга</p>
                    <p className={styles.subtitle}>Добавь друга по имени или email</p>
                </div> 
            </div>

            

            {showAddForm && <AddForm onClose={() => setShowAddForm(false)} />}
            
        </div>
    )
}
