"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'START', href: '/' },
    { name: 'PROJEKTY', href: '/projekty' },
    { name: 'STATUT', href: '/dokumentacja' },
    { name: 'KONTAKT', href: '/kontakt' }
  ];

  return (
    <nav className="bg-black border-b border-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="text-green-500 font-black text-[10px] md:text-lg uppercase tracking-[0.1em] md:tracking-[0.2em] drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] max-w-[150px] md:max-w-none leading-tight">
          STOWARZYSZENIE AMATORSKICH AKTYWNOŚCI SPORTOWYCH
        </div>

        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-white hover:text-green-400 font-mono text-[10px] uppercase tracking-widest transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-green-500 p-2 active:bg-green-950/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black border-t border-green-900/50`}>
        <div className="flex flex-col p-4 gap-2 bg-black/95 backdrop-blur-md">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-400 font-mono text-xs uppercase tracking-[0.2em] py-4 border-b border-green-900/20 last:border-none"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};