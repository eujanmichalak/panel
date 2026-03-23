"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GWLO } from '@/components/GWLO';
import { Activity } from 'lucide-react';

export default function ProjektyPage() {
  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:20px_20px] md:[background-size:25px_25px]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
            OPERACYJNE <span className="text-green-500">PROJEKTY</span>
          </h1>
          <div className="h-1 w-16 md:w-24 bg-green-600 mt-4"></div>
        </div>
        
        <GWLO 
          title="Gorzowska Liga Osiedlowa"
          category="Rozgrywki"
          link="https://www.instagram.com/gwlo.pl/"
          description="Największa amatorska liga szóstek w regionie. System obejmuje pełną obsługę sędziowską, techniczną oraz multimedialną."
          date="Grudzień 2023"
          members="300+"
          location="Gorzów Wielkopolski"
          progress={96}
          goals={[
            "Aktywizacja mieszkańców Gorzowa",
            "Profesjonalizacja sportu",
            "Budowa rankingu zawodników",
            "Promocja Fair Play",
            "Integracja międzypokoleniowa",
          ]}
        />

        <div className="border border-dashed border-green-900/50 py-16 md:py-20 flex flex-col items-center justify-center text-gray-600 px-4">
           <Activity size={40} className="mb-4 opacity-20" />
           <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-center">
             Oczekiwanie na kolejne dane...
           </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}