"use client"

import { useDrag } from "react-dnd"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, GripVertical } from "lucide-react"
import type { CvFull } from "@/types/cv_full"
import type { Experience } from "@/types/experience"
import type { Formacion } from "@/types/formacion"
import type { Estudio } from "@/types/estudio"
import type { Proyect } from "@/types/proyect"
import type { Certification } from "@/types/certification"
import type { Idioma } from "@/types/idioma"
import type { Web } from "@/types/web"
import { SECTION_MAP } from "@/Pages/BuildCVPage/constants/SectionsMapper"
import formatDate from "@/Pages/BuildCVPage/utils/formatDate"

export function CvItem({
    item,
    sections,
    moveItem,
    removeItem,
    sectionMap,
}: {
    item: {
        id: string
        type: string
        itemId: number
        position: { x: number; y: number }
    }
    sections: CvFull["sections"]
    moveItem: (id: string, x: number, y: number) => void
    removeItem: (id: string) => void
    sectionMap: Record<string, any>
}) {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "CV_ITEM",
        item: {
            id: item.id,
            position: item.position,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    // Get the actual data for this item
    const getItemData = () => {
        const sectionItems = SECTION_MAP[item.type]?.getItems(sections) || []
        return sectionItems.find((i) => i.id === item.itemId) || {}
    }

    const itemData = getItemData()

    // Render the appropriate component based on the item type
    const renderItemContent = () => {
        switch (item.type) {
            case "experiencias":
                return renderExperience(itemData as Experience)
            case "formaciones":
                return renderFormacion(itemData as Formacion)
            case "estudios":
                return renderEstudio(itemData as Estudio)
            case "proyectos":
                return renderProyecto(itemData as Proyect)
            case "certificaciones":
                return renderCertification(itemData as Certification)
            case "idiomas":
                return renderIdioma(itemData as Idioma)
            case "webs":
                return renderWeb(itemData as Web)
            default:
                return <div>Unknown item type</div>
        }
    }

    return (
        <div
            ref={preview}
            style={{
                position: "absolute",
                left: `${item.position.x}px`,
                top: `${item.position.y}px`,
                opacity: isDragging ? 0.5 : 1,
                width: "400px",
                zIndex: isDragging ? 1000 : 1,
            }}
            className="transition-shadow"
        >
            <Card className="shadow-md border border-gray-200 hover:shadow-lg">
                <CardHeader
                    className="p-3 flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50 cursor-move"
                    ref={drag}
                >
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-gray-500" />
                        {sectionMap[item.type]?.icon} {SECTION_MAP[item.type]?.itemTitle(itemData)}
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full hover:bg-red-50 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="p-4 bg-white">{renderItemContent()}</CardContent>
            </Card>
        </div>
    )
}

// Render functions remain the same as in your original code
function renderExperience(data: Experience) {
    return (
        <div>
            <div className="flex justify-between items-start">
                <h3 className="font-medium">{data.title || "Position"}</h3>
                <span className="text-sm text-gray-500">
                    {formatDate(data.start_date)} - {data.end_date ? formatDate(data.end_date) : "Present"}
                </span>
            </div>
            <p className="text-sm">{data.company || "Company"}</p>
            {data.description && <p className="text-sm mt-1">{data.description}</p>}
        </div>
    )
}

function renderFormacion(data: Formacion) {
    return (
        <div>
            <div className="flex justify-between items-start">
                <h3 className="font-medium">{data.degree || "Degree"}</h3>
                <span className="text-sm text-gray-500">
                    {formatDate(data.start_date)} - {data.end_date ? formatDate(data.end_date) : "Present"}
                </span>
            </div>
            <p className="text-sm">{data.institution || "Institution"}</p>
            {data.description && <p className="text-sm mt-1">{data.description}</p>}
        </div>
    )
}

function renderEstudio(data: Estudio) {
    return (
        <div>
            <div className="flex justify-between items-start">
                <h3 className="font-medium">{data.degree || "Degree"}</h3>
                <span className="text-sm text-gray-500">
                    {formatDate(data.start_date)} - {data.end_date ? formatDate(data.end_date) : "Present"}
                </span>
            </div>
            <p className="text-sm">{data.institution || "Institution"}</p>
            {data.description && <p className="text-sm mt-1">{data.description}</p>}
        </div>
    )
}

function renderProyecto(data: Proyect) {
    return (
        <div>
            <h3 className="font-medium">{data.title || "Project"}</h3>
            <div className="flex justify-between items-start">
                <span className="text-sm text-gray-500">
                    {formatDate(data.start_date)} - {data.end_date ? formatDate(data.end_date) : "Present"}
                </span>
            </div>
            {data.technologies && (
                <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Technologies:</span> {data.technologies}
                </p>
            )}
            {data.description && <p className="text-sm mt-1">{data.description}</p>}
        </div>
    )
}

function renderCertification(data: Certification) {
    return (
        <div>
            <h3 className="font-medium">{data.name || "Certification"}</h3>
            <p className="text-sm">{data.issuing_organization || "Issuing Organization"}</p>
            <div className="flex justify-between items-start mt-1">
                <span className="text-sm text-gray-500">Issued: {formatDate(data.issue_date)}</span>
                {data.expiration_date && (
                    <span className="text-sm text-gray-500">Expires: {formatDate(data.expiration_date)}</span>
                )}
            </div>
            {data.credential_id && (
                <p className="text-sm mt-1">
                    <span className="font-medium">Credential ID:</span> {data.credential_id}
                </p>
            )}
            {data.description && <p className="text-sm mt-1">{data.description}</p>}
        </div>
    )
}

function renderIdioma(data: Idioma) {
    return (
        <div className="flex justify-between items-center">
            <span className="font-medium">{data.language || "Language"}</span>
            <span className="text-sm">{data.proficiency || "Proficiency"}</span>
        </div>
    )
}

function renderWeb(data: Web) {
    return (
        <div>
            <div className="flex items-center gap-2">
                <span className="font-medium">{data.type || "Website"}</span>
            </div>
            <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                {data.url}
            </a>
        </div>
    )
}