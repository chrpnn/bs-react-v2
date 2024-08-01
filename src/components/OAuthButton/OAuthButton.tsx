import React from "react";
import styles from "./OAuthButton.module.scss";

interface OAuthButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
};

const OAuthButton: React.FC<OAuthButtonProps> = ({ src, alt, onClick }) => {
    return (
        <button className={styles.root} onClick={onClick}>
            <img src={src} alt={alt} />
        </button>
    );
};

export default OAuthButton;