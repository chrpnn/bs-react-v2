import React from 'react';
import styles from './FooterNavButton.module.scss';

export default function FooterNavButton({ icon, label, isActive, setActiveButton, onClick }) {
    const handleClick = () => {
        setActiveButton(label);
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={`${styles.root} ${isActive ? styles.active : ''}`} onClick={handleClick}>
            <img src={icon} alt={label} className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />
            <span className={`${styles.label} ${isActive ? styles.activeLabel : ''}`}>{label}</span>
        </button>
    );
}
