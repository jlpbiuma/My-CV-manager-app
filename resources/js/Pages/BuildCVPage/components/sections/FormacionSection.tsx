import type { Formacion } from "@/types/formacion"

export default function FormacionSection({ formacion = [] }: { formacion?: Formacion[] }) {
    if (!formacion || formacion.length === 0) {
        return <div className="text-center py-4 text-gray-500">No education data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Education</h2>

            {formacion.map((edu) => (
                <div key={edu.id} className="mb-3 pb-3 border-b last:border-0">
                    <div className="flex justify-between items-start">
                        <h3 className="font-medium">{edu.degree}</h3>
                        <span className="text-sm text-gray-500">
                            {formatDate(edu.start_date)} - {edu.end_date ? formatDate(edu.end_date) : "Present"}
                        </span>
                    </div>
                    <p className="text-sm">{edu.institution}</p>
                    {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
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

