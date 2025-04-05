export interface CV {
    id: number;
    user_id: number;
    name: string;
    language: string;
    preview_image: string;
    last_updated: string;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
}