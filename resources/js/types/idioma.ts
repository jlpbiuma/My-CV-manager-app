export interface Idioma {
    id: number;
    user_id: number;
    cv_id: number;
    language: string; // Language name
    proficiency: string; // Proficiency level (e.g., Beginner, Intermediate, Advanced)
    created_at?: string; // ISO date string
    updated_at?: string; // ISO date string
}