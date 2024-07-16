import React from "react";
import styles from "./Search.module.scss";

export default function Search({ searchValue, setSearchValue }) {

  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder="Поиск по игре..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}