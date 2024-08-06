import { createClient, SupabaseClient } from "@supabase/supabase-js";

// URL проекта Supabase и публичный анонимный ключ
const supabaseUrl: string = "https://eygqoynyqxevebjeqklk.supabase.co";
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Z3FveW55cXhldmViamVxa2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NDQ4MTIsImV4cCI6MjAzODUyMDgxMn0.uFvrsGolAA_K9WpyPeyGZHrhcV8z0ohGUTFB6Kjg1NE";

// Создаем и экспортируем клиент Supabase
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);