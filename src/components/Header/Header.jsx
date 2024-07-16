import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import styles from "./Header.module.scss";

// import settingsLogo from "../../assets/menu.svg";
import avatar from "../../assets/Default.jpg";
import logoutLogo from "../../assets/logout-2-svgrepo-com.svg";
import { useUser } from "../../UserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

export default function Header() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/start"); 
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  const handleAvatarClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className={styles.root}>
        {/* <img src={settingsLogo} alt="" /> */}
        <div className={styles.avatarGroup} onClick={handleAvatarClick}>
          <img src={user?.photoURL || avatar} alt="avatar" />
          <p>
            Привет!
            <br />
            {user ? user.displayName : "Guest"}
          </p>
        </div>
        <div className={styles.notificationGroup}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <img src={logoutLogo} alt="logout" />
          </button>
        </div>
      </div>

      <EditProfileModal active={isModalOpen} setActive={setIsModalOpen} user={user} />
    </div>
  );
}
