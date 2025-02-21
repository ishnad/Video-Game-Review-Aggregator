import React, { useState } from 'react';
import { TowerControl as GameController } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement search functionality
  };

  const handleFilterChange = (type: string, value: string) => {
    console.log('Filter changed:', type, value);
    // TODO: Implement filter functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GameController className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                GameReview Hub
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Top Games</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Recent Reviews</a>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Find Your Next Gaming Adventure
            </h2>
            <p className="text-lg text-gray-600">
              Discover games through trusted reviews and community recommendations
            </p>
          </div>

          <SearchBar onSearch={handleSearch} className="mx-auto" />
          <FilterBar onFilterChange={handleFilterChange} className="justify-center" />

          {/* Placeholder for search results */}
          <div className="mt-8 grid gap-6">
            {searchResults.length === 0 && (
              <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
                <p className="text-gray-500">
                  Search for a game to see reviews and ratings
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;