import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import styles from "./Header.module.scss";

import avatar from "../../assets/Default.jpg";
import logoutLogo from "../../assets/logout-2-svgrepo-com.svg";
import { useUser } from "../../UserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

export default function Header() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

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
        <div className={styles.avatarGroup} onClick={handleAvatarClick}>
          {isLoading ? (
            <Skeleton
              circle={true}
              height={48}
              width={48}
              baseColor="#cccccc20"
              highlightColor="#cccccc50"
            />
          ) : (
            <img src={user?.photoURL || avatar} alt="avatar" />
          )}
          <p>
            Привет!
            <br />
            {isLoading ? (
              <Skeleton
                width={89}
                baseColor="#cccccc20"
                highlightColor="#cccccc50"
              />
            ) : user ? (
              user.displayName
            ) : (
              "Guest"
            )}
          </p>
        </div>
        <div className={styles.notificationGroup}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <img src={logoutLogo} alt="logout" />
          </button>
        </div>
      </div>

      <EditProfileModal
        active={isModalOpen}
        setActive={setIsModalOpen}
        user={user}
      />
    </div>
  );
}
