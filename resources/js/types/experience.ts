export interface Experience {
    id: number;
    user_id: number;
    cv_id: number;
    title: string;
    company: string;
    description?: string | null;
    start_date: string; // ISO date string
    end_date?: string | null; // ISO date string or null
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}