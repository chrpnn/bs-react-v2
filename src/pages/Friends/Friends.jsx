import { useState, useEffect } from "react";
import { useUser } from "../../UserContext";
import Search from "../../components/Search/Search";
import FriendBlock from "../../components/FriendBlock/FriendBlock";
import AddFriendButton from "../../components/AddFriendButton/AddFriendButton";
import styles from "./Friends.module.scss";
import {
    fetchFriends,
    fetchPendingFriends,
    searchUser,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    removeFriend,
} from "../../utils/friendsService";
import PendingFriend from "../../components/PendingFriend/PendingFriend";

export default function Friends() {
    const { user } = useUser();
    const [friends, setFriends] = useState([]);
    const [pendingFriends, setPendingFriends] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        loadFriends();
        loadPendingFriends();
    }, []);

    const loadFriends = async () => {
        const data = await fetchFriends(user.id);
        setFriends(data);
    };

    const loadPendingFriends = async () => {
        const data = await fetchPendingFriends(user.id);
        setPendingFriends(data);
    };

    const handleSearchUser = async () => {
        const data = await searchUser(searchTerm);
        setSearchResult(data);
    };

    const handleSendFriendRequest = async (playerId) => {
        await sendFriendRequest(user.id, playerId);
        loadPendingFriends();
    };

    const handleRemoveFriend = async (friendId1, friendId2) => {
        await removeFriend(friendId1, friendId2);
        loadFriends();
    };

    const handleAccept = async (requestId) => {
        await acceptFriendRequest(requestId);
        loadFriends();
        loadPendingFriends();
    };

    const handleReject = async (requestId) => {
        await rejectFriendRequest(requestId);
        loadPendingFriends();
    };

    const searchFriends = () => {
        if (searchTerm.trim() === "") return friends;
        return friends.filter((friend) =>
            friend.player_id1 === user.id
                ? friend.player2.name.includes(searchTerm)
                : friend.player1.name.includes(searchTerm)
        );
    };

    return (
        <div className={styles.root}>
            <div className={styles.sticky}>
                <div className={styles.titleGroup}>
                    <h2>Друзья</h2>
                </div>

                <Search
                    placeholder="Введите имя игрока..."
                    searchValue={searchTerm}
                    setSearchValue={setSearchTerm}
                    onSearch={handleSearchUser}
                />

                <AddFriendButton />

                <ul>
                    {searchFriends().map((friend) => (
                        <li key={friend.id}>
                            <FriendBlock
                                name={
                                    friend.player_id1 === user.id
                                        ? friend.player2.name
                                        : friend.player1.name
                                }
                                stats={friend.stats}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.pendingGroup}>
                <h2>Входящие запросы на дружбу</h2>
                <ul>
                    {pendingFriends.length === 0 ? (
                        <li style={{ padding: "15px" }}>Запросы отсутствуют</li>
                    ) : (
                        pendingFriends.map((request) => (
                            <li key={request.id}>
                                <PendingFriend
                                    name={request.player.name}
                                    requestId={request.id}
                                    onAccept={handleAccept}
                                    onReject={handleReject}
                                />
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
