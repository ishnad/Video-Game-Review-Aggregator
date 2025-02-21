'use client'

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FilterOption {
  label: string
  value: string
}

const platforms: FilterOption[] = [
  { label: 'All Platforms', value: 'all' },
  { label: 'PC', value: 'pc' },
  { label: 'PlayStation 5', value: 'ps5' },
  { label: 'Xbox Series X', value: 'xbox' },
  { label: 'Nintendo Switch', value: 'switch' },
]

const genres: FilterOption[] = [
  { label: 'All Genres', value: 'all' },
  { label: 'Action', value: 'action' },
  { label: 'RPG', value: 'rpg' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Sports', value: 'sports' },
  { label: 'Adventure', value: 'adventure' },
]

const sortOptions: FilterOption[] = [
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Most Recent', value: 'recent' },
  { label: 'Most Reviewed', value: 'reviews' },
]

interface FilterBarProps {
  className?: string
  onFilterChange: (type: string, value: string) => void
}

export function FilterBar({ className, onFilterChange }: FilterBarProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      <FilterSelect
        options={platforms}
        label="Platform"
        onChange={(value) => onFilterChange('platform', value)}
      />
      <FilterSelect
        options={genres}
        label="Genre"
        onChange={(value) => onFilterChange('genre', value)}
      />
      <FilterSelect
        options={sortOptions}
        label="Sort By"
        onChange={(value) => onFilterChange('sort', value)}
      />
    </div>
  )
}

interface FilterSelectProps {
  options: FilterOption[]
  label: string
  onChange: (value: string) => void
}

function FilterSelect({ options, label, onChange }: FilterSelectProps) {
  return (
    <div className="relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
      >
        <option value="" disabled selected>{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
    </div>
  )
}