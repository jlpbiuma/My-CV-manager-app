export interface CV {
    id: number;
    user_id: number;
    name: string;
    language: string;
    preview_image: string;
    last_updated: string;
    status: 'active' | 'inactive';
    resume: string | null;
    image_url: string | null;
    template: string | null;
    url: string | null;
    created_at: string;
    updated_at: string;
}