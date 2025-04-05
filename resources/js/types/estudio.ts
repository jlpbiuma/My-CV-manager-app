export interface Estudio {
    id: number; // Unique identifier for the education record
    user_id: number; // ID of the user who created the record
    cv_id: number; // ID of the CV associated with the education
    institution: string; // Name of the institution
    degree: string; // Degree or certification obtained
    description?: string; // Description of the education (optional)
    start_date: string; // Start date in YYYY-MM-DD format
    end_date?: string; // End date in YYYY-MM-DD format (optional for ongoing education)
    created_at: string; // Timestamp of when the record was created
    updated_at: string; // Timestamp of when the record was last updated
}