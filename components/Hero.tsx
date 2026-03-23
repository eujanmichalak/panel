"use client";

import React from 'react';
import { Target, Activity, BarChart3, User } from 'lucide-react';

const Stats = () => {
  const data = [
    { label: 'CZŁONKÓW', value: '300+', icon: <Activity size={20} /> },
    { label: 'PROJEKTÓW', value: '1', icon: <Target size={20} /> },
    { label: 'LOKALIZACJI', value: '1', icon: <BarChart3 size={20} /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-24 py-8 md:py-12 border-y border-green-900/30 my-8 md:my-12 bg-black/40">
      {data.map((s, i) => (
        <div key={i} className="text-center flex flex-col items-center">
          <div className="text-green-500 mb-2 md:mb-3">{s.icon}</div>
          <div className="text-xl md:text-3xl font-black text-white">{s.value}</div>
          <div className="text-[7px] md:text-[9px] text-green-600 font-mono tracking-[0.1em] md:tracking-[0.2em] mt-1 uppercase leading-none">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectCard = ({ title, desc, tag }: { title: string, desc: string, tag: string }) => (
  <div className="relative p-6 bg-black border border-green-800/30 hover:border-green-500 transition-all duration-500">
    <div className="absolute top-0 right-0 p-4 opacity-10"><Target size={40} className="text-green-500" /></div>
    <span className="text-[9px] font-mono text-green-500 bg-green-950 px-2 py-1 uppercase">{tag}</span>
    <h3 className="text-lg font-bold text-white mt-4 uppercase">{title}</h3>
    <p className="text-[11px] text-gray-400 mt-3 leading-relaxed mb-6">{desc}</p>
    <a 
      href="/projekty" 
      className="block w-full py-3 border border-green-600 text-[10px] font-bold uppercase tracking-widest text-center text-white hover:bg-green-600 hover:text-black transition-all"
    >
      Więcej informacji
    </a>
  </div>
);

const ZarzadCard = ({ role, name }: { role: string, name: string }) => (
  <div className="bg-black border border-green-900/50 p-6 flex flex-col items-center gap-4 text-center hover:border-green-500 transition-all">
    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-950 rounded-full flex items-center justify-center">
      <User className="text-green-500" size={24} />
    </div>
    <div>
      <div className="text-green-500 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">{role}</div>
      <div className="text-white font-bold text-sm md:text-base">{name}</div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="bg-black text-white px-4 md:px-6 py-12 md:py-24 bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:15px_15px] md:[background-size:20px_20px]">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
        
        <div className="max-w-4xl space-y-6 md:space-y-10">
          <h1 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-[0_0_15px_rgba(34,197,94,0.3)] text-balance">
            STOWARZYSZENIE AMATORSKICH <br className="hidden md:block"/><span className="text-green-500">AKTYWNOŚCI SPORTOWYCH</span>
          </h1>
          <p className="font-mono text-gray-400 border-l-2 border-green-600 pl-4 md:pl-6 text-xs md:text-sm leading-relaxed max-w-2xl bg-black/60 p-4">
            Stowarzyszenie powstało z potrzeby stworzenia nowego standardu w amatorskiej rywalizacji. 
            Nasza historia to przede wszystkim ludzie.
          </p>
          <a 
            href="/kontakt"
            className="inline-block w-full md:w-auto text-center bg-green-600 text-black font-black px-8 py-5 md:py-4 uppercase tracking-widest hover:bg-green-400 transition-all text-xs"
          >
            Inicjuj połączenie
          </a>
        </div>

        <Stats />

        <div className="space-y-8 md:space-y-12">
          <h2 className="text-xl md:text-2xl font-black uppercase text-green-500 border-b border-green-900 pb-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 animate-pulse"></span> Operacyjne Projekty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard title="GORZOWSKA LIGA OSIEDLOWA" desc="Największa amatorska liga szóstek w regionie." tag="Rozgrywki" />
          </div>
        </div>

        <div className="space-y-8 md:space-y-12 pb-12">
           <h2 className="text-xl md:text-2xl font-black uppercase text-green-500 border-b border-green-900 pb-4">Struktura Zarządu</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <ZarzadCard role="Prezes" name="Jan Michalak" />
            <ZarzadCard role="Wice" name="Magdalena Michalak" />
            <ZarzadCard role="Sekretarz" name="Jakub Mądry" />
          </div>
        </div>
      </div>
    </section>
  );
};