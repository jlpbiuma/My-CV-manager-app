export interface Certification {
    id: number;
    user_id: number;
    cv_id: number;
    name: string;
    issuing_organization: string;
    issue_date: string; // ISO date string
    expiration_date: string | null; // ISO date string or null
    credential_id: string | null; // optional
    description: string | null; // optional
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}