import React, { useState } from "react";
import FooterNavButton from "../FooterNavButton/FooterNavButton";

import styles from "./Footer.module.scss";
import homeIcon from "../../assets/home.svg";
import addGroupIcon from "../../assets/group.svg";
import addFriendIcon from "../../assets/add-friend.svg";

export default function Footer() {
    const [activeButton, setActiveButton] = useState("Home");

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
                onClick={scrollToTop}
            />
            <FooterNavButton
                icon={addGroupIcon}
                label="Add Group"
                isActive={activeButton === "Add Group"}
                setActiveButton={setActiveButton}
                onClick={() => console.log("Group clicked")}
            />
            <FooterNavButton
                icon={addFriendIcon}
                label="Add Friend"
                isActive={activeButton === "Add Friend"}
                setActiveButton={setActiveButton}
                onClick={() => console.log("Friend clicked")}
            />
        </div>
    );
}
