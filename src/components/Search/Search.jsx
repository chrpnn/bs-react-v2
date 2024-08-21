import styles from "./Search.module.scss";

export default function Search({ placeholder, searchValue, setSearchValue, onSearch }) {
  // Функция для обработки нажатия клавиши Enter в поле ввода
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleKeyDown} // Обработка нажатия клавиш
        className={styles.searchInput}
      />
    </div>
  );
}