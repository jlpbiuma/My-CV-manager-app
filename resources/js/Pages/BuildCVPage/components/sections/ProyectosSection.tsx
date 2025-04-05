import type { Proyect } from "@/types/proyect"

export default function ProyectosSection({ proyects = [] }: { proyects?: Proyect[] }) {
    if (!proyects || proyects.length === 0) {
        return <div className="text-center py-4 text-gray-500">No projects data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Projects</h2>

            {proyects.map((proyecto) => (
                <div key={proyecto.id} className="mb-3 pb-3 border-b last:border-0">
                    <h3 className="font-medium">{proyecto.title}</h3>
                    <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-500">
                            {formatDate(proyecto.start_date)} - {proyecto.end_date ? formatDate(proyecto.end_date) : "Present"}
                        </span>
                    </div>
                    {proyecto.technologies && (
                        <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Technologies:</span> {proyecto.technologies}
                        </p>
                    )}
                    {proyecto.description && <p className="text-sm mt-1">{proyecto.description}</p>}
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

