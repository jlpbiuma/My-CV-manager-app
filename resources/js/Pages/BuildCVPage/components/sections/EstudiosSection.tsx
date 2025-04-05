import type { Estudio } from "@/types/estudio"

export default function EstudiosSection({ estudios = [] }: { estudios?: Estudio[] }) {
    if (!estudios || estudios.length === 0) {
        return <div className="text-center py-4 text-gray-500">No studies data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Studies</h2>

            {estudios.map((estudio) => (
                <div key={estudio.id} className="mb-3 pb-3 border-b last:border-0">
                    <div className="flex justify-between items-start">
                        <h3 className="font-medium">{estudio.degree}</h3>
                        <span className="text-sm text-gray-500">
                            {formatDate(estudio.start_date)} - {estudio.end_date ? formatDate(estudio.end_date) : "Present"}
                        </span>
                    </div>
                    <p className="text-sm">{estudio.institution}</p>
                    {estudio.description && <p className="text-sm mt-1">{estudio.description}</p>}
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

