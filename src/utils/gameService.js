import { supabase } from "./supabaseClient";

// Функция для загрузки списка игр
export const fetchGames = async () => {
    try {
        const { data, error } = await supabase.from("game").select("*");
        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Ошибка получения коллекции игр:", error);
        return [];
    }
};

// Функция для добавления нового результата игры
export const addGameResult = async (playerId, gameId, gameResult) => {
    try {
        const { data, error } = await supabase.from("playerMatch").insert({
            id_player: playerId,
            id_game: gameId,
            game_name: gameResult.gameName,
            date: gameResult.date,
            result: gameResult.result,
        });

        if (error) throw error;

        // Обновляем статистику игрока
        await updatePlayerStats(playerId, gameResult.result === "win");
        await updatePlayerGameStats(playerId, gameId, gameResult.result === "win");

        return true;
    } catch (error) {
        console.error("Error adding game result:", error);
        return false;
    }
};

// Функция для обновления общей статистики игрока
const updatePlayerStats = async (playerId, isWin) => {
    try {
        // Получаем текущую статистику игрока
        const { data, error } = await supabase
            .from("player_stats")
            .select("games_played, wins")
            .eq("player_id", playerId)
            .maybeSingle();

        if (error) throw error;

        const gamesPlayed = data?.games_played || 0;
        const wins = data?.wins || 0;

        // Обновляем статистику
        const updatedStats = {
            player_id: playerId,
            games_played: gamesPlayed + 1,
            wins: isWin ? wins + 1 : wins,
        };

        // Используем upsert с onConflict, чтобы избежать дублирования записей
        const { error: updateError } = await supabase
            .from("player_stats")
            .upsert(updatedStats, { onConflict: ['player_id'] });

        if (updateError) throw updateError;
    } catch (error) {
        console.error("Ошибка обновления общей статистики игрока:", error);
    }
};

// Функция для обновления статистики игрока по конкретной игре
const updatePlayerGameStats = async (playerId, gameId, isWin) => {
    try {
        // Получаем текущую статистику игрока по игре
        const { data, error } = await supabase
            .from("player_game_stats")
            .select("games_played, wins")
            .eq("player_id", playerId)
            .eq("game_id", gameId)
            .maybeSingle();

        if (error) throw error;

        const gamesPlayed = data?.games_played || 0;
        const wins = data?.wins || 0;

        // Обновляем статистику
        const updatedGameStats = {
            player_id: playerId,
            game_id: gameId,
            games_played: gamesPlayed + 1,
            wins: isWin ? wins + 1 : wins,
        };

        // Используем upsert с onConflict, чтобы избежать дублирования записей
        const { error: updateError } = await supabase
            .from("player_game_stats")
            .upsert(updatedGameStats, { onConflict: ['player_id', 'game_id'] });

        if (updateError) throw updateError;
    } catch (error) {
        console.error("Ошибка обновления статистики игрока по игре:", error);
    }
};

// Функция для получения количества записей в таблице playerMatch (подсчет сыгранных матчей для игрока)
// Функция для получения общей статистики игрока
export const fetchPlayerTotalStats = async (playerId) => {
    try {
        // Получаем статистику игрока из таблицы player_stats
        const { data, error } = await supabase
            .from("player_stats")
            .select("*")
            .eq("player_id", playerId);

        // Обработка ошибки
        if (error) {
            throw error;
        }

        // Если данных нет, возвращаем нулевые значения
        if (data.length === 0) {
            return {
                total_games_played: 0,
                total_wins: 0,
                total_win_rate: 0,
            };
        }

        // В случае наличия данных, используем первую запись (если их несколько)
        const stats = data[0];

        return {
            total_games_played: stats.games_played || 0,
            total_wins: stats.wins || 0,
            total_win_rate: stats.win_rate || 0,
        };
    } catch (error) {
        console.error("Error fetching player total stats:", error);
        return {
            total_games_played: 0,
            total_wins: 0,
            total_win_rate: 0,
        };
    }
};