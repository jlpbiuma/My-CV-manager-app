export interface Proyect {
    id: number;
    user_id: number; // ID of the user who created the project
    cv_id: number; // ID of the CV associated with the project
    title: string; // Project title
    description?: string; // Project description (optional)
    technologies?: string; // Technologies used (optional)
    start_date: string; // Start date in YYYY-MM-DD format
    end_date?: string; // End date in YYYY-MM-DD format (optional for ongoing projects)
    created_at: string; // Timestamp of when the project was created
    updated_at: string; // Timestamp of when the project was last updated
}