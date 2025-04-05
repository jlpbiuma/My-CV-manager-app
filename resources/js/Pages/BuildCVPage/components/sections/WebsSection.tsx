import type { Web } from "@/types/web"

export default function WebsSection({ webs = [] }: { webs?: Web[] }) {
    if (!webs || webs.length === 0) {
        return <div className="text-center py-4 text-gray-500">No websites data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Websites</h2>

            <div className="space-y-2">
                {webs.map((web) => (
                    <div key={web.id} className="flex items-center gap-2">
                        <span className="text-blue-500">🔗</span>
                        <span className="font-medium">{web.type}:</span>
                        <a href={web.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {web.url}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

