import React from "react";
import { Link, useNavigate } from "react-router-dom";

import MainButton from "../../components/MainButton/MainButton";
import BackButton from "../../components/BackButton/BackButton";
import OAuthButton from "../../components/OAuthButton/OAuthButton";

import styles from "./Login.module.scss";

import logoImage from "../../assets/logoB.png";
import vkLogo from "../../assets/vk-logo.svg";
import yandexLogo from "../../assets/yandex-logo.svg";
import telegramLogo from "../../assets/telegram-logo.svg";

import { supabase } from "../../utils/supabaseClient";

export default function LogIn() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = React.useState(true);
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
        console.log(!rememberMe);
    };

    // регулярка для проверки почты
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const logIn = async (e) => {
        e.preventDefault();

        // Валидация email
        if (!validateEmail(email)) {
            setError("Введите корректный адрес e-mail.");
            return;
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.log(error);
                setError("Неверное имя пользователя или пароль");
                return;
            }

            console.log(data);
            setEmail("");
            setPassword("");
            setError("");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Произошла ошибка при входе");
        }
    };

    return (
        <div className={styles.root}>
            <BackButton />
            <div className={styles.loginContainer}>
                <img className={styles.logo} src={logoImage} alt="Logo" />
                <div className={styles.loginGroup}>
                    <h1 className={styles.title}>Вход</h1>
                    <form className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </form>

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className={styles.hiddenCheckbox}
                            />
                            <span className={styles.customCheckbox}></span>
                            Запомнить меня
                        </label>
                        <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                            style={{ color: "#7B61FF" }}
                        >
                            Забыли пароль?
                        </a>
                    </div>
                    <MainButton className={styles.loginButton} onClick={logIn}>
                        Войти
                    </MainButton>
                    {error && <p className={styles.error}>{error}</p>}
                </div>

                <div className={styles.socialButtonsGroup}>
                    <p>Or continue with</p>
                    <div className={styles.socialButtonsSubgroup}>
                        <OAuthButton src={vkLogo} alt="ВК" />
                        <OAuthButton src={yandexLogo} alt="Яндекс" />
                        <OAuthButton src={telegramLogo} alt="Телеграм" />
                    </div>
                </div>

                <div className={styles.signUp}>
                    <span>Новый пользователь? </span>
                    <Link to="/signup">Зарегистрируйся</Link>
                </div>
            </div>
        </div>
    );
}
