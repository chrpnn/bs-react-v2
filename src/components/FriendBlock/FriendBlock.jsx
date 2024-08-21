import styles from "./FriendBlock.module.scss";

import avatar from "../../assets/ava.png";
import trash from "../../assets/trash.svg";

export default function FriendBlock({
    name,
    stats = { total_games_played: 0, total_wins: 0, total_win_rate: 0 },
}) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar} alt="" />
                <div className={styles.content}>
                    <p className={styles.friendName}>{name}</p>
                    <div className={styles.friensStats}>
                        <p className={styles.friendTotal}>Сыграно игр: {stats.total_games_played}</p>
                        <p className={styles.friendWins}>Побед: {stats.total_wins}</p>
                        <p className={styles.friendWinRate}>WR: {stats.total_win_rate}%</p>
                    </div>
                </div>
            </div>
            <button className={styles.button}>
                <img className={styles.buttonIcon} src={trash} alt="" />
            </button>
        </div>
    );
}
