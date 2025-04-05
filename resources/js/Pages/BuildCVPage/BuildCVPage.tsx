"use client"

import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import html2canvas from "html2canvas"
import axios from "axios"
import { CvCanvas } from "@/Pages/BuildCVPage/components/canvas/CvCanvas"
import { SectionsSidebar } from "@/Pages/BuildCVPage/components/SectionsSidebar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import type { CvFull } from "@/types/cv_full"
import { SECTION_MAP } from "@/Pages/BuildCVPage/constants/SectionsMapper"
import { CV_TEMPLATES } from "@/Pages/BuildCVPage/constants/CvTemplates"

export default function BuildCVPage({ cv, sections }: CvFull) {
    console.log(sections)
    const [cvItems, setCvItems] = useState<
        Array<{
            id: string
            type: string
            itemId: number
            position: { x: number; y: number }
        }>
    >([])

    const [selectedTemplate, setSelectedTemplate] = useState<keyof typeof CV_TEMPLATES>("CREATIVE")

    const moveItem = (id: string, x: number, y: number) => {
        setCvItems((prev) => prev.map((item) => (item.id === id ? { ...item, position: { x, y } } : item)))
    }

    const addItem = (type: string, itemId: number) => {
        // Create a unique ID for this canvas item
        const newId = `${type}-${itemId}-${Date.now()}`

        setCvItems((prev) => [
            ...prev,
            {
                id: newId,
                type,
                itemId,
                position: { x: 100, y: 100 + prev.length * 50 },
            },
        ])
    }

    const removeItem = (id: string) => {
        setCvItems((prev) => prev.filter((item) => item.id !== id))
    }

    const generatePdf = async () => {
        const cvElement = document.getElementById("cv-preview")
        if (!cvElement) return

        const canvas = await html2canvas(cvElement, {
            scale: 2,
            logging: false,
            useCORS: true,
        })

        // Convert to blob and send to backend
        canvas.toBlob(async (blob) => {
            if (!blob) return

            const formData = new FormData()
            formData.append("pdf", blob, "my_cv.pdf")
            formData.append("cvData", JSON.stringify({ items: cvItems }))

            try {
                await axios.post("/api/generate-cv", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
            } catch (error) {
                console.error("Error generating PDF:", error)
            }
        }, "application/pdf")
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex h-screen bg-gray-100">
                {/* Left sidebar - Sections panel */}
                <SectionsSidebar sectionMap={SECTION_MAP} sections={sections} onAddItem={addItem} />


                {/* Main CV editor area */}
                <div className="flex-1 p-8 overflow-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">CV Builder</h1>
                            <Button onClick={generatePdf} className="px-4 py-2" variant="default">
                                <Download className="mr-2 h-4 w-4" />
                                Generate PDF
                            </Button>
                        </div>

                        {/* CV Preview */}
                        <CvCanvas
                            cvItems={cvItems}
                            sections={sections}
                            moveItem={moveItem}
                            removeItem={removeItem}
                            sectionMap={SECTION_MAP}
                            selectedTemplate={selectedTemplate}
                        />
                    </div>
                </div>
            </div>
        </DndProvider>
    )
}

