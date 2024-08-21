import { supabase } from "./supabaseClient";

// Функция для добавления нового пользователя в таблицу users
export const signUpUser = async (email, password, name) => {
    // Регистрация пользователя в Supabase Auth
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    // Проверка на ошибку
    if (error) {
        console.error("Ошибка при регистрации:", error.message);
        throw new Error(error.message);
    }

    // Логирование успешного создания пользователя
    console.log("Пользователь успешно зарегистрирован:", data);

    // Добавление данных о пользователе в таблицу users
    const { user } = data;
    const { error: insertError } = await supabase
        .from('player')
        .insert([{ id: user.id, email, name }]);

    if (insertError) {
        console.error("Ошибка при добавлении пользователя в таблицу:", insertError.message);
        throw new Error(insertError.message);
    }

    // Возвращаем данные о новом пользователе
    return data;
};



