import React from "react";
import { CvItem } from "@/Pages/BuildCVPage/components/canvas/CvItem";
import { Card, CardContent } from "@/components/ui/card";
import type { CvFull } from "@/types/cv_full";
import { CV_TEMPLATES } from "@/Pages/BuildCVPage/constants/CvTemplates";

export function CvCanvas({
    cvItems,
    sections,
    moveItem,
    removeItem,
    sectionMap,
    selectedTemplate,
}: {
    cvItems: Array<{
        id: string;
        type: string;
        itemId: number;
        position: { x: number; y: number };
    }>;
    sections: CvFull["sections"];
    moveItem: (id: string, x: number, y: number) => void;
    removeItem: (id: string) => void;
    sectionMap: Record<string, any>;
    selectedTemplate: keyof typeof CV_TEMPLATES;
}) {
    const template = CV_TEMPLATES[selectedTemplate];
    const canvasRef = React.useRef<HTMLDivElement>(null);

    const handleDragStop = (id: string, x: number, y: number) => {
        // Keep items within canvas boundaries
        if (canvasRef.current) {
            const canvasRect = canvasRef.current.getBoundingClientRect();
            const boundedX = Math.max(0, Math.min(x, canvasRect.width - 400)); // assuming item width is 400px
            const boundedY = Math.max(0, y);
            moveItem(id, boundedX, boundedY);
        } else {
            moveItem(id, x, y);
        }
    };

    return (
        <Card className="bg-white shadow-lg">
            <CardContent className="p-0">
                <div
                    ref={canvasRef}
                    id="cv-preview"
                    className="cv-template relative min-h-[800px] border-2 border-dashed border-gray-200 rounded-md overflow-hidden"
                >
                    {cvItems.map((item) => {
                        // For initial placement, use template position if item doesn't have its own position yet
                        const itemPosition =
                            item.position.x === 0 && item.position.y === 0
                                ? template.layout.find((layoutItem) => layoutItem.type === item.type)?.position || { x: 100, y: 100 }
                                : item.position;

                        return (
                            <CvItem
                                key={item.id}
                                item={{ ...item, position: itemPosition }}
                                sections={sections}
                                onDragStop={handleDragStop}
                                removeItem={removeItem}
                                sectionMap={sectionMap}
                            />
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}