import React from "react";
import { Link, useNavigate } from "react-router-dom";

import MainButton from "../../components/MainButton/MainButton";
import BackButton from "../../components/BackButton/BackButton";

import styles from "./Login.module.scss";

import logoImage from "../../assets/Logo.svg";
import googleLogo from "../../assets/Google-logo.svg";
import twitterLogo from "../../assets/Frame.svg";
import facebookLogo from "../../assets/Facebook-logo.svg";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

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

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail("");
                setPassword("");
                setError("");
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                setError("Account doesn't exist");
            });
    };

    return (
        <div className={styles.root}>
            <BackButton />
            <div className={styles.loginContainer}>
                <img className={styles.logo} src={logoImage} alt="Logo" />
                <div className={styles.loginGroup}>
                    <h1 className={styles.title}>Log In</h1>
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
                            placeholder="Password"
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
                            Remember Me
                        </label>
                        <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                            style={{ color: "#7B61FF" }}
                        >
                            Forgot Password ?
                        </a>
                    </div>
                    <MainButton className={styles.loginButton}  onClick={logIn}>
                        Log In
                    </MainButton>
                    {error && <p className={styles.error}>{error}</p>}
                </div>

                <div className={styles.socialButtonsGroup}>
                    <p>Or continue with</p>
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
                </div>

                <div className={styles.signUp}>
                    <span>New User? </span>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
