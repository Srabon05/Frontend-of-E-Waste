import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // এখানে API call / filter logic দিবে
  };

  return (
    <div className="flex items-center gap-2 border rounded-2xl p-2 bg-white shadow-sm w-80">
      
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full outline-none"
      />

      <button
        onClick={handleSearch}
        className=" text-white px-3 py-1 rounded-md "
      >
        <Search size={18} color="black"/>
      </button>

    </div>
  );
};

export default SearchBar;