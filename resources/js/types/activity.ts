export interface Activity {
    id: number;
    user_id: number;
    type: 'update' | 'download' | 'share';
    description: string;
    timestamp: string;
    created_at: string;
    updated_at: string;
}