import CVCard from "./CVCard"
import type { CV } from "@/types/cv" // Adjust the import path as necessary

interface CVListProps {
    filteredCVs: CV[];
}

const CVList = ({ filteredCVs }: CVListProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCVs.map((cv) => (
                <CVCard key={cv.id} {...cv} />
            ))}
        </div>
    )
}

export default CVList