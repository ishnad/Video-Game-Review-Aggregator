'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  onSearch: (query: string) => void
  className?: string
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full max-w-2xl", className)}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for games..."
          className="w-full px-4 py-3 pl-12 text-lg rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </form>
  )
}