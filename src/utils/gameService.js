import { supabase } from "./supabaseClient";

// Функциия для загрузки списка игр
export const fetchGames = async () => {
    try {
        // Получение документов из коллекции "boardgames"
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
        // Добавляем новую запись в таблицу PlayerMatch
        const { data, error } = await supabase.from("playerMatch").insert({
            id_player: playerId, // Ссылка на игрока
            id_game: gameId, // Ссылка на игру
            game_name: gameResult.gameName, // Название игры
            date: gameResult.date, // Дата записи результата
            result: gameResult.result, // Результат игры для данного игрока
        });

        if (error) throw error;

        return true;
    } catch (error) {
        console.error("Error adding game result:", error);
        return false;
    }
};

// Функция для получения количества записей в таблице playerMatch (подсчет сыгранных матчей для игрока)
export const getPlayerMatchCount = async () => {
    try {
        // Получаем общее количество матчей
        const { count: totalCount, error: totalCountError } = await supabase
            .from("playerMatch")
            .select("*", { count: "exact" });

        if (totalCountError) {
            throw totalCountError;
        }

        // Получаем количество побед
        const { count: winCount, error: winCountError } = await supabase
            .from("playerMatch")
            .select("*", { count: "exact" })
            .eq("result", "win");

        if (winCountError) {
            throw winCountError;
        }

        console.log({ totalCount, winCount });
        return { totalCount, winCount };
    } catch (error) {
        console.error("Error fetching game stats:", error);
        throw error;
    }
};
