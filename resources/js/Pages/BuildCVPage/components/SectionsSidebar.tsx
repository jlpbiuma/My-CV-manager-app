import { useDrag } from "react-dnd"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CvFull } from "@/types/cv_full"
import { SECTION_MAP, type SectionType } from "@/Pages/BuildCVPage/constants/SectionsMapper" // Update with the correct path

export function SectionsSidebar({
    sectionMap,
    sections,
    onAddItem,
}: {
    sectionMap: Record<string, any>
    sections: CvFull["sections"]
    onAddItem: (type: string, itemId: number) => void
}) {
    return (
        <div className="w-72 bg-white shadow-md flex flex-col h-full">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">CV Sections</h2>
                <p className="text-sm text-gray-500">Drag items to the CV</p>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-2">
                    <Accordion type="multiple" defaultValue={Object.keys(sectionMap)}>
                        {Object.entries(sectionMap).map(([sectionType, section]) => (
                            <AccordionItem key={sectionType} value={sectionType}>
                                <AccordionTrigger className="py-2 px-3 hover:bg-gray-50 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <span>{section.icon}</span>
                                        <span>{section.name}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 mt-1 pl-2">
                                        {SECTION_MAP[sectionType as SectionType]?.getItems(sections).map((item) => (
                                            <DraggableItem
                                                key={item.id}
                                                sectionType={sectionType}
                                                item={item}
                                                onAdd={() => onAddItem(sectionType, item.id)}
                                            />
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </ScrollArea>
        </div>
    )
}

// Component for draggable items
function DraggableItem({
    sectionType,
    item,
    onAdd,
}: {
    sectionType: string
    item: any
    onAdd: () => void
}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "CV_ITEM",
        item: { type: sectionType, itemId: item.id },
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                onAdd()
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    // Generate a display title based on the section type
    const getItemTitle = () => {
        switch (sectionType) {
            case "experiencias":
                return `${item.title} at ${item.company}`
            case "formaciones":
                return `${item.degree} at ${item.institution}`
            case "estudios":
                return `${item.degree} at ${item.institution}`
            case "proyectos":
                return item.title
            case "certificaciones":
                return item.name
            case "idiomas":
                return item.language
            case "webs":
                return item.type
            default:
                return "Item"
        }
    }

    return (
        <Card
            ref={drag}
            className={`cursor-move transition-all ${isDragging ? "opacity-50 bg-gray-100" : "hover:bg-gray-50 hover:shadow"
                }`}
        >
            <CardContent className="p-3 text-sm">{getItemTitle()}</CardContent>
        </Card>
    )
}