export interface Web {
    id: number; // Unique identifier for the web record
    user_id: number; // ID of the user who created the record
    cv_id: number; // ID of the CV associated with the web
    type: string; // Type of website (e.g., LinkedIn, GitHub)
    url: string; // URL of the website
    created_at: string; // Timestamp of when the record was created
    updated_at: string; // Timestamp of when the record was last updated
}
