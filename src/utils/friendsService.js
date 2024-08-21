import { supabase } from "../utils/supabaseClient"; 
import { fetchPlayerTotalStats } from "../utils/gameService";

// Получение списка друзей
export const fetchFriends = async (userId) => {
    try {
        const { data, error } = await supabase
            .from("friends")
            .select(
                "id, player_id1, player_id2, status, player1:player_id1 (name), player2:player_id2 (name)"
            )
            .or(`player_id1.eq.${userId},player_id2.eq.${userId}`)
            .eq("status", "accepted");

        if (error) throw error;

        const friendsWithStats = await Promise.all(
            data.map(async (friend) => {
                const friendId = friend.player_id1 === userId ? friend.player_id2 : friend.player_id1;
                const stats = await fetchPlayerTotalStats(friendId);
                return { ...friend, stats };
            })
        );

        return friendsWithStats;
    } catch (error) {
        console.error("Error fetching friends:", error);
        return [];
    }
};

// Получение списка запросов в друзья
export const fetchPendingFriends = async (userId) => {
    try {
        const { data, error } = await supabase
            .from("friends")
            .select("id, player_id1, player_id2, status, player:player_id1 (name)")
            .eq("player_id2", userId)
            .eq("status", "pending");

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error fetching pending friends:", error);
        return [];
    }
};

// Поиск пользователя по имени
export const searchUser = async (searchTerm) => {
    try {
        const { data, error } = await supabase
            .from("player")
            .select("*")
            .eq("name", searchTerm)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error searching user:", error);
        return null;
    }
};

// Отправка запроса на дружбу
export const sendFriendRequest = async (userId, playerId) => {
    try {
        const { data, error } = await supabase
            .from("friends")
            .insert([{ player_id1: userId, player_id2: playerId, status: "pending" }]);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error sending friend request:", error);
        return null;
    }
};

// Принятие запроса на дружбу
export const acceptFriendRequest = async (requestId) => {
    try {
        const { data, error } = await supabase
            .from("friends")
            .update({ status: "accepted" })
            .eq("id", requestId);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error accepting friend request:", error);
        return null;
    }
};

// Отклонение запроса на дружбу
export const rejectFriendRequest = async (requestId) => {
    try {
        const { data, error } = await supabase
            .from("friends")
            .delete()
            .eq("id", requestId);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error rejecting friend request:", error);
        return null;
    }
};

// Удаление друга
export const removeFriend = async (friendId1, friendId2) => {
    try {
        const { data, error } = await supabase
            .from("friends")
            .delete()
            .or(
                `(player_id1.eq.${friendId1} AND player_id2.eq.${friendId2}), 
                (player_id1.eq.${friendId2} AND player_id2.eq.${friendId1})`
            );

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error removing friend:", error);
        return null;
    }
};
