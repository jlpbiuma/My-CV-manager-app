export interface Formacion {
    id: number;
    user_id: number;
    cv_id: number;
    institution: string;
    degree: string;
    description?: string;
    start_date: string; // ISO date string
    end_date?: string; // ISO date string or null
}