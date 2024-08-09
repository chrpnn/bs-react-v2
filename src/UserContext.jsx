import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";

// Создаем контекст пользователя
const UserContext = createContext();

// хук для использования контекста
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    

    useEffect(() => {
        // Подписка на изменение состояния аутентификации
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session) {
                    setUser(session.user);
                    console.log(session.user) // Обновление пользователя в состоянии
                } else {
                    setUser(null); // Если сессия отсутствует, пользователь не авторизован
                }
            }
        );
        console.log(authListener);
        // Очистка подписки при размонтировании компонента
        return () => {
            authListener.unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
