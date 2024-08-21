import styles from "./PendingFriend.module.scss";

import avatar from "../../assets/ava.png";
// import trash from "../../assets/trash.svg";

export default function PendingFriend({ name, requestId, onAccept, onReject }) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar} alt="" />
                <div className={styles.content}>
                    <p className={styles.friendName}>{name}</p>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.acceptButton} onClick={() => onAccept(requestId)}>
                            Принять запрос
                        </button>
                        <button className={styles.rejectButton} onClick={() => onReject(requestId)}>
                            Отклонить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
