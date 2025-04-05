import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from "react";
import SearchBar from "@/Pages/DashboardPage/SearchBar";
import RecentActivity from "@/Pages/DashboardPage/RecentActivity";
import type { CV } from "@/types/cv"; // Adjust the import path as necessary
import type { Activity } from "@/types/activity"; // Adjust the import path as necessary
import DashboardTabs from "@/Pages/DashboardPage/DashboardTabs";

interface DashboardPageProps {
    cvs: CV[];
    activities: Activity[];
}


const DashboardPage = ({ cvs, activities }: DashboardPageProps) => {
    const [activeTab, setActiveTab] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const filteredCVs = cvs.filter(cv =>
        (activeTab === "all" || cv.status.toLowerCase() === activeTab) &&
        cv.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleTabChange = (tab: string) => {
        setIsLoading(true);
        setActiveTab(tab);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const handleSearch = (query: string) => {
        setIsLoading(true);
        setSearchQuery(query);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                    <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
                    <DashboardTabs activeTab={activeTab} isLoading={isLoading} handleTabChange={handleTabChange} filteredCVs={filteredCVs} />
                </div>
                <RecentActivity activities={activities} />
            </div>
        </AuthenticatedLayout>
    );
};

export default DashboardPage;