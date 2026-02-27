import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export default function ProjectFilters({
  activeFilter,
  onSelectFilter,
  searchQuery,
  onSearchChange,
  categories = []
}) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8 space-y-4">
      {/* Search Input */}
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter projects by name or technology..."
          className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/30 backdrop-blur-md transition-all"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                isActive
                  ? "bg-white text-black shadow-md scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
