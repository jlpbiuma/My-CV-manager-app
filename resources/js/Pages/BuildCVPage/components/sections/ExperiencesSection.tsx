import type { Experience } from "@/types/experience"

export default function ExperiencesSection({ experiences = [] }: { experiences?: Experience[] }) {
    if (!experiences || experiences.length === 0) {
        return <div className="text-center py-4 text-gray-500">No experience data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Professional Experience</h2>

            {experiences.map((exp) => (
                <div key={exp.id} className="mb-3 pb-3 border-b last:border-0">
                    <div className="flex justify-between items-start">
                        <h3 className="font-medium">{exp.title}</h3>
                        <span className="text-sm text-gray-500">
                            {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : "Present"}
                        </span>
                    </div>
                    <p className="text-sm">{exp.company}</p>
                    {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
                </div>
            ))}
        </div>
    )
}

function formatDate(dateString: string) {
    if (!dateString) return ""

    try {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        })
    } catch (e) {
        return dateString
    }
}

