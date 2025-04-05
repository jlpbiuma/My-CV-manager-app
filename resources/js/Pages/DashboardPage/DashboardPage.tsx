// resources/js/Pages/DashboardPage/DashboardPage.tsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/Pages/DashboardPage/SearchBar";
import CVCard from "@/Pages/DashboardPage/CVCard";
import RecentActivity from "@/Pages/DashboardPage/RecentActivity";

interface CV {
    id: number;
    name: string;
    previewImage: string;
    lastUpdated: string;
    status: string;
}

interface Activity {
    id: number;
    type: 'update' | 'create' | 'download';
    description: string;
    timestamp: string;
}

const mockCVs: CV[] = [
    {
        id: 1,
        name: "Software Engineer CV",
        previewImage: "https://static-00.iconduck.com/assets.00/cv-icon-1725x2048-mk536z84.png",
        lastUpdated: "2 days ago",
        status: "Active",
    },
    {
        id: 2,
        name: "Data Scientist CV",
        previewImage: "https://cdn-icons-png.flaticon.com/512/8347/8347432.png",
        lastUpdated: "1 week ago",
        status: "Draft",
    },
    {
        id: 3,
        name: "Project Manager CV",
        previewImage: "https://cdn-icons-png.flaticon.com/512/6588/6588143.png",
        lastUpdated: "3 weeks ago",
        status: "Active",
    },
    {
        id: 4,
        name: "UX Designer CV",
        previewImage: "https://static-00.iconduck.com/assets.00/cv-icon-1725x2048-mk536z84.png",
        lastUpdated: "1 month ago",
        status: "Active",
    },
];

const mockActivities: Activity[] = [
    {
        id: 1,
        type: 'update',
        description: 'You updated Software Engineer CV',
        timestamp: '2 days ago',
    },
    {
        id: 2,
        type: 'create',
        description: 'You created Data Scientist CV',
        timestamp: '1 week ago',
    },
    {
        id: 3,
        type: 'download',
        description: 'You downloaded Project Manager CV',
        timestamp: '3 weeks ago',
    },
];

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const filteredCVs = mockCVs.filter(cv =>
        (activeTab === "all" || cv.status.toLowerCase() === activeTab) &&
        cv.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-slate-800">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-slate-900">My CVs</h3>
                    </div>

                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                        <div className="flex items-center justify-between">
                            <TabsList className="grid w-full max-w-md grid-cols-3">
                                <TabsTrigger value="all">All CVs</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Drafts</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value={activeTab} className="mt-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <CVCard cv={{ id: 0, name: "Create New CV", previewImage: "", lastUpdated: "", status: "" }} />
                                {filteredCVs.map((cv) => (
                                    <CVCard key={cv.id} cv={cv} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <RecentActivity mockActivities={mockActivities} />
            </div>
        </AuthenticatedLayout>
    );
};

export default DashboardPage;