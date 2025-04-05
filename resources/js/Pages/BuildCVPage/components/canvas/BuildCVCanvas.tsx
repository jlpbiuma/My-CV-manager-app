import { useDrop } from "react-dnd"
import { CvItem } from "@/Pages/BuildCVPage/components/CvItem"
import { Card, CardContent } from "@/components/ui/card"
import type { CvFull } from "@/types/cv_full"

export function CvCanvas({
    cvItems,
    sections,
    moveItem,
    removeItem,
    sectionMap,
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
}) {
    const [, drop] = useDrop(() => ({
        accept: ["CV_ITEM"],
        drop: (item: any, monitor) => {
            if (item.type && item.itemId) {
                // This is a new item being added - handled in the DraggableItem component
                return
            }

            // Handle moving existing items
            const delta = monitor.getDifferenceFromInitialOffset()
            if (!delta || !item.id) return

            const left = Math.round(item.position?.x + delta.x || 100)
            const top = Math.round(item.position?.y + delta.y || 100)
            moveItem(item.id, left, top)
        },
    }))

    return (
        <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
                <div
                    ref={drop}
                    id="cv-preview"
                    className="cv-template relative min-h-[800px] border-2 border-dashed border-gray-200 rounded-md"
                >
                    {cvItems.map((item) => (
                        <CvItem
                            key={item.id}
                            item={item}
                            sections={sections}
                            moveItem={moveItem}
                            removeItem={removeItem}
                            sectionMap={sectionMap}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

