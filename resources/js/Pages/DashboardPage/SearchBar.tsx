import { Input } from "@/components/ui/input";

interface SearchBarProps {
    searchQuery: string;
    handleSearch: (query: string) => void;
}

const SearchBar = ({ searchQuery, handleSearch }: SearchBarProps) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">My CVs</h3>
            </div>
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search CVs by name..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                    className="w-full"
                />
            </div>
        </>
    );
};

export default SearchBar;