import React from "react";

import style from "./GroupsList.module.scss";

import closeLogo from "../../assets/close.svg";

export default function GroupsList() {
  const handleCloseClick = () => {
    // Обработчик клика по картинке закрытия
    console.log("Удалить группу");
  };

  return (
    <div className={style.root}>
      <img
        className={style.groupAvatar}
        src={
          "https://img.freepik.com/free-vector/abstract-colorful-background-concept_23-2148473228.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721001600&semt=ais_user"
        }
        alt="аватар"
      />
      <div className={style.groupInfo}>
        <p className={style.groupName}>настолки</p>
        <div className={style.groupUsersList}>
          <p className={style.groupUser}>Andrey Pokr</p>
          <p className={style.groupUser}>Hjffokr</p>
          <p className={style.groupUser}>IIkv wffw</p>
        </div>
        <div className={style.groupCount}>
          Сыграно {Math.round(Math.random() * 100)} партий
        </div>
      </div>
      <div className={style.groupClose}>
        <img
          className={style.closeIcon}
          src={closeLogo}
          alt="Закрыть группу"
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
}
