import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CvFull } from "@/types/cv_full"
import { SECTION_MAP, type SectionType } from "@/Pages/BuildCVPage/constants/SectionsMapper" // Update with the correct path
import { CV_TEMPLATES } from "@/Pages/BuildCVPage/constants/CvTemplates"

export function SectionsSidebar({
    sectionMap,
    sections,
    onAddItem,
    selectedTemplate,
}: {
    sectionMap: Record<string, any>
    sections: CvFull["sections"]
    onAddItem: (type: string, itemId: number) => void
    selectedTemplate: keyof typeof CV_TEMPLATES
}) {
    const template = CV_TEMPLATES[selectedTemplate]

    return (
        <div className="w-72 bg-white shadow-md flex flex-col h-full">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">CV Sections</h2>
                <p className="text-sm text-gray-500">Drag items to the CV</p>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-2">
                    {template.layout.map((layoutItem) => {
                        const sectionType = layoutItem.type
                        const section = sectionMap[sectionType]
                        if (!section) return null

                        return (
                            <div key={sectionType} className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    {section.icon} {section.name}
                                </h3>
                                <div className="space-y-2">
                                    {SECTION_MAP[sectionType as SectionType]?.getItems(sections).map((item) => (
                                        <Card
                                            key={item.id}
                                            className="cursor-move hover:bg-gray-50"
                                            onClick={() => onAddItem(sectionType, item.id)}
                                        >
                                            <CardContent className="p-3 text-sm">
                                                {SECTION_MAP[sectionType as SectionType]?.itemTitle(item)}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ScrollArea>
        </div>
    )
}