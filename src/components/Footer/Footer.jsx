import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FooterNavButton from "../FooterNavButton/FooterNavButton";

import styles from "./Footer.module.scss";
import homeIcon from "../../assets/home.svg";
import addGroupIcon from "../../assets/users-group.svg";
import addFriendIcon from "../../assets/user.svg";

export default function Footer() {
    const [activeButton, setActiveButton] = useState("Home");
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setActiveButton("Home");
                break;
            case "/groups":
                setActiveButton("Groups");
                break;
            case "/friends":
                setActiveButton("Friends");
                break;
            default:
                setActiveButton("Home");
                break;
        }
    }, [location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles.root}>
            <FooterNavButton
                icon={homeIcon}
                label="Home"
                isActive={activeButton === "Home"}
                setActiveButton={setActiveButton}
                onClick={() => {
                    scrollToTop();
                    navigate("/");
                }}
            />
            <FooterNavButton
                icon={addGroupIcon}
                label="Groups"
                isActive={activeButton === "Groups"}
                setActiveButton={setActiveButton}
                onClick={() => {
                    scrollToTop();
                    navigate("/groups");
                }}
            />
            <FooterNavButton
                icon={addFriendIcon}
                label="Friends"
                isActive={activeButton === "Friends"}
                setActiveButton={setActiveButton}
                onClick={() => {
                    scrollToTop();
                    navigate("/friends");
                }}
            />
        </div>
    );
}
