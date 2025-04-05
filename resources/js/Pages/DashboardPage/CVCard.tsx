// resources/js/components/CVCard.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, Eye, FileText, MoreHorizontal, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface CV {
    id: number;
    name: string;
    previewImage: string;
    lastUpdated: string;
    status: string;
}

interface CVCardProps {
    cv: CV;
}

const CVCard = ({ cv }: CVCardProps) => {
    return (
        <Card key={cv.id} className="flex flex-col overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-[3/4] bg-slate-100 p-6">
                <div className="absolute right-2 top-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" /> Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" /> Download PDF
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <img src={cv.previewImage || "/placeholder.svg"} alt={cv.name} className="h-full w-full object-contain" />
            </div>
            <CardHeader className="p-4 pb-0">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{cv.name}</CardTitle>
                    <Badge variant={cv.status === "Active" ? "default" : "secondary"} className={cv.status === "Active" ? "bg-teal-500" : ""}>
                        {cv.status}
                    </Badge>
                </div>
                <CardDescription className="flex items-center text-xs text-slate-500">
                    <Clock className="mr-1 h-3 w-3" /> Updated {cv.lastUpdated}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between p-4">
                <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-3 w-3" /> Preview
                </Button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Edit className="mr-2 h-3 w-3" /> Edit
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CVCard;