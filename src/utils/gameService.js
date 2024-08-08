import { supabase } from "./supabaseClient";

// Функциия для загрузки списка игр
export const fetchGames = async () => {
    try {
        // Получение документов из коллекции "boardgames"
        const { data, error } = await supabase.from("boardgames").select("*");
        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Ошибка получения коллекции игр:", error);
        return [];
    }
};

// Функция для добавления нового результата игры
export const addGameResult = async (userId, newGameResult) => {
    try {
        // Сначала получаем текущие игры пользователя
        const { data: userGames, error: fetchError } = await supabase
            .from("users")
            .select("playedGames")
            .eq("id", userId)
            .single();
        // single() - этот метод указывает, что мы ожидаем получить одну единственную запись
        console.log(userGames);
        console.log(newGameResult);

        if (fetchError) throw fetchError;
        
        // Обновляем массив игр новым результатом
        const updatedGames = userGames?.playedGames
            ? [...userGames.playedGames, newGameResult]
            : [newGameResult];
        // [...] (оператор расширения) — разворачивает (распаковывает) элементы массива в новый массив.
        // создается новый массив, который включает все элементы из массива userGames.games и добавляет в конец элемент newGameResult.

        // Обновляем запись пользователя в базе данных
        const { error: updateError } = await supabase
            .from("users")
            .update({ playedGames: updatedGames })
            .eq("id", userId);
        // Результат выполнения запроса деструктурируется, и если произошла ошибка, она сохраняется в переменную updateError

        if (updateError) throw updateError;

        return true;
    } catch (error) {
        console.error("Error adding game result:", error);
        return false;
    }
};
