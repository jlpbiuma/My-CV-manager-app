"use client";

import React from "react";
import Draggable from "react-draggable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, GripVertical } from "lucide-react";
import type { CvFull } from "@/types/cv_full";
import type { Experience, Formacion, Estudio, Proyect, Certification, Idioma, Web } from "@/types";
import { SECTION_MAP } from "@/Pages/BuildCVPage/constants/SectionsMapper";
import formatDate from "@/Pages/BuildCVPage/utils/formatDate";

export function CvItem({
    item,
    sections,
    onDragStop,
    removeItem,
    sectionMap,
}: {
    item: {
        id: string;
        type: string;
        itemId: number;
        position: { x: number; y: number };
    };
    sections: CvFull["sections"];
    onDragStop: (id: string, x: number, y: number) => void;
    removeItem: (id: string) => void;
    sectionMap: Record<string, any>;
}) {
    const [isDragging, setIsDragging] = React.useState(false);

    // Get the actual data for this item
    const getItemData = () => {
        const sectionItems = SECTION_MAP[item.type]?.getItems(sections) || [];
        return sectionItems.find((i) => i.id === item.itemId) || {};
    };

    const itemData = getItemData();

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragStop = (_e: any, data: { x: number; y: number }) => {
        setIsDragging(false);
        onDragStop(item.id, data.x, data.y);
    };

    // Render the appropriate component based on the item type
    const renderItemContent = () => {
        switch (item.type) {
            case "experiencias":
                return renderExperience(itemData as Experience);
            case "formaciones":
                return renderFormacion(itemData as Formacion);
            case "estudios":
                return renderEstudio(itemData as Estudio);
            case "proyectos":
                return renderProyecto(itemData as Proyect);
            case "certificaciones":
                return renderCertification(itemData as Certification);
            case "idiomas":
                return renderIdioma(itemData as Idioma);
            case "webs":
                return renderWeb(itemData as Web);
            default:
                return <div>Unknown item type</div>;
        }
    };

    return (
        <Draggable
            defaultPosition={item.position}
            onStart={handleDragStart}
            onStop={handleDragStop}
            bounds="parent"
        >
            <div
                style={{
                    position: "absolute",
                    width: "400px",
                    zIndex: isDragging ? 1000 : 1,
                }}
                className="transition-shadow"
            >
                <div className={`${isDragging ? 'shadow-xl ring-2 ring-blue-300' : 'hover:shadow-lg'}`}>
                    <div className="p-4 bg-white">{renderItemContent()}</div>
                </div>
            </div>
        </Draggable>
    );
}

// Keep the existing render functions as they are...
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
    );
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
    );
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
    );
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
    );
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
    );
}

function renderIdioma(data: Idioma) {
    return (
        <div className="flex justify-between items-center">
            <span className="font-medium">{data.language || "Language"}</span>
            <span className="text-sm">{data.proficiency || "Proficiency"}</span>
        </div>
    );
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
    );
}