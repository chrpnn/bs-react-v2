import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "./utils/supabaseClient";
import "./scss/app.scss";

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        // Проверяем, запущено ли приложение в Telegram
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();

            const tgUser = window.Telegram.WebApp.initDataUnsafe.user;

            if (tgUser) {
                console.log("Данные пользователя Telegram:", tgUser);
                signInWithTelegram(tgUser);
            }
        }
    }, []);

    const signInWithTelegram = async (tgUser: TelegramWebAppUser) => {
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email: `${tgUser.id}@telegram.com`,
                options: {
                    data: {
                        username: tgUser.username,
                        first_name: tgUser.first_name,
                        last_name: tgUser.last_name,
                        photo_url: tgUser.photo_url,
                    },
                },
            });

            if (error) {
                console.error('Ошибка при входе в Supabase:', error.message);
            } else {
                console.log('Пользователь успешно вошел через Telegram:', data);
                navigate('/'); // Перенаправление на домашнюю страницу
            }
        } catch (error) {
            console.error('Ошибка при аутентификации через Telegram:', error);
        }
    };

    return (
        <div className="main">
            <Outlet />
        </div>
    );
}
