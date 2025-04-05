// resources/js/components/RecentActivity.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Edit, Plus, FileText } from "lucide-react";

interface Activity {
    id: number;
    type: 'update' | 'create' | 'download';
    description: string;
    timestamp: string;
}

interface RecentActivityProps {
    mockActivities: Activity[];
}

const RecentActivity = ({ mockActivities }: RecentActivityProps) => {
    return (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockActivities.map(activity => (
                            <div key={activity.id} className="flex items-center gap-4 rounded-lg border p-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                                    {activity.type === 'update' && <Edit className="h-5 w-5 text-teal-600" />}
                                    {activity.type === 'create' && <Plus className="h-5 w-5 text-teal-600" />}
                                    {activity.type === 'download' && <FileText className="h-5 w-5 text-teal-600" />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{activity.description}</p>
                                    <p className="text-xs text-slate-500">{activity.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RecentActivity;