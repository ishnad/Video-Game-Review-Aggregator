'use client'

import { TowerControl as GameController } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'
import { FilterBar } from '@/components/FilterBar'
import { useState } from 'react'

export default function Home() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // TODO: Implement search functionality
  }

  const handleFilterChange = (type: string, value: string) => {
    console.log('Filter changed:', type, value)
    // TODO: Implement filter functionality
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
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

          {/* Featured Games Section */}
          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Featured Games</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Game Cards */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
                  alt="Featured Game"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">Cyberpunk 2077</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">9.2</span>
                    <span>Action RPG</span>
                  </div>
                  <p className="text-gray-600 text-sm">Experience the future in this open-world action RPG...</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
                  alt="Featured Game"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">Elden Ring</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">9.8</span>
                    <span>Action RPG</span>
                  </div>
                  <p className="text-gray-600 text-sm">Embark on an epic journey in the Lands Between...</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
                  alt="Featured Game"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">God of War Ragnarök</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">9.7</span>
                    <span>Action Adventure</span>
                  </div>
                  <p className="text-gray-600 text-sm">Continue Kratos and Atreus's epic Norse saga...</p>
                </div>
              </div>
            </div>
          </section>

          {/* Search Results Section */}
          {searchResults.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500">
                Search for a game to see reviews and ratings
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {/* Search results will be rendered here */}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 GameReview Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}