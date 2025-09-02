import React, { useState } from "react";

const SearchBar = ({ onSearch, meals }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    
    e.preventDefault("");

    if (query.trim()) {
      onSearch(query);


   
      setQuery("")   // input clear
    }
    else{

    }
  };

  return (


<div className="relative w-full h-80 sm:h-96 lg:h-[500px] flex flex-col justify-center items-center text-center gap-3 px-4">
  {/* Background Image with Blur */}
  <div className="absolute inset-0 bg-[url('./assets/book.jpg')] bg-cover bg-center blur-l"></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl pb-10">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
      Find Your Next Favorite Book 📚
    </h1>
    <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-200 drop-shadow">
      Search through millions of books and discover new authors, genres, and stories.
    </p>
  </div>

  {/* Search Form with 10px (~mt-2.5) gap */}
  <form
    onSubmit={handleSearch}
    className="relative z-10 mt-2.5 flex w-full max-w-full sm:max-w-lg md:max-w-xl px-2 sm:px-4 mx-auto"
  >
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="🔍 Search for books..."
      className="flex-grow p-2 sm:p-3 rounded-l-full bg-white text-blue-700 placeholder-blue-400 border-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
    />
    <button
      type="submit"
      className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-r-full font-semibold hover:bg-yellow-500 transition text-sm sm:text-base"
    >
      Search
    </button>
  </form>
</div>

  );
};

export default SearchBar;
