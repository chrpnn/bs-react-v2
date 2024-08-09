import { useState, useEffect } from 'react';
import { supabase } from '../../src/utils/supabaseClient';

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser);

    useEffect(() => {
        // Подписка на изменения состояния аутентификации
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setCurrentUser(session?.user || null);
        });
        console.log(authListener);
        // return;

        // Возвращаем функцию для отмены подписки
        return () => {
            authListener?.unsubscribe();
        };
    }, []);
    
    return currentUser;

    
}

