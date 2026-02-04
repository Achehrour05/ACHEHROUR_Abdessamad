import React from 'react';
import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function CareerTimeline({ items = [] }) {
  return (
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
      {items.map((item, index) => {
        const isAcademic = item.type === "academic";
        const Icon = isAcademic ? GraduationCap : Briefcase;
        return (
          <div key={index} className="relative group">
            <div className="absolute -left-6 sm:-left-8 top-1.5 w-5 h-5 rounded-full bg-[#0a0a0f] border-2 border-emerald-500/60 flex items-center justify-center group-hover:scale-125 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" />
                  {item.role || item.degree}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  {item.period}
                </span>
              </div>

              <h4 className="text-white font-bold text-base mt-2">{item.institution || item.organization}</h4>
              {item.description && (
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
