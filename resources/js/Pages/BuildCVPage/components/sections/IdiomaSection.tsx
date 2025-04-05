import type { Idioma } from "@/types/idioma"

export default function IdiomaSection({ idioma = [] }: { idioma?: Idioma[] }) {
    if (!idioma || idioma.length === 0) {
        return <div className="text-center py-4 text-gray-500">No language data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Languages</h2>

            <div className="space-y-2">
                {idioma.map((lang) => (
                    <div key={lang.id} className="flex justify-between items-center">
                        <span className="font-medium">{lang.language}</span>
                        <span className="text-sm">{lang.proficiency}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

