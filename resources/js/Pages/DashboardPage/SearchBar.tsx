// resources/js/components/SearchBar.tsx
import React from 'react'; // Add this import
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="mb-4">
            <Input
                type="text"
                placeholder="Search CVs by name..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full"
            />
        </div>
    );
};

export default SearchBar;