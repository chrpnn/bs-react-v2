import { useState, useEffect } from 'react';
import { supabase } from '../../src/utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Подписка на изменения состояния аутентификации
        const { data: authListener, error } = supabase.auth.onAuthStateChange((event, session) => {
            setCurrentUser(session?.user || null);
            if (session?.user) {
                navigate('/'); // Перенаправление на домашнюю страницу
            } else {
                navigate('/login'); // Перенаправление на страницу входа
            }
        });

        if (error) {
            console.error('Ошибка при настройке слушателя аутентификации:', error);
            return;
        }

        // Возвращаем функцию для отмены подписки
        return () => {
            if (authListener?.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, [navigate]);

    return currentUser;
}