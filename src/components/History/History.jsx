import React from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import GameResult from "../GameResult/GameResult";
import Search from "../Search/Search";

import styles from "./History.module.scss";

export default function History({ setGameCount, setPercentWinsCount }) {
    const [games, setGames] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);

    const search = searchValue ? `search=${searchValue}` : "";

    const sortedGames = React.useMemo(() => {
        return games.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [games]);

    React.useEffect(() => {
        const db = getFirestore();
    
        const fetchGames = async () => {
            try {
                const q = searchValue
                    ? query(collection(db, "games"), where("gameName", "==", searchValue))
                    : collection(db, "games");
    
                const querySnapshot = await getDocs(q);
                const arr = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
    
                setGames(arr);
                setGameCount(arr.length);
                setPercentWinsCount(
                    (arr.filter((item) => item.status === "win").length / arr.length) *
                    100
                );
    
            } catch (error) {
                console.error("Error fetching the games data:", error);
            }
        };
    
        fetchGames();
    }, [searchValue, setGameCount, setPercentWinsCount]);

    const displayedGames = showAll ? sortedGames : sortedGames.slice(0, 3);

    return (
        <div className={styles.root}>
            <div className={styles.titleGroup}>
                <h2>History</h2>
                <button
                    className={styles.toggleShowAll}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Hide" : "Show all"}
                </button>
            </div>

            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className={styles.container}>
                {displayedGames.map((obj, i) => (
                    <GameResult key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    );
}
