"use client";

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-900 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-green-600 font-black text-sm uppercase tracking-widest order-1">
          SAAS GORZÓW
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[9px] md:text-[10px] text-gray-400 font-mono uppercase tracking-[0.2em] order-3 md:order-2">
          <div className="flex gap-4">
            <p><span className="text-green-900 mr-1">KRS:</span> 0001227188</p>
            <p><span className="text-green-900 mr-1">NIP:</span> 5993310463</p>
          </div>
          <p><span className="text-green-900 mr-1">REGON:</span> 544152102</p>
        </div>

        <div className="text-[9px] md:text-[10px] text-green-700 font-mono order-2 md:order-3 uppercase tracking-widest text-center">
          © 2026 WSZELKIE PRAWA ZASTRZEŻONE
        </div>
        
      </div>
    </footer>
  );
};