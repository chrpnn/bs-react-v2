import { useState, useEffect } from 'react';
import { supabase } from '../../src/utils/supabaseClient';

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Подписка на изменения состояния аутентификации
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setCurrentUser(session?.user || null);
        });


        // Возвращаем функцию для отмены подписки
        return () => {
            authListener?.unsubscribe();
        };
    }, []);
    
    return currentUser;

    
}

