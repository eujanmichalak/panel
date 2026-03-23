"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactCard = ({ icon, title, value, subValue }: { icon: React.ReactNode, title: string, value: string, subValue?: string }) => (
  <div className="bg-black border border-green-900/50 p-6 md:p-8 hover:border-green-500 transition-all group flex flex-col items-center text-center">
    <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-green-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-2">{title}</h3>
    <p className="text-white font-bold text-base md:text-lg break-all md:break-normal">{value}</p>
    {subValue && <p className="text-gray-500 text-[10px] md:text-xs mt-2 font-mono leading-relaxed">{subValue}</p>}
  </div>
);

export default function KontaktPage() {
  return (
    /* DODANO: flex flex-col min-h-screen 
       To sprawia, że cały kontener strony zajmuje min. 100% wysokości ekranu i układa elementy w pionie.
    */
    <div className="flex flex-col min-h-screen bg-black text-white bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:20px_20px] md:[background-size:25px_25px]">
      <Navbar />
      
      {/* DODANO: flex-grow 
          Ten element "wypchnie" stopkę do samej podłogi, zajmując całą wolną przestrzeń.
      */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-6 py-12 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            CENTRUM <span className="text-green-500">KONTAKTOWE</span>
          </h1>
          <p className="text-gray-500 font-mono text-[9px] md:text-xs mt-4 uppercase tracking-[0.2em] md:tracking-[0.4em] px-2">
            Bezpośrednie kanały komunikacji SAAS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          <ContactCard 
            icon={<Phone size={24} />} 
            title="Telefon" 
            value="+48 797 109 555" 
            subValue="Pn-Pt: 16:00 - 18:00, Sobota 16:00 - 20:00"
          />
          <ContactCard 
            icon={<Mail size={24} />} 
            title="E-mail" 
            value="biuro@saas-gorzow.pl" 
            subValue="System Online 24/7"
          />
          <ContactCard 
            icon={<MapPin size={24} />} 
            title="Adres Siedziby" 
            value="Plac Słoneczny 11 / 11" 
            subValue="66-400 Gorzów Wielkopolski, Polska"
          />
        </div>

        <div className="max-w-2xl mx-auto border border-green-900/50 p-6 md:p-8 bg-black/40 backdrop-blur-sm mb-12">
          <h3 className="text-green-500 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-6 flex items-center justify-center gap-2">
            <Clock size={14} /> Harmonogram Dostępności
          </h3>
          <div className="space-y-4 font-mono text-[11px] md:text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row justify-between border-b border-green-900/20 pb-2 gap-1 sm:gap-0">
              <span>Poniedziałek - Piątek</span>
              <span className="text-white sm:text-right">16:00 - 18:00</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b border-green-900/20 pb-2 gap-1 sm:gap-0">
              <span>Sobota</span>
              <span className="text-white sm:text-right">16:00 - 20:00</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
              <span>Niedziela</span>
              <span className="text-red-900 sm:text-right uppercase font-bold">System Offline</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}