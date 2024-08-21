import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import image from "../../assets/brass.png";
import Drawer from "../Drawer/Drawer";

export default function ProductCard() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.image} onClick={toggleDrawer}>
        <img src={image} alt="brass" />
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>Brass: Birmingham</p>
          <p>Сыграно игр: 57</p>
        </div>
        <div className={styles.actions}></div>
      </div>
      <Drawer isVisible={isDrawerVisible} onClose={closeDrawer} imageSrc={image}/>
    </div>
  );
}
