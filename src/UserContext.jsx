import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";

// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";

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
                    setUser(session.user); // Обновление пользователя в состоянии
                } else {
                    setUser(null); // Если сессия отсутствует, пользователь не авторизован
                }
            }
        );

        // Очистка подписки при размонтировании компонента
        return () => {
            authListener.unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
