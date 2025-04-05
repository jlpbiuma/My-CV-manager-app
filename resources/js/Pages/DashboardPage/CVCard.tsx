import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, Eye, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CV } from '@/types/cv';
import { Link } from '@inertiajs/react';
import { route } from '../../../../vendor/tightenco/ziggy/src/js/index';


const CVCard = ({
    id,
    user_id,
    name,
    language,
    preview_image,
    last_updated,
    status,
    created_at,
    updated_at
}: CV) => {

    const handleDownload = () => {
        // Implement download functionality here
    };

    const handleEdit = () => {
        // Implement edit functionality here
    };

    const handleDelete = () => {
        // Implement delete functionality here
    };

    return (
        <Card key={user_id} className="flex flex-col overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-[3/4] bg-slate-100 p-6">
                <img src={preview_image || "/placeholder.svg"} alt={name} className="h-full w-full object-contain" />
            </div>
            <CardHeader className="p-4 pb-0">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <Badge className={status === "active" ? "bg-teal-500 hover:bg-teal-600" : "bg-red-600 hover:bg-red-700"}>
                        {status}
                    </Badge>
                </div>
                <CardDescription className="flex items-center text-xs text-slate-500">
                    <Clock className="mr-1 h-3 w-3" /> Updated {last_updated}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-2 p-4">
                <Button variant="outline" size="sm" className="flex-1 min-w-[100px]" asChild>
                    <Link href={route('cv.show', { cv: id })}>
                        <Eye className="mr-2 h-3 w-3" /> Preview
                    </Link>
                </Button>
                <Button size="sm" className="flex-1 min-w-[100px] bg-blue-600 hover:bg-blue-700">
                    <Download className="mr-2 h-3 w-3" /> Download
                </Button>
                <Button size="sm" className="flex-1 min-w-[100px] bg-teal-600 hover:bg-teal-700">
                    <Edit className="mr-2 h-3 w-3" /> Edit
                </Button>
                <Button size="sm" className="flex-1 min-w-[100px] bg-red-500 hover:bg-red-600">
                    <Trash2 className="mr-2 h-3 w-3" /> Delete
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CVCard;