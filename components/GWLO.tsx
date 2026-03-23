"use client";

import React from 'react';
import { Target, Trophy, ArrowUpRight, ChevronRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  date: string;
  members: string;
  location: string;
  progress: number;
  goals: string[];
  link: string;
}

export const GWLO = ({ title, category, description, date, members, location, progress, goals, link }: ProjectProps) => {
  return (
    <div className="bg-black/80 border border-green-900/50 p-6 md:p-12 relative group hover:border-green-500 transition-all duration-500 mb-8 md:mb-12">
      <div className="absolute top-0 right-0 bg-green-900/20 px-3 py-1 md:px-4 md:py-2 border-b border-l border-green-900 text-green-500 font-mono text-[8px] md:text-[10px] tracking-widest uppercase">
        STATUS: AKTYWNY
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-green-500 font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2">
              <Trophy size={14} /> {category}
            </span>
            <h2 className="text-2xl md:text-5xl font-black mt-2 tracking-tighter uppercase text-white leading-tight">
              {title}
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="space-y-4 pt-2 md:pt-4">
            <h4 className="text-green-500 font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
              <Target size={14} /> Główne cele:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-300 font-mono">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-green-600 mt-1 shrink-0" /> 
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-green-950/10 border border-green-900/30 p-6 md:p-8 space-y-6 md:space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            {[ 
              { label: "Od kiedy:", value: date },
              { label: "Aktywnych członków:", value: members },
              { label: "Lokalizacja:", value: location }
            ].map((d, i) => (
              <div key={i} className="border-l border-green-900 pl-4 py-1">
                <p className="text-[9px] md:text-[10px] text-green-700 font-mono uppercase tracking-widest">{d.label}</p>
                <p className="text-white font-bold text-xs md:text-sm uppercase">{d.value}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-2 md:pt-4">
            <div className="flex justify-between text-[9px] md:text-[10px] font-mono text-green-600 mb-2 uppercase">
              <span>Zapełnienie</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-green-900/30 h-1">
              <div 
                className="bg-green-500 h-full shadow-[0_0_10px_#22c55e] transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-black font-black py-4 uppercase text-[10px] md:text-xs tracking-widest hover:bg-green-500 transition-all flex items-center justify-center gap-2 group-hover:gap-4"
          >
            Więcej informacji <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};