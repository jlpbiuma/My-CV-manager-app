import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CV } from "@/types/cv"; // Adjust the import path as necessary
import Loading from "@/Components/Loading/Loading";
import CVList from "@/Pages/DashboardPage/CVList";

interface DashboardTabsProps {
    activeTab: string;
    handleTabChange: (tab: string) => void;
    isLoading: boolean;
    filteredCVs: CV[];
}

const DashboardTabs = ({
    activeTab,
    handleTabChange,
    isLoading,
    filteredCVs,
}: DashboardTabsProps) => {
    return (
        <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
            <TabsList >
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-6">
                {isLoading ? (
                    <Loading />
                ) : filteredCVs.length === 0 ? (
                    <div className="flex items-center justify-center h-48">
                        <p className="text-gray-500">No CVs found.</p>
                    </div>
                ) : (
                    <CVList filteredCVs={filteredCVs} />
                )}
            </TabsContent>
        </Tabs>
    )
}

export default DashboardTabs;