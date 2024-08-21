import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../utils/userService";

import BackButton from "../../components/BackButton/BackButton";
import MainButton from "../../components/MainButton/MainButton";

import styles from "./SignUp.module.scss";

import logoImage from "../../assets/logoB.png";
import googleLogo from "../../assets/Google-logo.svg";
import twitterLogo from "../../assets/Frame.svg";
import facebookLogo from "../../assets/Facebook-logo.svg";

export default function SignUp() {
    const [email, setEmail] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("пароли не совпадают");
            return;
        }

        try {
            const userData = await signUpUser(email, password, nickname);

            if (!userData) {
                throw new Error("Ошибка при создании пользователя в Supabase");
            }

            console.log("Пользователь создан в Supabase");

            // Очистка полей формы
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError("");
            setNickname("");
            
            // Перенаправление на домашнюю страницу
            navigate("/");
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }        
    };

    return (
        <div className={styles.root}>
            <BackButton />
            <div className={styles.loginContainer}>
                <img className={styles.logo} src={logoImage} alt="Logo" />
                <div className={styles.loginGroup}>
                    <h1 className={styles.title}>Создание аккаунта</h1>
                    <form className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nickname"
                            className={styles.input}
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className={styles.input}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </form>

                    <MainButton
                        className={styles.loginButton}
                        to="/home"
                        onClick={register}
                    >
                        Создать
                    </MainButton>
                    {error && <p className={styles.error}>{error}</p>}
                </div>

                {/* <div className={styles.socialButtonsGroup}>
                    <p>Войти с помощью</p>
                    <div className={styles.socialButtonsSubgroup}>
                        <button className={styles.socialButton}>
                            <img src={googleLogo} alt="Google" />
                        </button>{" "}
                        <button className={styles.socialButton}>
                            <img src={facebookLogo} alt="Facebook" />
                        </button>
                        <button className={styles.socialButton}>
                            <img src={twitterLogo} alt="Twitter" />
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
