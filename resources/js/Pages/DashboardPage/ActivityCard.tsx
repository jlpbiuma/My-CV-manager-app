import { Edit, Plus, FileText } from "lucide-react";
import { Activity } from "@/types/activity"; // Adjust the import path as necessary

const ActivityTypeMapperIcon = {
    delete: <Edit className="h-5 w-5 text-red-600" />,
    update: <Edit className="h-5 w-5 text-teal-600" />,
    create: <Plus className="h-5 w-5 text-blue-600" />,
    download: <FileText className="h-5 w-5 text-teal-600" />,
}

const ActivityCard = ({
    id,
    type,
    description,
    timestamp,
}: Activity) => {
    const renderActiviteType = (type: string) => {
        if (type in ActivityTypeMapperIcon) {
            return ActivityTypeMapperIcon[type as keyof typeof ActivityTypeMapperIcon];
        }
        return <FileText className="h-5 w-5 text-gray-600" />;
    };
    return (
        <div key={id} className="flex items-center gap-4 rounded-lg border p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                {renderActiviteType(type)}
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium">{description}</p>
                <p className="text-xs text-slate-500">{timestamp}</p>
            </div>
        </div>
    )
}

export default ActivityCard;