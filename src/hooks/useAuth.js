import { useState, useEffect } from 'react';
import { supabase } from '../../src/utils/supabaseClient';

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Подписка на изменения состояния аутентификации
        const { data: authListener, error } = supabase.auth.onAuthStateChange((event, session) => {
            setCurrentUser(session?.user || null);
        });

        if (error) {
            console.error('Error setting up auth listener:', error);
            return;
        }

        // Возвращаем функцию для отмены подписки
        return () => {
            if (authListener?.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, []);
    
    return currentUser;
}
