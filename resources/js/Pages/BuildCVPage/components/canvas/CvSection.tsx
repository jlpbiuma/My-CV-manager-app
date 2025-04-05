"use client"

import { useDrag } from "react-dnd"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, GripVertical } from "lucide-react"

export function CvSection({
    section,
    sections,
    moveSection,
    removeSection,
    sectionMap,
    cvItems,
}: {
    section: any
    sections: any
    moveSection: (id: number, x: number, y: number) => void
    removeSection: (id: number) => void
    sectionMap: any
    cvItems: Array<{ type: string; itemId: number }>
}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "SECTION",
        item: { id: section.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    // Check if an item is already in the canvas
    const isItemInCanvas = (type: string, itemId: number) => {
        return cvItems.some((item) => item.type === type && item.itemId === itemId)
    }

    const getSectionContent = () => {
        const SectionComponent = sectionMap[section.type]?.component
        if (!SectionComponent) return <div>{section.type} section</div>

        // Map section types to their corresponding data
        const sectionProps = {}

        switch (section.type) {
            case "estudios":
                sectionProps["estudios"] = sections.estudios
                break
            case "proyectos":
            case "projects":
                sectionProps["proyectos"] = sections.proyectos
                break
            case "webs":
                sectionProps["webs"] = sections.webs
                break
            case "certifications":
                sectionProps["certifications"] = sections.certifications
                break
            case "experience":
            case "experiencias":
                sectionProps["experiences"] = sections.experiences
                break
            case "idioma":
            case "languages":
                sectionProps["idioma"] = sections.idioma
                break
            case "education":
            case "formacion":
                sectionProps["formacion"] = sections.formacion
                break
            case "skills":
                sectionProps["skills"] = sections.skills || []
                break
            case "personal":
                sectionProps["personal"] = sections.personal || {}
                break
        }

        return <SectionComponent {...sectionProps} />
    }

    return (
        <Card
            style={{
                position: "absolute",
                left: `${section.position.x}px`,
                top: `${section.position.y}px`,
                opacity: isDragging ? 0.5 : 1,
                width: "500px",
            }}
            className="shadow-md border border-gray-200 transition-shadow hover:shadow-lg"
        >
            <CardHeader
                className="p-3 flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50 cursor-move"
                ref={drag}
            >
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-gray-500" />
                    {sectionMap[section.type]?.icon} {sectionMap[section.type]?.name}
                </CardTitle>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 rounded-full"
                    onClick={() => removeSection(section.id)}
                >
                    <X className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="p-4">{getSectionContent()}</CardContent>
        </Card>
    )
}

