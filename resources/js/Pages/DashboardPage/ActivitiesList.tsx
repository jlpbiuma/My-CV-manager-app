// resources/js/components/RecentActivity.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity } from "@/types/activity"; // Adjust the import path as necessary
import ActivityCard from "@/Pages/DashboardPage/ActivityCard"; // Adjust the import path as necessary

interface ActivitiesListProps {
    activities: Activity[];
}

const ActivitiesList = ({ activities }: ActivitiesListProps) => {
    return (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {activities.length === 0 && (
                            <div className="text-center text-gray-500">
                                No recent activities found.
                            </div>
                        )}
                        {activities.length > 0 && activities.map(activity => (
                            <ActivityCard
                                key={activity.id}
                                {...activity}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};



export default ActivitiesList;