import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";

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
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      if (user) {
        try {
          const { data: playerData, error } = await supabase
            .from("player")
            .select("*")
            .eq("id", user.id)
            .single();
          if (error) throw error;
          setPlayer(playerData); // Сохраняем данные игрока в состояние
          console.log(playerData);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching player:", error);
        }
      }
    };

    fetchPlayer(); // Вызываем функцию для получения данных игрока
  }, [user]); // Функция будет вызвана при изменении `user`

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setTimeout(() => navigate("/start"), 500); // Задержка в 500 мс для отладки
    } catch (error) {
      console.error("Ошибка при выходе:", error.message);
      navigate("/start");
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
              baseColor="#f2f2f2"
              highlightColor="#cccccc40"
            />
          ) : (
            <img src={player.avatarURL || avatar} alt="avatar" />
          )}
          <p>
            Привет!
            <br />
            {isLoading ? (
              <Skeleton
                width={89}
                baseColor="#f2f2f2"
                highlightColor="#cccccc40"
              />
            ) : user ? (
              player.name || user.email
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