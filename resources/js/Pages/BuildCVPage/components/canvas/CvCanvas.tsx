import { useDrop } from "react-dnd"
import { CvItem } from "@/Pages/BuildCVPage/components/canvas/CvItem"
import { Card, CardContent } from "@/components/ui/card"
import type { CvFull } from "@/types/cv_full"
import { CV_TEMPLATES } from "@/Pages/BuildCVPage/constants/CvTemplates"

export function CvCanvas({
    cvItems,
    sections,
    moveItem,
    removeItem,
    sectionMap,
    selectedTemplate,
}: {
    cvItems: Array<{
        id: string
        type: string
        itemId: number
        position: { x: number; y: number }
    }>
    sections: CvFull["sections"]
    moveItem: (id: string, x: number, y: number) => void
    removeItem: (id: string) => void
    sectionMap: Record<string, any>
    selectedTemplate: keyof typeof CV_TEMPLATES
}) {
    const [, drop] = useDrop(() => ({
        accept: ["CV_ITEM"],
        drop: (item: any, monitor) => {
            if (item.type && item.itemId) {
                // This is a new item being added - handled elsewhere
                return
            }

            // Handle moving existing items
            const delta = monitor.getDifferenceFromInitialOffset()
            if (!delta || !item.id) return

            const left = Math.round(item.position?.x + delta.x || 100)
            const top = Math.round(item.position?.y + delta.y || 100)

            // Ensure items don't go off-canvas
            const boundedLeft = Math.max(0, Math.min(left, 800 - 400)) // 400px is the width of the card
            const boundedTop = Math.max(0, top)

            moveItem(item.id, boundedLeft, boundedTop)
        },
    }))

    const template = CV_TEMPLATES[selectedTemplate]

    // Use the item's actual position rather than the template position
    // This allows items to be moved freely after initial placement
    return (
        <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
                <div
                    ref={drop}
                    id="cv-preview"
                    className="cv-template relative min-h-[800px] border-2 border-dashed border-gray-200 rounded-md overflow-hidden"
                >
                    {cvItems.map((item) => {
                        // For initial placement, use template position if item doesn't have its own position yet
                        const itemPosition = item.position.x === 0 && item.position.y === 0
                            ? template.layout.find((layoutItem) => layoutItem.type === item.type)?.position || { x: 100, y: 100 }
                            : item.position;

                        return (
                            <CvItem
                                key={item.id}
                                item={{ ...item, position: itemPosition }}
                                sections={sections}
                                moveItem={moveItem}
                                removeItem={removeItem}
                                sectionMap={sectionMap}
                            />
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}