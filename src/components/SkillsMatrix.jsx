import React, { useState } from 'react';
import { SKILLS_CATEGORIES } from '../data/skills';
import { Code, Layout, Database, Server } from 'lucide-react';

const ICON_MAP = {
  code: Code,
  layout: Layout,
  database: Database,
  server: Server
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
      <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
        {SKILLS_CATEGORIES.map((cat, idx) => {
          const Icon = ICON_MAP[cat.icon] || Code;
          const isActive = activeCategory === idx;
          return (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS_CATEGORIES[activeCategory].skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all space-y-2"
          >
            <div className="flex justify-between items-center text-sm">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-mono">
                {skill.tag}
              </span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
